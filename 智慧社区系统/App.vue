<script>
	import Vue from 'vue'
	export default {
		onLaunch: function() {
			uni.getSystemInfo({
			        success: function(e) {
			            // #ifndef MP
			            Vue.prototype.StatusBar = e.statusBarHeight;
			            if (e.platform == 'android') {
			                Vue.prototype.CustomBar = e.statusBarHeight + 50;
			            } else {
			                Vue.prototype.CustomBar = e.statusBarHeight + 45;
			            };
			            // #endif
			            // #ifdef MP-WEIXIN
			            Vue.prototype.StatusBar = e.statusBarHeight;
			            let custom = wx.getMenuButtonBoundingClientRect();
			            Vue.prototype.Custom = custom;
			            Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
			            // #endif       
			            // #ifdef MP-ALIPAY
			            Vue.prototype.StatusBar = e.statusBarHeight;
			            Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
			            // #endif
			        }
			    })
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
			socketObj: ''
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>


<style lang="scss">
	@import "colorui/main.css";
	@import "colorui/icon.css";
	
	// .bg-gradual-blue{
	// 	    background-image: linear-gradient(45deg, #ef8843,#ef8843);
	// }
	
	.loginbut{
	    background-color: #ef8843;
	}
	
	.zhuanyonginput{
		width: 50%;
	}
	
	// .cu-btn:not([class*="bg-"]) {
	//     background-color: #ef8843;
	// }
	
	body{
		background-color: #fff;
		height: 90%;
	}
	
	.requireclass{
		color:red;
		padding-right: 5px;
	}
	
	.cu-load.load-modal::after {
	    border-left: 3px solid #598eff;
	}
	
	.nav-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0px 40upx 0px;
		justify-content: space-between;
	}
	
	.nav-li {
		padding: 30upx;
		border-radius: 12upx;
		width: 45%;
		margin: 0 2.5% 40upx;
		background-image: url(https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358352-assets/web-upload/cc3b1807-c684-4b83-8f80-80e5b8a6b975.png);
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
	}
	
	.nav-li::after {
		content: "";
		position: absolute;
		z-index: -1;
		background-color: inherit;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: -10%;
		border-radius: 10upx;
		opacity: 0.2;
		transform: scale(0.9, 0.9);
	}
	
	.nav-li.cur {
		color: #fff;
		background: rgb(94, 185, 94);
		box-shadow: 4upx 4upx 6upx rgba(94, 185, 94, 0.4);
	}
	
	.nav-title {
		font-size: 32upx;
		font-weight: 300;
	}
	
	.nav-title::first-letter {
		font-size: 40upx;
		margin-right: 4upx;
	}
	
	.nav-name {
		font-size: 28upx;
		text-transform: Capitalize;
		margin-top: 20upx;
		position: relative;
	}
	
	.nav-name::before {
		content: "";
		position: absolute;
		display: block;
		width: 40upx;
		height: 6upx;
		background: #fff;
		bottom: 0;
		right: 0;
		opacity: 0.5;
	}
	
	.nav-name::after {
		content: "";
		position: absolute;
		display: block;
		width: 100upx;
		height: 1px;
		background: #fff;
		bottom: 0;
		right: 40upx;
		opacity: 0.3;
	}
	
	.nav-name::first-letter {
		font-weight: bold;
		font-size: 36upx;
		margin-right: 1px;
	}
	
	.nav-li text {
		position: absolute;
		right: 30upx;
		top: 30upx;
		font-size: 52upx;
		width: 60upx;
		height: 60upx;
		text-align: center;
		line-height: 60upx;
	}
	
	.text-light {
		font-weight: 300;
	}
	
	@keyframes show {
		0% {
			transform: translateY(-50px);
		}
	
		60% {
			transform: translateY(40upx);
		}
	
		100% {
			transform: translateY(0px);
		}
	}
	
	@-webkit-keyframes show {
		0% {
			transform: translateY(-50px);
		}
	
		60% {
			transform: translateY(40upx);
		}
	
		100% {
			transform: translateY(0px);
		}
	}
	
</style>
