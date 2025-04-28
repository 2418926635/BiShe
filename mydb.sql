/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 80028
Source Host           : localhost:3306
Source Database       : mydb

Target Server Type    : MYSQL
Target Server Version : 80028
File Encoding         : 65001

Date: 2025-04-28 14:55:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for activity
-- ----------------------------
DROP TABLE IF EXISTS `activity`;
CREATE TABLE `activity` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '组团id',
  `projectname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '组团名称',
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '状态',
  `detail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin COMMENT '介绍',
  `img` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin COMMENT '图片',
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '地址',
  `parentid` int DEFAULT NULL COMMENT '人员发布id',
  `renshu` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '报名人数',
  `activitydate` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '报名截止时间',
  `yusuan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '预算',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of activity
-- ----------------------------
INSERT INTO `activity` VALUES ('12', '21321', '已审核', 0x3131, 0x687474703A2F2F6C6F63616C686F73743A383030302F696D672F32303234303432343230333132313332362E6A7067, 'null', '44', '121212', '2023-06-22', null);
INSERT INTO `activity` VALUES ('13', '来个组团', '已审核', 0x3132, 0x687474703A2F2F6C6F63616C686F73743A383030302F696D672F32303234303432343232323530373133352E6A7067, 'null', '44', '王企鹅请问请问', '2023-05-22', null);
INSERT INTO `activity` VALUES ('14', '我要去拉萨', '已审核', 0x3130, 0x687474703A2F2F6C6F63616C686F73743A383030302F696D672F32303234303432343232333733343432362E6A7067, 'null', '45', '跟随成功读书笔记很多事', '2023-09-22', null);
INSERT INTO `activity` VALUES ('15', 'XXX惠东', '已审核', 0x3132, 0x687474703A2F2F6C6F63616C686F73743A383030302F696D672F32303234303432353133343735393330332E6A7067, 'null', '47', '千万千万千万 ', '2023-06-22', '1K');
INSERT INTO `activity` VALUES ('16', 'BBB组团', '已审核', 0x3132, 0x687474703A2F2F6C6F63616C686F73743A383030302F696D672F32303234303432353133353030323239302E6A7067, 'null', '48', '请问额外企鹅请问', '2023-06-22', '1000');
INSERT INTO `activity` VALUES ('18', '12312', '已审核', 0x3233, 0x687474703A2F2F6C6F63616C686F73743A383030302F696D672F32303235303130333135323635353037322E6A7067, 'null', '50', '2312321', '2025-06-01', '13123');
INSERT INTO `activity` VALUES ('19', '去西山组团', '已审核', 0x736E636A6B73636273636E6B636E6C63636B6C6E63206B7A78630A63736463206E73646E63, 0x687474703A2F2F6C6F63616C686F73743A383030302F696D672F32303235303130333232343733313434342E6A7067, 'null', '50', '5', '2025-06-01', '100元');
INSERT INTO `activity` VALUES ('20', '组团去西山', '已审核', 0x35, 0x687474703A2F2F6C6F63616C686F73743A383030302F696D672F32303235303231333231333734343538322E6A7067, 'null', '9', '出版社出版四季花城北京吧闲杂 1', '2025-09-01', '1000元');
INSERT INTO `activity` VALUES ('21', '组织爬西山', '已审核', 0x323232, 0x687474703A2F2F6C6F63616C686F73743A383030302F696D672F32303235303231333232303931393933362E6A7067, 'null', '53', '111', '2025-06-01', '1000元');
INSERT INTO `activity` VALUES ('22', '标题', '已审核', 0x323232, 0x687474703A2F2F6C6F63616C686F73743A383030302F696D672F32303235303231333232313934353734312E6A7067, 'null', '53', '555555', '2025-06-01', '333');
INSERT INTO `activity` VALUES ('24', '23123', '已审核', 0x33323133323133, 0x687474703A2F2F6C6F63616C686F73743A383030302F696D672F32303235303231333232323330333936352E6A7067, 'null', '53', '21312', '2025-06-01', '2132');
INSERT INTO `activity` VALUES ('26', '王八蛋操', '已审核', '', 0x687474703A2F2F6C6F63616C686F73743A383030302F696D672F32303235303432373038353431393832392E6A7067, 'null', '9', '132', '2025-06-01', '3124124134');

-- ----------------------------
-- Table structure for announcement
-- ----------------------------
DROP TABLE IF EXISTS `announcement`;
CREATE TABLE `announcement` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '记录id',
  `datetime` datetime DEFAULT NULL COMMENT '创建日期',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '类型标题',
  `detail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin COMMENT '类型描述',
  `submitbody` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '发布人',
  `status` int DEFAULT NULL COMMENT '通知类型',
  `trans_pic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '停用',
  `detail2` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin COMMENT '停用',
  `detail3` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin COMMENT '停用',
  `detail4` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin COMMENT '停用',
  `tapstr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '停用',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of announcement
