<template>
	<view style="background-color: #f1f1f1;">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">粉丝列表</block>
		</cu-custom>
		<view class="cu-list menu">
			<view class="cu-item" style="padding: 0 40rpx;min-height: 120rpx;"  v-for="(item,i) in list" :key="i">
				<image :src="item.trans_pic" mode="aspectFill" class="cu-avatar round lg"></image>
				<view class="content">
					<view class="text-grey">{{item.userName}}</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							{{item.email}}
						</view> </view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">&nbsp;</view>
					<view class="text-grey text-xs">&nbsp;</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		onShow() {
			this.userinfoObj = uni.getStorageSync('userinfo')
			this.init()
		},
		onLoad() {

		},
		data() {
			return {
				list:[],
				jifen: 0,
				isshow: true,
				name: '点击登录',
				namenew: '',
				usering: true,
				userdata: {},
				flagbj: false,
				userinfoObj: {},
				avatarUrl: '/static/logo.png'
			}
		},

		methods: {
			async init() {
				let that = this
				let obj = {
					userid: this.userinfoObj.id
				}
				let resdata = await new this.Request(this.Urls.m().queryfslist, obj).modepost()
				that.list = resdata
			}

		}
	}
</script>

<style>
	.usertitle {
		margin-left: 10px;
		font-size: 1.2em;
	}
</style>