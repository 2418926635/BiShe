<!-- 提交成功 -->
<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content"></block>
		</cu-custom>
		<view class="mainsub">
			<view class="padding-xs flex align-center">
				<view class="flex-sub text-center">
					<view class="text-xsl padding">
						<text class=" cuIcon-roundcheckfill text-green"></text>
					</view>
					<view class="textclass">答题完成(3s后返回)</view>
					<view class="thanks_titlesmall">
						<text class="thanks_titlesmallfu">分数:{{gradedata}}</text>
					</view>
					<view class="thanks_titlesmall">
						一共完成 <text class="thanks_titlesmallsub">{{totalcount}}</text> 道题
					</view>
					<view class="thanks_titlesmall">
						答错 <text class="thanks_titlesmallsubext">{{errcount}}</text> 道题
					</view>
				</view>

			</view>
		</view>
		<!-- <view class="cu-bar bg-white  margin-top solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>答题结果
			</view>
			<view class="action"></view>
		</view>
		<view class="questionlist">
			<view class="bg-white padding">
				<view class="grid margin-bottom text-center col-24">
					<view class="padding col-12" style="width: 20%;" :class="item.flag?'bg-red':'bg-green'"
						v-for="(item,i) in arrresult" :key="i">{{item.num}}</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.userinfo = JSON.parse(uni.getStorageSync('userinfo'))
			console.log(option)
			this.type = option.type
			this.belong = option.belong
			this.arrresult = JSON.parse(option.arrstr)
			console.log(this.arrresult)
			this.totalcount = option.totalcount
			this.errcount = option.errcount
			let totalnum = option.totalcount * 1
			let errnum = option.errcount * 1
			let grade = (totalnum - errnum) / totalnum
			console.log(totalnum, errnum, grade)
			this.gradedata = Math.trunc(grade * 100)
			//结果进行数据存贮
			this.savedata()
			this.getCode()

		},
		data() {
			return {
				belong: '',
				totalcount: '',
				errcount: '',
				type: "",
				showsend: true,
				count: '',
				timer: null,
				gradedata: 0,
				arrresult: []
			}
		},
		methods: {
			//倒计时函数
			getCode() {
				const TIME_COUNT = 3;
				if (!this.timer) {
					this.count = TIME_COUNT;
					this.showsend = false;
					this.timer = setInterval(() => {
						if (this.count > 0 && this.count <= TIME_COUNT) {
							this.count--;
						} else {
							this.showsend = true;
							clearInterval(this.timer);
							this.timer = null;
						}
					}, 1000)
				}
			},
			//数据存贮
			async savedata() {
				let msgobj = {
					userid: this.userinfo.id,
					userName: this.userinfo.userName,
					datetime: this.getnowdate() + " " + this.getnowtime(),
					typestr: this.belong,
					result: JSON.stringify(this.arrresult)
				}
				let resdata = await new this.Request(this.Urls.m().saveresult, msgobj).modepost()
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

			}

		},
		watch: {
			count(val) {
				if (val == 0) {
					//跳转至主页面
					uni.switchTab({
						url: '/pages/index/index'
					});
				}
			},
		}
	}
</script>

<style scoped>
	.text-xsl {
		font-size: 150px;
	}

	.mainsub {
		margin-top: 20%;
	}

	.textclass {
		margin-top: 5px;
		font-weight: 600;
		font-size: 1.2em;
	}

	.thanks_titlesmall {
		margin-top: 2%;
		font-size: 1em;
	}


	.thanks_titlesmallfu {
		font-size: 2.2em;
		color: orange;
		font-weight: bold;
	}


	.thanks_titlesmallsub {
		font-size: 1.2em;
		color: #39b54a;
		font-weight: bold;
	}

	.thanks_titlesmallsubext {
		font-size: 1.2em;
		color: #ff0000;
		font-weight: bold;
	}
</style>