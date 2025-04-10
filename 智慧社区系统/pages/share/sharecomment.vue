<template>
	<view style="background-color: #ffffff;height: 100vh;">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">话题</block>
		</cu-custom>
		<!-- <swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
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
				{{title}}
				<!-- <text v-if="isshoucang" @click="shoucangfun('1')" class="cuIcon-favor"
					style="color: gray;font-size: 1em;margin-right: 10px;"></text>
				<text v-else @click="shoucangfun('2')" class="cuIcon-favorfill"
					style="color: red;font-size: 1em;margin-right: 10px;"></text>
				<text v-if="isdianzan" @click="dianzanfun('1')" class="cuIcon-appreciatefill"
					style="color: gray;font-size: 1em;"></text>
				<text v-else @click="dianzanfun('2')" class="cuIcon-appreciatefill red"
					style="color: red;font-size: 1em;"></text> -->
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
			<input class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"
				@focus="InputFocus" @blur="InputBlur" v-model="textarea"></input>

			<button class="cu-btn bg-blue shadow" @tap="submitfun">发送</button>
		</view>

	</view>
</template>

<script>
	export default {
		onLoad(options) {
			try {
				this.userinfo = uni.getStorageSync('userinfo')
			} catch (e) {
				this.userinfo = ""
			}
			console.log(options)
			this.title = options.title
			this.detail = options.detail
			this.id = options.id
			this.trans_pic = options.trans_pic
			this.shopid = options.shopid
			this.shopname = options.shopname
			this.swiperList = [{
				id: 1,
				type: 'image',
				url: this.trans_pic
			}]
			// this.querystatus()
		},
		created() {

		},
		onShow() {
			this.querychatfun()
		},
		data() {
			return {
				shopid: '',
				shopname: '',
				isshoucang: true,
				isdianzan: true,
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
			// //查询收藏点赞数据
			// async querystatus() {
			// 	let that = this
			// 	let msgobj = {
			// 		userid: this.userinfo.id,
			// 		shopid: this.shopid
			// 	}
			// 	uni.showLoading({
			// 		title: '加载中'
			// 	});

			// 	let arr = await new this.Request(this.Urls.m().selectpingjia, msgobj).modepost()
			// 	let dianzanarr = arr.filter((v, i) => {
			// 		return v.type == '点赞'
			// 	})
			// 	let shoucangarr = arr.filter((v, i) => {
			// 		return v.type == '收藏'
			// 	})
			// 	if (dianzanarr.length > 0) {
			// 		that.isdianzan = false
			// 	} else {
			// 		that.isdianzan = true
			// 	}

			// 	if (shoucangarr.length > 0) {
			// 		that.isshoucang = false
			// 	} else {
			// 		that.isshoucang = true
			// 	}
			// 	uni.hideLoading();


			// },
			//分享
			sharefun() {},
			// //收藏
			// async shoucangfun(val) {
			// 	let that = this
			// 	let datetime = this.getnowdate() + " " + this.getnowtime()
			// 	//收藏
			// 	if (val == '1') {
			// 		uni.showLoading({
			// 			title: '加载中'
			// 		});
			// 		let msgobj = {
			// 			userid: this.userinfo.id,
			// 			shopid: this.shopid,
			// 			shopname: this.shopname,
			// 			datetime: datetime,
			// 			type: '收藏'
			// 		}
			// 		let res = await new this.Request(this.Urls.m().addapprase, msgobj).modepost()
			// 		if (res == 'success') {
			// 			that.querystatus()
			// 			uni.showToast({
			// 				title: '收藏成功',
			// 				icon: 'success',
			// 				duration: 1500
			// 			});
			// 		} else {
			// 			uni.showToast({
			// 				title: '收藏失败',
			// 				icon: 'none',
			// 				duration: 1500
			// 			});
			// 			return false
			// 		}

			// 	} else {
			// 		uni.showLoading({
			// 			title: '加载中'
			// 		});
			// 		//删除收藏
			// 		let msgobj = {
			// 			userid: this.userinfo.id,
			// 			shopid: this.shopid,
			// 			type: '收藏'
			// 		}


			// 		let res = await new this.Request(this.Urls.m().deleteiscunzai, msgobj).modepost()
			// 		if (res == 'success') {
			// 			that.querystatus()
			// 			uni.showToast({
			// 				title: '取消收藏成功',
			// 				icon: 'success',
			// 				duration: 1500
			// 			});
			// 		} else {
			// 			uni.showToast({
			// 				title: '收藏失败',
			// 				icon: 'none',
			// 				duration: 1500
			// 			});
			// 			return false
			// 		}

			// 	}
			// 	//
			// },
			// //点赞
			// async dianzanfun(val) {
			// 	let that = this
			// 	let datetime = this.getnowdate() + " " + this.getnowtime()
			// 	//点赞
			// 	if (val == '1') {
			// 		uni.showLoading({
			// 			title: '加载中'
			// 		});
			// 		let msgobj = {
			// 			userid: this.userinfo.id,
			// 			shopid: this.shopid,
			// 			shopname: this.shopname,
			// 			datetime: datetime,
			// 			type: '点赞'
			// 		}
			// 		let res = await new this.Request(this.Urls.m().addapprase, msgobj).modepost()
			// 		if (res == 'success') {
			// 			that.querystatus()
			// 			uni.showToast({
			// 				title: '点赞成功',
			// 				icon: 'success',
			// 				duration: 1500
			// 			});
			// 		} else {
			// 			uni.showToast({
			// 				title: '点赞失败',
			// 				icon: 'none',
			// 				duration: 1500
			// 			});
			// 			return false
			// 		}

			// 	} else {
			// 		uni.showLoading({
			// 			title: '加载中'
			// 		});
			// 		//删除点赞
			// 		let msgobj = {
			// 			userid: this.userinfo.id,
			// 			shopid: this.shopid,
			// 			type: '点赞'
			// 		}


			// 		let res = await new this.Request(this.Urls.m().deleteiscunzai, msgobj).modepost()
			// 		if (res == 'success') {
			// 			that.querystatus()
			// 			uni.showToast({
			// 				title: '取消点赞成功',
			// 				icon: 'success',
			// 				duration: 1500
			// 			});
			// 		} else {
			// 			uni.showToast({
			// 				title: '点赞失败',
			// 				icon: 'none',
			// 				duration: 1500
			// 			});
			// 			return false
			// 		}

			// 	}
			// 	//
			// },
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
			clickDeleteComment(val) {
				console.log("clickDeleteComment", val)
			},
			clickDeleteCommentChild(val) {
				console.log("clickDeleteCommentChild", val)
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
		word-wrap: break-word;
		word-break: break-all;
	}

	.bigtitle {
		font-size: 1.2em;
		font-weight: bold;
	}
</style>