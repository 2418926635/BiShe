<template>
	<view style="height: 100vh;background-color: #fff;">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">地图导航</block>
		</cu-custom>
		<view class="container">
		  <map style="width: 750rpx;height: 100vh;" id="map"
		    class="map"
		    :polyline="polyline"
		    :longitude="longitude" :latitude="latitude">
		  </map>
		</view>
		
		<view style="width: 100%;height: 2vh;">
			
		</view>
	</view>
</template>

<script>
	import {
		deepCopy
	} from '@/utils/expressfun.js'
	import configData from '@/config/index.js'
	const urllocal = configData.httpUrlimg
	export default {
		onLoad(options) {
			this.userinfo = uni.getStorageSync('userinfo')
			this.id = options.id
			this.shopdesc = options.shopdesc
			this.shopaddress = options.shopaddress
			this.startLatitude = options.startLatitude * 1
			this.startLongitude = options.startLongitude * 1
			this.endLongitude = options.endLongitude * 1
			this.endLatitude = options.endLatitude * 1
			// 初始化towerSwiper 传已有的数组名即可
			this.todaohang()
		},
		async onShow() {
			
		},
		data() {
			return {
				startLatitude:'',
				startLongitude:'',
				endLongitude:'',
				endLatitude:'',
				polyline:'',
				longitude:'',
				latitude:'',
				userinfo: '',
				TabCur: 0,
				cardCur: 0,
				id: '',
				form: {},
				swiperList: [],
				dotStyle: false,
				towerStart: 0,
				shopdesc:'',
				shopaddress:''
			}
		},
		methods: {
			todaohang(){
				   wx.openLocation({
				     latitude: this.endLatitude,
				     longitude: this.endLongitude ,
				     scale: 18,
				     name: this.shopdesc,
				     address: this.shopaddress
				   })
			},
			todaohang_bak() {
				let that = this
				// this.startLongitude = 102.66481
				// this.startLatitude = 25.03845
				// this.endLongitude = 102.70937
				// this.endLatitude = 25.04643
				uni.request({
					// url: `https://apis.map.qq.com/ws/direction/v1/driving/${this.startLongitude},${this.startLatitude};${this.endLongitude},${this.endLatitude}?key=4ALBZ-FSP6U-XXTVP-GC3WC-WPOB2-4MB6B`,
					url: `https://apis.map.qq.com/ws/direction/v1/driving?from=${that.startLatitude},${that.startLongitude}&to=${that.endLatitude},${that.endLongitude}&waypoints=&output=json&callback=cb&key=4ALBZ-FSP6U-XXTVP-GC3WC-WPOB2-4MB6B`,
					success: res => {
						// const route = res.data.result.routes[0].steps;
						// console.log(route)
						// this.setData({
						// 	route: route
						// });
						var result = res.data.result
						var route = result.routes[0]

						var coors = route.polyline,
							pl = [];
						//坐标解压（返回的点串坐标，通过前向差分进行压缩）
						var kr = 1000000;
						for (var i = 2; i < coors.length; i++) {
							coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
						}
						//将解压后的坐标放入点串数组pl中
						for (var i = 0; i < coors.length; i += 2) {
							pl.push({
								latitude: coors[i],
								longitude: coors[i + 1]
							})
						}
						// 将路线的起点设置为地图中心点
						that.latitude =  pl[0].latitude,
						that.longitude =  pl[0].longitude,
						// 绘制路线
						that.polyline = [{
							points: pl,
							color: '#58c16c',
							width: 6,
							borderColor: '#2f693c',
							borderWidth: 1
						}]
					},
					fail: err => {
						console.error('路径规划失败', err);
					}

				});
			},


			getnowdate() {
				var nowDate = new Date();
				var year = nowDate.getFullYear();
				var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
				var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
				var dateStr = year + "-" + month + "-" + day;
				return dateStr;
			},
			getnowtime() {
				let date = new Date()
				let hours = date.getHours()
				let minutes = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()
				let seconds = date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds()
				let time = hours + ':' + minutes + ':' + seconds
				return time
			},

			async query(id) {
				let that = this
				let msgobj = {
					id: id,
				}
				let resdata = await new this.Request(this.Urls.m().selectmoshaobyid, msgobj).modepost()
				that.form = deepCopy(resdata[0])
				console.log(JSON.stringify(that.form))
				let imgarr = that.form.trans_pic.split(',')
				let arr = []
				for (let i = 0; i < imgarr.length; i++) {
					let obj = {
						id: i,
						type: 'image',
						url: urllocal + imgarr[i]
					}
					arr.push(obj)
				}
				that.swiperList = arr
			},
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},

			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			},

			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},

			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = ""
				this.swiperList = this.swiperList
			},
		}
	}
</script>

<style>
	.tagclass {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.tower-swiper .tower-item {
		transform: scale(calc(0.5 + var(--index) / 10));
		margin-left: calc(var(--left) * 100upx - 150upx);
		z-index: var(--index);
	}

	.text-content {
		margin-top: 5%;
		padding-left: 3%;
		padding-right: 3%;
		/* 		height: 75%; */
		overflow: scroll;
	}


	.content-detail {
		width: 100%;
		word-wrap: break-word;
		word-break: break-all;
	}

	.bigtitle {
		/* 		font-size: 1.1em; */
		font-weight: bold;
	}

	.foot {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.but {
		width: 94%;
	}

	.textclass {
		padding-left: 3%;
		margin-top: 1%;
	}
</style>