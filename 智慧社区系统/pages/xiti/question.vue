<template>
	<view>
		<cu-custom bgColor="whilt" :isBack="true">
			<block slot="content"></block>
		</cu-custom>
		<view id="top-box" class="cu-bar bg-white solid-bottom">
			<view class="action text-black">
				<text v-if="currentType=='3'">判断题</text>
				<text v-if="currentType=='1'">单选题</text>
				<text v-if="currentType=='2'">多选题</text>
				<text v-if="currentType=='4'">解答题</text>
			</view>
			<view class="action">
			<!-- 	<button class="cu-btn bg-green shadow">{{count}}</button> -->
				<!-- <button class="cu-btn bg-green shadow" style="margin-right: 10px;">{{count}}</button> -->
				<button class="cu-btn bg-orange shadow" @tap="showCardModal" data-target="modalCard">题卡</button>
			</view>
		</view>
		<view class="cu-modal" :class="modalCard=='modalCard'?'show':''" @tap="hideCardModal">
			<view class="cu-dialog" @tap.stop>

				<scroll-view class="page padding" :scroll-y=true :style="{'height':swiperHeight}">
					<view class="cu-bar solid-bottom">
						<view class="action">
							<text class="cuIcon-title text-red"></text>答题卡
						</view>
					</view>
					<view class="grid col-5 ">
						<view class="margin-tb-sm text-center" v-for="(subject,index) in subjectList" :key="index">
							<button class="cu-btn round" :class="[subject.userAnswer.length===0?'line-grey':'bg-red']"
								@click="AppointedSubject(index)">{{index+1}}</button>
						</view>
					</view>

				</scroll-view>
			</view>
		</view>
		<view class="cu-modal padding " :class="modalError=='modalError'?'show':''" @tap="hideErrorModal">
			<view class="cu-dialog bg-white" @tap.stop>

				<view class="cu-bar solid-bottom ">
					<view class="action">
						<text class="cuIcon-title text-red"></text>试题纠错
					</view>
				</view>

				<radio-group class="block">
					<view class="cu-list menu text-left">
						<view class="cu-item cu-item-error" v-for="error in errorList">
							<radio :value="error"></radio>
							<view class="title text-black margin-left">{{error}}</view>
						</view>
					</view>
				</radio-group>

				<view class="padding flex flex-direction ">
					<button class="cu-btn bg-red margin-tb-sm lg" @click="SubmitError">提 交</button>
				</view>
			</view>
		</view>
		<form>
			<swiper :current="subjectIndex" class="swiper-box" @change="SwiperChange" :style="{'height':swiperHeight}">
				<swiper-item v-for="(subject,index) in subjectList">

					<view v-if="index-subjectIndex>=-1&&index-subjectIndex<=1">

						<view class="cu-bar bg-white solid-bottom">
							<view class="action text-black textclass">
								<text class="cuIcon-title text-red"></text>{{subject.title}}
							</view>
						</view>
						<view>

							<radio-group class="block" @change="RadioboxChange"
								v-if="subject.type==='1'||subject.type==='3'">
								<view class="cu-form-group" v-for="option in subject.optionList">
									<radio :value="option.id"
										:checked="subject.userAnswer.indexOf(option.id) > -1?true:false"></radio>
									<view class="title text-black">{{option.id}}.{{option.content}}</view>
								</view>
							</radio-group>

							<checkbox-group class="block" @change="CheckboxChange" v-else-if="subject.type==='2'">
								<view class="cu-form-group" v-for="option in subject.optionList">
									<checkbox :value="option.id"
										:class="subject.userAnswer.indexOf(option.id) > -1?'checked':''"
										:checked="subject.userAnswer.indexOf(option.id) > -1?true:false"></checkbox>
									<view class="title  text-black">{{option.id}}.{{option.content}}</view>
								</view>
							</checkbox-group>

							<view v-else-if="subject.type==='4'">
								<view class="cu-form-group solid-bottom">
									<view class="title  text-black">
										答：
									</view>
									<textarea class="textarea"v-model="subject.userAnswer" style="height: 8.6em;"></textarea>
						<!-- 			<input placeholder="文本输入框" name="input" v-model="subject.userAnswer"
										@blur="textInput"></input> -->
								</view>
							</view>

							<!-- <view v-else-if="subject.type===5">
								<view class="cu-bar cu-bar-title bg-white margin-top">
									<view class="action  text-black">
										答：
									</view>
								</view>
								<view class="cu-form-group solid margin">
									<textarea maxlength="-1" @blur="textInput" v-model="subject.userAnswer"
										placeholder="多行文本输入框"></textarea>
								</view>
							</view> -->

						</view>

						<view v-show="subject.showAnswer" class="margin-top solid-top">
							<view class="cu-bar">
								<view class="action  text-grey">
									<text>正确答案：</text>
									<text style="white-space: pre-wrap;" class="solid-bottom  padding-left text-green">{{subject.tmzqda}}</text>
								</view>
							</view>
							<!-- <view class="cu-bar cu-bar-title">
								<view class="action  text-grey">
									<text>解析：</text>
								</view>
							</view>
							<view class="text-content padding  text-grey">
								{{subject.explain}}
							</view> -->
						</view>

					</view>
				</swiper-item>
			</swiper>
			<!-- <div class="showbut" v-if="showbut">
				<button style="width: 80%;" class="cu-btn block line-green margin-tb-sm lg"
					@click="submitresult">提交</button>
			</div> -->
		<!-- 	<div class="showbut">
				<button style="width: 80%;" class="cu-btn block line-green margin-tb-sm lg"
					@click="submitresult">提交</button>
			</div> -->
		</form>

		<view id="foot-box" v-if="outbj" class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="MoveSubject(-1)">
				<view class="cuIcon-cu-image">
					<text class="lg cuIcon-back text-gray"></text>
				</view>
				<view class="text-gray">上一题</view>
			</view>
			<view class="action" @click="MoveSubject(1)">
				<view class="cuIcon-cu-image">
					<text class="lg text-gray cuIcon-right"></text>
				</view>
				<view class="text-gray">下一题</view>
			</view>
			<view class="action" @click="FavorSubject">
				<view class="cuIcon-cu-image">
					<text class="lg cuIcon-favor" :class="[userFavor?'text-red':'text-gray']"></text>
				</view>
				<view  :class="[userFavor?'text-red':'text-gray']">收藏</view>
			</view>
			
			<view class="action" @click="ShowAnswerChange">
				<view class="cuIcon-cu-image">
					<text class="lg text-gray cuIcon-question"></text>
				</view>
				<view class="text-gray">解答</view>
			</view>

			<!-- 			<view class="action" @click="FavorSubject">
				<view class="cuIcon-cu-image">
					<text class="lg cuIcon-favor" :class="[userFavor?'text-red':'text-gray']"></text>
				</view>
				<view  :class="[userFavor?'text-red':'text-gray']">收藏</view>
			</view>

			<view class="action" @click="ShowAnswerChange">
				<view class="cuIcon-cu-image">
					<text class="lg text-gray cuIcon-question"></text>
				</view>
				<view class="text-gray">解答</view>
			</view>
			<view class="action" @tap="showErrorModal"  data-target="modalError">
				<view class="cuIcon-cu-image">
					<text class="lg text-gray cuIcon-warn"></text>
				</view>
				<view class="text-gray">纠错</view>
			</view> -->

		</view>

	</view>
