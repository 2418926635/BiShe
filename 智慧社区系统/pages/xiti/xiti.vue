<template name="basics">
	<view>
		<cu-custom bgColor="bg-gradual-blue">
			<block slot="content">路线</block>
		</cu-custom>
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input :adjust-position="false" type="text" placeholder="关键词搜索" confirm-type="search"
					v-model="keyword"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-blue shadow-blur round" @tap="init">搜索</button>
			</view>
		</view>
		<scroll-view scroll-y class="page" style="margin-top: 30rpx;">
			<view class="nav-list">
				<navigator hover-class="none" :url="'/pages/xiti/detail?id=' + item.id" class="nav-li"
					navigateTo :class="'bg-'+item.color" :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]"
					v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name | ellipsis}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		onShow() {
			this.init()
		},
		name: "basics",
		data() {
			return {
				keyword:'',
				colorarr: ['green', 'blue', 'orange', 'mauve', 'pink', 'brown', 'red', 'orange', 'green',
					'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown', 'red', 'orange', 'green',
					'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown', 'red', 'orange', 'green',
					'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown', 'red', 'orange', 'green'
				],
				elements: [],
			};
		},
		// uni.navigateTo({
		// 	url: `/pages/tooltip/tooltip`
		// });
		methods: {
			async init() {
				let objext = {
					current: 1,
					keyword: this.keyword,
					size: 1000,
					status: 0
				}
				uni.showLoading({
					title: '加载中'
				});
				let resdata = await new this.Request(this.Urls.m().querysysnews, objext).modepost()
				this.elements = resdata.map((val,i)=>{
					val.name = val.keywordstr
					val.color = this.colorarr[i]
					val.cuIcon = 'colorlens'
					return val
				})
			},
		},
		filters: {
			// 判断超出5个字显示省略号
			ellipsis(value) {
				if (!value) return ''
				if (value.length > 10) {
					return value.slice(0, 10) + '...'
				}
				return value
			},
		},

	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>