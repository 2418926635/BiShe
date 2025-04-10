<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">创建帖子</block>
		</cu-custom>
		<!-- 	<homecom class="homclass"></homecom> -->
		<view class="formcontent">
			<form>
				<view class="cu-form-group">
					<view class="title">帖子类型</view>
					<picker @change="PickerChange" :value="index" :range="picker" range-key="title">
						<view class="picker">
							{{index>-1?picker[index].title:'请选择'}}
						</view>
					</picker>
				</view>
				<view class="cu-form-group">
					<view class="title">标题</view>
					<input placeholder="标题" v-model="form.descstr" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">标签</view>
					<input placeholder="标签1#标签2#标签3" v-model="form.tapstr" name="input"></input>
				</view>
				<view class="cu-bar bg-white" style="border-top: 0.5px solid #eee;">
					<view class="action">
						图片
					</view>
					<view class="action">
						{{imgListyf.length}}/9
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
						<view class="solids" @tap="ChooseImageyf" v-if="imgListyf.length<9">
							<text class='cuIcon-cameraadd'></text>
						</view>
					</view>
				</view>


				<view class="cu-form-group">
					<view class="title">内容</view>
					<textarea style="height: 12.6em;" maxlength="-1" v-model="form.detail" placeholder="请填写"></textarea>
				</view>
			</form>
			<view class="margin-top submitbut">
				<button class="cu-btn block bg-gradual-blue margin-tb-sm lg" @click="submit">提交</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		deepCopy
	} from '@/utils/expressfun.js'
	import configData from '@/config/index.js'
	let urllocal = configData.httpUrl
	export default {
		onLoad(option) {
			this.type = option.type
		},
		mounted() {
			this.userinfo = uni.getStorageSync('userinfo')
			this.init()
		},
		// components: {
		// 	homecom
		// },
		data() {
			return {
				picker: [],
				index: -1,
				userinfo: {},
				imgListyf: [],
				// imgListyfsim: '',
				imgList: [],
				strObj: {},
				form: {
					descstr: '',
					detail: '',
					tapstr: ''
				},
				type: '',
				_id: '',
				str: '',
			}
		},
		methods: {
			init() {
				this.inittype()
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
				this.picker = res
			},
			validfun() {
				let flag = true
			},
			PickerChange(e) {
				this.index = e.detail.value
				console.log(this.picker[this.index])
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
								that.imgListyf.push(url)
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
							// 				if (this.imgListyf.length > 0) {
							// 					this.imgListyfsim = this.imgListyf[0]
							// 				} else {
							// 					this.imgListyfsim = ''
							// 				}

						}
					}
				})
			},
			getnow() {
				let date = new Date()
				var year = date.getFullYear();
				var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
				var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
				var dateStr = year + "-" + month + "-" + day;
				let hours = date.getHours()
				let minutes = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()
				let seconds = date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds()
				let time = hours + ':' + minutes + ':' + seconds
				return dateStr + " " + time
			},
			async submit() {
				let that = this
				if (this.index == -1) {
					uni.showToast({
						title: '请选择帖子类型',
						icon: 'none',
						duration: 1500
					})
					return false
				}
				if (this.form.descstr == '') {
					uni.showToast({
						title: '请填写帖子标题',
						icon: 'none',
						duration: 1500
					})
					return false
				}
				if (this.form.detail == '') {
					uni.showToast({
						title: '请填写帖子内容',
						icon: 'none',
						duration: 1500
					})
					return false
				}
				let obj = deepCopy(this.form)
				obj.trans_pic = this.imgListyf.join(",")
				obj.datetime = this.getnow()
				obj.username = this.userinfo.userName
				obj.usericon = this.userinfo.trans_pic
				obj.userid = this.userinfo.id
				obj.typetext = this.picker[this.index].title
				obj.status = '待审核'
				obj.goodstatus = '是'

				uni.showLoading({
					title: '操作中'
				});
				let res = await new this.Request(this.Urls.m().addarticle, obj).modepost()
				// this.list = res
				uni.showToast({
					title: '操作成功',
					icon: 'success',
					duration: 1500
				})
				setTimeout(() => {
					// 返回上一页
					uni.navigateBack({
					    delta: 1 // 默认值是1，表示返回的页面层数
					});
				}, 1500)





			},

		}
	}
</script>

<style scoped>
	.submitbut {
		padding: 15px;
	}

	.titlesub {
		padding-right: 10px;
	}
</style>