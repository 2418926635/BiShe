/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50743
 Source Host           : localhost:3307
 Source Schema         : db_data94

 Target Server Type    : MySQL
 Target Server Version : 50743
 File Encoding         : 65001

 Date: 14/02/2025 09:27:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for activity
-- ----------------------------
DROP TABLE IF EXISTS `activity`;
CREATE TABLE `activity`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '组团id',
  `projectname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '组团名称',
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '状态',
  `detail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '介绍',
  `img` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '图片',
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '地址',
  `parentid` int(11) NULL DEFAULT NULL COMMENT '人员发布id',
  `renshu` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '报名人数',
  `activitydate` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '报名截止时间',
  `yusuan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '预算',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of activity
-- ----------------------------
INSERT INTO `activity` VALUES (12, '21321', '已审核', '11', 'http://localhost:8000/img/20240424203121326.jpg', 'null', 44, '121212', '2023-06-22', NULL);
INSERT INTO `activity` VALUES (13, '来个组团', '已审核', '12', 'http://localhost:8000/img/20240424222507135.jpg', 'null', 44, '王企鹅请问请问', '2023-05-22', NULL);
INSERT INTO `activity` VALUES (14, '我要去拉萨', '已审核', '10', 'http://localhost:8000/img/20240424223734426.jpg', 'null', 45, '跟随成功读书笔记很多事', '2023-09-22', NULL);
INSERT INTO `activity` VALUES (15, 'XXX惠东', '已审核', '12', 'http://localhost:8000/img/20240425134759303.jpg', 'null', 47, '千万千万千万 ', '2023-06-22', '1K');
INSERT INTO `activity` VALUES (16, 'BBB组团', '已审核', '12', 'http://localhost:8000/img/20240425135002290.jpg', 'null', 48, '请问额外企鹅请问', '2023-06-22', '1000');
INSERT INTO `activity` VALUES (18, '12312', '已审核', '23', 'http://localhost:8000/img/20250103152655072.jpg', 'null', 50, '2312321', '2025-06-01', '13123');
INSERT INTO `activity` VALUES (19, '去西山组团', '已审核', 'sncjkscbscnkcnlccklnc kzxc\ncsdc nsdnc', 'http://localhost:8000/img/20250103224731444.jpg', 'null', 50, '5', '2025-06-01', '100元');
INSERT INTO `activity` VALUES (20, '组团去西山', '已审核', '5', 'http://localhost:8000/img/20250213213744582.jpg', 'null', 9, '出版社出版四季花城北京吧闲杂 1', '2025-09-01', '1000元');
INSERT INTO `activity` VALUES (21, '组织爬西山', '已审核', '222', 'http://localhost:8000/img/20250213220919936.jpg', 'null', 53, '111', '2025-06-01', '1000元');
INSERT INTO `activity` VALUES (22, '标题', '已审核', '222', 'http://localhost:8000/img/20250213221945741.jpg', 'null', 53, '555555', '2025-06-01', '333');
INSERT INTO `activity` VALUES (24, '23123', '已审核', '3213213', 'http://localhost:8000/img/20250213222303965.jpg', 'null', 53, '21312', '2025-06-01', '2132');

-- ----------------------------
-- Table structure for announcement
-- ----------------------------
DROP TABLE IF EXISTS `announcement`;
CREATE TABLE `announcement`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '记录id',
  `datetime` datetime(0) NULL DEFAULT NULL COMMENT '创建日期',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '类型标题',
  `detail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '类型描述',
  `submitbody` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '发布人',
  `status` int(11) NULL DEFAULT NULL COMMENT '通知类型',
  `trans_pic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '停用',
  `detail2` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '停用',
  `detail3` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '停用',
  `detail4` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '停用',
  `tapstr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '停用',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of announcement
-- ----------------------------
INSERT INTO `announcement` VALUES (15, '2025-02-13 21:24:19', '社区论坛', 'dfdsfsaffsdfs', '杨小俊', NULL, 'img/20240205172617478.jpg', '', '', '', '\"\"');
INSERT INTO `announcement` VALUES (16, '2025-02-13 21:24:36', '邻里互助', 'sadsadasdasdas', '杨小俊', NULL, 'img/20240205205346479.jpg^^^img/20240205205349145.jpg^^^img/20240205205356242.jpg^^^img/20240205205359943.jpg', '', '', '', '\"\"');
INSERT INTO `announcement` VALUES (17, '2025-02-13 21:24:47', '二手交易', '不给你谈何容易沙发啊', '杨小俊', NULL, 'img/20240217221310005.jpg', '', '', '', '\"\"');
INSERT INTO `announcement` VALUES (19, '2025-02-13 21:24:55', '社区相册', 'v的深V都是十分水电费沙发上', '杨小俊', NULL, 'img/20240218000235283.jpg', '', '', '', '\"\"');
INSERT INTO `announcement` VALUES (22, '2025-02-13 21:25:02', '其他', '大杀四方方式1212', 'admin', NULL, '', '', '', '', '\"\"');

