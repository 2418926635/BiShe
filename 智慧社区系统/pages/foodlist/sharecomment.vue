<template>
	<view style="background-color: #ffffff;min-height: 100vh;">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">详情</block>
		</cu-custom>
<!-- 		<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			:autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover"
					v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper> -->
		<!-- 		
		<view style="width: 100%;display: flex;justify-content: center;">
			<img :src="trans_pic" width="100%" height="400rpx">
		</view> -->
		<view class="foot">


		</view>
		<view class="text-content">
			<view class="bigtitle">
				<div style="font-size: 1.2em;">
					{{title}}
				</div>
				
			</view>

			<view class="content-detail" style="line-height: 3em;">
				<text> {{fabutime}}</text>
			</view>
			<view class="content-detail"  style="line-height: 3em;">
				
				<image class="cu-avatar round" :src="usericon"></image> <text style="font-size: 1.2em;"> {{zuozhe}}</text>
				<text @click="cancelguanzhu" class="cu-tag bg-green round margin-left-sm"  v-if="guanzhuflag" style="font-size: 0.9em;position: absolute;right: 30rpx;">
					已关注</text>
				<text @click="addguanzhu" class="cu-tag bg-red round  margin-left-sm" style="font-size: 0.9em;position: absolute;right: 30rpx;" v-else>关注</text>
			</view>
			<view class="content-detail">
				{{detail}}
			</view>
		</view>




		<modal v-if="areaShow" title="回复评论" confirm-text="保存" cancel-text="取消" @cancel="cancelAdd"
			@confirm="confirmAdd">
			<input type="text" v-model="formvisi.content" :placeholder="placeholdercontent" class="intxt"
				maxlength="100" />
		</modal>

		<!-- 
		        @param: commentList展示的评论列表数据
		        @method: clickPraise 点赞评论
		        @method: clickDelete 删除父级评论
		        @method: clickRecommentChild 点赞子评论
		        @method: clickDeleteChild 删除子评论
		         -->
		<five-mul-commentlist :commentList="commentList" @clickPraise="clickPraiseComment"
			@clickDelete="clickDeleteComment" @clickDeleteChild="clickDeleteCommentChild"
			@clickRecomment="clickRecomment" @clickRecommentChild="clickRecommentChild"></five-mul-commentlist>
		<view style="width: 100%;height: 50rpx;"></view>
		<view class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]">

			<!-- <view class="action">
				<text class="cuIcon-sound text-grey"></text>
			</view> -->
			<input placeholder="说点什么." class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"
				@focus="InputFocus" @blur="InputBlur" v-model="textarea" @confirm="submitfun"></input>

			<!-- <button class="cu-btn bg-green shadow" @tap="submitfun">发送</button> -->
			
			<view style="width: 50%;display: flex;justify-content: space-evenly;align-items: center;font-size: 1.5em;">
				<div v-if="myshoucangnum == 0" class="smallbut">
					<text @click="operationfun('1','收藏')" class="cuIcon-favor"
						style="color: gray;font-size: 1em;"></text>
					<text>{{shoucangnum}}</text>
				</div>
				<div v-else class="smallbut">
					<text @click="operationfun('2','收藏')" class="cuIcon-favorfill"
						style="color: red;font-size: 1em;"></text>
					<text>{{shoucangnum}}</text>
				</div>
				
				<div v-if="mydiancainum == 0" class="smallbut" style="display: flex;">
					<div style="transform: rotate(180deg);">
						<text @click="operationfun('1','点踩')" class="cuIcon-appreciatefill"
							style="color: gray;font-size: 1em;"></text>
					</div>
					<text>{{diancainum}}</text>
				</div>
				
				
				
				<div v-else style="display: flex;" class="smallbut">
					<div style="transform: rotate(180deg);">
						<text @click="operationfun('2','点踩')" class="cuIcon-appreciatefill red"
							style="color: red;font-size: 1em;"></text>
					</div>
					<text>{{diancainum}}</text>
				</div>
				
				
				<div v-if="mydiancannum == 0" class="smallbut">
					<text @click="operationfun('1','点赞')" class="cuIcon-appreciatefill"
						style="color: gray;font-size: 1em;"></text>
					<text>{{diancannum}}</text>
				</div>
				<div v-else class="smallbut">
					<text @click="operationfun('2','点赞')" class="cuIcon-appreciatefill red"
						style="color: red;font-size: 1em;"></text>
					<text>{{diancannum}}</text>
				</div>
			</view>
		</view>

	</view>
</template>

