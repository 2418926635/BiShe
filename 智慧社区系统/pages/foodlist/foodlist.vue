<template>
	<view style="background-color: #f1f1f1;">
		<cu-custom bgColor="bg-gradual-blue">
			<block slot="content">精选</block>
		</cu-custom>
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input :adjust-position="false" type="text" placeholder="搜索关键字" confirm-type="search"
					v-model="keyword"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-blue shadow-blur round" @tap="searchfun">查询</button>
			</view>
		</view>
		<scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in jieritype"
				:key="index" @tap="tabSelect" :data-id="index">
				{{item.title}}
			</view>
		</scroll-view>

		<view class="cu-card article" :class="isCard?'no-card':''" v-for="(item,i) in arr" :key="i" @click="seeeve(item)">
			<view class="cu-item shadow">
				<view class="title">
					<view class="text-cut">{{item.descstr}}</view>
				</view>
				<view class="content">
					<image :src="item.trans_pic01" mode="aspectFill">
					</image>
					<view class="desc">
						<view class="text-content"> {{item.detail | ellipsis}}</view>
						<view>
							<view class="cu-tag light sm round" :class="'bg-'+colorarr[j]" v-for="(v,j) in item.taparr" :key="j">{{v}}</view>
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
			this.typefun()
			this.inittype()
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh();
		},
		data() {
			return {
				userinfoObj: {},
				urllocal: configData.httpUrl,
				cardCur: 0,
				listtab: [],
				jieritype: [],
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
				colorarr:['green','orange','purple','mauve','pink','brown','red','orange','green',
				'cyan','blue','purple','mauve','pink','brown','red','orange','green',
				'cyan','blue','purple','mauve','pink','brown','red','orange','green',
				'cyan','blue','purple','mauve','pink','brown','red','orange','green'],
			};
		},
		methods: {
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
			async inittype() {
				let obj = {
					current: 1,
					keyword: "",
					size: 10,
					status: 0
				}
				uni.showLoading({
					title: '操作中'
				});
				let res = await new this.Request(this.Urls.m().queryannouncement, obj).modepost()
				res.unshift({title:'全部帖子'})
				this.jieritype = res
				this.getshopData()
			},
			async getshopData() {
				let that = this
				let msgobj = {
					keyword:this.keyword,
					typetext:this.jieritype[this.TabCur].title,
					goodstatus:'是',
					current: 1,
					size: 1000,
					userid:0,
					status:'已通过'
				}
				let resdata = await new this.Request(this.Urls.m().queryarticle, msgobj).modepost()
				this.arr = resdata.map((val,i)=>{
					val.trans_pic01 = '../../static/index/zanwu.png'
					if(val.trans_pic){
						val.trans_pic01 = val.trans_pic.split(',')[0]
					}
					val.taparr = val.tapstr.split('#')     
					return val
				})
				console.log(this.arr)


			},

		
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