-- ----------------------------
-- Table structure for artcle
-- ----------------------------
DROP TABLE IF EXISTS `artcle`;
CREATE TABLE `artcle`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '记录id',
  `descstr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '标题',
  `detail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '内容',
  `trans_pic` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '图片',
  `datetime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '发布时间',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '发布人',
  `usericon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '头像',
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '状态（待审核、已通过、已驳回）',
  `userid` int(11) NULL DEFAULT NULL COMMENT '发布人id',
  `tapstr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '论坛标签',
  `goodstatus` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '停用',
  `typetext` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '论坛类型',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 34 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of artcle
-- ----------------------------
INSERT INTO `artcle` VALUES (17, '这是一个好文章', '冰川时代纯白花嫁才不会胶擦审查萨达瓦v局出具手打刚擦v干哈大V\n成都商报成都市爆炒江湖吃吧合计才送达吃撒大V接车v\n超声波城建大厦北城街道吃吧合计吃吧受打击吃吧问哈吃吧好擦时擦v的沙棘茶v登记处VS都差VS超级好vDVD成本东城办事处办事处', 'http://localhost:8000/img/20240417232741979.jpg,http://localhost:8000/img/20240417232745066.jpg', '2024-04-17 23:27:58', '用户666', 'http://localhost:8000/img/20240417225022041.jpg', '已通过', 34, '很好#非常版#五星', '是', 'A类帖子');
INSERT INTO `artcle` VALUES (18, '这是一个好文章2', '冰川时代纯白花嫁才不会胶擦审查萨达瓦v局出具手打刚擦v干哈大V\n成都商报成都市爆炒江湖吃吧合计才送达吃撒大V接车v\n超声波城建大厦北城街道吃吧合计吃吧受打击吃吧问哈吃吧好擦时擦v的沙棘茶v登记处VS都差VS超级好vDVD成本东城办事处办事处', 'http://localhost:8000/img/20240417232741979.jpg,http://localhost:8000/img/20240417232745066.jpg', '2024-04-17 23:27:58', '用户666', 'http://localhost:8000/img/20240417225022041.jpg', '已通过', 34, '很好#非常版#五星', '是', 'B类帖子');
INSERT INTO `artcle` VALUES (19, '这是一个好文章3', '冰川时代纯白花嫁才不会胶擦审查萨达瓦v局出具手打刚擦v干哈大V\n成都商报成都市爆炒江湖吃吧合计才送达吃撒大V接车v\n超声波城建大厦北城街道吃吧合计吃吧受打击吃吧问哈吃吧好擦时擦v的沙棘茶v登记处VS都差VS超级好vDVD成本东城办事处办事处', 'http://localhost:8000/img/20240417232741979.jpg,http://localhost:8000/img/20240417232745066.jpg', '2024-04-17 23:27:58', '用户666', 'http://localhost:8000/img/20240417225022041.jpg', '已通过', 34, '很好#非常版#五星', '否', 'B类帖子');
INSERT INTO `artcle` VALUES (20, '这是一个好文章4', '冰川时代纯白花嫁才不会胶擦审查萨达瓦v局出具手打刚擦v干哈大V\n成都商报成都市爆炒江湖吃吧合计才送达吃撒大V接车v\n超声波城建大厦北城街道吃吧合计吃吧受打击吃吧问哈吃吧好擦时擦v的沙棘茶v登记处VS都差VS超级好vDVD成本东城办事处办事处', 'http://localhost:8000/img/20240417232741979.jpg,http://localhost:8000/img/20240417232745066.jpg', '2024-04-17 23:27:58', '用户666', 'http://localhost:8000/img/20240417225022041.jpg', '已通过', 34, '很好#非常版#五星', '否', 'C类帖子');
INSERT INTO `artcle` VALUES (21, '这是一个好文章5', '冰川时代纯白花嫁才不会胶擦审查萨达瓦v局出具手打刚擦v干哈大V\n成都商报成都市爆炒江湖吃吧合计才送达吃撒大V接车v\n超声波城建大厦北城街道吃吧合计吃吧受打击吃吧问哈吃吧好擦时擦v的沙棘茶v登记处VS都差VS超级好vDVD成本东城办事处办事处', 'http://localhost:8000/img/20240417232741979.jpg,http://localhost:8000/img/20240417232745066.jpg', '2024-04-17 23:27:58', '用户666', 'http://localhost:8000/img/20240417225022041.jpg', '已通过', 34, '很好#非常版#五星', '是', 'A类帖子');
INSERT INTO `artcle` VALUES (22, '这是一个好文章6', '冰川时代纯白花嫁才不会胶擦审查萨达瓦v局出具手打刚擦v干哈大V\n成都商报成都市爆炒江湖吃吧合计才送达吃撒大V接车v\n超声波城建大厦北城街道吃吧合计吃吧受打击吃吧问哈吃吧好擦时擦v的沙棘茶v登记处VS都差VS超级好vDVD成本东城办事处办事处', 'http://localhost:8000/img/20240417232741979.jpg,http://localhost:8000/img/20240417232745066.jpg', '2024-04-17 23:27:58', '用户666', 'http://localhost:8000/img/20240417225022041.jpg', '已通过', 34, '很好#非常版#五星', '否', 'D类帖子');
INSERT INTO `artcle` VALUES (23, '这是一个好文章7', '冰川时代纯白花嫁才不会胶擦审查萨达瓦v局出具手打刚擦v干哈大V\n成都商报成都市爆炒江湖吃吧合计才送达吃撒大V接车v\n超声波城建大厦北城街道吃吧合计吃吧受打击吃吧问哈吃吧好擦时擦v的沙棘茶v登记处VS都差VS超级好vDVD成本东城办事处办事处', 'http://localhost:8000/img/20240417232741979.jpg,http://localhost:8000/img/20240417232745066.jpg', '2024-04-17 23:27:58', '用户666', 'http://localhost:8000/img/20240417225022041.jpg', '已通过', 34, '很好#非常版#五星', '否', 'A类帖子');
INSERT INTO `artcle` VALUES (24, '这是一个好文章8', '冰川时代纯白花嫁才不会胶擦审查萨达瓦v局出具手打刚擦v干哈大V\n成都商报成都市爆炒江湖吃吧合计才送达吃撒大V接车v\n超声波城建大厦北城街道吃吧合计吃吧受打击吃吧问哈吃吧好擦时擦v的沙棘茶v登记处VS都差VS超级好vDVD成本东城办事处办事处', 'http://localhost:8000/img/20240417232741979.jpg,http://localhost:8000/img/20240417232745066.jpg', '2024-04-17 23:27:58', '用户666', 'http://localhost:8000/img/20240417225022041.jpg', '已通过', 34, '很好#非常版#五星', '否', 'A类帖子');
INSERT INTO `artcle` VALUES (25, '这个文章不太行', '吃的是草滨海机场市场价超级大深V陈少刚擦VS\n四川省农村寄快递说不出好几把成绩时擦手机\n超声波成绩册冰冻三尺白哈巴胶擦被杀穿', 'http://localhost:8000/img/20240417234307822.jpg', '2024-04-17 23:43:14', '用户111', 'http://localhost:8000/img/20240417233804026.jpg', '已通过', 43, '不好#一般', '是', 'A类帖子');
INSERT INTO `artcle` VALUES (26, '给乔沃维奇', '王企鹅我去巨神兵v好吧深V加啥\n办事处不时间长VSv和\n充不上电还差不多市场部手机吧', 'http://localhost:8000/img/20240418001056174.jpg,http://localhost:8000/img/20240418001058937.jpg', '2024-04-18 0:11:04', '用户222', 'http://localhost:8000/img/20240418000847117.jpg', '已通过', 44, '其味无穷#是的#轻微', '是', 'A类帖子');
INSERT INTO `artcle` VALUES (27, 'wqeewqe', 'wqewqewqe\nweqweqw', 'http://localhost:8000/img/20240424222442771.jpg', '2024-04-24 22:24:45', '用户222', 'http://localhost:8000/img/20240418000847117.jpg', '已通过', 44, '1211#qweq#q', '是', 'A类帖子');
INSERT INTO `artcle` VALUES (28, '五个驱蚊器', '2132113213去问问额\n、闻气味儿', 'http://localhost:8000/img/20240424223619701.jpg', '2024-04-24 22:36:24', '用户333', 'http://localhost:8000/img/20240424223414407.jpg', '已通过', 45, '王企鹅#王企鹅#嗯嗯', '是', 'B类帖子');
INSERT INTO `artcle` VALUES (29, '123213', '1231231', 'http://localhost:8000/img/20250103152110214.jpg', '2025-01-03 15:21:11', '爬爬爬1', 'http://localhost:8000/img/20250103151540804.jpg', '已通过', 50, '123#21#212#111', '是', 'A类帖子');
INSERT INTO `artcle` VALUES (30, '12321', '123123123', 'http://localhost:8000/img/20250103152255145.jpg,http://localhost:8000/img/20250103152257223.jpg', '2025-01-03 15:22:58', '爬爬爬1', 'http://localhost:8000/img/20250103151540804.jpg', '已通过', 50, '21312', '是', 'B类帖子');
INSERT INTO `artcle` VALUES (31, '这是一个好帖子', '出版社都差不多时间成本受打击和\n产生的奶茶加快速度内存卡手打缴纳', 'http://localhost:8000/img/20250103224513698.jpg,http://localhost:8000/img/20250103224515685.jpg', '2025-01-03 22:45:20', '爬爬爬1', 'http://localhost:8000/img/20250103151540804.jpg', '已通过', 50, '5新#服务好#性价比高', '是', 'VV类帖子');
INSERT INTO `artcle` VALUES (32, '王企鹅驱蚊器', '潇洒行啊上床下桌陈小姐张卡吃吧仔细金卡 ', 'http://localhost:8000/img/20250213215102035.jpg,http://localhost:8000/img/20250213215103861.jpg', '2025-02-13 21:51:06', 'admin', 'http://localhost:8080/img/20230425100430992.jpg', '已通过', 9, '求助#加紧', '是', '邻里互助');
INSERT INTO `artcle` VALUES (33, '工程局深V车架号', '差别不大说不定时间成本受打击\n成都思念成沙点击课程十八大年卡', 'http://localhost:8000/img/20250213220540152.jpg,http://localhost:8000/img/20250213220542538.jpg', '2025-02-13 22:05:46', '张华', 'http://localhost:8000/img/20250213220131175.jpg', '已通过', 53, '高端#大气#上档次', '是', '二手交易');

-- ----------------------------
-- Table structure for artcle_chat
-- ----------------------------
DROP TABLE IF EXISTS `artcle_chat`;
CREATE TABLE `artcle_chat`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '评论记录id',
  `annid` int(11) NULL DEFAULT NULL COMMENT '当前公告id',
  `COMMENT_TIME` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '评论时间',
  `FIRSTNICKNAME` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '发送人',
  `IS_PRAISE` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '是否点赞（已停用）',
  `COMMENT` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '评论内容',
  `PRAISE_NUM` int(11) NULL DEFAULT NULL COMMENT '点赞数（已停用）',
  `CANDELETE` int(11) NULL DEFAULT NULL COMMENT '删除标记（已停用）',
  `HEADIMGURL` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '头像链接',
  `PARENTID` int(11) NULL DEFAULT NULL COMMENT '父评论id',
  `SECONDNICKNAME` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '接收人',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 89 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of artcle_chat
-- ----------------------------
INSERT INTO `artcle_chat` VALUES (68, 15, '2024-04-17 11:31:06', '用户666', 'null', '22', 0, 0, 'http://localhost:8080/img/20230504201052805.jpg', 0, 'null');
INSERT INTO `artcle_chat` VALUES (71, 14, '2024-04-17 23:17:29', '用户666', 'null', '21312', 0, 0, 'http://localhost:8000/img/20240417225022041.jpg', 0, 'null');
INSERT INTO `artcle_chat` VALUES (73, 22, '2024-04-18 0:12:05', '用户222', 'null', '关于我切割器购物', 0, 0, 'http://localhost:8000/img/20240418000847117.jpg', 0, 'null');
INSERT INTO `artcle_chat` VALUES (74, 22, '2024-04-18 0:12:08', '用户222', 'null', '122', 0, 0, 'http://localhost:8000/img/20240418000847117.jpg', 73, '用户222');
INSERT INTO `artcle_chat` VALUES (75, 28, '2024-04-24 22:37:02', '用户333', 'null', '哈哈哈', 0, 0, 'http://localhost:8000/img/20240424223414407.jpg', 0, 'null');
INSERT INTO `artcle_chat` VALUES (76, 27, '2024-04-24 22:38:52', '用户333', 'null', '哈哈哈', 0, 0, 'http://localhost:8000/img/20240424223414407.jpg', 0, 'null');
INSERT INTO `artcle_chat` VALUES (77, 27, '2024-04-24 22:38:59', '用户333', 'null', 'emmmm', 0, 0, 'http://localhost:8000/img/20240424223414407.jpg', 76, '用户333');
INSERT INTO `artcle_chat` VALUES (79, 30, '2025-01-03 15:27:52', '爬爬爬1', 'null', '312312312', 0, 0, 'http://localhost:8000/img/20250103151540804.jpg', 0, 'null');
INSERT INTO `artcle_chat` VALUES (81, 31, '2025-01-03 22:52:23', 'ppp2', 'null', 'hahha', 0, 0, 'http://localhost:8000/img/20250103225007571.jpg', 0, 'null');
INSERT INTO `artcle_chat` VALUES (82, 31, '2025-01-03 22:52:27', 'ppp2', 'null', '111', 0, 0, 'http://localhost:8000/img/20250103225007571.jpg', 81, 'ppp2');
INSERT INTO `artcle_chat` VALUES (83, 30, '2025-01-03 22:52:34', 'ppp2', 'null', '111111', 0, 0, 'http://localhost:8000/img/20250103225007571.jpg', 0, 'null');
INSERT INTO `artcle_chat` VALUES (84, 29, '2025-02-13 14:04:16', 'admin', 'null', '21312313', 0, 0, 'http://localhost:8080/img/20230425100430992.jpg', 0, 'null');
INSERT INTO `artcle_chat` VALUES (85, 32, '2025-02-13 21:51:35', 'admin', 'null', '哈哈', 0, 0, 'http://localhost:8080/img/20230425100430992.jpg', 0, 'null');
INSERT INTO `artcle_chat` VALUES (86, 32, '2025-02-13 21:51:38', 'admin', 'null', '1', 0, 0, 'http://localhost:8080/img/20230425100430992.jpg', 85, 'admin');
INSERT INTO `artcle_chat` VALUES (87, 33, '2025-02-13 22:06:27', '张华', 'null', '哈哈哈', 0, 0, 'http://localhost:8000/img/20250213220131175.jpg', 0, 'null');
INSERT INTO `artcle_chat` VALUES (88, 33, '2025-02-13 22:06:34', '张华', 'null', '哦哦', 0, 0, 'http://localhost:8000/img/20250213220131175.jpg', 87, '张华');

-- ----------------------------
-- Table structure for basemsg
-- ----------------------------
DROP TABLE IF EXISTS `basemsg`;
CREATE TABLE `basemsg`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NULL DEFAULT NULL,
  `result1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '用于是定义事件类型',
  `result2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `result3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `result4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `result5` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `result6` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `result7` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `result8` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `result9` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `result10` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '用于反馈信息',
  `datetime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `trans_pic` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of basemsg