<script>
	import configData from '@/config/index.js'
	let urllocal = configData.httpUrlupload
	export default {
		onLoad(options) {
			try {
				this.userinfo = uni.getStorageSync('userinfo')
			} catch (e) {
				this.userinfo = ""
			}
			this.id = options.id

		},
		created() {

		},
		onShow() {
			this.queryart()
			this.querychatfun()

		},
		data() {
			return {
				guanzhuflag: false,
				bozhuid: '',
				fabutime: '',
				zuozhe: '',
				usericon:'',
				goodid: '',
				gooddesc: '',
				shopid: '',
				shopname: '',
				diancannum: 0,
				diancainum: 0,
				shoucangnum: 0,
				mydiancannum: 0,
				mydiancainum: 0,
				myshoucangnum: 0,
				isshoucang: true,
				isdianzan: true,
				iscaizan: true,
				textarea: '',
				formvisi: {
					content: ''
				},
				areaShow: false,
				areaTxt: '',
				InputBottom: 0,
				userinfo: {},
				title: '',
				detail: '',
				trans_pic: '',
				id: '',
				recevobj: '',
				commentList: [],
				placeholdercontent: '',
				TabCur: 0,
				scrollLeft: 0,
				cardCur: 0,
				form: {},
				swiperList: [],
				dotStyle: false,
				towerStart: 0,
			}
		},
		methods: {
			async showguanzhu() {
				let msgobj = {
					fansuserid: this.userinfo.id,
					userid: this.bozhuid,
				}
				let res = await new this.Request(this.Urls.m().querysfgz, msgobj).modepost()
				if (Array.isArray(res) && res.length > 0) {
					this.guanzhuflag = true
				} else {
					this.guanzhuflag = false
				}
			},
			async cancelguanzhu() {
				let msgobj = {
					fansuserid: this.userinfo.id,
					userid: this.bozhuid,
				}
				let res = await new this.Request(this.Urls.m().deletefans, msgobj).modepost()
				this.showguanzhu()
			},
			async addguanzhu() {
				let msgobj = {
					fansuserid: this.userinfo.id,
					userid: this.bozhuid,
				}
				let res = await new this.Request(this.Urls.m().addfans, msgobj).modepost()
				this.showguanzhu()
			},

			async queryart() {
				let msgobj = {
					id: this.id,
				}
				let res = await new this.Request(this.Urls.m().queryarticlebyid, msgobj).modepost()
				let obj = res[0]
				let resarr = obj.trans_pic.split(',')
				for (let i = 0; i < resarr.length; i++) {
					let objsub = {
						url: resarr[i],
						type: 'image'
					}
					this.swiperList.push(objsub)
				}

				this.title = obj.descstr
				this.detail = obj.detail
				this.shopid = this.id
				this.shopname = obj.descstr
				this.zuozhe = obj.username
				this.usericon = obj.usericon
				this.fabutime = obj.datetime
				this.bozhuid = obj.userid
				this.querystatus()
				this.showguanzhu()

			},

			gourl() {
				uni.navigateTo({
					url: `../index/detail?id=${this.goodid}`
				});
			},

			// //查询收藏点赞数据
			async querystatus() {
				let that = this
				let msgobj = {
					shopid: this.shopid,
					userid: this.userinfo.id
				}
				uni.showLoading({
					title: '加载中'
				});

				let result = await new this.Request(this.Urls.m().selectpingjia, msgobj).modepost()
				this.diancannum = result[0].diancannum
				this.diancainum = result[0].diancainum
				this.shoucangnum = result[0].shoucangnum
				this.mydiancannum = result[0].mydiancannum
				this.mydiancainum = result[0].mydiancainum
				this.myshoucangnum = result[0].myshoucangnum
				this.diancannum = result[0].diancannum
				// let dianzanarr = arr.filter((v, i) => {
				// 	return v.type == '点赞'
				// })
				// let shoucangarr = arr.filter((v, i) => {
				// 	return v.type == '收藏'
				// })
				// if (dianzanarr.length > 0) {
				// 	that.isdianzan = false
				// } else {
				// 	that.isdianzan = true
				// }

				// if (shoucangarr.length > 0) {
				// 	that.isshoucang = false
				// } else {
				// 	that.isshoucang = true
				// }
			},
			//分享
			sharefun() {},
			// //收藏
			async operationfun(val, typestr) {
				let that = this
				let datetime = this.getnowdate() + " " + this.getnowtime()
				//收藏
				if (val == '1') {
					uni.showLoading({
						title: '加载中'
					});
					let msgobj = {
						userid: this.userinfo.id,
						shopid: this.shopid,
						shopname: this.shopname,
						datetime: datetime,
						type: typestr
					}
					let res = await new this.Request(this.Urls.m().addapprase, msgobj).modepost()
					if (res == 'ok') {
						that.querystatus()
						uni.showToast({
							title: '操作成功',
							icon: 'success',
							duration: 1500
						});
					} else {
						uni.showToast({
							title: '操作失败',
							icon: 'none',
							duration: 1500
						});
						return false
					}

				} else {
					uni.showLoading({
						title: '加载中'
					});
					//删除收藏
					let msgobj = {
						userid: this.userinfo.id,
						shopid: this.shopid,
						type: typestr
					}


					let res = await new this.Request(this.Urls.m().deleteiscunzai, msgobj).modepost()
					if (res == 'ok') {
						that.querystatus()
						uni.showToast({
							title: '取消成功',
							icon: 'success',
							duration: 1500
						});
					} else {
						uni.showToast({
							title: '取消失败',
							icon: 'none',
							duration: 1500
						});
						return false
					}

				}
				//
			},

			//分享到朋友圈
			cancelAdd() {
				this.areaShow = false
			},
			confirmAdd() {

				this.submitsubfun()
				this.areaShow = false
			},

			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			async querychatfun() {
				let objext = {
					annid: this.id
				}
				uni.showLoading({
					title: '操作中'
				});
				let res = await new this.Request(this.Urls.m().querychatart, objext).modepost()
				let parentarr = []
				res.forEach(element => {
					if (element.PARENTID == 0) {
						parentarr.push(element)
					}
				});
				parentarr = parentarr.map((val, i) => {
					val.CHILD_ANWSER_LIST = []
					val.CANDELETE = 1
					return val
				})
				for (let i = 0; i < parentarr.length; i++) {
					for (let j = 0; j < res.length; j++) {
						if (parentarr[i].id == res[j].PARENTID) {
							parentarr[i].CHILD_ANWSER_LIST.push(res[j])
						}
					}
				}
				this.commentList = parentarr


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

			//发表新评论
			async submitfun() {
				console.log(this.userinfo)
				if (!this.userinfo) {
					this.tologin()
					return false
				}
				console.log(this.userinfo)
				let obj = {
					annid: this.id,
					commenttime: this.getnowdate() + " " + this.getnowtime(),
					firstnickname: this.userinfo.userName,
					ispraise: null,
					comment: this.textarea,
					praisenum: 0,
					candelete: 0,
					headimg: this.userinfo.trans_pic,
					parentid: 0,
					secondnickname: null
				}
				uni.showLoading({
					title: '操作中'
				});
				let res = await new this.Request(this.Urls.m().insertchatart, obj).modepost()
				// this.$message({
				// 	message: '提交成功',
				// 	type: 'success',
				// 	duration: 2000
				// });
				this.textarea = ""
				this.querychatfun()
			},
			//回复评论
			async submitsubfun() {
				if (!this.userinfo) {
					this.tologin()
					return false
				}
				let parid
				if (this.recevobj.PARENTID == 0) {
					parid = this.recevobj.id
				} else {
					parid = this.recevobj.PARENTID
				}


				let obj = {
					annid: this.id,
					commenttime: this.getnowdate() + " " + this.getnowtime(),
					firstnickname: this.userinfo.userName,
					ispraise: null,
					comment: this.formvisi.content,
					praisenum: 0,
					candelete: 0,
					headimg: this.userinfo.trans_pic,
					parentid: parid,
					secondnickname: this.recevobj.FIRSTNICKNAME
				}
				uni.showLoading({
					title: '操作中'
				});
				let res = await new this.Request(this.Urls.m().insertchatart, obj).modepost()
				// this.$message({
				// 	message: '提交成功',
				// 	type: 'success',
				// 	duration: 2000
				// });
				this.formvisi.content = ""
				this.querychatfun()

			},
			clickPraiseComment(val) {
				console.log("clickPraiseComment", val)
			},
			async clickDeleteComment(val) {
				console.log("clickDeleteComment", val)

				let obj = {
					id: val.id
				}
				let res = await new this.Request(this.Urls.m().chatremove, obj).modepost()
				this.querychatfun()
			},
			async clickDeleteCommentChild(val) {
				console.log("clickDeleteCommentChild", val)
				let obj = {
					id: val.id
				}
				let res = await new this.Request(this.Urls.m().chatremove, obj).modepost()
				this.querychatfun()
			},
			clickRecomment(val) {
				this.areaShow = true
				this.placeholdercontent = `回复 ${val.FIRSTNICKNAME}：`
				this.recevobj = val
			},
			clickRecommentChild(val) {
				this.areaShow = true
				this.placeholdercontent = `回复 ${val.FIRSTNICKNAME}：`
				this.recevobj = val
			},
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},

			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			},

			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},

			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = ""
				this.swiperList = this.swiperList
			},
		}
	}
</script>

<style>
	.smallbut {
		margin-left: 5%;
	}

	.tower-swiper .tower-item {
		transform: scale(calc(0.5 + var(--index) / 10));
		margin-left: calc(var(--left) * 100upx - 150upx);
		z-index: var(--index);
	}

	.titlecal {
		text-align: center;
		font-size: 2em;
		font-weight: bold;
	}

	.detailcal {
		margin-bottom: 20rpx;
		padding: 20rpx;
		border-bottom: 1px solid #f1f1f1;
	}

	.text-content {
		margin-top: 5%;
		padding-left: 3%;
		padding-right: 3%;
		/* 		height: 20%; */
	}


	.content-detail {
		width: 100%;
		white-space: pre-wrap;
		/* 		word-wrap: break-word;
		word-break: break-all; */
	}

	.bigtitle {
		font-size: 1.2em;
		font-weight: bold;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
</style>