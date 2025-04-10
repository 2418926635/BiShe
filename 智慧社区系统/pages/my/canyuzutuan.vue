<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">已报名的组团</block>
		</cu-custom>
		
		<view class="cu-card article padding-tb-xs" v-for="(val,i) in activitylist" :key="i">
			<view class="cu-item shadow padding-top"  style="border: 1px solid #eed1d1;"  @tap="detail(1)">
				<view class="content">
					<!-- <image class="margin-top-xs" :src="val.trans_pic"></image> -->
					<view class="desc">
						<view class="grid col-6">
							<view>组团：{{val.projectname}}</view>
							<view class="text-right"></view>
						</view>
						<view class="grid col-6">
							<view>时间：{{val.datetime}}</view>
							<view class="text-right"></view>
						</view>
					<!-- 	<view class="grid col-6">
							<view ><text class="text-orange">{{val.statustext}}</text></view>
						</view> -->
						<view class="grid col-6">
							<view @click="seefun(val)" class="text-right" style="color: limegreen;font-weight:bold;margin-right: 50rpx;">查看详情</view>
							<!-- <view @click="delpingjia(val)" class="text-right" style="color: red;font-weight:bold;">取消点赞</view> -->
							
							<view @click="seeuser(val)" class="text-right" style="color: orange;font-weight:bold;">查看成员</view>
							
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
				activitylist:[],
				userinfoObj:{}
			};
		},
		methods: {
			seefun(val) {
				console.log("123")
				uni.navigateTo({
					url: `/pages/activity/activitybm?id=${val.activityid}`,
					fail: (res) => {
						console.log(res) //打印错误信息
					}
				});
			},
			seeuser(val) {
				uni.navigateTo({
					url: `/pages/my/chengyuanlist?activityid=${val.activityid}`,
					fail: (res) => {
						console.log(res) //打印错误信息
					}
				});
			},
			async init(){
				this.userinfoObj = uni.getStorageSync('userinfo')
				let that = this
				let obj = {
					userid: this.userinfoObj.id
				}
				let resdata = await new this.Request(this.Urls.m().queryactivitybymy, obj).modepost()
				that.activitylist = resdata.map((v,i)=>{
					v.statustext = v.status
					return v
				})
				
				
			
			},
			detail_bak(state){
				uni.navigateTo({
					url: 'order_detail?state='+state
				})
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