-- ----------------------------
INSERT INTO `basemsg` VALUES (3, 9, '紧急通知', '21313', '3232132', '', '', '', '', '', '', '', '2025-02-12 23:04:10', 'img/20250212230403934.jpg^^^img/20250212230408316.jpg');
INSERT INTO `basemsg` VALUES (4, 9, '紧急通知', '13213', '213213', '', '', '', '', '', '', '', '2025-02-12 23:05:17', 'img/20250212230511882.jpg^^^img/20250212230515021.jpg');
INSERT INTO `basemsg` VALUES (5, 9, '紧急通知', '21312', '213213213', '', '', '', '', '', '', '', '2025-02-12 23:05:35', 'img/20250212230528600.jpg^^^img/20250212230531497.jpg');
INSERT INTO `basemsg` VALUES (6, 9, '缴费', '物业管理费', 'WUYGL0009', 'WUYGL000admin', '1111', NULL, NULL, NULL, NULL, NULL, '2025-02-13 11:28:27', NULL);
INSERT INTO `basemsg` VALUES (7, 9, '缴费', '水费缴纳', 'WUYGL0009', 'admin', '123', NULL, NULL, NULL, NULL, NULL, '2025-02-13 11:29:18', NULL);
INSERT INTO `basemsg` VALUES (8, 9, '报修', '墙体保修333', '王企鹅恶趣味', '王企鹅请问请问', NULL, NULL, NULL, NULL, NULL, NULL, '2025-02-13 14:26:13', 'http://localhost:8000/img/20250213142609387.jpg');
INSERT INTO `basemsg` VALUES (9, 9, '缴费', '物业管理费', 'WUYGL0009', 'admin', '556', NULL, NULL, NULL, NULL, NULL, '2025-02-13 21:37:06', NULL);
INSERT INTO `basemsg` VALUES (10, 9, '访问', '', '张华', '18283848484', '李四', '11021', '3天', '上次洒出翠竹新村', NULL, '通过', '2025-02-13 21:43:50', 'http://localhost:8000/img/20250213214348710.jpg');
INSERT INTO `basemsg` VALUES (11, 53, '访问', '', '李四', '18384858585', '张华', '1101', '3天', '防爆电机好的VBDHV', NULL, '通过', '2025-02-13 22:12:14', 'http://localhost:8000/img/20250213221211418.jpg');
INSERT INTO `basemsg` VALUES (12, 53, '缴费', '水费缴纳', 'WUYGL00053', '张华', '112', NULL, NULL, NULL, NULL, NULL, '2025-02-13 22:13:07', NULL);

