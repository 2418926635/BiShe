<template>
	<view style="height: 100vh;background-color: #fff;">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">路线详情</block>
		</cu-custom>


		<!-- <modal v-if="areaShow" title="兑换" confirm-text="保存" cancel-text="取消" @cancel="cancelAdd"
			@confirm="confirmAdd">
			<input type="text" v-model="chatcontent" :placeholder="placeholdercontent" class="intxt" maxlength="100" />
		</modal> -->
		<!-- <swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			:autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover"
					v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper> -->



		<view class="text-content">
			<!-- <view class="cu-tag line-blue" style="margin-left: 10px;" v-if="baomingflag">已兑换</view> -->
			<view style="margin-bottom: 20rpx;">
				<view class="action bigtitle">
					<text class="cuIcon-titles text-orange "></text> 路线名称
				</view>
				<view class="content-detail">
					{{form.title}}
				</view>
			</view>
			<view style="margin-bottom: 20rpx;">
				<view class="action bigtitle">
					<text class="cuIcon-titles text-orange "></text> 目的地
				</view>
				<view class="content-detail">
					{{form.mdd}}
				</view>
			</view>


<!-- 			<view style="margin-bottom: 20rpx;">
				<view class="action bigtitle">
					<text class="cuIcon-titles text-orange "></text> 交通方式
				</view>
				<view class="content-detail">
					{{form.jtfs}}
				</view>
			</view> -->

	<!-- 		<view style="margin-bottom: 20rpx;">
				<view class="action bigtitle">
					<text class="cuIcon-titles text-orange "></text> 行程安排
				</view>
				<view class="content-detail">
					{{form.xingcheng}}
				</view>
			</view> -->
			<view style="margin-bottom: 20rpx;">
				<view class="action bigtitle">
					<text class="cuIcon-titles text-orange "></text> 注意事项
				</view>
				<view class="content-detail">
					{{form.zhuyi}}
				</view>
			</view>

		</view>
		<button class="margin-lg bg-green" @click="todaohang">
			导航
		</button>




	</view>
</template>

<script>
	import {
		deepCopy
	} from '@/utils/expressfun.js'
	import configData from '@/config/index.js'
	const urllocal = configData.httpUrl
	export default {
		onLoad(options) {
			this.userinfo = uni.getStorageSync('userinfo')
			this.id = options.id
			this.goods = options.goods
			this.query(this.id)
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
		},
		async onShow() {
			let that = this
			uni.getLocation({
				type: 'wgs84',
				success: function(resp) {
					console.log("获取经纬度成功");
					that.startLatitude = resp.latitude;
					that.startLongitude = resp.longitude;
				},
				fail: function(resp) {
					console.log("获取经纬度失败");
					console.log(resp);
				}
			})
		},
		data() {
			return {
				startLatitude: '',
				startLongitude: '',
				filelist: [],
				modalName: null,
				radio: 'radio1',
				baomingflag: false,
				goods: '',
				userinfo: {},
				chatcontent: '',
				placeholdercontent: '请描述物品信息',
				areaShow: false,
				TabCur: 0,
				scrollLeft: 0,
				cardCur: 0,
				id: '',
				form: {},
				swiperList: [],
				dotStyle: false,
				towerStart: 0,
				tabarr: ["介绍", "参数"],
				jwdArr:[],
			}
		},
		methods: {
			todaohang() {
				let that = this
				uni.navigateTo({
					url: `./map?shopdesc=${this.form.mdd}&shopaddress=${this.form.mdd}&startLatitude=${this.startLatitude}&startLongitude=${this.startLongitude}&endLongitude=${this.jwdArr[0]}&endLatitude=${this.jwdArr[1]}`
				});
			},
			cancelAdd() {
				this.areaShow = false
			},
			confirmAdd() {
				uni.showToast({
					title: '操作成功',
					icon: 'success',
					duration: 1500
				})
				this.areaShow = false
			},

			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				console.log(this.TabCur)
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			tochat() {
				uni.navigateTo({
					url: `./tochat?id=1`,
					fail: (res) => {
						console.log(res) //打印错误信息
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
			async duihuanfun() {
				let that = this
				let msgobj = {
					userid: that.userinfo.id,
					username: that.userinfo.userName,
					wupinname: that.goods,
					wupinid: that.id,
					datetime: that.getnowdate() + " " + that.getnowtime(),
					fileurl: this.radio.replace("http://tmp", "localhost:8000/img")
				}
				let resdata = await new this.Request(this.Urls.m().inserduihuan, msgobj)
					.modepost()
				if (resdata == 'success') {
					uni.showToast({
						title: '投递成功',
						duration: 2000
					});
					setTimeout(() => {
						that.hideModal()
					}, 2000)
				}
			},
			async duihuanfun_bak() {
				//先判断积分
				let that = this
				uni.showModal({
					title: '提示',
					content: `是否确认兑换该物品`,
					showCancel: true,
					success: async (res) => {
						if (res.confirm) {
							console.log('用户点击确定');
							let msgobj = {
								userid: that.userinfo.id,
								username: that.userinfo.userName,
								wupinname: that.goods,
								wupinid: that.id,
								jifen: that.jifen,
								datetime: that.getnowdate() + " " + that.getnowtime()
							}
							let resdata = await new this.Request(this.Urls.m().inserduihuan, msgobj)
								.modepost()
							if (resdata == 'success') {
								uni.showToast({
									title: '投递成功',
									icon: 'none',
									duration: 2000
								});
							}
							// if (resdata.length > 0) {
							// 	uni.showToast({
							// 		title: '您已申请兑换过该商品',
							// 		icon: 'none',
							// 		duration: 2000
							// 	});
							// } else {
							// 	let resext = await new this.Request(this.Urls.m().adduseraduihuan, msgobj)
							// 		.modepost()
							// 	if (resext == 'success') {
							// 		uni.showToast({
							// 			title: '兑换申请提交成功',
							// 			icon: 'none',
							// 			duration: 2000
							// 		});
							// 	} else {
							// 		uni.showToast({
							// 			title: '操作失败请重试',
							// 			icon: 'none',
							// 			duration: 2000
							// 		});
							// 	}
							// }
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			topay() {

			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			RadioChange(e) {
				this.radio = e.detail.value
				console.log(this.radio)
			},
			async query(id) {

				let that = this
				let msgobj = {
					id: id,
				}
				uni.showLoading({
					title: '加载中'
				});
				let resdata = await new this.Request(this.Urls.m().querysysnewsid, msgobj).modepost()
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
				that.jwdArr = that.form.xingcheng.split(',')
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
		height: 75%;
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

		width: 48%;
	}

	.textclass {
		padding-left: 3%;
		margin-top: 1%;
	}
</style>