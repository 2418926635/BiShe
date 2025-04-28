<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">留言反馈</block>
		</cu-custom>
		<!-- 	<homecom class="homclass"></homecom> -->
		<view class="formcontent">
			<form>
				<view class="cu-form-group">
					<view class="title">标题</view>
					<input placeholder="标题" v-model="form.title" name="input"></input>
				</view>
				<view class="cu-bar bg-white margin-top" style="border-top: 0.5px solid #eee;">
					<view class="action">
						图片
					</view>
					<view class="action">
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
				</view>

				<view class="cu-form-group">
					<view class="title">描述</view>
					<textarea maxlength="-1" v-model="form.detail" placeholder=""></textarea>
				</view>
			</form>
			<view class="margin-top submitbut">
				<button class="cu-btn block bg-gradual-green margin-tb-sm lg" @click="submit">提交</button>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../api/api.js'
	import {
		deepCopy
	} from '../../utils/expressfun.js'
	import configData from '@/config/index.js' 
	const urllocal = configData.httpUrl
	// import homecom from "@/components/homecom/homecom.vue"
	export default {
		onLoad(option) {
			this.userinfo = uni.getStorageSync('userinfo')

		},
		mounted() {
			this.init()
		},
		data() {
			return {
				userinfo: {},
				imgListyf: [],
				imgListyfsim: '',
				imgList: [],
				imagestrArr: [], //图片地址集合
				strObj: {},
				form: {},
				type: '',
				id: '',
				str: '',
				index: -1,
				picker: ['社区反馈', '系统反馈'],
			}
		},
		methods: {
			init() {},
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

			validfun() {
				let flag = true
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			async submit() {
				let that = this
				let obj = {
					trans_pic: this.imgListyf.join(","),
					// typestr: this.picker[this.index],
					typetext: "留言",
					title: this.form.title,
					detail: this.form.detail,
					submitbody: this.userinfo.userName,
					datetime:this.getnowdate() + " " + this.getnowtime()
				}
				let resdata = await new this.Request(this.Urls.m().insertsubmitdata, obj).modepost()
				if (resdata == 'success') {
					uni.showToast({
						title: '提交成功',
						icon: 'success',
						duration: 2000
					});
					setTimeout(() => {
						uni.switchTab({
							url: '/pages/index/index'
						});
					}, 2000)
				}

			},
			 getnowdate(){
			        var nowDate = new Date();
			        var year = nowDate.getFullYear();
			        var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1): nowDate.getMonth() + 1;
			        var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
			        var dateStr = year + "-" + month + "-" + day;
			        return dateStr;
			    },
			
			 getnowtime(){
			          let date = new Date()
			          let hours = date.getHours()
			          let minutes = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()
			          let seconds = date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds()
			          let time =hours + ':' + minutes + ':' + seconds
			          return time
			        
			    }

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