-- ----------------------------
-- Table structure for fans
-- ----------------------------
DROP TABLE IF EXISTS `fans`;
CREATE TABLE `fans`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '关注记录id',
  `userid` int(11) NULL DEFAULT NULL COMMENT '被关注人id',
  `fansuserid` int(11) NULL DEFAULT NULL COMMENT '关注人id',
  `datetime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of fans
-- ----------------------------
INSERT INTO `fans` VALUES (5, 34, 37, '2024-04-17 18:16:32');
INSERT INTO `fans` VALUES (7, 34, 34, '2024-04-17 21:43:03');
INSERT INTO `fans` VALUES (8, 43, 43, '2024-04-17 23:44:16');
INSERT INTO `fans` VALUES (9, 34, 44, '2024-04-18 00:11:56');
INSERT INTO `fans` VALUES (11, 44, 43, '2024-04-18 00:15:11');
INSERT INTO `fans` VALUES (14, 44, 44, '2024-04-24 22:25:37');
INSERT INTO `fans` VALUES (16, 44, 45, '2024-04-24 22:38:47');
INSERT INTO `fans` VALUES (17, 45, 44, '2024-04-24 22:40:06');
INSERT INTO `fans` VALUES (18, 50, 50, '2025-01-03 15:27:39');
INSERT INTO `fans` VALUES (19, 50, 51, '2025-01-03 22:52:19');
INSERT INTO `fans` VALUES (20, 50, 9, '2025-02-13 14:04:18');
INSERT INTO `fans` VALUES (21, 9, 9, '2025-02-13 21:51:46');
INSERT INTO `fans` VALUES (22, 53, 53, '2025-02-13 22:06:38');

-- ----------------------------
-- Table structure for floor
-- ----------------------------
DROP TABLE IF EXISTS `floor`;
CREATE TABLE `floor`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '地点唯一ID',
  `datetime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '创建时间',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '地点名称',
  `detail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '描述',
  `submitbody` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '填写人',
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '状态',
  `trans_pic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '图片',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of floor
