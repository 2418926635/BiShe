<template>
	<view>
		<!-- 导向航 -->
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">账号与安全中心</block>
		</cu-custom>
		<form>

			<view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>账号</view>
				<input placeholder="必填" disabled name="input" v-model="form.empNo"></input>
			</view>
			<view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>新密码</view>
				<input placeholder="必填" type="password" name="input" v-model="form.password"></input>
			</view>
			<view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>确认密码</view>
				<input placeholder="必填" type="password" name="input" v-model="form.repassword"></input>
			</view>
			<!-- <view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>姓名</view>
				<input placeholder="必填" name="input" v-model="form.userName"></input>
			</view>
			<view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>邮箱</view>
				<input placeholder="必填" name="input" v-model="form.email"></input>
			</view>
			<view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>电话</view>
				<input placeholder="必填" name="input" @blur="mobilefun" v-model="form.mobile"></input>
			</view> -->
			<!-- <view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>地址</view>
				<input placeholder="xx小区xx号楼xx单元xx门牌号" name="input" v-model="form.address"></input>
			</view> -->
			<!-- <view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>头像</view>
				<view>
					{{imgListyf.length}}/1
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgListyf" :key="index" @tap="ViewImageyf"
						:data-url="imgListyf[index]">
						<image :src="imgListyf[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImgyf" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImageyf" v-if="imgListyf.length<1">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view> -->
			<!-- <view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>角色</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'请选择'}}
					</view>
				</picker>
			</view> -->
			<!-- 			<view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>密码</view>
				<input type="password" placeholder="必填" name="input" v-model="form.password"></input>
			</view>
			<view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>确认密码</view>
				<input type="password" placeholder="必填" name="input" v-model="form.repassword"></input>
			</view> -->
			<view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>验证码</view>
				<input placeholder="必填" name="input" v-model="YZM"></input>
				<button class='cu-btn bg-green shadow' @tap="changeregist">{{yzmnum}}</button>
			</view>
		</form>


		<button class='bottom' style="background-color: #0387f7;color: azure;" @click="updatapwd">
			确定
		</button>

	</view>
</template>

