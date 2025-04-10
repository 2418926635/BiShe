<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">详情</block>
		</cu-custom>
		<!-- 	<homecom class="homclass"></homecom> -->
		<view class="formcontent">
			<form>
				<!-- <view class="cu-form-group">
					<view class="title">状态</view>
					<picker @change="PickerChange" :value="index" :range="picker">
						<view class="picker">
							{{index>-1?picker[index]:'请选择'}}
						</view>
					</picker>
				</view> -->
				<view class="cu-form-group">
					<view class="title">美食标题</view>
					<input placeholder="美食标题" v-model="form.title" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title"><text class='cuIcon-title text-red'></text>口味特点</view>
				</view>
				<view class="cu-form-group">
					<view class="grid col-6">
						<view v-for="(item,index) in checkboxext" :key="index">
							<button class="cu-btn orange sm block" :class="item.checked?'bg-orange':'line-orange'"
								@tap="ChooseCheckboxext" :data-value="item.value"
								style="margin-right:10px;margin-top:3px;margin-bottom:10px;">
								{{item.name}}
							</button>
						</view>
					</view>
				</view>
				<view class="cu-bar bg-white" style="border-top: 0.5px solid #eee;">
					<view class="action">
						美食图片
					</view>
					<view class="action">
						{{imgListyf.length}}/9
					</view>
				</view>
				<view class="cu-form-group">
					<view class="grid col-4 grid-square flex-sub">
						<view class="bg-img" v-for="(item,index) in imgListyf" :key="index" @tap="ViewImageyf"
							:data-url="imgListyf[index]">
							<image :src="urllocal + imgListyf[index]" mode="aspectFill"></image>
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
					<view class="title">美食介绍</view>
					<textarea maxlength="-1" v-model="form.detail" placeholder=""></textarea>
				</view>
				<view class="cu-form-group">
					<view class="title">历史背景</view>
					<textarea maxlength="-1" v-model="form.detail2" placeholder=""></textarea>
				</view>
				<view class="cu-form-group">
					<view class="title">制作工艺</view>
					<textarea maxlength="-1" v-model="form.detail3" placeholder=""></textarea>
				</view>
				<view class="cu-form-group">
					<view class="title">口感特点</view>
					<textarea maxlength="-1" v-model="form.detail4" placeholder=""></textarea>
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
	// const urllocal = configData.httpUrl
	// import homecom from "@/components/homecom/homecom.vue"
	export default {
		onLoad(option) {
			this.userinfoObj = uni.getStorageSync('userinfo')
			this.type = option.type
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
				urllocal:configData.httpUrl,
				checkboxext: [{
					value: 0,
					name: '酸味',
					checked: false,
					hot: false
				}, {
					value: 1,
					name: '甜味',
					checked: false,
					hot: false
				}, {
					value: 2,
					name: '苦味',
					checked: false,
					hot: false
				}, {
					value: 3,
					name: '辣味',
					checked: false,
					hot: false
				}, {
					value: 4,
					name: '鲜味',
					checked: false,
					hot: false
				}, {
					value: 5,
					name: '麻辣',
					checked: false,
					hot: false
				}, {
					value: 6,
					name: '酸辣',
					checked: false,
					hot: false
				}, {
					value: 7,
					name: '香辣',
					checked: false,
					hot: false
				}],
				imgListyf: [],
				// imgListyfsim: '',
				imgList: [],
				userinfoObj: {},
				strObj: {},
				form: {
					title: '',
					detail: '',
					detail2: '',
					detail3: '',
					detail4: '',

				},
				type: '',
				id: '',
				str: '',
				index: -1,
				picker: ['正常', '关闭'],
			}
		},
		methods: {
			init() {},
			PickerChange(e) {
				this.index = e.detail.value
			},
			async query(id) {
				let that = this
				let obj = {
					id: id * 1
				}
				console.log(obj)
				let resdata = await new this.Request(this.Urls.m().queryannouncementbyid, obj).modepost()
				that.form = deepCopy(resdata[0])

				if (resdata[0].trans_pic.indexOf('^^^') > -1 || resdata[0].trans_pic) {
					that.imgListyf = resdata[0].trans_pic.split('^^^')
				}

				let tapstrArr = JSON.parse(resdata[0].tapstr)
				this.checkboxext = this.checkboxext.map((val, i) => {
					if (tapstrArr.includes(val.value)) {
						val.checked = true
					}
					return val
				})

			},
			ChooseCheckboxext(e) {
				let items = this.checkboxext;
				// items = items.map((val, i) => {
				// 	val.checked = false
				// 	return val
				// })
				let values = e.currentTarget.dataset.value;
				for (let i = 0, lenI = items.length; i < lenI; ++i) {
					if (items[i].value == values) {
						items[i].checked = !items[i].checked;
						break
					}
				}
			},
			validfun() {
				let flag = true
			},
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
							url: `${that.urllocal}api/uploadfile`, //仅为示例，非真实的接口地址
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
								let url = uploadFileRes.data
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
			getnowdate() {
				var nowDate = new Date();
				var year = nowDate.getFullYear();
				var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
				var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
				var dateStr = year + "-" + month + "-" + day;
				return dateStr;
			},
			getnowtime() {
				let date = new Date()
				let hours = date.getHours()
				let minutes = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()
				let seconds = date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds()
				let time = hours + ':' + minutes + ':' + seconds
				return time

			},
			gettostr(arr) {
				let result = []
				arr.forEach((val, i) => {
					if (val.checked) {
						result.push(val.value)
					}
				})
				if (result.length == 0) {
					return ''
				} else {
					return '[' + result.join(',') + ']'
				}

			},
			transpicurl(arr) {
				let arrsub = []
				arr.forEach(element => {
					arrsub.push(element.url)
				})
				return arrsub.join('^^^')
			},
			async submit() {
				let that = this
				let arrcity01 = this.gettostr(this.checkboxext)
				if (arrcity01.length == 0 || !arrcity01) {
					uni.showToast({
						title: '请选择岗位',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				if (this.type == 'add') {
					let obj = deepCopy(this.form)
					obj.trans_pic = this.imgListyf.join('^^^')
					obj.tapstr = this.gettostr(this.checkboxext)
					obj.datetime = this.getnowdate() + " " + this.getnowtime()
					obj.submitbody = this.userinfoObj.userName
					obj.status = 1 
					let resdata = await new this.Request(this.Urls.m().addannouncement, obj).modepost()
					if (resdata == 'success') {
						uni.showToast({
							title: '操作成功',
							icon: 'success',
							duration: 2000
						});
						setTimeout(() => {
							uni.navigateBack({
								delta: 1, //返回层数，2则上上页
							})
						}, 2000)
					}
				} else {
					let obj = deepCopy(this.form)
					obj.id = this.id
					obj.trans_pic = this.imgListyf.join('^^^')
					obj.tapstr = this.gettostr(this.checkboxext)
					obj.datetime = this.getnowdate() + " " + this.getnowtime()
					obj.submitbody = this.userinfoObj.userName
					let resdata = await new this.Request(this.Urls.m().updateannouncement, obj).modepost()
					if (resdata == 'ok') {
						uni.showToast({
							title: '操作成功',
							icon: 'success',
							duration: 2000
						});
						setTimeout(() => {
							uni.navigateBack({
								delta: 1, //返回层数，2则上上页
							})
						}, 2000)
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