-- ----------------------------
INSERT INTO `announcement` VALUES ('24', '2025-04-27 08:57:02', 'XJQ的朋友圈', 0x786A71E79A84E69C8BE58F8BE59C88, 'xjq', null, '', '', '', '', '\"\"');
INSERT INTO `announcement` VALUES ('25', '2025-04-27 08:58:14', '321312321', 0x33313233E68993E58F91E68993E58F91E59CB0E696B9E59CB0E696B9E5958A, 'xjq', null, '', '', '', '', '\"\"');

-- ----------------------------
-- Table structure for artcle
-- ----------------------------
DROP TABLE IF EXISTS `artcle`;
CREATE TABLE `artcle` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '记录id',
  `descstr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '标题',
  `detail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin COMMENT '内容',
  `trans_pic` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin COMMENT '图片',
  `datetime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '发布时间',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '发布人',
  `usericon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '头像',
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '状态（待审核、已通过、已驳回）',
  `userid` int DEFAULT NULL COMMENT '发布人id',
  `tapstr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '论坛标签',
  `goodstatus` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '停用',
  `typetext` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '论坛类型',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of artcle
-- ----------------------------
INSERT INTO `artcle` VALUES ('34', '你大爷昨天去世', 0xE69292E697A6E58F91E4B8AAE9A1BAE4B8B0E5A4A7E6A682E5A3ABE5A4A7E5A4AB, 0x687474703A2F2F6C6F63616C686F73743A383030302F696D672F32303235303432373039303633383838302E6A7067, '2025-04-27 9:06:46', '张华', 'http://localhost:8000/img/20250213220131175.jpg', '已通过', '53', '43', '是', 'XJQ的朋友圈');
INSERT INTO `artcle` VALUES ('35', '傻卵', 0xE58FB8E6B395E69CBAE585B369E6898BE69CBAE58F91E59880E59295, 0x687474703A2F2F6C6F63616C686F73743A383030302F696D672F32303235303432373039303932383835362E6A7067, '2025-04-27 9:09:34', 'xjq', 'http://localhost:8000/img/20250427090103084.jpg', '已通过', '9', '234234', '是', '321312321');

-- ----------------------------
-- Table structure for artcle_chat
-- ----------------------------
DROP TABLE IF EXISTS `artcle_chat`;
CREATE TABLE `artcle_chat` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '评论记录id',
  `annid` int DEFAULT NULL COMMENT '当前公告id',
  `COMMENT_TIME` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '评论时间',
  `FIRSTNICKNAME` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '发送人',
  `IS_PRAISE` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '是否点赞（已停用）',
  `COMMENT` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '评论内容',
  `PRAISE_NUM` int DEFAULT NULL COMMENT '点赞数（已停用）',
  `CANDELETE` int DEFAULT NULL COMMENT '删除标记（已停用）',
  `HEADIMGURL` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '头像链接',
  `PARENTID` int DEFAULT NULL COMMENT '父评论id',
  `SECONDNICKNAME` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '接收人',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of artcle_chat
-- ----------------------------
INSERT INTO `artcle_chat` VALUES ('68', '15', '2024-04-17 11:31:06', '用户666', 'null', '22', '0', '0', 'http://localhost:8080/img/20230504201052805.jpg', '0', 'null');
INSERT INTO `artcle_chat` VALUES ('71', '14', '2024-04-17 23:17:29', '用户666', 'null', '21312', '0', '0', 'http://localhost:8000/img/20240417225022041.jpg', '0', 'null');
INSERT INTO `artcle_chat` VALUES ('73', '22', '2024-04-18 0:12:05', '用户222', 'null', '关于我切割器购物', '0', '0', 'http://localhost:8000/img/20240418000847117.jpg', '0', 'null');
INSERT INTO `artcle_chat` VALUES ('74', '22', '2024-04-18 0:12:08', '用户222', 'null', '122', '0', '0', 'http://localhost:8000/img/20240418000847117.jpg', '73', '用户222');
INSERT INTO `artcle_chat` VALUES ('75', '28', '2024-04-24 22:37:02', '用户333', 'null', '哈哈哈', '0', '0', 'http://localhost:8000/img/20240424223414407.jpg', '0', 'null');
INSERT INTO `artcle_chat` VALUES ('76', '27', '2024-04-24 22:38:52', '用户333', 'null', '哈哈哈', '0', '0', 'http://localhost:8000/img/20240424223414407.jpg', '0', 'null');
INSERT INTO `artcle_chat` VALUES ('77', '27', '2024-04-24 22:38:59', '用户333', 'null', 'emmmm', '0', '0', 'http://localhost:8000/img/20240424223414407.jpg', '76', '用户333');
INSERT INTO `artcle_chat` VALUES ('79', '30', '2025-01-03 15:27:52', '爬爬爬1', 'null', '312312312', '0', '0', 'http://localhost:8000/img/20250103151540804.jpg', '0', 'null');
INSERT INTO `artcle_chat` VALUES ('81', '31', '2025-01-03 22:52:23', 'ppp2', 'null', 'hahha', '0', '0', 'http://localhost:8000/img/20250103225007571.jpg', '0', 'null');
INSERT INTO `artcle_chat` VALUES ('82', '31', '2025-01-03 22:52:27', 'ppp2', 'null', '111', '0', '0', 'http://localhost:8000/img/20250103225007571.jpg', '81', 'ppp2');
INSERT INTO `artcle_chat` VALUES ('83', '30', '2025-01-03 22:52:34', 'ppp2', 'null', '111111', '0', '0', 'http://localhost:8000/img/20250103225007571.jpg', '0', 'null');
INSERT INTO `artcle_chat` VALUES ('84', '29', '2025-02-13 14:04:16', 'admin', 'null', '21312313', '0', '0', 'http://localhost:8080/img/20230425100430992.jpg', '0', 'null');
INSERT INTO `artcle_chat` VALUES ('85', '32', '2025-02-13 21:51:35', 'admin', 'null', '哈哈', '0', '0', 'http://localhost:8080/img/20230425100430992.jpg', '0', 'null');
INSERT INTO `artcle_chat` VALUES ('86', '32', '2025-02-13 21:51:38', 'admin', 'null', '1', '0', '0', 'http://localhost:8080/img/20230425100430992.jpg', '85', 'admin');
INSERT INTO `artcle_chat` VALUES ('89', '33', '2025-04-01 15:47:32', 'xjq', 'null', '哈哈', '0', '0', 'http://localhost:8080/img/20230425100430992.jpg', '0', 'null');
INSERT INTO `artcle_chat` VALUES ('90', '35', '2025-04-27 9:10:08', 'xjq', 'null', '好哈后', '0', '0', 'http://localhost:8000/img/20250427090103084.jpg', '0', 'null');

-- ----------------------------
-- Table structure for basemsg
-- ----------------------------
DROP TABLE IF EXISTS `basemsg`;
CREATE TABLE `basemsg` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userid` int DEFAULT NULL,
  `result1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '用于是定义事件类型',
  `result2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `result3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `result4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `result5` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `result6` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `result7` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `result8` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `result9` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `result10` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '用于反馈信息',
  `datetime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `trans_pic` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of basemsg
-- ----------------------------
INSERT INTO `basemsg` VALUES ('3', '9', '紧急通知', '21313', '3232132', '', '', '', '', '', '', '', '2025-02-12 23:04:10', 0x696D672F32303235303231323233303430333933342E6A70675E5E5E696D672F32303235303231323233303430383331362E6A7067);
INSERT INTO `basemsg` VALUES ('4', '9', '紧急通知', '13213', '213213', '', '', '', '', '', '', '', '2025-02-12 23:05:17', 0x696D672F32303235303231323233303531313838322E6A70675E5E5E696D672F32303235303231323233303531353032312E6A7067);
INSERT INTO `basemsg` VALUES ('5', '9', '紧急通知', '21312', '213213213', '', '', '', '', '', '', '', '2025-02-12 23:05:35', 0x696D672F32303235303231323233303532383630302E6A70675E5E5E696D672F32303235303231323233303533313439372E6A7067);
INSERT INTO `basemsg` VALUES ('6', '9', '缴费', '物业管理费', 'WUYGL0009', 'WUYGL000admin', '1111', null, null, null, null, null, '2025-02-13 11:28:27', null);
INSERT INTO `basemsg` VALUES ('7', '9', '缴费', '水费缴纳', 'WUYGL0009', 'admin', '123', null, null, null, null, null, '2025-02-13 11:29:18', null);
INSERT INTO `basemsg` VALUES ('8', '9', '报修', '墙体保修333', '王企鹅恶趣味', '王企鹅请问请问', null, null, null, null, null, null, '2025-02-13 14:26:13', 0x687474703A2F2F6C6F63616C686F73743A383030302F696D672F32303235303231333134323630393338372E6A7067);
INSERT INTO `basemsg` VALUES ('9', '9', '缴费', '物业管理费', 'WUYGL0009', 'admin', '556', null, null, null, null, null, '2025-02-13 21:37:06', null);
INSERT INTO `basemsg` VALUES ('10', '9', '访问', '', '张华', '18283848484', '李四', '11021', '3天', '上次洒出翠竹新村', null, '通过', '2025-02-13 21:43:50', 0x687474703A2F2F6C6F63616C686F73743A383030302F696D672F32303235303231333231343334383731302E6A7067);
INSERT INTO `basemsg` VALUES ('11', '53', '访问', '', '李四', '18384858585', '张华', '1101', '3天', '防爆电机好的VBDHV', null, '通过', '2025-02-13 22:12:14', 0x687474703A2F2F6C6F63616C686F73743A383030302F696D672F32303235303231333232313231313431382E6A7067);
INSERT INTO `basemsg` VALUES ('12', '53', '缴费', '水费缴纳', 'WUYGL00053', '张华', '112', null, null, null, null, null, '2025-02-13 22:13:07', null);
INSERT INTO `basemsg` VALUES ('13', '9', '缴费', '物业管理费', 'WUYGL0009', 'admin', '123', null, null, null, null, null, '2025-02-25 16:46:19', null);
INSERT INTO `basemsg` VALUES ('14', '9', '报修', '墙体保修', '热热', '', null, null, null, null, null, 'keyi ', '2025-02-25 16:47:23', '');
INSERT INTO `basemsg` VALUES ('15', '9', '缴费', '物业管理费', 'WUYGL0009', 'xjq', '123', null, null, null, null, null, '2025-04-02 9:36:30', null);
INSERT INTO `basemsg` VALUES ('16', '9', '报修', '家电报修', 'wwww', 'sdS', null, null, null, null, null, null, '2025-04-02 9:36:59', '');
INSERT INTO `basemsg` VALUES ('17', '9', '缴费', '物业管理费', 'WUYGL0009', 'xjq', '10000000000', null, null, null, null, null, '2025-04-27 8:49:46', null);
INSERT INTO `basemsg` VALUES ('18', '9', '报修', '家电报修', '王八蛋操', '', null, null, null, null, null, '1', '2025-04-27 8:50:39', 0x687474703A2F2F6C6F63616C686F73743A383030302F696D672F32303235303432373038353033383538342E6A7067);
INSERT INTO `basemsg` VALUES ('19', '53', '访问', '', '321', '3213', '213', '213', '3123', '', null, '通过', '2025-04-27 9:04:10', 0x687474703A2F2F6C6F63616C686F73743A383030302F696D672F32303235303432373039303430393238382E6A7067);

-- ----------------------------
-- Table structure for fans
-- ----------------------------
DROP TABLE IF EXISTS `fans`;
CREATE TABLE `fans` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '关注记录id',
  `userid` int DEFAULT NULL COMMENT '被关注人id',
  `fansuserid` int DEFAULT NULL COMMENT '关注人id',
  `datetime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of fans
