<template>
	<view>
		<!-- 导向航 -->
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">用户注册</block>
		</cu-custom>
		<form>

			<view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>账号</view>
				<input placeholder="必填" name="input" v-model="form.empNo"></input>
			</view>
			<view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>密码</view>
				<input placeholder="必填" type="password" name="input" v-model="form.password"></input>
			</view>
			<view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>户号</view>
				<input placeholder="必填" name="input" v-model="form.school"></input>
			</view>
			<view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>姓名</view>
				<input placeholder="必填" name="input" v-model="form.userName"></input>
			</view>
			<!-- <view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>性别</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'请选择'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>年龄</view>
				<input type="number" placeholder="必填" name="input" v-model="form.nl"></input>
			</view> -->
			<view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>邮箱</view>
				<input placeholder="必填" name="input" v-model="form.email"></input>
			</view>
			<view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>电话</view>
				<input placeholder="必填" name="input" @blur="mobilefun" v-model="form.mobile"></input>
			</view>
	<!-- 		<view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>口味偏好</view>
			</view> -->
			<!-- <view class="cu-form-group">
				<view class="grid col-6">
					<view v-for="(item,index) in checkboxext" :key="index">
						<button class="cu-btn orange sm block" :class="item.checked?'bg-orange':'line-orange'"
							@tap="ChooseCheckboxext" :data-value="item.value"
							style="margin-right:10px;margin-top:3px;margin-bottom:10px;">
							{{item.name}}
						</button>
					</view>
				</view>
			</view> -->
			<view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>头像</view>
				<view>
					{{imgListyf.length}}/1
				</view>
			</view>
			<view class="cu-form-group" style="border: 0px;">
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
			</view>
			
			<view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>产权证明</view>
				<view>
					{{imgListyfext.length}}/1
				</view>
			</view>
			<view class="cu-form-group" style="border: 0px;">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgListyfext" :key="index" @tap="ViewImageyfext"
						:data-url="imgListyfext[index]">
						<image :src="imgListyfext[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImgyfext" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImageyfext" v-if="imgListyfext.length<1">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title"><text class='cuIcon-title text-red'></text>验证码</view>
				<input placeholder="必填" name="input" v-model="YZM"></input>
				<button class='cu-btn bg-green shadow' @tap="changeregist">{{yzmnum}}</button>
			</view>
		</form>


		<button class='bottom' style="background-color: #0387f7;color: azure;" @click="regist">
			确定
		</button>
		<view style="width: 100%;height: 50rpx;">

		</view>
	</view>
</template>

<script>
	import {
		deepCopy
	} from '../../utils/expressfun.js'
	// 请求地址
	import configData from '@/config/index.js'
	const urllocal = configData.httpUrl
	export default {
		data() {
			return {
				index: -1,
				picker: ['男','女'],
				imgListyf: [],
				imgListyfsim: '',
				imgList: [],
				imagestrArr: [], //图片地址集合
				imgListyfext: [],
				imgListyfsimext: '',
				imgListext: [],
				imagestrArrext: [], //图片地址集合
				strObj: {},
				YZM: '',
				yzmnum: '',
				checkboxext: [],
				form: {
					empNo: '',
					password: '',
					userName: '',
					mobile: '',
					email: '',
					school:'',
					nl:''
					// password: '',
					// repassword: ''
				}
			};
		},
		mounted() {
			var c = this.yzm(4);
			console.log(c);
			this.yzmnum = this.yzm(4);

		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
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
			ChooseCheckboxext(e) {
				let items = this.checkboxext;
				let values = e.currentTarget.dataset.value;
				for (let i = 0, lenI = items.length; i < lenI; ++i) {
					if (items[i].value == values) {
						items[i].checked = !items[i].checked;
						break
					}
				}
			},
			ChooseImageyfext() {
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
								that.imgListyfsimext = uploadFileRes.data
								that.imgListyfext = [url]
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
			ViewImageyfext(e) {
				uni.previewImage({
					urls: this.imgListyfext,
					current: e.currentTarget.dataset.url
				});
			},
			DelImgyfext(e) {
				uni.showModal({
					content: '确定要删除吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.imgListyfext.splice(e.currentTarget.dataset.index, 1)
							if (this.imgListyfext.length > 0) {
								this.imgListyfsimext = this.imgListyfext[0]
							} else {
								this.imgListyfsimext = ''
							}
			
						}
					}
				})
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
				if (this.form.school == '') {
					uni.showToast({
						title: '户号不能为空',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				// if (this.form.nl == '') {
				// 	uni.showToast({
				// 		title: '年龄不能为空',
				// 		icon: 'none',
				// 		duration: 2000
				// 	});
				// 	return false;
				// }

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
				
				
				if (this.imgListyfext.length == 0) {
					uni.showToast({
						title: '产权证明不能为空',
						icon: 'none',
						duration: 2000
					});
					return false;
				}

				// if (this.index == -1) {
				// 	uni.showToast({
				// 		title: '请选择性别',
				// 		icon: 'none',
				// 		duration: 2000
				// 	});
				// 	return false;
				// }




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
					empNo: this.form.empNo,
					mobile: this.form.mobile,
					password: this.form.password,
					sex:this.index,
					school: this.form.school,
					nl: this.form.nl,
					remark: '',
					role: '用户', //数组
					isadmin: 1,
					userName: this.form.userName,
					email: this.form.email,
					status: 1,
					tapstr: '', // this.gettostr(this.checkboxext),
					taptext:'', // this.gettostext(this.checkboxext),
					address: this.form.address,
					trans_pic: this.imgListyf.join(","),
					stu_pic: this.imgListyfext.join(",")
				}

				let resdata = await new this.Request(this.Urls.m().addSysUser, msgobj).modepost()
				if (resdata == 'ok') {
					uni.showToast({
						title: '注册成功',
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
						title: '注册失败请重试',
						icon: 'none',
						duration: 2000
					});
					return false
				}
			},
			gettostext(arr) {
				let result = []
				arr.forEach((val, i) => {
					if (val.checked) {
						result.push(val.value)
					}
				})
				return JSON.stringify(result)
			},
			gettostr(arr) {
				let result = []
				arr.forEach((val, i) => {
					if (val.checked) {
						result.push(val.name)
					}
				})
				return result.join(',')
			},
			yzm(n) {
				// 生成四位随机数验证码
				var chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G",
					"H", "I",
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
		margin-top: 80rpx;
		margin-right: 30rpx;
		margin-left: 30rpx;
		height: 37px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.action {
		font-size: 1.3em;
		font-weight: bold;
	}
</style>