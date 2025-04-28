<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">消息查看</block>
		</cu-custom>

		<view class="cu-card article card padding-tb-xs" v-for="(val,i) in list" :key="i">
			<view class="cu-item shadow padding-top" style="border: 1px solid #f1f1f1; border-radius: 5%;">
				<view class="content" v-if="val.result1 == '缴费'">
					<view class="desc">
						<view class="grid col-6">
							<view>消息类型：{{val.result1}}</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view>缴费类型：{{val.result2}}</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view>户号：{{val.result3}}</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view>户主姓名：{{val.result4}}</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view>缴费金额：{{val.result5}}元</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view>时间：{{val.datetime}}</view>
							<view class="text-right"></view>
						</view>
						<!-- 						<view class="grid col-6">
							<view>反馈：<text style="font-weight: bold;color: cornflowerblue;">{{val.fankui}}</text>
							</view>
							<view class="text-right"></view>
						</view> -->
					</view>
				</view>


				<view class="content" v-if="val.result1 == '报修'">
					<view class="desc">
						<view class="grid col-6">
							<view>消息类型：{{val.result1}}</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view>报修类型：{{val.result2}}</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view>标题：{{val.result3}}</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view>时间：{{val.datetime}}</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view>反馈：<text style="font-weight: bold;color: cornflowerblue;">{{val.result10}}</text>
							</view>
							<view class="text-right"></view>
						</view>
					</view>
				</view>

				<view class="content" v-if="val.result1 == '访问'">
					<view class="desc">
						<view class="grid col-6">
							<view>消息类型：{{val.result1}}</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view>姓名：{{val.result3}}</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view>电话：{{val.result4}}</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view>被访用户：{{val.result5}}</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view>房间号：{{val.result6}}</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view>访问时间：{{val.result7}}</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view>时间：{{val.datetime}}</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view v-if="val.result10 == '暂未反馈'">反馈：<text style="font-weight: bold;color: cornflowerblue;">{{val.result10}}</text>
							</view>
							<view v-if="val.result10 == '通过'" @click="seeewm">反馈：<text style="font-weight: bold;color: limegreen;">{{val.result10}}</text>
							</view>
							<view v-if="val.result10 == '驳回'">反馈：<text style="font-weight: bold;color: orangered;">{{val.result10}}</text>
							</view>
							<view class="text-right"></view>
						</view>
					</view>
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
		mounted() {

		},
		onShow() {
			this.init()
		},
		data() {
			return {
				modalName:null,
				list: [],
				userinfoObj: {}
			};
		},
		methods: {
			showModal(e) {
				this.modalName = 'Modal'
			},
			hideModal(e) {
				this.modalName = null
			},
			async init() {
				this.userinfoObj = uni.getStorageSync('userinfo')
				let that = this
				let obj = {
					userid: this.userinfoObj.id
				}
				let resdata = await new this.Request(this.Urls.m().querybasemsg, obj).modepost()
				resdata = resdata.filter((val,i)=>{
					return val.result1 == '缴费'  || val.result1 == '报修' || val.result1 == '访问'
				})
				that.list = resdata.map((val, i) => {
					val.result10 = val.result10 || "暂未反馈"
					return val
				})
			},
			seeewm(){
				this.modalName = 'DialogModal2'
			},
			// async remove(val){
			// 	let that = this
			// 	let obj = {
			// 		id: val.id
			// 	}
			// 	let resdata = await new this.Request(this.Urls.m().removecollectionbyid, obj).modepost()
			// 	this.init()
			// }
		}
	}
</script>
<style>
	.cu-card.article>.cu-item .content>image {
		width: 80upx;
		height: 80upx;
	}
</style>