</template>

<script>
	import {
		getnumberda
	} from '@/utils/rules.js'
	import {
		deepCopy
	} from '@/utils/expressfun.js'
	export default {
		mounted() {
			this.Time() //调用定时器
		},
		data() {
			return {
				userinfo:{},
				belong:'',
				timeval: null,
				count: '', //倒计时
				seconds: 2700, // 10天的秒数
				outbj: true,
				showbut: false, //显示最后的提交按钮
				userFavor: false, //是否已收藏
				currentType: 0, //当前题型
				subjectIndex: 0, //跳转索引
				autoShowAnswer: false, //答错是否显答案
				autoRadioNext: true, //判断题、单项题，自动移下一题
				swiperHeight: '800px', //
				title: '考试系统',
				subjectList: [],
				modalCard: null, //显示答题卡
				modalError: null, //纠错卡
				errorList: ['题目不完整', '答案不正确', '含有错别字', '图片不存在', '解析不完整', '其他错误']
			}
		},
		onReady() {

			var tempHeight = 800;
			var _me = this;
			uni.getSystemInfo({
				//获取手机屏幕高度信息，让swiper的高度和手机屏幕一样高                
				success: function(res) {
					// console.log(res.model);                    
					// console.log(res.pixelRatio);                    
					// console.log(res.windowWidth);                    
					// console.log(res.windowHeight);
					// //这里是手机屏幕高度                    
					// console.log(res.language);                    
					// console.log(res.version);                    
					// console.log(res.platform);                    
					tempHeight = res.windowHeight;
					// console.log("屏幕可用高度 " + tempHeight);

					uni.createSelectorQuery().select("#top-box").fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						tempHeight -= data.height;
						console.log("减掉顶部后的高度 " + tempHeight);

						uni.createSelectorQuery().select("#foot-box").fields({
							size: true,
							scrollOffset: true
						}, (data) => {
							tempHeight -= data.height;
							console.log("减掉底部后的高度 " + tempHeight);
							_me.swiperHeight = tempHeight + 'px';
							console.log("滑屏最后高度 " + _me.swiperHeight);
						}).exec();

					}).exec();
				}
			});

		},
		onLoad(options) {
			this.userinfo = uni.getStorageSync('userinfo')
			this.belong = options.belong
			this.getquestion(options.belong)


		},
		methods: {
			countDown() {
				let d = parseInt(this.seconds / (24 * 60 * 60))
				d = d < 10 ? "0" + d : d
				let h = parseInt(this.seconds / (60 * 60) % 24);
				h = h < 10 ? "0" + h : h
				let m = parseInt(this.seconds / 60 % 60);
				m = m < 10 ? "0" + m : m
				let s = parseInt(this.seconds % 60);
				s = s < 10 ? "0" + s : s
				//this.count = d + '天' + h + '时' + m + '分' + s + '秒'
				this.count = m + '分' + s + '秒'

			//定时器没过1秒参数减1
			Time() {
				if (this.seconds > 0) {
					this.timeval = setInterval(() => {
						this.seconds -= 1
						this.countDown()
					}, 1000)
				}

			},
			async getquestion(val) {
				let msgobj = {
					belong: val
				}
				let resdata = await new this.Request(this.Urls.m().getquestionbyclass, msgobj).modepost()
				//生成随机数(0-100抽选)
				resdata.sort(() => {
					return 0.5 - Math.random()
				});
				
				resdata = resdata.slice(0,100)
				console.log(resdata)
				resdata.sort((a,b)=>{
				    return a.tmlx < b.tmlx ? 1 : -1
				});
				//题目类型排序
				resdata.sort((a,b)=>{
				    return a.tmlx > b.tmlx ? 1 : -1
				});

				this.subjectList = resdata.map((val, i) => {
					val.title = val.tmnr
					val.type = val.tmlx
					val.answer = val.tmzqda
					val.userAnswer = ""
					val.userFavor = false
					val.explain = ""
					let arr = []
					if (val.tmda1 != '') {
						arr.push({
							id: "A",
							content: val.tmda1
						})
					}
					if (val.tmda2 != '') {
						arr.push({
							id: "B",
							content: val.tmda2
						})
					}
					if (val.tmda3 != '') {
						arr.push({
							id: "C",
							content: val.tmda3
						})
					}
					if (val.tmda4 != '') {
						arr.push({
							id: "D",
							content: val.tmda4
						})
					}
					if (val.tmda5 != '') {
						arr.push({
							id: "E",
							content: val.tmda5
						})
					}
					if (val.tmda6 != '') {
						arr.push({
							id: "F",
							content: val.tmda6
						})
					}
					val.optionList = arr
					return val
				})
				this.currentType = this.subjectList[0].type;
				uni.setNavigationBarTitle({
					title: this.title
				});

				//添加用户显示答案字段
				for (var i = 0; i < this.subjectList.length; i++) {
					this.$set(this.subjectList[i], "showAnswer", false);
				}
			},
			showCardModal: function(e) {
				this.modalCard = e.currentTarget.dataset.target
			},
			hideCardModal: function(e) {
				this.modalCard = null
			},
			showErrorModal: function(e) {
				this.modalError = e.currentTarget.dataset.target
			},
			hideErrorModal: function(e) {
				this.modalError = null
			},
			SwiperChange: function(e) { //滑动事件

				let index = e.target.current;

				if (index != undefined) {
					this.subjectIndex = index;
					this.currentType = this.subjectList[index].type;
					this.userFavor = this.subjectList[index].userFavor;
				}
			},
			RadioboxChange: function(e) { //单选选中

				var items = this.subjectList[this.subjectIndex].optionList;
				var values = e.detail.value;
				this.subjectList[this.subjectIndex].userAnswer = values;
				// if (this.autoRadioNext && this.subjectIndex < this.subjectList.length - 1) {
				// 	this.subjectIndex += 1;
				// };

			},
			CheckboxChange: function(e) { //复选选中

				var items = this.subjectList[this.subjectIndex].optionList;
				var values = e.detail.value;
				this.subjectList[this.subjectIndex].userAnswer = "";
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
						if (items[i].id == values[j]) {

							this.subjectList[this.subjectIndex].userAnswer += items[i].id;
							break
						}
					}
				}
			},
			textInput: function(e) { //填空题

				this.subjectList[this.subjectIndex].userAnswer = e.detail.value;

			},
			ShowAnswerChange: function(e) { //显示答案

				if (this.subjectList[this.subjectIndex].showAnswer) {
					this.subjectList[this.subjectIndex].showAnswer = false;
				} else {

					this.subjectList[this.subjectIndex].showAnswer = true;
				}
			},

			 FavorSubject: async function(e) { //收藏题

				if (this.userFavor) {
					this.userFavor = false;
					this.subjectList[this.subjectIndex].userFavor = false;
					//取消收藏
					console.log(this.subjectList[this.subjectIndex].id)
					let msgobj = {
						userid: this.userinfo.id,
						datetime: this.getnowdate() + " " + this.getnowtime(),
						questionid: this.subjectList[this.subjectIndex].id
					}
					let resdata = await new this.Request(this.Urls.m().removecollection, msgobj).modepost()
				} else {
					this.userFavor = true;
					this.subjectList[this.subjectIndex].userFavor = true;
					//收藏
					console.log(this.subjectList[this.subjectIndex].id)
					let msgobj = {
						userid: this.userinfo.id,
						datetime: this.getnowdate() + " " + this.getnowtime(),
						questionid: this.subjectList[this.subjectIndex].id
					}
					let resdata = await new this.Request(this.Urls.m().insertcollection, msgobj).modepost()
				}
				
				
			},

			MoveSubject: function(e) { //上一题、下一题

				//点击上一题触发
				if (e === -1 && this.subjectIndex != 0) {
					this.subjectIndex -= 1;
					this.showbut = false
				}
				//点击下一题触发
				if (e === 1 && this.subjectIndex < this.subjectList.length - 1) {
					this.subjectIndex += 1;
					this.showbut = false
					let i = this.subjectIndex
					// console.log(this.subjectList[i-1])

					//tmzqdatext:"D"
					//userAnswer:"B"

					if (this.subjectList[i - 1].tmzqdatext != this.subjectList[i - 1].userAnswer) {
						this.counterr01 = this.counterr01 + 1
					}
					if (this.counterr01 == 11) {
						// this.outbj = false
						uni.showModal({
							title: '提示',
							content: '您已答错10道题',
							showCancel: false,
							success: function(res) {
								if (res.confirm) {
									console.log('用户点击确定');
									// uni.navigateTo({
									// 	url: `../login/login`
									// });
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});

					}
					console.log(this.counterr01)

					//这里需要判断是否打错

				}
				if (this.subjectIndex === this.subjectList.length - 1) {
					//显示出提交按钮
					this.showbut = true
				}

			},

			AppointedSubject: function(e) { //题卡指定

				this.modalCard = null;
				this.subjectIndex = e;
			},

			SubmitError: function(e) { //提交纠错

				this.modalError = null;
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
			async reasubmit() {
				let that = this
				//拿到错题数组
				let arrerr = that.subjectList.filter((val, i) => {
					return val.userAnswer !== val.tmzqdatext
				})
				console.log(that.subjectList, arrerr)
				let alltiku = deepCopy(that.subjectList)
				let errtiku = deepCopy(arrerr)
				let arrsub = []
				for (let i = 0; i < alltiku.length; i++) {
					let num = i + 1
					let flag = false
					let id = alltiku[i].id
					for (let j = 0; j < errtiku.length; j++) {
						if (id == errtiku[j].id) {
							flag = true
						}
					}
					let obj = {
						num,
						flag
					}

					arrsub.push(obj)

				}
				let arrstr = JSON.stringify(arrsub)
				// //将错题存入数据库
				// let resdata = await new that.Request(that.Urls.m().saveerrorques, arrerr).modepost()
				// console.log(resdata)
				let totalcount = that.subjectList.length || 0
				let errcount = arrerr.length || 0

				uni.navigateTo({
					url: `./success?totalcount=${totalcount}&errcount=${errcount}&arrstr=${arrstr}&belong=${this.belong}`
				});
			},
			async submitresult() {
				let that = this
				let arrflag = []
				arrflag = that.subjectList.filter((val, i) => {
					return val.userAnswer == ''
				})
				if (arrflag.length > 0) {
					uni.showModal({
						title: '提示',
						content: '您的题目没有做完，请确定是否提交',
						showCancel: true,
						success: async function(res) {
							if (res.confirm) {
								that.reasubmit()

							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				} else {
					that.reasubmit()
				}



			}

		}
	}
</script>

<style>
	@import "@/colorui/animation.css";

	page {
		background-color: #FFFFFF;
	}

	.cu-form-group {
		justify-content: flex-start;
		/* 		min-height: 100px !important; */
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.cu-form-group .title {
		padding-left: 30upx;
		padding-right: 0upx;
		/* 		height: 20px !important;
		line-height: 20px !important; */
	}



	.cu-form-group+.cu-form-group {
		border-top: none;
	}

	.cu-bar-title {
		min-height: 50upx;
	}

	.cu-list.menu>.cu-item-error {
		justify-content: flex-start;
	}

	.showbut {
		width: 100%;
		position: absolute;
		bottom: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* 	.textclass{
		padding: 15px;
	} */
</style>