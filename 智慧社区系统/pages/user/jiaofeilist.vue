<template name="components">
	<view>
		<cu-custom bgColor="bg-gradual-white" :isBack="true">
			<block slot="content">缴费类型</block>
		</cu-custom>
		<scroll-view scroll-y style="margin-top: 40rpx;">
			<!-- <image src="/static/componentBg.png" mode="widthFix" class="response"></image> -->
			<view class="nav-list">
				<navigator hover-class='none' url='../../pagesA/404/404.vue' @tap="gourl(item)" class="nav-li"
					navigateTo :class="'bg-'+item.color" :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]"
					style="width: 100%;"
					v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
			</view>
			<!-- 			<view class="cu-tabbar-height"></view> -->
		</scroll-view>
	</view>
</template>

<script>
	export default {
		onShow() {
			this.mobile = uni.getStorageSync('mobile')
		},
		data() {
			return {
				mobile: '',
				elements: [
					{
						code: 'fee1',
						title: '物业管理费',
						name: 'Take wine',
						color: 'blue',
						cuIcon: 'searchlist'
					},
					{
						code: 'fee2',
						title: '水费缴纳',
						name: 'Access Query',
						color: 'orange',
						cuIcon: 'searchlist'
					},
					{
						code: 'fee3',
						title: '电费缴纳',
						name: 'Expiration query',
						color: 'red',
						cuIcon: 'searchlist'
					},
					{
						code: 'fee4',
						title: '燃气费缴纳',
						name: 'Expiration query',
						color: 'green',
						cuIcon: 'searchlist'
					}
				],
			};
		},
		methods: {
			gourl(item) {
				uni.navigateTo({
					url: `./jiaofeisubmit?title=${item.title}`
				});
			}
		}
	}
</script>

<style>

</style>