-- ----------------------------
INSERT INTO `floor` VALUES (6, '2023-05-04 15:42:06', '通知01', '抽点时间超声波的基础上打卡吃吧双打卡初八是\n颤抖的手不错的实际库存巴萨的吃吧时擦巴萨没拿', 'admin', '活动通知', 'img/20240205172636743.jpg^^^img/20240205172639478.jpg');
INSERT INTO `floor` VALUES (7, '2024-02-17 22:14:46', '通知02', '13232222', 'admin', '活动通知', 'img/20240217221443108.jpg');
INSERT INTO `floor` VALUES (8, '2024-02-17 22:30:48', '通知03', '产生的吃的是草雕塑瓷厂手打超大是\n多吃点上次说的产生的', 'admin', '紧急通知', 'img/20240217223046187.jpg^^^img/20240217225310636.jpg');
INSERT INTO `floor` VALUES (9, '2024-02-18 0:05:46', '通知04', '吃的是草都是错的上厕所的超大是产生的吃的是草', 'admin', '紧急通知', 'img/20240218000541873.jpg');
INSERT INTO `floor` VALUES (10, '2024-04-17 23:41:06', '通知05', '成都互换覅十点半vVB话剧部韩剧不哈聚吧VB大V几把合计大V对吧好久不见', 'admin', '紧急通知', 'img/20240417234055916.jpg^^^img/20240417234100379.jpg');
INSERT INTO `floor` VALUES (11, '2024-04-18 0:06:14', '通知06', '你到家纳斯达克承诺书打卡机传达你刷卡时擦巴萨\n电脑参加考试多吃点健身卡', 'admin', '活动通知', 'img/20240418000611653.jpg');

-- ----------------------------
-- Table structure for gongsimsg
-- ----------------------------
DROP TABLE IF EXISTS `gongsimsg`;
CREATE TABLE `gongsimsg`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `trans_pic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `detail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL,
  `fee1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `fee2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `fee3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `fee4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gongsimsg
