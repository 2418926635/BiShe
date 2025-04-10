<template>
	<view style="height: 100vh;background-color: #ffffff;">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content">组团</block>
		</cu-custom>
		
		<!-- <view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input :adjust-position="false" type="text" placeholder="搜索关键字" confirm-type="search"
					v-model="keyword"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-blue shadow-blur round" @tap="query">搜索</button>
			</view>
		</view> -->
		
		
		<!-- <homecom class="homclass"></homecom> -->
		<view class="mainsub">
			<view class="cu-bar solid-bottom">
				<button class="cu-btn bg-green shadow" @click="addproject('add')"><text class="cuIcon-roundadd"
						style="font-size: 1.2em;margin-right: 5px;"></text>新增</button>
			</view>
			<view class="text-xsl padding" v-if="listdata.length == 0">
				<text class=" cuIcon-info text-blue"></text>
				<view class="textclass">没有可查看的数据</view>
			</view>
			<view class="card-main" v-for="(item,i) in listdata" :key="i" style="margin-bottom: 20px;">
				<view class="card-top">
					<view class="card-toptitle01">
						<view class="card-content">
							<view class="card-maintitle01">
								项目名称：
							</view>
							<view class="card-maintitle02">
								{{item.projectname}}
							</view>
						</view>
					</view>
				</view>
				<view class="card-top">
					<view class="card-toptitle01">
						<view class="card-content">
							<view class="card-maintitle01">
								限制报名人数：
							</view>
							<view class="card-maintitle02">
								{{item.renshu}}
							</view>
						</view>
					</view>
				</view>
				<view class="card-top">
					<view class="card-toptitle01">
						<view class="card-content">
							<view class="card-maintitle01">
								说明：
							</view>
							<view class="card-maintitle02">
								{{item.detail | ellipsis}}
							</view>
						</view>
					</view>
					<view class="card-toptitle02">
						<text style="color: limegreen;font-weight: bold;margin-right: 10px;"
							@click="updatafun(item.id,item)">修改</text>
						<text style="color: coral;font-weight: bold;" @click="deletefun(item.id)">删除</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// import homecom from "@/components/homecom/homecom.vue"
	export default {
		onLoad() {
			this.userinfo = uni.getStorageSync('userinfo')
		},
		onPullDownRefresh() {
			
			this.init()
			uni.stopPullDownRefresh();
		},
		onShow() {
			this.init()
		},
		mounted() {

		},
		components: {
			// homecom
		},
		data() {
			return {
				userinfo:{},
				listdata: [],
				keyword:''
			}
		},
		methods: {
			async init() {
				this.query()
			},
			async query() {
				// uni.showLoading({
				// 	title: '加载中'
				// });
				console.log(this.userinfo)
				let that = this
				let obj = {
					keyword: this.keyword,
					parentid:this.userinfo.id
				}
				let resdata = await new this.Request(this.Urls.m().queryactivitylist, obj).modepost()
				that.listdata = resdata
			},
			updatafun(val, item) {
				uni.navigateTo({
					url: `./activitydetail?type=updata&id=${val}`
				});
			},
			addproject() {
				uni.navigateTo({
					url: `./activitydetail?type=add`
				});
			},
			deletefun(id) {
				uni.showModal({
					content: '确定要删除吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.deletefunfun(id)
						}
					}
				})
			},
			async deletefunfun(val) {
				let that = this
				let obj = {
					id: val
				}
				let resdata = await new this.Request(this.Urls.m().deleteactivity, obj).modepost()
				that.query()
			}

		},
		
		filters: {
			// 判断超出5个字显示省略号
			ellipsis(value) {
				if (!value) return ''
				if (value.length > 10) {
					return value.slice(0, 10) + '...'
				}
				return value
			},
		}
	}
</script>

<style scoped>
	.mainsub {
		padding-left: 5%;
		padding-right: 5%;
		background-color: #fff;
	}

	.card-main {
		width: 100%;
		border-radius: 5px;
		margin-top: 10px;
		padding: 5%;
		position: relative;
		border: 1px #f1f1f1 solid;
		box-shadow: #f1f1f1 1px 1px 1px 1px;
	}

	.card-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.card-content {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}


	.card-maintitle01 {
		font-weight: bold;
	}

	.card-maintitle01,
	.card-maintitle02 {
		margin-top: 10px;
	}

	.card-toptitle02 {
		margin-top: 10px;
	}

	.rightdetail {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.text-xsl {
		margin-top: 20%;
		text-align: center;
		font-size: 120px;
	}

	.textclass {
		margin-top: 5px;
		font-weight: 600;
		font-size: 15px;
		color: darkgray;
	}
</style>
