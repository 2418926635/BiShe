<template>
	<view style="height: 100vh;background-color: #fff;">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">社区介绍</block>
		</cu-custom>
		<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			:autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover"
					v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>



		<view class="text-content">
			<!-- <view class="cu-tag line-blue" style="margin-left: 10px;" v-if="baomingflag">已兑换</view> -->
			<view style="margin-bottom: 20rpx;">
				<view class="action bigtitle">
					<text class="cuIcon-titles text-orange "></text> 物业名称
				</view>
				<view class="content-detail">
					{{form.title}}
				</view>
			</view>
			<view style="margin-bottom: 20rpx;">
				<view class="action bigtitle">
					<text class="cuIcon-titles text-orange "></text> 相关简介
				</view>
				<view class="content-detail">
					{{form.detail}}
				</view>
			</view>
		
			<view style="margin-bottom: 20rpx;">
				<view class="action bigtitle">
					<text class="cuIcon-titles text-orange "></text> 物业管理费
				</view>
				<view class="content-detail">
					{{form.fee1}}/月(元)
				</view>
			</view>
			<view style="margin-bottom: 20rpx;">
				<view class="action bigtitle">
					<text class="cuIcon-titles text-orange "></text> 水费
				</view>
				<view class="content-detail">
					{{form.fee2}}/吨(元)
				</view>
			</view>
			<view style="margin-bottom: 20rpx;">
				<view class="action bigtitle">
					<text class="cuIcon-titles text-orange "></text> 电费
				</view>
				<view class="content-detail">
					{{form.fee3}}/度(元)
				</view>
			</view>
			<view style="margin-bottom: 20rpx;">
				<view class="action bigtitle">
					<text class="cuIcon-titles text-orange "></text> 燃气费
				</view>
				<view class="content-detail">
					{{form.fee4}}/每立方(元)
				</view>
			</view>
		
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
			this.query()
			this.TowerSwiper('swiperList');
		},
		async onShow() {
			// let that = this
			// let msgobj = {
			// 	userid: that.userinfo.id,
			// 	username: that.userinfo.userName,
			// 	mobile: "",
			// 	address: "",
			// 	jifengoodsname: that.goods,
			// 	jifengoodsid: that.id,
			// 	jifen: that.jifen,
			// 	status: '1'
			// }
			// let resdata = await new this.Request(this.Urls.m().isqueryuserduihuan, msgobj)
			// 	.modepost()
			// if (resdata.length > 0) {
			// 	this.baomingflag = true
			// } else {
			// 	this.baomingflag = false
			// }
		},
		data() {
			return {
				baomingflag: false,
				goods: '',
				jifen: '',
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
				tabarr: ["介绍", "参数"]
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
			topay() {

			},
			async query() {

				let that = this
				let msgobj = {}
				let resdata = await new this.Request(this.Urls.m().queryannouncementext, msgobj).modepost()
				that.form = deepCopy(resdata[0])
				console.log(that.form)
				let imgarr = that.form.trans_pic.split('^^^')
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
	.smallbut {
		margin-left: 5%;
	}
	
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
</style>