<script>
	import {
		deepCopy
	} from '../../utils/expressfun.js'
	import configData from '@/config/index.js' 
	const urllocal = configData.httpUrl
	export default {
		data() {
			return {
				imgListyf: [],
				imgListyfsim: '',
				imgList: [],
				imagestrArr: [], //图片地址集合
				strObj: {},
				YZM: '',
				yzmnum: '',
				index: -1,
				picker: ['商家', '用户'],
				form: {
					empNo: '',
					password: '',
					repassword:'',
					userName: '',
					mobile: '',
					email: '',
					// password: '',
					// repassword: ''
				}
			};
		},
		mounted() {
			var c = this.yzm(4);
			console.log(c);
			this.yzmnum = this.yzm(4);
			this.form = uni.getStorageSync('userinfo')
			this.imgListyf = this.form.trans_pic.split(',')

		},
		methods: {
			async updatapwd(){
				let that = this
				if (this.form.password == '') {
					uni.showToast({
						title: '确认密码不能为空',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				if (this.form.repassword == '') {
					uni.showToast({
						title: '确认密码不能为空',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				if (this.form.password != this.form.repassword) {
					uni.showToast({
						title: '密码不一致',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				
				var inputyzmnum = this.yzmnum;
				if (inputyzmnum != this.YZM) {
					uni.showToast({
						title: '验证码错误',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				
				let msgobj = {
					id:this.form.id,
					password: this.form.password
				}
				
				let resdata = await new this.Request(this.Urls.m().resetPassword, msgobj).modepost()
				if (resdata == 'ok') {
					uni.showToast({
						title: '密码修改成功',
						icon: 'success',
						duration: 2000
					});
					setTimeout(()=>{
						uni.navigateBack({
								delta:1,//返回层数，2则上上页
							})
					},2000)
				} else {
					uni.showToast({
						title: '修改失败请重试',
						icon: 'none',
						duration: 2000
					});
					return false
				}
			},
			ChooseImageyf() {
				let that = this
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: (res) => {
			
						that.gresslenxiadan = '0%'
						this.loadModal = true;
						const uploadTask = uni.uploadFile({
							url: `${urllocal}api/uploadfile`, //仅为示例，非真实的接口地址
							filePath: res.tempFilePaths[0],
							name: 'file',
							header: {
								Authorization: uni.getStorageSync('accessLink')
							},
							formData: {
								'user': 'test'
							},
							success: (uploadFileRes) => {
								console.log(uploadFileRes)
								that.loadModal = false;
								let url = urllocal + uploadFileRes.data
								that.imgListyfsim = uploadFileRes.data
								that.imgListyf = [url]
							}
						});
						uploadTask.onProgressUpdate((res) => {
							that.gresslenxiadan = res.progress + '%'
						});
						// if (this.imgListxck.length != 0) {
						// 	this.imgListxck = this.imgListxck.concat(res.tempFilePaths)
						// } else {
						// 	this.imgListxck = res.tempFilePaths
						// }
					}
				});
			},
			ViewImageyf(e) {
				uni.previewImage({
					urls: this.imgListyf,
					current: e.currentTarget.dataset.url
				});
			},
			DelImgyf(e) {
				uni.showModal({
					content: '确定要删除吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.imgListyf.splice(e.currentTarget.dataset.index, 1)
							if (this.imgListyf.length > 0) {
								this.imgListyfsim = this.imgListyf[0]
							} else {
								this.imgListyfsim = ''
							}
			
						}
					}
				})
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			mobilefun() {
				var reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/; //11位手机号码正则
				if (!reg_tel.test(this.form.mobile)) {
					uni.showToast({
						title: '请输入正确的电话号码',
						icon: 'none',
						duration: 1500
					});
					this.form.mobile = ""
				}
			},
			async regist() {
				let that = this
				if (this.form.empNo == '') {
					uni.showToast({
						title: '账号不能为空',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				if (this.form.password == '') {
					uni.showToast({
						title: '密码不能为空',
						icon: 'none',
						duration: 2000
					});
					return false;
				}

				if (this.form.userName == '') {
					uni.showToast({
						title: '姓名不能为空',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				if (this.form.mobile == '') {
					uni.showToast({
						title: '电话不能为空',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				if (this.form.email == '') {
					uni.showToast({
						title: '邮箱不能为空',
						icon: 'none',
						duration: 2000
					});
					return false;
				}

				var inputyzmnum = this.yzmnum;
				if (inputyzmnum != this.YZM) {
					uni.showToast({
						title: '验证码错误',
						icon: 'none',
						duration: 2000
					});
					return false;
				}

				let msgobj = {
					id:this.form.id,
					empNo: this.form.empNo,
					mobile: this.form.mobile,
					password: this.form.password,
					remark: '',
					role: this.picker[this.index], //数组
					gongsiid: this.PickergsChange[this.indexgs].id,
					sfzh:this.form.sfzh,
					userName: this.form.userName,
					email: this.form.email,
					status: 0,
					zhicheng:this.form.zhicheng,
					trans_pic: this.imgListyf.join(",")
				}

				let resdata = await new this.Request(this.Urls.m().updateSysUserext, msgobj).modepost()
				if (resdata == 'ok') {
					uni.showToast({
						title: '修改成功',
						icon: 'success',
						duration: 2000
					});
					setTimeout(() => {
						uni.navigateTo({
							url: '/pages/login/login'
						});
					}, 2000)
				} else {
					uni.showToast({
						title: '修改失败请重试',
						icon: 'none',
						duration: 2000
					});
					return false
				}
			},
			yzm(n) {
				// 生成四位随机数验证码
				var chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I",
					"J",
					"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
				];
				var res = "";
				for (var i = 0; i < n; i++) {
					var id = Math.ceil(Math.random() * 35);
					res += chars[id];
				}
				return res;
			},
			changeregist() {
				this.yzmnum = this.yzm(4);
			}
		}
	}
</script>

<style>
	.bottom {
		border-radius: 80rpx;
		margin-top: 70rpx;
		margin-right: 30rpx;
		margin-left: 30rpx;
		height: 47px;
	}

	.action {
		font-size: 1.3em;
		font-weight: bold;
	}
</style>
