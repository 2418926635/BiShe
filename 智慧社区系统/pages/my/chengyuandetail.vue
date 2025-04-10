<template>
	<view style="background-color: #f1f1f1;">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">用户信息</block>
		</cu-custom>

		<view class="cu-card article no-card">
			<view class="cu-item shadow padding-top">
				<view class="content">
					<view class="desc text-center">
						<view class="flex align-center">
							<view class="">
								<view class="cu-avatar xl round margin-left"
									:style="{backgroundImage:'url(' + userinfoObj.trans_pic + ')'}"></view>
								<!-- <view class="cu-avatar xl round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);"></view> -->
							</view>
							<view class="usertitle">{{userinfoObj.userName}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="cu-list menu margin-top-sm">
			<view class="cu-item shadow">
				<view class="content">
					<text class="cuIcon-friendfamous text-blue"></text>
					<text>账号：{{userinfoObj.empNo}}</text>
				</view>
			</view>
			<view class="cu-item shadow">
				<view class="content">
					<text class="cuIcon-friendfamous text-blue"></text>
					<text>邮箱：{{userinfoObj.email}}</text>
				</view>
			</view>
			<view class="cu-item shadow">
				<view class="content">
					<text class="cuIcon-friendfamous text-blue"></text>
					<text>电话：{{userinfoObj.mobile}}</text>
				</view>
			</view>
			<view class="cu-item shadow">
				<view class="content">
					<text class="cuIcon-friendfamous text-blue"></text>
					<text>学校：{{userinfoObj.school}}</text>
				</view>
			</view>
			<view class="cu-item shadow">
				<view class="content">
					<text class="cuIcon-friendfamous text-blue"></text>
					<text>性别：{{userinfoObj.sextext}}</text>
				</view>
			</view>
			<view class="cu-item shadow">
				<view class="content">
					<text class="cuIcon-friendfamous text-blue"></text>
					<text>年龄：{{userinfoObj.nl}}</text>
				</view>
			</view>
		</view>

	





	<view class="cu-card article no-card padding-top-xs">
		<view class="cu-item shadow padding-top">
<!-- 			<view class="margin-top submitbut">
				<button class="cu-btn block bg-gradual-green margin-tb-sm lg" @click="tochat">对话</button>
			</view> -->
		<!-- 	<view class="content">
				<view class="desc text-center text-green" @click="tochat">
					对话
				</view>
			</view> -->
		</view>
	</view>

	</view>
</template>

<script>
	export default {
		onShow() {},
		onLoad(options) {
			console.log(options)
			this.userinfo = uni.getStorageSync('userinfo')
			this.init(options.id)
		},
		data() {
			return {
				isshow: true,
				name: '点击登录',
				namenew: '',
				usering: true,
				userdata: {},
				flagbj: false,
				userinfoObj: {},
				userinfo: {},
				avatarUrl: ''
			}
		},
		methods: {
			tochat() {
				uni.navigateTo({
					url: `/pages/my/chatdetail?duifangpic=${this.userinfoObj.trans_pic}&wofangpic=${this.userinfo.trans_pic}`,
					fail: (res) => {
						console.log(res) //打印错误信息
					}
				});
			},
			async init(id) {
				let that = this
				let obj = {
					id: id
				}
				let resdata = await new this.Request(this.Urls.m().userQueryListbyid, obj).modepost()
				that.userinfoObj = resdata[0]
				if(resdata[0].sex == 0){
					that.userinfoObj.sextext = '男'
				}else{
					that.userinfoObj.sextext = '女'
				}

			},
			toseeshoucan() {
				uni.navigateTo({
					url: '/pages/my/shoucanglist'
				});
			},
			//
			updateuser() {
				uni.navigateTo({
					url: '../login/edituser'
				});
			}
		}
	}
</script>

<style>
	.submitbut {
		padding: 15px;
	}
	.usertitle {
		margin-left: 10px;
		font-size: 1.2em;
	}
</style>