-- ----------------------------
INSERT INTO `gongsimsg` VALUES (2, '融合物业', 'img/20250212232151372.jpg^^^img/20250212232155504.jpg', '成本核算成本价啥都不吃几哈大撒把出\n成都巴适得很就差不多手机茶吧机大撒把\n是差不多时间成本电视剧初八的设计茶吧机是\n吃的比较少爆炒江湖但是吧刺激很大花洒吃吧', '2', '3', '4', '6');

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '路线记录id',
  `datetime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '创建日期',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '标题',
  `mdd` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '停用',
  `submitbody` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '发布人',
  `status` int(11) NULL DEFAULT NULL COMMENT '停用',
  `trans_pic` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '图片',
  `keywordstr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '关键词',
  `jtfs` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '停用',
  `xingcheng` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '经纬度',
  `zhuyi` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '注意事项',
  `fee` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '停用',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES (17, '2025-02-13 21:35:01', '游乐场', '暂无', 'admin', 0, '', NULL, '122', '106.21,23.3434', '222', NULL);
INSERT INTO `news` VALUES (18, '2025-02-13 21:35:10', '公共卫生间', '路线管理功能是大学生的穷游互助系统中的核心功能之一。通过该功能，用户可以创建、编辑和分享自己的旅行路线，同时也可以浏览其他用户分享的路线。在路线管理功能中，用户可以添加目的地、设置行程时间、选择交通方式以及添加景点和活动等信息。用户可以根据自己的兴趣和时间安排来规划旅行路线，并将其保存在系统中进行管理和分享。其他用户可以浏览这些路线，获取灵感、参考和旅行建议。此外，用户还可以对自己的路线进行编辑和更新，以便根据实际情况进行调整和修改。路线管理功能提供了便捷的工具和平台，使用户可以更好地组织和规划自己的旅行，充分利用时间和资源，同时也促进用户之间的交流和分享旅行经验。', 'admin', 0, '', NULL, NULL, '1,1', NULL, NULL);
INSERT INTO `news` VALUES (19, '2025-02-13 21:35:17', '篮球馆', '暂无', 'admin', 0, '', NULL, NULL, '6,4', NULL, NULL);
INSERT INTO `news` VALUES (20, '2025-02-13 21:35:24', '羽毛球馆', '暂无', 'admin', 0, '', NULL, NULL, '1,1', NULL, NULL);
INSERT INTO `news` VALUES (21, '2025-02-13 21:35:43', '乒乓球馆', '暂无', 'admin', 0, '', NULL, NULL, '3,3', NULL, NULL);
INSERT INTO `news` VALUES (23, '2025-02-13 21:36:20', '游泳馆', '游泳馆', 'admin', 0, '', NULL, NULL, '2,2', NULL, NULL);
INSERT INTO `news` VALUES (24, '2025-02-13 21:53:21', '棋牌室', '棋牌室', 'admin', 0, '', NULL, NULL, '106.111,23.4344', 'sad噶大概时间阿骨打出v自己写', NULL);

-- ----------------------------
-- Table structure for operation
-- ----------------------------
DROP TABLE IF EXISTS `operation`;
CREATE TABLE `operation`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '记录id',
  `userid` int(11) NULL DEFAULT NULL COMMENT '用户id',
  `shopid` int(11) NULL DEFAULT NULL COMMENT '事项id',
  `shopname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '事项名称',
  `datetime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '操作时间',
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '操作类型',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 50 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of operation
-- ----------------------------
INSERT INTO `operation` VALUES (4, 78, 34, '测试', '2024-01-26 00:28:13', '点踩');
INSERT INTO `operation` VALUES (5, 78, 33, '发一个心情', '2024-01-26 09:17:22', '收藏');
INSERT INTO `operation` VALUES (8, 78, 35, '测试地址', '2024-01-26 10:12:04', '点踩');
INSERT INTO `operation` VALUES (9, 78, 31, '今天心情不错', '2024-01-26 10:27:50', '收藏');
INSERT INTO `operation` VALUES (10, 79, 36, 'demo02', '2024-01-29 11:33:08', '收藏');
INSERT INTO `operation` VALUES (11, 79, 36, 'demo02', '2024-01-29 11:33:10', '点踩');
INSERT INTO `operation` VALUES (13, 81, 37, '这个家菜不错', '2024-02-01 18:36:02', '点赞');
INSERT INTO `operation` VALUES (14, 84, 32, 'hahaha', '2024-03-15 14:41:51', '收藏');
INSERT INTO `operation` VALUES (15, 84, 40, '23212', '2024-03-15 14:45:00', '收藏');
INSERT INTO `operation` VALUES (17, 34, 15, '我问额外', '2024-04-17 12:07:15', '点踩');
INSERT INTO `operation` VALUES (19, 37, 15, '我问额外', '2024-04-17 12:07:43', '点踩');
INSERT INTO `operation` VALUES (20, 34, 0, NULL, '2024-04-17 14:49:25', NULL);
INSERT INTO `operation` VALUES (22, 37, 15, '我问额外', '2024-04-17 16:34:45', '点赞');
INSERT INTO `operation` VALUES (23, 37, 14, '我问额外', '2024-04-17 18:16:45', '收藏');
INSERT INTO `operation` VALUES (24, 34, 16, '还哦发hiu厚度好吃', '2024-04-17 22:15:44', '点踩');
INSERT INTO `operation` VALUES (25, 34, 14, '我问额外', '2024-04-17 22:26:28', '点赞');
INSERT INTO `operation` VALUES (26, 34, 14, '我问额外', '2024-04-17 23:17:20', '收藏');
INSERT INTO `operation` VALUES (27, 43, 25, '这个文章不太行', '2024-04-17 23:44:11', '收藏');
INSERT INTO `operation` VALUES (28, 43, 25, '这个文章不太行', '2024-04-17 23:44:14', '点赞');
INSERT INTO `operation` VALUES (34, 44, 25, '这个文章不太行', '2024-04-24 20:49:33', '收藏');
INSERT INTO `operation` VALUES (35, 44, 26, '给乔沃维奇', '2024-04-24 22:25:40', '点赞');
INSERT INTO `operation` VALUES (36, 45, 27, 'wqeewqe', '2024-04-24 22:38:48', '收藏');
INSERT INTO `operation` VALUES (38, 44, 28, '五个驱蚊器', '2024-04-24 22:40:09', '点赞');
INSERT INTO `operation` VALUES (39, 50, 30, '12321', '2025-01-03 15:27:41', '收藏');
INSERT INTO `operation` VALUES (40, 50, 30, '12321', '2025-01-03 15:27:41', '点踩');
INSERT INTO `operation` VALUES (42, 50, 30, '12321', '2025-01-03 15:27:44', '点赞');
INSERT INTO `operation` VALUES (44, 51, 31, '这是一个好帖子', '2025-01-03 22:52:17', '点赞');
INSERT INTO `operation` VALUES (46, 9, 32, '王企鹅驱蚊器', '2025-02-13 21:51:42', '点赞');
INSERT INTO `operation` VALUES (49, 53, 33, '工程局深V车架号', '2025-02-13 22:06:40', '点赞');

