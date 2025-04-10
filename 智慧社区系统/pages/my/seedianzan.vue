<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">点赞列表</block>
		</cu-custom>
		<view class="cu-card article no-card padding-tb-xs" v-for="(val,i) in list" :key="i" style="border: 1px solid #f1f1f1;padding: 10rpx;margin: 10rpx;">
			<view class="cu-item shadow padding-top">
				<view class="content">
					<!-- <image class="margin-top-xs" :src="val.trans_pic"></image> -->
					<view class="desc" style="line-height: 1.5;">
						<view class="grid col-6">
							<view class="titlessb">帖子：</view>
							<view>{{val.shopname}}</view>
							
						</view>
						<view class="grid col-6">
							<view class="titlessb">时间：</view>
							<view> {{val.datetime}}</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view @click="seefun(val)" class="text-right" style="color: limegreen;font-weight:bold;margin-right: 50rpx;">查看详情</view>
							<view @click="delpingjia(val)" class="text-right" style="color: red;font-weight:bold;">取消点赞</view>
							
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
			this.userinfoObj = uni.getStorageSync('userinfo')
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
				
				let that = this
				let obj = {
					userid: this.userinfoObj.id
				}
				let resdata = await new this.Request(this.Urls.m().querymydz, obj).modepost()
				that.list = resdata
				
			
			},
			
			seefun(val) {
				console.log(val)
				uni.navigateTo({
					url: `../foodlist/sharecomment?id=${val.shopid}`
				});
			},
			async delpingjia(val){
				let that = this
				let obj = {
					id: val.id
				}
				let resdata = await new this.Request(this.Urls.m().delpingjia, obj).modepost()
				if(resdata == 'ok'){
					uni.showToast({
						title: '操作成功',
						duration: 2000
					});
				}
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
	
	
	.titlessb{
		font-weight: bold;
	}
</style>

