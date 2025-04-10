<template>
	<view style="background-color: #f1f1f1;">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">成员列表</block>
		</cu-custom>
		<view class="cu-list menu">
			<view class="cu-item" @click="tochat(item)" style="padding: 0 40rpx;min-height: 120rpx;"  v-for="(item,i) in list" :key="i">
				<image :src="item.trans_pic" mode="aspectFill" class="cu-avatar round lg" style="margin-right: 30rpx;"></image>
				<view class="content">
					<view class="text-grey">{{item.userName}}</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							{{item.mobile}}
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
			
		},
		onLoad(options) {
			this.activityid = options.activityid
			this.init(this.activityid)
		},
		data() {
			return {
				activityid:'',
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
			tochat(val){
				uni.navigateTo({
					url: `/pages/my/chengyuandetail?id=${val.userid}`,
					fail: (res) => {
						console.log(res) //打印错误信息
					}
				});
			},
			async init(activityid) {
				let that = this
				let obj = {
					activityid: activityid
				}
				let resdata = await new this.Request(this.Urls.m().queryactivityuserlist, obj).modepost()
				that.list = resdata.filter((val,i)=>{
					return val.userid != this.userinfoObj .id
				})
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