-- ----------------------------
-- Table structure for submitdata
-- ----------------------------
DROP TABLE IF EXISTS `submitdata`;
CREATE TABLE `submitdata`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '反馈记录id',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '标题',
  `detail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '内容',
  `submitbody` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '留言人',
  `trans_pic` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '图片',
  `typetext` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '类型',
  `fankui` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL COMMENT '反馈',
  `datetime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 38 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of submitdata
-- ----------------------------
INSERT INTO `submitdata` VALUES (10, '111111111', '111111111111111', '杨小俊', 'http://localhost:8080/img/20230503013016125.jpg', '留言', '111111111111111111111112', '2023-05-03 1:30:17');
INSERT INTO `submitdata` VALUES (11, '111111111', '111111111111111', '杨小俊', 'http://localhost:8080/img/20230503013016125.jpg', '留言', '111111111111111111111112', '2023-05-03 1:30:17');
INSERT INTO `submitdata` VALUES (24, 'ceshi001', '1111', '哈哈哈02', 'http://localhost:8000/img/20240217220724786.jpg', '留言', 'v据监控VB吧v好吧v较大飞机', '2024-02-17 22:07:26');
INSERT INTO `submitdata` VALUES (25, '系统有问题', '21321312331312312311', '测试06', 'http://localhost:8000/img/20240218004412940.jpg', '申诉', '哪有问题32312', '2024-02-18 0:44:16');
INSERT INTO `submitdata` VALUES (26, '这个系统问题', '都市传说对称点四惠大厦说不哈', '用户111', 'http://localhost:8000/img/20240417234147742.jpg', '申诉', '多问问额', '2024-04-17 23:41:50');
INSERT INTO `submitdata` VALUES (27, '这个系统一般', '王企鹅去问问德赛电池打撒超大是', '用户222', 'http://localhost:8000/img/20240418000956628.jpg', '反馈', '我问问', '2024-04-18 0:09:58');
INSERT INTO `submitdata` VALUES (28, 'qwewe', 'weqeqew', '用户222', 'http://localhost:8000/img/20240424222422066.jpg', '反馈', '请问企鹅其味无穷额温枪', '2024-04-24 22:24:23');
INSERT INTO `submitdata` VALUES (29, '这个系统工鞥多', '王企鹅驱蚊器王企鹅', '用户333', 'http://localhost:8000/img/20240424223517060.jpg', '反馈', '哈哈哈', '2024-04-24 22:35:19');
INSERT INTO `submitdata` VALUES (30, 'hahah', '23121312qqqw', '爬爬爬1', 'http://localhost:8000/img/20250103151855577.jpg', '反馈', NULL, '2025-01-03 15:18:58');
INSERT INTO `submitdata` VALUES (31, '1122', '1111', '爬爬爬1', 'http://localhost:8000/img/20250103151918368.jpg', '反馈', NULL, '2025-01-03 15:19:19');
INSERT INTO `submitdata` VALUES (32, '1122', '1111', '爬爬爬1', 'http://localhost:8000/img/20250103151918368.jpg', '反馈', NULL, '2025-01-03 15:20:19');
INSERT INTO `submitdata` VALUES (33, '12321', '1231232', '爬爬爬1', 'http://localhost:8000/img/20250103152044816.jpg', '反馈', '33333333333', '2025-01-03 15:20:45');
INSERT INTO `submitdata` VALUES (34, 'wqeqeqweweq', 'wqeqweqweqeqee乔沃维奇卫栖梧', '爬爬爬1', 'http://localhost:8000/img/20250103224310570.jpg', '反馈', '哈哈哈啊哈哈', '2025-01-03 22:43:15');
INSERT INTO `submitdata` VALUES (35, 'eqwwq', 'wqeqwwwwwwwwwwwwww', 'admin', 'http://localhost:8000/img/20250213143643965.jpg', '活动反馈', NULL, '2025-02-13 14:36:47');
INSERT INTO `submitdata` VALUES (36, '尺寸不涉及', '出厂编号专项储备自行车吧', 'admin', 'http://localhost:8000/img/20250213213809307.jpg', '投诉', '撒潇洒啊', '2025-02-13 21:38:11');
INSERT INTO `submitdata` VALUES (37, '额外企鹅企鹅群', '额武切维奇问问企鹅请问', '张华', 'http://localhost:8000/img/20250213220403842.jpg', '建议', '抽点时间差不多说变就变', '2025-02-13 22:04:06');

