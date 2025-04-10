<template>
	<view style="height: 100vh;background-color: #fff;">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">组团报名</block>
		</cu-custom>


		<!-- <modal v-if="areaShow" title="报名" confirm-text="保存" cancel-text="取消" @cancel="cancelAdd"
			@confirm="confirmAdd">
			<input type="text" v-model="chatcontent" :placeholder="placeholdercontent" class="intxt" maxlength="100" />
		</modal> -->


		<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			:autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover"
					v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>



		<view class="text-content">
			<view class="tagclass">
				<view class="bigtitle">
					{{form.projectname}}
				</view>
				<view class="cu-tag line-green" style="margin-left: 10px;">{{form.renshu}}人</view>
				<view class="cu-tag line-orange" style="margin-left: 10px;">截止日期{{form.activitydate}}</view>
				<view class="cu-tag line-blue" style="margin-left: 10px;" v-if="baomingflag">已报名</view>
			</view>
			
			<!-- 			<scroll-view scroll-x class="bg-white nav text-center">
				<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabarr" :key="index" @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</scroll-view> -->


			<view class="content-detail">
				{{form.detail}}
			</view>

		</view>


		<view class="foot">
			<button @click="tobaoming" class="but" style="background-color: orange;" type="primary"><text
					class="cuIcon-message"></text>报名</button>
			<!-- <button @click="tochat" class="but" style="background-color: #1296db;" type="primary"><text
					class="cuIcon-message"></text>沟通</button> -->
		</view>
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
			this.query(this.id)
			this.queryactiuser(this.id)
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
		},
		async onShow() {
			let that = this
			let msgobj = {
				userid: that.userinfo.id,
				activityid: that.id
			}
			let resdata = await new this.Request(this.Urls.m().isqueryuseractivity, msgobj).modepost()
			if (resdata.length > 0) {
				this.baomingflag = true
			} else {
				this.baomingflag = false
			}
		},
		data() {
			return {
				countsum:0,
				baomingflag: false,
				userinfo: {},
				chatcontent: '',
				placeholdercontent: ' ',
				areaShow: false,
				TabCur: 0,
				scrollLeft: 0,
				cardCur: 0,
				id: '',
				form: {},
				swiperList: [],
				dotStyle: false,
				towerStart: 0,
				tabarr: ["介绍"]
			}
		},
		methods: {
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
					url: `/pages/tochat/tochat?id=${this.id}`,
					fail: (res) => {
						console.log(res) //打印错误信息
					}
				});
			},
			async tobaoming() {
				let that = this
				let countsum = this.countsum * 1
				let maxsum = this.form.renshu * 1
				if(countsum >= maxsum){
					uni.showToast({
						title: '报名人数已满',
						icon: 'none',
						duration: 2000
					});
					return false
				}
				
				let now = that.getnowdate()
				let activitydate = this.form.activitydate
				let nowtamp = Date.parse(now)
				let activitytamp= Date.parse(activitydate)
				// if(nowtamp>activitytamp){
				// 	uni.showToast({
				// 		title: '该活动报名时间已过',
				// 		icon: 'none',
				// 		duration: 2000
				// 	});
				// 	return false
				// }
				
				
				
				uni.showModal({
					title: '提示',
					content: `是否确认报名该活动`,
					showCancel: true,
					success: async (res) => {
						if (res.confirm) {
							console.log('用户点击确定');
							let msgobj = {
								userid: that.userinfo.id,
								activityid: that.id,
								datetime:that.getnowdate() + " " + this.getnowtime()
							}
							let resdata = await new this.Request(this.Urls.m().isqueryuseractivity, msgobj)
								.modepost()
							if (resdata.length > 0) {
								uni.showToast({
									title: '您已报名过该活动，无需再次报名',
									icon: 'none',
									duration: 2000
								});
							} else {
								msgobj.status = "待审核"
								let resext = await new this.Request(this.Urls.m().adduseractivity, msgobj)
									.modepost()
								if (resext == 'success') {
									uni.showToast({
										title: '报名成功',
										icon: 'none',
										duration: 2000
									});
								} else {
									uni.showToast({
										title: '操作失败请重试',
										icon: 'none',
										duration: 2000
									});
								}
							}
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			getnowdate(){
			        var nowDate = new Date();
			        var year = nowDate.getFullYear();
			        var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1): nowDate.getMonth() + 1;
			        var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
			        var dateStr = year + "-" + month + "-" + day;
			        return dateStr;
			    },
			
			 getnowtime(){
			          let date = new Date()
			          let hours = date.getHours()
			          let minutes = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()
			          let seconds = date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds()
			          let time =hours + ':' + minutes + ':' + seconds
			          return time
			        
			    },
			topay() {

			},
			async queryactiuser(id){
				let that = this
				let msgobj = {
					id: id * 1,
				}
				let resdata = await new this.Request(this.Urls.m().queryactivitybyidrenshu, msgobj).modepost()
				this.countsum = resdata[0].countsum
			},
			async query(id) {

				let that = this
				let msgobj = {
					id: id,
				}
				let resdata = await new this.Request(this.Urls.m().queryactivitybyid, msgobj).modepost()
				that.form = deepCopy(resdata[0])
				console.log(that.form)
				let imgarr = that.form.img.split('^^^')
				let arr = []
				for (let i = 0; i < imgarr.length; i++) {
					let obj = {
						id: i,
						type: 'image',
						url: imgarr[i]
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
	.tower-swiper .tower-item {
		transform: scale(calc(0.5 + var(--index) / 10));
		margin-left: calc(var(--left) * 100upx - 150upx);
		z-index: var(--index);
	}

	.text-content {
		margin-top: 5%;
		padding-left: 3%;
		padding-right: 3%;
		height: 45%;
	}


	.content-detail {
		width: 100%;
		word-wrap: break-word;
		word-break: break-all;
	}

	.bigtitle {
		font-size: 1.2em;
		font-weight: bold;
	}

	.foot {
		height: 15%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.but {
		width: 80%;
	}

	.textclass {
		padding-left: 3%;
		margin-top: 1%;
	}
	
	.tagclass{
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
</style>