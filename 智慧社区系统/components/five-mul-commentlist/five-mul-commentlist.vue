<template>
	<view class="view-content-comment" style="margin-bottom: 100rpx;">
		<text class="title">{{ title }}</text>
		<view class="view-conmment-note" v-if="commentList.length == 0">
			<!-- <image
				src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
				class="icon-none"
				mode="aspectFit"
			></image> -->
			<text class="text-conmment-note">暂无评论</text>
		</view>
		<view v-if="commentList.length > 0" class="view-comment-list" v-for="(item, index) in commentList" :key="index">
			<image :src="item.HEADIMGURL" class="view-comment-list-item-photo" mode="aspectFill"></image>
			<view class="view-comment-list-item">
				<view class="comment-title">
					<text class="comment-name">{{ item.FIRSTNICKNAME }}</text>
					<view style="flex: 1;"></view>
					<image
						v-if="item.IS_PRAISE == 1"
						class="praise-icon"
						@click="clickPraise(item)"
						src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
						mode="aspectFill"
					></image>
					<!-- <image
						v-else
						class="praise-icon"
						@click="clickPraise(item)"
						src="data:image/png;base64,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"
						mode="aspectFill"
					></image> -->
					<!-- <text class="praise-num" style="margin-left: 10rpx;">{{ item.PRAISE_NUM }}</text> -->
				</view>
				<text class="comment-content">{{ item.COMMENT }}</text>
				<view class="comment-sub">
					<text class="comment-sub-time">{{ item.COMMENT_TIME }}</text>
					<view class="comment-sub-recomment" style="color: #999999;" v-if="item.CANDELETE == 1" @click="clickDelete(item)">删除</view>
					<view class="comment-sub-recomment" @click="clickRecomment(item)">回复</view>
				</view>
				<view class="comment-child" v-show="item.CHILD_ANWSER_LIST.length > 0">
					<view class="comment-child-item" v-for="(itemChild, indexChild) in item.CHILD_ANWSER_LIST" :key="indexChild">
						<text class="comment-child-item-name" @click="clickRecommentChild(itemChild)">{{ itemChild.FIRSTNICKNAME + '：' }}</text>
						<!-- <text class="comment-child-item-content">{{ (itemChild.SECONDNICKNAME ? '回复 ' + itemChild.SECONDNICKNAME + '：' : '') + itemChild.COMMENT }}</text> -->
						<text class="comment-child-item-content" v-if="itemChild.SECONDNICKNAME">回复</text>
						<text class="comment-child-item-content">{{ itemChild.SECONDNICKNAME ? itemChild.SECONDNICKNAME : '' }}</text>
						<text class="comment-child-item-content" v-if="itemChild.SECONDNICKNAME">：</text>
						<text class="comment-child-item-content">{{ itemChild.COMMENT }}</text>
						<text v-if="itemChild.CANDELETE == 1" class="comment-child-item-delete" @click="clickDeleteChild(itemChild)">删除</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'MulCommentList',
	//属性
	props: {
		commentList: {
			type: Array
		},
		title: {
			type: String,
			default: '网友评论'
		}
	},
	data() {
		return {};
	},
	onLoad: function(e) {},
	onShow: function() {
		console.log('最新评论', this.title, this.commentList);
	},
	methods: {
		/**
		 * 点赞
		 * @param {Object} item
		 */
		clickPraise(item) {
			this.$emit('clickPraise', item);
		},
		/**
		 * 回复 评论
		 * @param {Object} item
		 */
		clickRecomment(item) {
			this.$emit('clickRecomment', item);
		},
		/**
		 * 删除评论
		 * @param {Object} item
		 */
		clickDelete(item) {
			this.$emit('clickDelete', item);
		},
		/**
		 * 删除评论
		 * @param {Object} item
		 */
		clickDeleteChild(item) {
			this.$emit('clickDeleteChild', item);
		},
		/**
		 * 回复评论的评论
		 * @param {Object} item
		 */
		clickRecommentChild(item) {
			this.$emit('clickRecommentChild', item);
		}
	}
};
</script>

<style lang="scss">
// @import '@/common/css/iconfont.css';
.view-content-comment {
	background-color: white;
	margin-top: 20rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30rpx;
	.title {
		width: 100%;
		color: #333;
		font-weight: bold;
		font-size: 34rpx;
	}
}
.praise-icon {
	height: 40rpx;
	width: 40rpx;
	font-size: 36rpx;
	color: #999;
}
.praise-num {
	font-size: 26rpx;
	color: #999;
}

.view-conmment-note {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
	padding-bottom: 20rpx;
}
.icon-none {
	width: 200rpx;
	height: 200rpx;
	color: #bbbbbb;
}
.text-conmment-note {
	color: #808080;
	font-size: 32rpx;
	margin-top: 30rpx;
}

.border-line {
	border-bottom: 1px solid #f6f6f6;
}
.view-comment-list {
	width: 100%;
	display: flex;
	flex-direction: row;
	background-color: white;
	padding: 20rpx 0;
	border-bottom: 1px solid #f6f6f6;
}
.view-comment-list-item-photo {
	height: 80rpx;
	width: 80rpx;
	border-radius: 40rpx;
	border: 1px solid #f6f6f6;
}
.view-comment-list-item {
	margin-left: 16rpx;
	display: flex;
	flex: 1;
	flex-direction: column;
}
.comment-name {
	color: #666;
	font-size: 32rpx;
	display: flex;
	align-items: center;
}
.comment-title {
	align-items: center;
	display: flex;
	height: 60rpx;
	flex-direction: row;
}

.comment-content {
	color: #000000;
	font-size: 32rpx;
	font-weight: 500;
}
.comment-sub {
	display: flex;
	align-items: center;
	flex-direction: row;
	.comment-sub-time {
		color: #999;
		font-size: 26rpx;
	}
	.comment-sub-recomment {
		color: #666;
		font-size: 28rpx;
		padding: 0 0 0 20rpx;
	}
}
.comment-child {
	background-color: #f8f8f8;
	border-radius: 10rpx;
	padding: 0 20rpx;
}
.comment-child-item {
	flex-wrap: wrap;
	margin: 15rpx 0;
	display: flex;
	align-items: center;
	flex-direction: row;
	.comment-child-item-name {
		white-space: nowrap;
		font-size: 30rpx;
		color: #5074cf;
	}
	.comment-child-item-content {
		font-size: 30rpx;
		text-align: center;
	}
	.comment-child-item-delete {
		font-size: 28rpx;
		color: #999999;
		margin-left: 30rpx;
		text-align: center;
	}
}
</style>