-- ----------------------------
-- Table structure for user_activity
-- ----------------------------
DROP TABLE IF EXISTS `user_activity`;
CREATE TABLE `user_activity`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '报名id',
  `userid` int(11) NULL DEFAULT NULL COMMENT '用户id',
  `activityid` int(11) NULL DEFAULT NULL COMMENT '组团id',
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '报名状态',
  `datetime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '报名时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_activity
-- ----------------------------
INSERT INTO `user_activity` VALUES (14, 44, 12, '待审核', '2024-04-24 21:08:06');
INSERT INTO `user_activity` VALUES (16, 45, 13, '待审核', '2024-04-24 22:37:59');
INSERT INTO `user_activity` VALUES (19, 50, 18, '待审核', '2025-01-03 15:27:27');
INSERT INTO `user_activity` VALUES (21, 51, 19, '待审核', '2025-01-03 22:51:07');
INSERT INTO `user_activity` VALUES (22, 53, 24, '待审核', '2025-02-13 22:23:51');

-- ----------------------------
-- Table structure for userdata
-- ----------------------------
DROP TABLE IF EXISTS `userdata`;
CREATE TABLE `userdata`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `empNo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '账号',
  `userName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '姓名',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '邮箱',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '密码',
  `mobile` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '电话',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '备注',
  `sex` int(11) NULL DEFAULT NULL COMMENT '停用',
  `role` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '角色',
  `status` int(11) NULL DEFAULT NULL COMMENT '状态',
  `isadmin` int(11) NULL DEFAULT NULL COMMENT '管理员标记',
  `trans_pic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '头像',
  `tapstr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '停用',
  `taptext` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '停用',
  `school` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '户号',
  `nl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '停用',
  `stu_pic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '房屋证照',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 54 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of userdata
-- ----------------------------
INSERT INTO `userdata` VALUES (9, 'admin', 'admin', '18487137245@163.com', '123456', '18487137241', NULL, 0, '管理员', 0, 0, 'http://localhost:8080/img/20230425100430992.jpg', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `userdata` VALUES (26, 'yonghu999', '用户9999', '12121221@qq.com', 'null', '18474576745', '', 0, '用户', 1, 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `userdata` VALUES (28, 'yonghu08', '用户08', '1212112@qq.com', '888888', '18487137234', '', 0, '用户', 1, 1, 'http://localhost:8080/img/20230425100031561.jpg', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `userdata` VALUES (31, 'yonghu05', '用户05', '12121@qq.com', '55555', '18487347567', NULL, 0, '用户', 1, 0, 'http://localhost:8080/img/20230425132952084.jpg', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `userdata` VALUES (34, 'yonghu06', '用户666', '1212333312@qq.com', '123456', '18374564567', NULL, 0, '用户', 1, 0, 'http://localhost:8000/img/20240417225022041.jpg', '', '', NULL, NULL, NULL);
INSERT INTO `userdata` VALUES (36, 'yonghu123', '用户123', '1212122@qq.com', '123456', '18487346554', '', 0, '用户', 1, 1, 'http://localhost:8080/img/20230504204209009.jpg', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `userdata` VALUES (38, 'hhh02', '哈哈哈22', '2131312@qq.com', '333333', '18485767567', '', NULL, '用户', 1, 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `userdata` VALUES (46, 'user678', 'wweqw', '1212121321', '123abc', '18384858687', '', 0, '用户', 0, 1, 'http://localhost:8000/img/20240425123529777.jpg', '', '', 'dsadsda', '12', 'http://localhost:8000/img/20240425123541343.jpg');
INSERT INTO `userdata` VALUES (47, 'user789', '用户789', '2121121221@qq.com', '123abc', '13645566789', '', 0, '用户', 0, 1, 'http://localhost:8000/img/20240425134405268.jpg', '', '', 'AAA大学', '23', 'http://localhost:8000/img/20240425134409511.jpg');
INSERT INTO `userdata` VALUES (48, 'user888', '用户888', '2121223322@qq.com', '123abc', '18485868788', '', 0, '用户', 0, 1, 'http://localhost:8000/img/20240425134908736.jpg', '', '', 'AA大学', '23', 'http://localhost:8000/img/20240425134912111.jpg');
INSERT INTO `userdata` VALUES (52, 'yyy1', '嘤嘤嘤', '213213123@qq.com', '123abc', '18487452124', '', -1, '用户', 0, 1, 'http://localhost:8000/img/20250213215445103.jpg', '', '', '1栋1单元101', '0', 'http://localhost:8000/img/20250213215447309.jpg');
INSERT INTO `userdata` VALUES (53, 'yyy2', '张华', '123213213@qq.com', '123abc', '18487878987', '', -1, '用户', 0, 1, 'http://localhost:8000/img/20250213220131175.jpg', '', '', '11栋1单元111', '0', 'http://localhost:8000/img/20250213220135762.jpg');

SET FOREIGN_KEY_CHECKS = 1;
