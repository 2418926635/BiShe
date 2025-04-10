<template>
	<view style="background-color: #f1f1f1;">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">我的关注</block>
		</cu-custom>

		<view class="cu-list menu-avatar">
			<view class="cu-item" :class="modalName=='move-box-'+ index?'move-cur':''" v-for="(item,index) in list"
				:key="index" @click="seewenzhang(item.id)"  @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd"
				:data-target="'move-box-' + index">
				<image :src="item.trans_pic" mode="aspectFill" class="cu-avatar round lg"></image>
				<view class="content">
					<view class="text-grey">{{item.userName}}</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							{{item.email}}
						</view>
					</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">&nbsp;</view>
					<view class="text-grey text-xs">&nbsp;</view>
				</view>
				<view class="move">
					<!-- <view class="bg-grey">置顶</view> -->
					<view class="bg-red" @click="cancelguanzhu(item.id)">取消关注</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		onShow() {
			this.userinfoObj = uni.getStorageSync('userinfo')
			this.init()
		},
		onLoad() {

		},
		data() {
			return {
				modalName: null,
				list: [],
				jifen: 0,
				isshow: true,
				name: '点击登录',
				namenew: '',
				usering: true,
				userdata: {},
				flagbj: false,
				userinfoObj: {},
				avatarUrl: '/static/logo.png'
			}
		},

		methods: {
			seewenzhang(userid){
				
				uni.navigateTo({
					url: `../foodlist/usersharelist?userid=${userid}`
				});
			},
			async cancelguanzhu(id) {
				let msgobj = {
					fansuserid: this.userinfoObj.id,
					userid: id,
				}
				let res = await new this.Request(this.Urls.m().deletefans, msgobj).modepost()
				this.init()
			},
			async init() {
				let that = this
				let obj = {
					fansuserid: this.userinfoObj.id
				}
				let resdata = await new this.Request(this.Urls.m().querygzlist, obj).modepost()
				that.list = resdata
			},
			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX
			},
			
			// ListTouch计算方向
			ListTouchMove(e) {
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},
			
			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			}
			

		}
	}
</script>

<style>
	.usertitle {
		margin-left: 10px;
		font-size: 1.2em;
	}
</style>