-- ----------------------------
INSERT INTO `fans` VALUES ('5', '34', '37', '2024-04-17 18:16:32');
INSERT INTO `fans` VALUES ('7', '34', '34', '2024-04-17 21:43:03');
INSERT INTO `fans` VALUES ('8', '43', '43', '2024-04-17 23:44:16');
INSERT INTO `fans` VALUES ('9', '34', '44', '2024-04-18 00:11:56');
INSERT INTO `fans` VALUES ('11', '44', '43', '2024-04-18 00:15:11');
INSERT INTO `fans` VALUES ('14', '44', '44', '2024-04-24 22:25:37');
INSERT INTO `fans` VALUES ('16', '44', '45', '2024-04-24 22:38:47');
INSERT INTO `fans` VALUES ('17', '45', '44', '2024-04-24 22:40:06');
INSERT INTO `fans` VALUES ('18', '50', '50', '2025-01-03 15:27:39');
INSERT INTO `fans` VALUES ('19', '50', '51', '2025-01-03 22:52:19');
INSERT INTO `fans` VALUES ('20', '50', '9', '2025-02-13 14:04:18');
INSERT INTO `fans` VALUES ('22', '53', '53', '2025-02-13 22:06:38');
INSERT INTO `fans` VALUES ('23', '53', '9', '2025-04-01 15:47:35');

