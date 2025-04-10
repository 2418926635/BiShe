<template>
	<view style="background-color: #f1f1f1;">
		<cu-custom bgColor="bg-gradual-blue">
			<block slot="content">个人信息</block>
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
							<!-- <view class="usertitle">积分：<text style="color: coral;"> {{jifen}}</text></view> -->
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
					<text class="cuIcon-mail text-blue"></text>
					<text>邮箱：{{userinfoObj.email}}</text>
				</view>
			</view>
			<view class="cu-item shadow">
				<view class="content">
					<text class="cuIcon-mobile text-blue"></text>
					<text>电话：{{userinfoObj.mobile}}</text>
				</view>
			</view>
			<view class="cu-item shadow">
				<view class="content">
					<text class="cuIcon-tagfill text-blue"></text>
					<text>口味：{{userinfoObj.tapstr}}</text>
				</view>
			</view>
			<!-- <view class="cu-item shadow">
				<view class="content">
					<text class="cuIcon-location text-blue"></text>
					<text>地址：{{userinfoObj.address}}</text>
				</view>
			</view> -->
		</view>


		<view class="cu-list menu margin-top-sm">
			<view class="cu-item arrow shadow" @tap="updatauser">
				<view class="content">
					<text class="cuIcon-edit text-blue"></text>
					<text>信息修改</text>
				</view>
			</view>
			<view class="cu-item arrow shadow" @tap="myshare">
				<view class="content">
					<text class="cuIcon-edit text-blue"></text>
					<text>我要分享</text>
				</view>
			</view>
			<view class="cu-item arrow shadow" @tap="mymeishi">
				<view class="content">
					<text class="cuIcon-edit text-blue"></text>
					<text>美食管理</text>
				</view>
			</view>
			<view class="cu-item arrow shadow" @tap="submitmsg">
				<view class="content">
					<text class="cuIcon-edit text-blue"></text>
					<text>问题反馈</text>
				</view>
			</view>
			
			<view class="cu-item arrow shadow" @click="seefankui">
				<view class="content">
					<text class="cuIcon-edit text-blue"></text>
					<text>反馈查询</text>
				</view>
			</view> 
		<!-- 	<view class="cu-item arrow shadow" @click="seeactivity">
				<view class="content">
					<text class="cuIcon-edit text-blue"></text>
					<text>已报名活动</text>
				</view>
			</view> 
			<view class="cu-item arrow shadow" @click="seeshetuan">
				<view class="content">
					<text class="cuIcon-edit text-blue"></text>
					<text>已报名社团</text>
				</view>
			</view> -->
		</view>






		<view class="cu-card article no-card padding-top-xs">
			<view class="cu-item shadow padding-top">
				<view class="content">
					<view class="desc text-center text-grey" @click="outlogin">
						退出登录
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		created() {
			try {
				this.userinfoObj = uni.getStorageSync('userinfo')
			} catch (e) {
				this.userinfoObj = ""
			}
		},
		onTabItemTap(e) {
			// tab 点击时执行，此处直接接收单击事件
			this.userinfoObj = uni.getStorageSync('userinfo')
		},
		onLoad() {

		},
		data() {
			return {
				jifen:0,
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
		onShow() {
			//获取用户积分
			// this.queryjfen()
			this.ifUser()
		},
		methods: {
			updatauser(){
				uni.navigateTo({
					url: '../login/edituser'
				})
			},
			myshare(){
				uni.navigateTo({
					url: '../share/setshare'
				})
			},
			mymeishi(){
				uni.navigateTo({
					url: './usergoodsmy'
				})
			},
			async queryjfen(){
				let msgobj = {
					id:this.userinfoObj.id
				}
				let resdata = await new this.Request(this.Urls.m().selectuserjifen, msgobj).modepost()
				this.jifen = resdata[0].jifen || 0
			},
			seefankui(){
				uni.navigateTo({
					url: './fankuilist'
				})
			},

			seeactivity(){
				uni.navigateTo({
					url: './seeactivity'
				})
			},
			seeshetuan(){
				uni.navigateTo({
					url: './seeshetuan'
				})
			},
			//信息反馈
			submitmsg(){
				uni.navigateTo({
					url: './submitmsg'
				})
			},
			
			outlogin() {
				uni.showModal({
					content: '确定要退出吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: async res => {
						if (res.confirm) {
							uni.removeStorageSync('userinfo')
							uni.navigateTo({
								url: '/pages/login/login'
							});
						}
					}
				})
			},
			tologin() {
				uni.showToast({
					title: '请先登录',
					icon: 'none',
					duration: 2000
				});
				setTimeout(() => {
					uni.navigateTo({
						url: '/pages/login/login'
					});
				}, 2000)

			},
			toshoucang(){
				uni.navigateTo({
					url: './shoucanglist'
				})
			},
			
			toyuyue(){
				uni.navigateTo({
					url: './yuyuelist'
				})
			},
			ifUser() {
				let user = uni.getStorageSync('wxuser')
				console.log(user)
				if (!user) {
					this.usering = true
					console.log("没cookiet")
					let userdata = {
						avatarUrl: "'../../static/tab/tab-g.png'",
						namenew: "namenew"
					}
					this.userdata = userdata


				} else {
					this.usering = false
					this.userdata = user
					console.log("有cookiet")
				}
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