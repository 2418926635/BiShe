<template>
	<view class="page">
		<view class="header">
			<view class="logo">
				<!-- <image src="../../static/login/logo.png"/> -->
				<!-- <image src="../../static/index/shrqu2.png" mode="aspectFit" style="height: 200rpx;"></image> -->
			</view>
		</view>

		<view class="login">
			<view class="title"><text>智慧社区系统系统</text></view>

			<template v-if="type === 0">
				<view class="block">
					<view class="icon">
						<image src="/static/login/mobile.png" />
					</view>
					<view class="input">
						<input v-model="empNo" placeholder="请输入账号" type="text" />
					</view>
				</view>
				<view class="block">
					<view class="icon">
						<image src="/static/login/lock.png" />
					</view>
					<view class="input">
						<input v-model="password" placeholder="请输入密码" type="password" />
					</view>
				</view>
			</template>


			<view class="change-type">
				<text @click="register">注册</text>
			</view>

			<view class="button" @click="goto"><text>登录</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 0, // 0 用户密码登录  1 验证码登录
				form_username: '',
				form_password: '',
				form_tel: '',
				form_code: '',
				send_count_down: 0, // 验证码重新发送等待倒计时
				passwordType: 'password',
				showPassword: false,
				vuenickName: '',
				iconimg: '../../static/logonew.png',
				empNo: '',
				password: '',
				openid: '',
				access_token: '',
				phoneNumber: '',
				version: '',
				phone: '', //手机号码
				pwd: '' //密码
			}
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {
			togglePasswordVisibility() {
				this.showPassword = !this.showPassword;
				this.passwordType = this.showPassword ? 'text' : 'password';
			},
			async goto() {
				let that = this
				if (this.empNo == '') {
					uni.showToast({
						title: '账号不能为空',
						icon: 'none',
						duration: 2000
					});
					return false
				}
				if (this.password == '') {
					uni.showToast({
						title: '密码不能为空',
						icon: 'none',
						duration: 2000
					});
					return false
				}

				let msgobj = {
					empNo: this.empNo,
					password: this.password
				}
				let resdata = await new this.Request(this.Urls.m().login, msgobj).modepost()
				console.log(resdata)
				if (resdata.length > 0) {
					uni.showToast({
						title: '验证成功',
						icon: 'success',
						duration: 1500
					})
					uni.setStorageSync('userinfo', resdata[0])
					uni.switchTab({
						url: '/pages/user/user'
					});



				} else {
					uni.showToast({
						title: '账号或密码错误',
						icon: 'none',
						duration: 2000
					});
					return false
				}


			},
			register() {
				uni.navigateTo({
					url: '/pages/login/register'
				});
			},
			decryptPhoneNumber(e) {
				console.log(e.detail);
			},
			//当前登录按钮操作
			login() {
				var that = this;
				if (!that.phone) {
					uni.showToast({
						title: '请输入您的手机号',
						icon: 'none'
					});
					return;
				}
				if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(that.phone)) {
					uni.showToast({
						title: '请输入正确手机号',
						icon: 'none'
					});
					return;
				}
				if (!that.pwd) {
					uni.showToast({
						title: '请输入您的密码',
						icon: 'none'
					});
					return;
				}
				uni.showToast({
					title: '登录成功！',
					icon: 'none'
				});
			},
			//注册按钮点击
			reg() {
				uni.showToast({
					title: '注册跳转',
					icon: 'none'
				});
			},
			//等三方微信登录
			wxLogin() {
				uni.showToast({
					title: '微信登录',
					icon: 'none'
				});
			},
			//第三方支付宝登录
			zfbLogin() {
				uni.showToast({
					title: '支付宝登录',
					icon: 'none'
				});
			},
			changeType() {
				this.type = this.type ? 0 : 1
			},
			sendCode() {
				if (this.send_count_down === 0) {
					// 验证手机号规则 调用发送验证码接口
					let countDown = 60
					this.send_count_down = countDown
					let timer = setInterval(() => {
						countDown--
						this.send_count_down = countDown
						if (countDown === 0) {
							clearInterval(timer)
						}
					}, 1000)
				}
			},
			login() {
				if (this.type === 0) {
					// 用户密码登录
					console.log(this.form_username, this.form_password)
				} else {
					// 验证码登录
					console.log(this.form_tel, this.form_code)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "./index.scss";
</style>