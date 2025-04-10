<template>
	<view style="background-color: #f1f1f1;">
		<cu-custom bgColor="bg-gradual-blue">
			<block slot="content">首页</block>
		</cu-custom>
<!-- 		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input :adjust-position="false" type="text" placeholder="搜索关键字" confirm-type="search"
					v-model="keyword"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-blue shadow-blur round" @tap="searchfun">查询</button>
			</view>
		</view> -->
		
<!-- 		// console.log('城市:', weatherInfo.city);
		// console.log('天气:', weatherInfo.weather);
		// console.log('温度:', weatherInfo.temperature);
		// console.log('湿度:', weatherInfo.humidity); -->
		
		
		<view class="padding" style="display: flex;justify-content: space-between;align-items: center;width: 100%;">
			<view class="text-bold">所在城市:<text class="text-blue">{{weatherInfo.city}}</text></view>
			<view><text class="text-bold">天气:</text><text class="text-blue">{{weatherInfo.weather}}</text> </view>
			<view><text class="text-bold">温度:</text><text class="text-orange">{{weatherInfo.temperature}}℃ </text> </view>
			<view><text class="text-bold">湿度:</text><text class="text-green">{{weatherInfo.humidity}}%</text> </view>
		</view>
		<swiper class="card-swiper" style="background-color: #fff;" :class="dotStyle?'square-dot':'round-dot'"
			:indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500" @change="cardSwiper"
			indicator-color="#8799a3" indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item" @tap="gotypedetailfun(item)">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false"
						objectFit="cover" v-if="item.type=='video'"></video>
				</view>
			</swiper-item>
		</swiper>
		<view class="cate-section">
			<view class="cate-item" v-for="(item,i) in iconlist" :key="i" @click="gourl(item.value)">
				<image :src="item.imageUrl" style="width: 100rpx;" mode="widthFix"></image>
				<text>{{item.descstr}}</text>
			</view>
		</view>

		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 组团信息
			</view>
		</view>

		<view v-for="(item,index) in arr" :key="index">
			<view class="cu-card article" :class="isCard?'no-card':''" @click="clicfun(item)">
				<view class="cu-item shadow">
					<!-- 					<view class="title"><view class="text-cut">{{item.title}}</view></view> -->
					<view class="content" style="padding-top: 10px;">
						<image :src="item.img" mode="aspectFill"></image>
						<view class="desc" style="justify-content: space-around;">
							<view class="text-content" style="color: #000;font-size: 1.2em;height:1.2em;font-weight: bold;">
								{{item.projectname}}
							</view>
							<view>
								<view class="cu-tag bg-green light sm round">详情：{{item.detail | ellipsis }}</view>
							</view>
							<view>
								<view class="cu-tag bg-red light sm round">发布人：{{item.userdesc}}</view>
								<view class="cu-tag bg-orange light sm round">预算：{{item.yusuan}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	import configData from '@/config/index.js'
	export default {
		created() {
			this.userinfoObj = uni.getStorageSync('userinfo')
		},
		onShow() {
			let that = this
			this.typefun()
			this.getshopData()
			//天气数据获取
			const cityName = '110000';
			const apiKey = '9cad4034fd9116d8f73db46e0a20e962';
			const url = `https://restapi.amap.com/v3/weather/weatherInfo?city=${cityName}&key=${apiKey}`;
			uni.request({
				url,
				success: (res) => {
					console.log('完整响应数据:', res); // 打印完整响应数据
					if (res.statusCode === 200) {
						if (res.data.status === '1') {
							console.log('天气数据:', res.data);
							const weatherInfo = res.data.lives[0];
							// console.log('城市:', weatherInfo.city);
							// console.log('天气:', weatherInfo.weather);
							// console.log('温度:', weatherInfo.temperature);
							// console.log('湿度:', weatherInfo.humidity);
							that.weatherInfo = weatherInfo
						} else {
							console.error('请求失败，错误信息:', res.data);
						}
					} else {
						console.error('请求失败，状态码:', res.statusCode);
					}
				},
				fail: (err) => {
					console.error('请求失败:', err);
				},
			});
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh();
		},
		data() {
			return {
				weatherInfo:{
					city:'',
					weather:'',
					temperature:'',
					humidity:'',
				},
				userinfoObj: {},
				urllocal: configData.httpUrl,
				cardCur: 0,
				listtab: [],
				iconlist: [{
						descstr: '快速缴费',
						value: 1,
						imageUrl: '/static/list/fankui.png'
					},
					{
						descstr: '我要保修',
						value: 2,
						imageUrl: '/static/list/fenxiang.png'
					},
					{
						descstr: '组团',
						value: 3,
						imageUrl: '/static/list/guanzhu.png'
					},
					{
						descstr: '反馈评价',
						value: 4,
						imageUrl: '/static/list/shoucang.png'
					}
				],
				jieritype: [],
				// listtabext: [ {
				// 	id: 8,
				// 	text: '留言反馈',
				// 	img: '../../static/icon/huanbao.png'
				// }],
				swiperList: [],
				dotStyle: false,
				keyword: '',
				type: '',
				arr: [],
				arrext: [],
				CustomBar: this.CustomBar,
				isCard: false,
				positionInfo: {
					address: '',
					longitude: '', //经度
					latitude: '', //纬度
				},
				addressdata: '',
				TabCur: 0,
				scrollLeft: 0,
				colorarr: ['green', 'orange', 'purple', 'mauve', 'pink', 'brown', 'red', 'orange', 'green',
					'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown', 'red', 'orange', 'green',
					'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown', 'red', 'orange', 'green',
					'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown', 'red', 'orange', 'green'
				],
			};
		},
		methods: {
			clicfun(val) {
				console.log("123")
				uni.navigateTo({
					url: `/pages/activity/activitybm?id=${val.id}`,
					fail: (res) => {
						console.log(res) //打印错误信息
					}
				});
			},
			gourl(val) {
				if (val == 1) {
					uni.navigateTo({
						url: `../user/jiaofeilist`
					});
				}
				if (val == 2) {
					uni.navigateTo({
						url: `../user/baoxiusubmit`
					});
				}
				if (val == 3) {
					uni.navigateTo({
						url: `../activity/activity`
					});
				}
				if (val == 4) {
					uni.navigateTo({
						url: `../my/submitmsg`
					});
				}

			},
			seeeve(val) {
				console.log(val)
				uni.navigateTo({
					url: `../foodlist/sharecomment?id=${val.id}`
				});
			},
			async searchfun() {
				this.getshopData()
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				this.getshopData()
			},
			async typefun() {
				let that = this
				let msgobj = {}
				let resdata = await new this.Request(this.Urls.m().queryfloor, msgobj).modepost()
				that.swiperList = resdata.map((val, i) => {
					// val.id = i
					val.type = 'image'
					val.url = this.urllocal + val.trans_pic.split('^^^')[0]
					return val
				})
			},
			async getshopData() {
				let that = this
				let msgobj = {
					status: "已审核"
				}
				let resdata = await new this.Request(this.Urls.m().queryactivitystatus, msgobj).modepost()
				console.log(resdata)
				that.arr = resdata.map((val, i) => {
					val.img =  val.img.split('^^^')[0]
					return val
				})


			},
			gotypedetailfun(val) {
				uni.navigateTo({
					url: `../user/typedetail?id=${val.id}`,
				});
			},
			// toshoptype(val) {
			// 	if (val.id == 1) {
			// 		uni.navigateTo({
			// 			url: `/pages/user/shetuanlist`,
			// 		});
			// 	}
			// 	if (val.id == 2) {
			// 		uni.navigateTo({
			// 			url: `/pages/user/activitylist`,
			// 		});
			// 	}
			// 	if (val.id == 3) {
			// 		uni.navigateTo({
			// 			url: `/pages/user/liuyanfankui`,
			// 		});
			// 	}


			// },
			IsCard(e) {
				this.isCard = e.detail.value
			},

			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
		},
		filters: {
			// 判断超出5个字显示省略号
			ellipsis(value) {
				if (!value) return ''
				if (value.length > 35) {
					return value.slice(0, 35) + '...'
				}
				return value
			},
		},
	}
</script>

<style scoped>
	.listtab {
		width: 100%;
		padding-left: 5%;
		padding-right: 5%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #fff;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	.listtabsub {
		width: 18%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.listtabfu {
		width: 100%;
		padding-left: 10px;
		padding-right: 10px;
	}



	.text-content {
		line-height: 1.5;
	}


	.cu-card.article>.cu-item .content .text-content.data-v-71bf3ec6 {
		height: 1.3em;
	}

	.padding-sm {
		padding: 3rpx;
	}

	.bg-grey {
		background-color: #fff;
		color: #b1a1a1;
	}

	.margin-xs {
		margin: 3rpx;
	}

	.tabsub {
		width: 33%;
		font-size: 0.8em;
		color: #b1a1a1;
		font-weight: 800;
	}

	.textclass {
		margin-top: 5px;
		font-weight: 600;
		font-size: 15px;
		color: darkgray;
	}

	.classicon {
		height: 70vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: #fff;
		font-size: 10em;
	}

	.cate-section {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #ffffff;
		padding-bottom: 20rpx;
	}

	.cate-item {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>