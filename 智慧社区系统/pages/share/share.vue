<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">美食论坛</block>
		</cu-custom>
		<view class="cu-bar search bg-white">
			<view class="search-form round" @click="onShowDatePicker('range')">
				<text class="cuIcon-search"></text>
				<input :adjust-position="false" type="text" v-model="keyword" placeholder="标题关键词"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow-blur round" @tap="tosearch">搜索</button>
				<button class="cu-btn bg-blue shadow-blur round" @tap="addproject('add')"
					style="margin-left: 10rpx;">发表</button>
			</view>
		</view>
		<!-- 	<view class="mainsub">
			<view class="cu-bar solid-bottom">
				<button class="cu-btn bg-blue shadow" @click="addproject('add')"><text class="cuIcon-roundadd"
						style="font-size: 1.2em;margin-right: 5px;"></text>发表</button>
			</view>
		</view> -->

		<view class="cu-card dynamic" :class="isCard?'no-card':''" v-for="(item,i) in list" :key="i">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<image class="cu-avatar round lg" :src="item.usericon" mode=""></image>
						<view class="content flex-sub">
							<view>{{item.username}}</view>
							<view class="text-gray text-sm flex justify-between">
								{{item.datetime}}
							</view>
						</view>
					</view>
				</view>
				<view class="text-content">
					{{item.descstr}}
				</view>
				<view v-if="item.trans_pic" class="grid flex-sub padding-lr"
					:class="isCard?'col-3 grid-square':'col-1'">
					<view v-for="(val,j) in item.trans_picarr" :key="j" class="bg-img" :class="isCard?'':'only-img'"
						:style="{backgroundImage: 'url(' + val +')'}"
						@tap="ViewImageyf(j,item.trans_picarr)">
					</view>
				</view>
				<view class="text-right padding butgroup">
					<view  v-if="userinfo.userName == item.username" class="text-gray text-sm text-right padding-right" @tap="deletefun(item)">
						<text class="cuIcon-deletefill margin-lr-xs"></text> 删除
					</view>
					<view class="text-gray text-sm text-right padding-right" @tap="seeeve(item)">
						<text class="cuIcon-commentfill margin-lr-xs"></text> 查看评论
					</view>
				</view>


			</view>
		</view>


		<mx-date-picker :show="showPicker" :type="type" format="yyyy-mm-dd" :value="value" :show-tips="true"
			:begin-text="'起始'" :end-text="'结束'" :show-seconds="true" @confirm="ed" @cancel="ed" />
	</view>
</template>

<script>
	import configData from '@/config/index.js'

	export default {
		onShow() {
			try {
				this.userinfo = uni.getStorageSync('userinfo')
			} catch (e) {
				this.userinfo = ""
			}
			this.init()
		},
		data() {
			return {
				keyword: '',
				userinfo: {},
				isCard: true,
				list: [],
				urllocal: configData.httpUrlupload
			}
		},
		methods: {
			tosearch() {
				this.init()
			},
			async deletefun(item) {
				let that = this
				uni.showModal({
					title: '提示',
					content: '是否确认删除',
					showCancel: true,
					success:async (res) => {
						if (res.confirm) {
							let objext = {
								id: item.id
							}
							uni.showLoading({
								title: '加载中',
								mask: true,
							});
							let resdata = await new this.Request(this.Urls.m().deletearticle, objext)
								.modepost()
							if (resdata == 'ok') {
								that.init()
								uni.showToast({
									title: '操作成功',
									duration: 2000
								})
							} else {
								uni.showToast({
									title: '操作失败请重试',
									icon: none,
									duration: 2000
								})
							}
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			async init() {
				let objext = {
					keyword: this.keyword,
					current: 1,
					size: 1000,
					date: []
				}
				uni.showLoading({
					title: '加载中'
				});
				let resdata = await new this.Request(this.Urls.m().queryarticle, objext).modepost()
				this.list = resdata.map((val, i) => {
					val.trans_picarr = val.trans_pic.split(',')
					return val
				})
			},
			ViewImageyf(j, picarr) {
				let that = this
				let picarr02 = picarr.map(item => that.urllocal + item);
				uni.previewImage({
					urls: picarr02,
					current: j
				});
			},
			onPullDownRefresh() {
				this.init()
				uni.stopPullDownRefresh();
			},
			addproject() {

				if (!this.userinfo) {
					this.tologin()
					return false
				}
				uni.navigateTo({
					url: `../share/setshare?type=add`
				});
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
			seeeve(val) {
				console.log(val)
				uni.navigateTo({
					url: `../share/sharecomment?id=${val.id}&title=${val.descstr}&detail=${val.detail}&trans_pic=${val.trans_pic}&shopid=${val.id}&shopname=${val.descstr}`
				});
			}
		}
	}
</script>

<style scoped>
	.mainsub {
		padding-left: 5%;
		padding-right: 5%;
		background-color: #fff;
	}

	.butgroup {
		display: flex;
		justify-content: flex-end;
	}
</style>