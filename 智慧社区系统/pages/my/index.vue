<template>
	<view class="">
		<cu-custom bgColor="bg-gradual-white">
			<block slot="content"></block>
		</cu-custom>

		<!-- 顶部个人信息 -->
		<view class="bg-white">
			<view class="flex padding">
				<view class="padding-lr-xs">
					<image class="cu-avatar lg round" :src="userinfoObj.trans_pic" mode=""></image>
				</view>
				<view class="padding-xs text-xl text-black">
					<view>Hello，{{userinfoObj.userName}}</view>
					<!-- <view class="cu-tag round line-green sm">积分：{{jifen}}</view> -->
				</view>
			</view>
		</view>
		<!-- 基本数据 -->
		<view class="cu-list grid col-4 no-border padding-lr-xs radius-lg-bottom">
			<view class="cu-item" @click="seefensi">
				<view class="text-black text-bold text-xxl">
					{{fensicount}}
				</view>
				<text>粉丝</text>
			</view>
			<view class="cu-item" @click="seeguanzhu">
				<view class="text-black text-bold text-xxl">
					{{guanzhucount}}
				</view>
				<text>关注</text>
			</view>
			<view class="cu-item" @click="seedianzan">
				<view class="text-black text-bold text-xxl">
					{{mydiancannum}}
				</view>
				<text>点赞</text>
			</view>
			<view class="cu-item" @click="seeshoucang">
				<view class="text-black text-bold text-xxl">
					{{shoucangnum}}
				</view>
				<text>收藏</text>
			</view>

		</view>
		<!-- 助力/推荐/邀请 -->
		<!-- <view class="margin-top-sm padding-lr-xs">
			<view class="bg-brown light radius-lg shadow-blur">
				<view class="flex padding-tb-sm padding-lr-sm justify-between">
					<view class="padding-xs">
						<view>当前成就为 <text style="font-weight: bold;">{{level}}</text> </view>
					</view>
					<view class="">
						<view class="cu-btn round bg-black" @tap="showModal">查看详情</view>
					</view>
				</view>
			</view>
		</view> -->
		<!-- 常用功能 -->
		<view class="cu-bar margin-lr-xs margin-top-sm grid col-4 no-border bg-white radius-lg-top">
			<view class="action">
				<text class="text-xl text-black">常用功能</text>
			</view>
		</view>
		<view class="cu-list grid col-4 no-border text-black margin-lr-xs padding-bottom radius-lg-bottom">
			<view class="cu-item" v-for="(item,index) in iconList" :key="index" @tap="tofun(item.bindtap)">
				<view :class="['cuIcon-'+item.icon,'text-'+item.color,'text-shadow']" style="font-size: 56rpx;">
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>

		<!-- 	  <view class="margin-top-sm padding-lr-xs">
	    <view class="bg-white light radius-lg shadow-blur">
	      <view class="flex padding-tb-sm padding-lr-sm justify-between">
	        <view class="padding-xs">
	          <view class="text-xl text-black">惊喜连连·洁净一秋</view>
	          <view class="padding-top-xs">家居清洗限时<text class="text-red text-bold"> 6.6折 </text><text class="cuIcon-roundrightfill text-red"></text></view>
	        </view>
	        <view class="">
	          <view class="cu-btn round bg-gradual-pinknew margin-top-sm">6折优惠</view>
	        </view>
	      </view>
	    </view>
	  </view> -->
		<!-- 其他功能 -->
		<view class="cu-bar margin-lr-xs margin-top grid col-4 no-border bg-white radius-lg-top">
			<view class="action">
				<text class="text-xl">其他功能</text>
			</view>
		</view>
		<view class="cu-list grid col-4 no-border text-black margin-lr-sm padding-bottom radius-lg-bottom">
			<view class="cu-item" v-for="(item,index) in iconOtherList" :key="index" @tap="tofun(item.bindtap)">
				<view :class="['cuIcon-'+item.icon,'text-'+item.color,'text-shadow']" style="font-size: 56rpx;">
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>


		<view class="cu-modal" :class="modalName=='Modal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">等级说明</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl" style="line-height: 1.5;font-weight: bold;">
					<view class="">等级由粉丝量决定</view>
					<view class="">积分低于20为青铜</view>
					<view class="">20-40为白银</view>
					<view class="">40-60为黄金</view>
					<view class="">高于60为大神</view>



				</view>
			</view>
		</view>


		<view class="cu-modal" :class="modalName=='DialogModal2'?'show':''">
			<view class="cu-dialog" style="background-color: #ffffff;">
				<view class="cu-bar bg-white justify-end">
					<view class="content" style="font-size: 40rpx;">门禁二维码</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="">
					<!-- <image :src="urllocal + imgurl" mode="widthFix" style="width: 70%;"></image> -->
					<image src="/static/index/qrcode.png" mode="widthFix" style="width: 70%;"></image>
					
					
				</view>
				<!-- 				<view class="padding" style="line-height: 1.5;font-size: 25rpx;">
					请拨打客服电话 {{fwphone}}
				</view> -->
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal">关闭</button>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		onShow() {
			try {
				this.userinfoObj = uni.getStorageSync('userinfo')
			} catch (e) {
				this.userinfoObj = ""
			}
			this.querymycount()
		},
		data() {
			return {
				modalName: null,
				level: '青铜',
				jifen: 0,
				fensicount: 0,
				guanzhucount: 0,
				shoucangnum: 0,
				mydiancannum: 0,
				userinfoObj: {},
				iconList: [{
					icon: 'edit',
					color: 'blue',
					badge: 0,
					name: '去分享',
					bindtap: "fenxiang"
				}, {
					icon: 'sort',
					color: 'red',
					badge: 0,
					name: '我的发布',
					bindtap: "seefenxiang"
				}, {
					icon: 'writefill',
					color: 'purple',
					badge: 11,
					name: '去反馈',
					bindtap: "fankui"
				}, {
					icon: 'formfill',
					color: 'green',
					badge: 0,
					name: '查看反馈',
					bindtap: "seefankui"
				}, {
					icon: 'friendfill',
					color: 'green',
					badge: 0,
					name: '参与组团',
					bindtap: "canyuzutuan"
				}, {
					icon: 'discover',
					color: 'pink',
					badge: 0,
					name: '创建组团',
					bindtap: "chuangjian"
				}, {
					icon: 'selectionfill',
					color: 'green',
					badge: 0,
					name: '社区介绍',
					bindtap: "gongsimsg"
				}, {
					icon: 'scan',
					color: 'orange',
					badge: 0,
					name: '门禁扫码',
					bindtap: "ewm"
				}, {
					icon: 'form',
					color: 'blue',
					badge: 0,
					name: '访客预约',
					bindtap: "fankesubmit"
				}, {
					icon: 'message',
					color: 'red',
					badge: 0,
					name: '消息通知',
					bindtap: "seemsglist"
				}],
				iconOtherList: [{
					icon: 'profilefill',
					color: 'blue',
					badge: 0,
					name: '基本信息',
					bindtap: "edituser"
				}, {
					icon: 'lock',
					color: 'blue',
					badge: 0,
					name: '修改密码',
					bindtap: "editpassword"
				}, {
					icon: 'roundrightfill',
					color: 'blue',
					badge: 0,
					name: '退出',
					bindtap: "outlogin"
				}]
			}
		},
		methods: {
			showModal(e) {
				this.modalName = 'Modal'
			},
			hideModal(e) {
				this.modalName = null
			},
			tofun(val) {
				console.log(val)
				if (val == 'fenxiang') {
					uni.navigateTo({
						url: '../share/setshare'
					})
				}
				if (val == 'seefenxiang') {
					uni.navigateTo({
						url: `../foodlist/usersharelist?userid=${this.userinfoObj.id}`
					});
				}
				if (val == 'fankui') {
					uni.navigateTo({
						url: './submitmsg'
					})
				}
				if (val == 'seefankui') {
					uni.navigateTo({
						url: './fankuilist'
					})
				}

				if (val == 'edituser') {
					uni.navigateTo({
						url: '../login/edituser'
					})
				}

				if (val == 'editpassword') {
					uni.navigateTo({
						url: '../login/updatapwd'
					})
				}
				if (val == 'shoucangtm') {
					uni.navigateTo({
						url: '../my/shoucangtm'
					})
				}
				if (val == 'canyuzutuan') {
					uni.navigateTo({
						url: '../my/canyuzutuan'
					})
				}
				if (val == 'chuangjian') {
					uni.navigateTo({
						url: `../activity/activity`
					});
				}
				if (val == 'gongsimsg') {
					uni.navigateTo({
						url: `../user/gongsimsg`
					});
				}
				if (val == 'ewm') {
					this.modalName = 'DialogModal2'
				}
				if (val == 'fankesubmit') {
					uni.navigateTo({
						url: `../user/fankesubmit`
					});
				}
				if (val == 'seemsglist') {
					uni.navigateTo({
						url: `../user/seemsglist`
					});
				}






				if (val == 'outlogin') {
					uni.showModal({
						content: '确定要退出吗？',
						cancelText: '取消',
						confirmText: '确定',
						success: async res => {
							if (res.confirm) {
								uni.removeStorageSync('userinfo')
								uni.navigateTo({
									url: '/pages/login/login'
								});
							}
						}
					})
				}


			},
			seefensi() {
				uni.navigateTo({
					url: './fensilist'
				})
			},
			seeguanzhu() {
				uni.navigateTo({
					url: './guanzhulist'
				})
			},
			seeshoucang() {
				uni.navigateTo({
					url: './shoucanglist'
				})
			},
			seedianzan() {

				uni.navigateTo({
					url: './seedianzan'
				})
			},
			async querymycount() {
				let obj = {
					userid: this.userinfoObj.id
				}
				let resdata = await new this.Request(this.Urls.m().querymycount, obj).modepost()
				this.fensicount = resdata[0].fensicount
				this.guanzhucount = resdata[0].guanzhucount
				this.shoucangnum = resdata[0].shoucangnum
				this.mydiancannum = resdata[0].mydiancannum

				this.jifen = this.fensicount * 10
				if (this.jifen <= 20) {
					this.level = '青铜'
				}
				if (this.jifen > 20 && this.jifen <= 40) {
					this.level = '白银'
				}
				if (this.jifen > 40 && this.jifen <= 60) {
					this.level = '黄金'
				}
				if (this.jifen > 60) {
					this.level = '大神'
				}
			}

		}
	}
</script>

<style>

</style>