-- ----------------------------
-- Table structure for floor
-- ----------------------------
DROP TABLE IF EXISTS `floor`;
CREATE TABLE `floor` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '地点唯一ID',
  `datetime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '创建时间',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '地点名称',
  `detail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '描述',
  `submitbody` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '填写人',
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '状态',
  `trans_pic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '图片',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of floor
-- ----------------------------
INSERT INTO `floor` VALUES ('12', '2025-04-27 9:05:18', '你明天来我办公室一趟', '探讨一下人生哲学', 'xjq', '紧急通知', 'img/20250427090510270.jpg');

-- ----------------------------
-- Table structure for gongsimsg
-- ----------------------------
DROP TABLE IF EXISTS `gongsimsg`;
CREATE TABLE `gongsimsg` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `trans_pic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `detail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `fee1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `fee2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `fee3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `fee4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of gongsimsg
-- ----------------------------
INSERT INTO `gongsimsg` VALUES ('2', '融合物业', 'img/20250212232155504.jpg', 0xE68890E69CACE6A0B8E7AE97E68890E69CACE4BBB7E595A5E983BDE4B88DE59083E587A0E59388E5A4A7E69292E68A8AE587BA0AE68890E983BDE5B7B4E98082E5BE97E5BE88E5B0B1E5B7AEE4B88DE5A49AE6898BE69CBAE88CB6E590A7E69CBAE5A4A7E69292E68A8A0AE698AFE5B7AEE4B88DE5A49AE697B6E997B4E68890E69CACE794B5E8A786E589A7E5889DE585ABE79A84E8AEBEE8AEA1E88CB6E590A7E69CBAE698AF0AE59083E79A84E6AF94E8BE83E5B091E78886E78292E6B19FE6B996E4BD86E698AFE590A7E588BAE6BF80E5BE88E5A4A7E88AB1E6B492E59083E590A7, '2', '3', '4', '6');

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '路线记录id',
  `datetime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '创建日期',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '标题',
  `mdd` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin COMMENT '停用',
  `submitbody` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '发布人',
  `status` int DEFAULT NULL COMMENT '停用',
  `trans_pic` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin COMMENT '图片',
  `keywordstr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '关键词',
  `jtfs` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin COMMENT '停用',
  `xingcheng` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin COMMENT '经纬度',
  `zhuyi` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin COMMENT '注意事项',
  `fee` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '停用',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('17', '2025-03-28 10:08:18', '游乐场', 0xE69A82E697A0, 'xjq', '0', '', null, 0x313232, 0x3131382E39393835352C33322E3136333834, 0x323232, null);
INSERT INTO `news` VALUES ('18', '2025-02-13 21:35:10', '公共卫生间', 0xE8B7AFE7BABFE7AEA1E79086E58A9FE883BDE698AFE5A4A7E5ADA6E7949FE79A84E7A9B7E6B8B8E4BA92E58AA9E7B3BBE7BB9FE4B8ADE79A84E6A0B8E5BF83E58A9FE883BDE4B98BE4B880E38082E9809AE8BF87E8AFA5E58A9FE883BDEFBC8CE794A8E688B7E58FAFE4BBA5E5889BE5BBBAE38081E7BC96E8BE91E5928CE58886E4BAABE887AAE5B7B1E79A84E69785E8A18CE8B7AFE7BABFEFBC8CE5908CE697B6E4B99FE58FAFE4BBA5E6B58FE8A788E585B6E4BB96E794A8E688B7E58886E4BAABE79A84E8B7AFE7BABFE38082E59CA8E8B7AFE7BABFE7AEA1E79086E58A9FE883BDE4B8ADEFBC8CE794A8E688B7E58FAFE4BBA5E6B7BBE58AA0E79BAEE79A84E59CB0E38081E8AEBEE7BDAEE8A18CE7A88BE697B6E997B4E38081E98089E68BA9E4BAA4E9809AE696B9E5BC8FE4BBA5E58F8AE6B7BBE58AA0E699AFE782B9E5928CE6B4BBE58AA8E7AD89E4BFA1E681AFE38082E794A8E688B7E58FAFE4BBA5E6A0B9E68DAEE887AAE5B7B1E79A84E585B4E8B6A3E5928CE697B6E997B4E5AE89E68E92E69DA5E8A784E58892E69785E8A18CE8B7AFE7BABFEFBC8CE5B9B6E5B086E585B6E4BF9DE5AD98E59CA8E7B3BBE7BB9FE4B8ADE8BF9BE8A18CE7AEA1E79086E5928CE58886E4BAABE38082E585B6E4BB96E794A8E688B7E58FAFE4BBA5E6B58FE8A788E8BF99E4BA9BE8B7AFE7BABFEFBC8CE88EB7E58F96E781B5E6849FE38081E58F82E88083E5928CE69785E8A18CE5BBBAE8AEAEE38082E6ADA4E5A496EFBC8CE794A8E688B7E8BF98E58FAFE4BBA5E5AFB9E887AAE5B7B1E79A84E8B7AFE7BABFE8BF9BE8A18CE7BC96E8BE91E5928CE69BB4E696B0EFBC8CE4BBA5E4BEBFE6A0B9E68DAEE5AE9EE99985E68385E586B5E8BF9BE8A18CE8B083E695B4E5928CE4BFAEE694B9E38082E8B7AFE7BABFE7AEA1E79086E58A9FE883BDE68F90E4BE9BE4BA86E4BEBFE68DB7E79A84E5B7A5E585B7E5928CE5B9B3E58FB0EFBC8CE4BDBFE794A8E688B7E58FAFE4BBA5E69BB4E5A5BDE59CB0E7BB84E7BB87E5928CE8A784E58892E887AAE5B7B1E79A84E69785E8A18CEFBC8CE58585E58886E588A9E794A8E697B6E997B4E5928CE8B584E6BA90EFBC8CE5908CE697B6E4B99FE4BF83E8BF9BE794A8E688B7E4B98BE997B4E79A84E4BAA4E6B581E5928CE58886E4BAABE69785E8A18CE7BB8FE9AA8CE38082, 'admin', '0', '', null, null, 0x312C31, null, null);
INSERT INTO `news` VALUES ('19', '2025-02-13 21:35:17', '篮球馆', 0xE69A82E697A0, 'admin', '0', '', null, null, 0x362C34, null, null);
INSERT INTO `news` VALUES ('20', '2025-02-13 21:35:24', '羽毛球馆', 0xE69A82E697A0, 'admin', '0', '', null, null, 0x312C31, null, null);
INSERT INTO `news` VALUES ('21', '2025-02-13 21:35:43', '乒乓球馆', 0xE69A82E697A0, 'admin', '0', '', null, null, 0x332C33, null, null);
INSERT INTO `news` VALUES ('23', '2025-02-13 21:36:20', '游泳馆', 0xE6B8B8E6B3B3E9A686, 'admin', '0', '', null, null, 0x322C32, null, null);
INSERT INTO `news` VALUES ('24', '2025-02-13 21:53:21', '棋牌室', 0xE6A38BE7898CE5AEA4, 'admin', '0', '', null, null, 0x3130362E3131312C32332E34333434, 0x736164E599B6E5A4A7E6A682E697B6E997B4E998BFE9AAA8E68993E587BA76E887AAE5B7B1E58699, null);

-- ----------------------------
-- Table structure for operation
-- ----------------------------
DROP TABLE IF EXISTS `operation`;
CREATE TABLE `operation` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '记录id',
  `userid` int DEFAULT NULL COMMENT '用户id',
  `shopid` int DEFAULT NULL COMMENT '事项id',
  `shopname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '事项名称',
  `datetime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '操作时间',
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '操作类型',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of operation
-- ----------------------------
INSERT INTO `operation` VALUES ('4', '78', '34', '测试', '2024-01-26 00:28:13', '点踩');
INSERT INTO `operation` VALUES ('5', '78', '33', '发一个心情', '2024-01-26 09:17:22', '收藏');
INSERT INTO `operation` VALUES ('8', '78', '35', '测试地址', '2024-01-26 10:12:04', '点踩');
INSERT INTO `operation` VALUES ('9', '78', '31', '今天心情不错', '2024-01-26 10:27:50', '收藏');
INSERT INTO `operation` VALUES ('10', '79', '36', 'demo02', '2024-01-29 11:33:08', '收藏');
INSERT INTO `operation` VALUES ('11', '79', '36', 'demo02', '2024-01-29 11:33:10', '点踩');
INSERT INTO `operation` VALUES ('13', '81', '37', '这个家菜不错', '2024-02-01 18:36:02', '点赞');
INSERT INTO `operation` VALUES ('14', '84', '32', 'hahaha', '2024-03-15 14:41:51', '收藏');
INSERT INTO `operation` VALUES ('15', '84', '40', '23212', '2024-03-15 14:45:00', '收藏');
INSERT INTO `operation` VALUES ('17', '34', '15', '我问额外', '2024-04-17 12:07:15', '点踩');
INSERT INTO `operation` VALUES ('19', '37', '15', '我问额外', '2024-04-17 12:07:43', '点踩');
INSERT INTO `operation` VALUES ('20', '34', '0', null, '2024-04-17 14:49:25', null);
INSERT INTO `operation` VALUES ('22', '37', '15', '我问额外', '2024-04-17 16:34:45', '点赞');
INSERT INTO `operation` VALUES ('23', '37', '14', '我问额外', '2024-04-17 18:16:45', '收藏');
INSERT INTO `operation` VALUES ('24', '34', '16', '还哦发hiu厚度好吃', '2024-04-17 22:15:44', '点踩');
INSERT INTO `operation` VALUES ('25', '34', '14', '我问额外', '2024-04-17 22:26:28', '点赞');
INSERT INTO `operation` VALUES ('26', '34', '14', '我问额外', '2024-04-17 23:17:20', '收藏');
INSERT INTO `operation` VALUES ('27', '43', '25', '这个文章不太行', '2024-04-17 23:44:11', '收藏');
INSERT INTO `operation` VALUES ('28', '43', '25', '这个文章不太行', '2024-04-17 23:44:14', '点赞');
INSERT INTO `operation` VALUES ('34', '44', '25', '这个文章不太行', '2024-04-24 20:49:33', '收藏');
INSERT INTO `operation` VALUES ('35', '44', '26', '给乔沃维奇', '2024-04-24 22:25:40', '点赞');
INSERT INTO `operation` VALUES ('36', '45', '27', 'wqeewqe', '2024-04-24 22:38:48', '收藏');
INSERT INTO `operation` VALUES ('38', '44', '28', '五个驱蚊器', '2024-04-24 22:40:09', '点赞');
INSERT INTO `operation` VALUES ('39', '50', '30', '12321', '2025-01-03 15:27:41', '收藏');
INSERT INTO `operation` VALUES ('40', '50', '30', '12321', '2025-01-03 15:27:41', '点踩');
INSERT INTO `operation` VALUES ('42', '50', '30', '12321', '2025-01-03 15:27:44', '点赞');
INSERT INTO `operation` VALUES ('44', '51', '31', '这是一个好帖子', '2025-01-03 22:52:17', '点赞');
INSERT INTO `operation` VALUES ('49', '53', '33', '工程局深V车架号', '2025-02-13 22:06:40', '点赞');
INSERT INTO `operation` VALUES ('50', '9', '35', '傻卵', '2025-04-27 09:10:10', '收藏');
INSERT INTO `operation` VALUES ('51', '9', '35', '傻卵', '2025-04-27 09:10:11', '点赞');

-- ----------------------------
-- Table structure for submitdata
-- ----------------------------
DROP TABLE IF EXISTS `submitdata`;
CREATE TABLE `submitdata` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '反馈记录id',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '标题',
  `detail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '内容',
  `submitbody` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '留言人',
  `trans_pic` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin COMMENT '图片',
  `typetext` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '类型',
  `fankui` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin COMMENT '反馈',
  `datetime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of submitdata
-- ----------------------------
INSERT INTO `submitdata` VALUES ('38', '你丫的', '撒就覅到飞机离开j', 'xjq', 0x687474703A2F2F6C6F63616C686F73743A383030302F696D672F32303235303432373038353131343636382E6A7067, '物业反馈', 0x3132333132333133, '2025-04-27 8:51:22');

-- ----------------------------
-- Table structure for userdata
-- ----------------------------
DROP TABLE IF EXISTS `userdata`;
CREATE TABLE `userdata` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `empNo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '账号',
  `userName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '姓名',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '邮箱',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '密码',
  `mobile` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '电话',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '备注',
  `sex` int DEFAULT NULL COMMENT '停用',
  `role` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '角色',
  `status` int DEFAULT NULL COMMENT '状态',
  `isadmin` int DEFAULT NULL COMMENT '管理员标记',
  `trans_pic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '头像',
  `tapstr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '停用',
  `taptext` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '停用',
  `school` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '户号',
  `nl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '停用',
  `stu_pic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '房屋证照',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of userdata
-- ----------------------------
INSERT INTO `userdata` VALUES ('9', '123', 'xjq', '2418926635@qq.com', '123', '13862895663', null, '0', '管理员', '0', '0', 'http://localhost:8000/img/20250427090103084.jpg', '', '', null, null, null);
INSERT INTO `userdata` VALUES ('26', 'yonghu999', '用户9999', '12121221@qq.com', 'null', '18474576745', '', '0', '用户', '1', '0', null, null, null, null, null, null);
INSERT INTO `userdata` VALUES ('28', 'yonghu08', '用户08', '1212112@qq.com', '888888', '18487137234', '', '0', '用户', '1', '1', 'http://localhost:8080/img/20230425100031561.jpg', null, null, null, null, null);
INSERT INTO `userdata` VALUES ('31', 'yonghu05', '用户05', '12121@qq.com', '55555', '18487347567', null, '0', '用户', '1', '0', 'http://localhost:8080/img/20230425132952084.jpg', null, null, null, null, null);
INSERT INTO `userdata` VALUES ('34', 'yonghu06', '用户666', '1212333312@qq.com', '123456', '18374564567', null, '0', '用户', '1', '0', 'http://localhost:8000/img/20240417225022041.jpg', '', '', null, null, null);
INSERT INTO `userdata` VALUES ('36', 'yonghu123', '用户123', '1212122@qq.com', '123456', '18487346554', '', '0', '用户', '1', '1', 'http://localhost:8080/img/20230504204209009.jpg', null, null, null, null, null);
INSERT INTO `userdata` VALUES ('38', 'hhh02', '哈哈哈22', '2131312@qq.com', '333333', '18485767567', '', null, '用户', '1', '1', null, null, null, null, null, null);
INSERT INTO `userdata` VALUES ('47', 'user789', '用户789', '2121121221@qq.com', '123abc', '13645566789', '', '0', '用户', '0', '1', 'http://localhost:8000/img/20240425134405268.jpg', '', '', 'AAA大学', '23', 'http://localhost:8000/img/20240425134409511.jpg');
INSERT INTO `userdata` VALUES ('48', 'user888', '用户888', '2121223322@qq.com', '123abc', '18485868788', '', '0', '用户', '0', '1', 'http://localhost:8000/img/20240425134908736.jpg', '', '', 'AA大学', '23', 'http://localhost:8000/img/20240425134912111.jpg');
INSERT INTO `userdata` VALUES ('52', 'yyy1', '嘤嘤嘤', '213213123@qq.com', '123abc', '18487452124', '', '-1', '用户', '0', '1', 'http://localhost:8000/img/20250213215445103.jpg', '', '', '1栋1单元101', '0', 'http://localhost:8000/img/20250213215447309.jpg');
INSERT INTO `userdata` VALUES ('53', 'yyy2', '张华', '123213213@qq.com', '123abc', '18487878987', '', '-1', '用户', '0', '1', 'http://localhost:8000/img/20250213220131175.jpg', '', '', '11栋1单元111', '0', 'http://localhost:8000/img/20250213220135762.jpg');
INSERT INTO `userdata` VALUES ('54', '123', 'xxx', 'xxxxxxx', '123', '13862895663', '', '-1', '用户', '1', '1', 'http://localhost:8000/img/20250225165054565.jpg', '', '', '503', '0', 'http://localhost:8000/img/20250225165058827.jpg');

-- ----------------------------
-- Table structure for user_activity
-- ----------------------------
DROP TABLE IF EXISTS `user_activity`;
CREATE TABLE `user_activity` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '报名id',
  `userid` int DEFAULT NULL COMMENT '用户id',
  `activityid` int DEFAULT NULL COMMENT '组团id',
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '报名状态',
  `datetime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '报名时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user_activity
-- ----------------------------
INSERT INTO `user_activity` VALUES ('14', '44', '12', '待审核', '2024-04-24 21:08:06');
INSERT INTO `user_activity` VALUES ('16', '45', '13', '待审核', '2024-04-24 22:37:59');
INSERT INTO `user_activity` VALUES ('19', '50', '18', '待审核', '2025-01-03 15:27:27');
INSERT INTO `user_activity` VALUES ('21', '51', '19', '待审核', '2025-01-03 22:51:07');
INSERT INTO `user_activity` VALUES ('22', '53', '24', '待审核', '2025-02-13 22:23:51');
INSERT INTO `user_activity` VALUES ('23', '9', '16', '待审核', '2025-04-01 15:41:26');
INSERT INTO `user_activity` VALUES ('24', '9', '12', '待审核', '2025-04-02 9:37:49');
INSERT INTO `user_activity` VALUES ('25', '53', '26', '待审核', '2025-04-27 9:03:35');
