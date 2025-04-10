<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">组团详情</block>
		</cu-custom>
		<!-- 	<homecom class="homclass"></homecom> -->
		<view class="formcontent">
			<form>
				<!-- <view class="cu-form-group">
					<view class="title">类型</view>
					<picker @change="PickerChange" :value="index" :range="picker">
						<view class="picker">
							{{index>-1?picker[index]:'请选择'}}
						</view>
					</picker>
				</view> -->
				<view class="cu-form-group">
					<view class="title">标题</view>
					<input placeholder="标题" v-model="form.projectname" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">报名人数</view>
					<input placeholder="报名人数" v-model="form.renshu" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">预算</view>
					<input placeholder="预算" v-model="form.yusuan" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">截止日期</view>
					<picker mode="date" :value="activitydate" start="2023-05-01" end="2025-09-01" @change="DateChange">
						<view class="picker">
							{{activitydate}}
						</view>
					</picker>
				</view>
				<!-- 				<view class="cu-form-group">
					<view class="title"></view>
					<input placeholder="说明" v-model="form.title2" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">价格</view>
					<input placeholder="价格" v-model="form.price" name="input"></input>
				</view> -->

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
				<!-- <view class="cu-form-group">
					<view class="title">关键词</view>
					<textarea maxlength="-1" v-model="form.keywordstr" placeholder=""></textarea>
				</view> -->
				<view class="cu-form-group">
					<view class="title">介绍</view>
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
	// 请求地址
	import configData from '@/config/index.js' 
	const urllocal = configData.httpUrl
	// import homecom from "@/components/homecom/homecom.vue"
	export default {
		onLoad(option) {
			this.type = option.type
			this.userinfo = uni.getStorageSync('userinfo')
			if (option.type == 'updata') {
				this.id = option.id
				this.query(this.id)
			}

		},
		mounted() {
			this.init()
		},
		data() {
			return {
				activitydate: '2025-06-01',
				userinfo:{},
				imgListyf: [],
				imgListyfsim: '',
				imgList: [],
				imagestrArr: [], //图片地址集合
				strObj: {},
				form: {
					projectname: '',
					keywordstr: '',
					detail: '',
					renshu:'',
					yusuan:''
				},
				type: '',
				id: '',
				str: '',
				index: -1,
				picker: ['水果', '食材', '零食', '牛奶', '蔬菜'],
			}
		},
		methods: {
			init() {},
			DateChange(e) {
				this.activitydate = e.detail.value
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
			async query(id) {
				let that = this
				let obj = {
					id: id
				}
				let resdata = await new this.Request(this.Urls.m().queryactivitybyid, obj).modepost()
				that.form = deepCopy(resdata[0])
				that.activitydate = that.form.activitydate
				that.imgListyf = that.form.img.split(',')
				that.index = that.picker.findIndex((v, i) => {
					return v == that.form.name
				})

			},
			validfun() {
				let flag = true
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			async submit() {
				let that = this
				if (this.type == 'add') {
					let obj = deepCopy(this.form)
					obj.img = this.imgListyf.join(",")
					obj.status = '已审核'
					obj.parentid = that.userinfo.id
					obj.activitydate = that.activitydate
					
					// obj.name = this.picker[this.index]
					// obj.num = '0'
					// obj.shopid = '1'
					let resdata = await new this.Request(this.Urls.m().insertactivity, obj).modepost()
					if (resdata == 'success') {
						uni.showToast({
							title: '操作成功',
							icon: 'success',
							duration: 1500
						});
						setTimeout(()=>{
							// 返回上一页
							uni.navigateBack({
							    delta: 1 // 默认值是1，表示返回的页面层数
							});
						},1500)
					}
				} else {
					let obj = deepCopy(this.form)
					obj.img = this.imgListyf.join(",")
					obj.status = '已审核'
					obj.activitydate = that.activitydate
					obj.id = this.id
					obj.parentid = that.userinfo.id
					let resdata = await new this.Request(this.Urls.m().updataactivity, obj).modepost()
					if (resdata == 'success') {
						uni.showToast({
							title: '操作成功',
							icon: 'success',
							duration: 1500
						});
						setTimeout(()=>{
							// 返回上一页
							uni.navigateBack({
							    delta: 1 // 默认值是1，表示返回的页面层数
							});
						},1500)
					}
				}
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