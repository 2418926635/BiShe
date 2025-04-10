<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">交流</block>
		</cu-custom>
		<view class="cu-chat" v-for="(item,i) in chatlist" :key="item.id">
			<view class="cu-item self" v-if="item.type == 'send'">
				<view class="main">
					<view class="content bg-green shadow">
						<text>{{item.msg}}</text>
					</view>
				</view>
				<image :src="wofangpic" class="cu-avatar radius" mode="widthFix" style="width: 40px;"></image>
<!-- 				<view class="cu-avatar radius"
					style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);">
				</view> -->
				<view class="date">{{item.datetime}}</view>
			</view>
			<view class="cu-item" v-else>
				<image :src="duifangpic" class="cu-avatar radius" mode="widthFix" style="width: 40px;"></image>
				<!-- <view class="cu-avatar radius"
					style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);">
				</view> -->
				<view class="main">
					<view class="content shadow">
						<text>{{item.msg}}</text>
					</view>
				</view>
				<view class="date">{{item.datetime}}</view>
			</view>
		</view>



		<view class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]">
			<input class="solid-bottom" v-model="msgstr" :adjust-position="false" :focus="false" maxlength="300"
				cursor-spacing="10" @focus="InputFocus" @blur="InputBlur"></input>
			<button class="cu-btn bg-green shadow" @click="tosend">发送</button>
		</view>

	</view>
</template>

<script>
		import {deepCopy} from '@/utils/expressfun.js'
	export default {
		onLoad(options) {
			this.userinfo = uni.getStorageSync('userInfo')
			this.id = options.id
			this.duifangpic = options.duifangpic
			this.wofangpic = options.wofangpic
			this.init(this.id)
		},
		data() {
			return {
				duifangpic:'',
				wofangpic:'',
				userinfo:{},
				InputBottom: 0,
				msgstr: '',
				chatlist: [],
				reslist:['你稍等，我找同伴过来','确实紧急可以联系管理员','平台也可以帮助我们','稍等','我们会尽最大努力提供服务']
			};
		},
		methods: {
			async init(id){
				// uni.showLoading({
				// 	title: '加载中'
				// });
				let that = this
				// uniCloud.callFunction({
				// 	name: 'dh-fun',
				// 	data: {
				// 		shopid: that._id,
				// 		functionName: "querychatbyid"
				// 	},
				// 	success(res) {
				// 		console.log(res)
				// 		that.chatlist = deepCopy(res.result.data.data) 
				// 		uni.hideLoading();
				// 	},
				// 	fail() {
				// 		uni.hideLoading();
				// 	},
				// 	complete() {}
				// });
			},
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			async tosend() {
				let msgobj = {
					type: 'send',
					msg: this.msgstr,
					datetime: this.getnow(),
					shopid:this.id,
					functionName:"insertchatbyid"
				}
				this.chatlist.push(msgobj)
				// //插入料数数据
				// uniCloud.callFunction({
				// 	name: 'dh-fun',
				// 	data: msgobj,
				// 	success(res) {
				// 	},
				// 	fail() {
				// 		uni.showToast({
				// 			title: '操作失败',
				// 			duration: 2000
				// 		});
				// 	},
				// 	complete() {}
				// });
				this.msgstr = ""
				this.scrollToBottom()
				setTimeout(()=>{
					this.responsefun()
				},1500)
				
				
			},
			//对方数据响应
			async responsefun() {
				let len = this.reslist.length
				//随机获取一个整数
				let sub = Math.round(Math.random()*(len-1));
				let msgobj = {
					type: 'receive',
					msg: this.reslist[sub],
					datetime: this.getnow(),
					shopid:this.id,
					functionName:"insertchatbyid"
				}
				this.chatlist.push(msgobj)
				// //插入料数数据
				// uniCloud.callFunction({
				// 	name: 'dh-fun',
				// 	data: msgobj,
				// 	success(res) {
				// 		if (res.result.code == 200) {}
				// 	},
				// 	fail() {
				// 		uni.showToast({
				// 			title: '操作失败',
				// 			duration: 2000
				// 		});
				// 	},
				// 	complete() {}
				// });
				this.scrollToBottom()
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
			scrollToBottom() {
			    this.$nextTick(function() {
			        setTimeout(() => {
			            uni.pageScrollTo({
			              scrollTop: 99999,
			              duration: 0
			            })
			          }, 200) // 要加点延迟, 不然有可能不生效
				});
			}

		}
	}
</script>

<style>
	page {
		padding-bottom: 100upx;
	}
</style>
