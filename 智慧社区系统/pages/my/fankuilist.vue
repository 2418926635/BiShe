<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">反馈结果查看</block>
		</cu-custom>
		
		<view class="cu-card article card padding-tb-xs" v-for="(val,i) in list" :key="i">
			<view class="cu-item shadow padding-top"   style="border: 1px solid #f1f1f1; border-radius: 5%;" @tap="detail(1)">
				<view class="content">
					<!-- <image class="margin-top-xs" :src="val.trans_pic"></image> -->
					<view class="desc">
						<view class="grid col-6">
							<view>事务：{{val.title}}</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view>类型：{{val.typetext}}</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view>时间：{{val.datetime}}</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view>反馈意见：<text style="font-weight: bold;color: cornflowerblue;">{{val.fankui}}</text> </view>
							<view class="text-right"></view>
						</view>
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
				list:[],
				userinfoObj:{}
			};
		},
		methods: {
			async init(){
				this.userinfoObj = uni.getStorageSync('userinfo')
				let that = this
				let obj = {
					submitbody: this.userinfoObj.userName
				}
				let resdata = await new this.Request(this.Urls.m().selectsubmitbyuser, obj).modepost()
				that.list = resdata.map((val,i)=>{
					val.fankui = val.fankui || "暂未回复"
					return val
				})
				
			
			},
			async remove(val){
				let that = this
				let obj = {
					id: val.id
				}
				let resdata = await new this.Request(this.Urls.m().removecollectionbyid, obj).modepost()
				this.init()
			}
		}
	}
</script>
<style>
	.cu-card.article>.cu-item .content>image{
		width: 80upx;
		height: 80upx;
	}
</style>

