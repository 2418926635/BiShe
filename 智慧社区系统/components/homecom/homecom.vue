<template>
	<view style="height: 100%;">
		<movable-area @click="">
			<movable-view :x="x" :y="y" direction="all"  @click="goback">
				<view class="viewsub">
					首页
				</view>
			</movable-view>
		</movable-area>
	</view>
</template>

<script>
	export default {
		created() {
			let that = this
			uni.getSystemInfo({
			        success: function(e) {
						that.x = e.screenWidth * 0.8
						that.y = e.screenHeight * 0.9
			        }
			    })
		},
		components: {

		},
		data() {
			return {
				x: 0,
				y: 0

			}
		},
		methods:{
			goback(){
				uni.navigateTo({
					url: `../index/index`
				});
			}
		}
	}
</script>

<style scoped>
movable-area{
	position: absolute;
	top:0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
}

movable-view{
	width: 50px;
	height: 50px;
	background:limegreen;
	border-radius: 25px;
	opacity:0.8;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
	position: fixed;
	
}

.viewsub{
	font-weight: bold;
	color: aliceblue;
}
</style>
