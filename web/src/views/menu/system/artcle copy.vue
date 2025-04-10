<template>
    <div class="user-main" v-loading="pendingflag">
        <el-row :gutter="20">
            <el-col :span="24" class="user-demoright">
                <div class="demo-user-search">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <div class="demo-input-suffix">
                                关键词
                                <el-input placeholder="请输入内容" v-model="search.keyword" class="search-user">
                                </el-input>
                            </div>
                        </el-col>
                        <!-- <el-col :span="6">
                            <div class="demo-input-suffix">
                                状态
                                <el-select v-model="search.status" placeholder="请选择" class="search-user">
                                    <el-option label="正常" value="正常"></el-option>
                                    <el-option label="停用" value="停用"></el-option>
                                </el-select>
                            </div>
                        </el-col> -->
                        <el-col :span="4">
                            <div class="search-butgroup">
                                <el-button size="mini" type="primary" icon="el-icon-search" round @click="searchfun">搜索
                                </el-button>
                                <!-- <el-button size="mini" icon="el-icon-refresh-right" round @click="resetfun">重置
                                </el-button> -->
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="demo-user-contentfu">
                    <div class="demo-user-content">
                        <el-row class="demo-user-contentbutleft">
                            <el-col :span="10">
                                <div class="demo-user-contentbutleftsub">
                                    <el-button size="mini" type="primary" icon="el-icon-plus" @click="addtop">新增
                                    </el-button>
                                    <!-- <el-button size="mini" type="success" icon="el-icon-edit" @click="updatedata"
                                        :disabled="single">修改
                                    </el-button> -->
                                    <!-- <el-button size="mini" type="info" icon="el-icon-upload2">导出</el-button> -->
                                </div>
                            </el-col>
                            <el-col :span="6">&nbsp;</el-col>
                            <el-col :span="8">
                                <div class="demo-user-contentbutrightsub">
                                    <!-- <el-tooltip class="item" effect="dark" content="设置查看列" placement="bottom">
                                        <el-button size="mini" icon="el-icon-setting" circle
                                            @click="dialogcolnmVisible = true"></el-button>
                                    </el-tooltip> -->
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="demo-user-page">
                        <el-table :header-cell-style="headerstyle" ref="multipleTable" :data="tableData"
                            tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange"
                            class="demo-user-tablemore">
                            <!-- <el-table-column type="selection" width="55">
                            </el-table-column> -->
                            <!-- <el-table-column label="反馈状态" width="100">
                                <template slot-scope="scope">
                                    <el-tag type="info" v-if="scope.row.connectStatus == 0">{{
                                        scope.row.connectStatus |
                                            updatestatus
                                    }}</el-tag>
                                    <el-tag type="success" v-else>{{ scope.row.connectStatus | updatestatus }}</el-tag>
                                </template>
                            </el-table-column> -->
                            <el-table-column show-overflow-tooltip v-for="(val, i) in griddata" :key="i" :prop="val.prop"
                                :label="val.label" :width="val.width">
                            </el-table-column>
                            <el-table-column label="图片" width="160">
                                <template v-slot="scope">
                                    <div class="receiveclasspic">
                                        <img v-for="(val, i) in scope.row.receive_Arrpic" :key="i" :src="val" alt=""
                                            width="45" height="45" @click="showimg(val)">
                                        <!-- <img :src="scope.row.trans_pic" alt="" width="45" height="45"
                                            @click="showimg(scope.row.trans_pic)"> -->

                                    </div>
                                </template>
                            </el-table-column>


                            <el-table-column label="操作">
                                <template slot-scope="scope">

                                    <!-- <el-button type="primary" icon="el-icon-edit" circle plain size="mini"
                                        @click="handleEdit(scope.$index, scope.row)">
                                    </el-button> -->
                                    <el-button v-if="scope.row.userid == userinfo.id" type="danger" icon="el-icon-delete" circle plain size="mini"
                                        @click="handleDelete(scope.$index, scope.row)"></el-button>
                                    <el-button type="warning" icon="el-icon-view" circle plain size="mini"
                                        @click="seedata(scope.$index, scope.row)"></el-button>
                                    <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>  -->
                                    <!-- <el-button plain size="mini" type="danger"
                                        @click="handleDelete(scope.$index, scope.row)">
                                        删除</el-button> -->
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                            :current-page="currentPage" :page-sizes="[10, 20, 30, 50]" :page-size="100"
                            layout="total, sizes, prev, pager, next, jumper" :total="total">
                        </el-pagination>
                    </div>
                </div>

            </el-col>
        </el-row>

        <!-- 查看评论 -->
        <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
            <div>
                <el-row :gutter="20">
                    <el-col :span="24">
                        <commentlist :commentList="commentList" @clickPraise="clickPraiseComment"
                            @clickDelete="clickDeleteComment" @clickDeleteChild="clickDeleteCommentChild"
                            @clickRecomment="clickRecomment" @clickRecommentChild="clickRecommentChild"></commentlist>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="textarea">
                        </el-input>
                    </el-col>
                </el-row>

                <el-row :gutter="20" style="margin-top:10px;margin-bottom:10px;">
                    <el-col :span="1">
                        <el-button type="primary" @click="submitfun">提交</el-button>
                    </el-col>
                </el-row>
            </div>
        </el-drawer>

        <!-- 列表查看图片 -->
        <el-dialog title="查看图片" :visible.sync="dialogTableVisible">
            <img class="diagimg" width="50%" :src="imgshow">
        </el-dialog>
        <!-- 反馈信息弹框 -->
        <el-dialog :title="roleinfotitle" :visible.sync="dialogroleVisible" width="600px" append-to-body
            class="diaitemrole">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="反馈标题" prop="title">
                            <el-input v-model="form.title" placeholder="请输入反馈标题"   />
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                    <el-form-item label="图片" prop="trans_pic" style="text-align: left;">
                        <el-upload action="/api/uploadfile" list-type="picture-card"
                            :on-preview="handlePictureCardPreviewwl" :on-remove="handleRemovewl"
                            :on-success="handleSuccesswl" :file-list="fileListwl">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </el-form-item>
                </el-col>
                    <el-col :span="24">
                        <el-form-item label="反馈内容" prop="detail">
                            <el-input type="textarea" :rows="5" v-model="form.detail" placeholder="请输入反馈内容">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>


            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="userinfosubmit">确 定</el-button>
                <el-button @click="dialogroleVisible = false">取 消</el-button>
            </div>
        </el-dialog>

        <el-dialog title="" :visible.sync="dialogFormVisible">
            <el-form :model="formvisi">
                <el-form-item>
                    <el-input v-model="formvisi.content" :placeholder="placeholdercontent" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitsubfun">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import commentlist from "./com/commentlist.vue"
import { queryarticle, addarticle, updateannouncement, updateannostatus, deletearticle, insertchatart, querychatart } from '@/api/sysapi'
import { deepCopy } from '@/utils/trans'


export default {
    name: 'extenddevice',
    components: {
        commentlist
    },
    created() {
        this.userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
        this.init()
    },
    data() {
        return {
            fileListwl: [],
            imgshow: '',
            dialogTableVisible: false,
            dialogFormVisible: false,
            id: '',
            placeholdercontent: '',
            formvisi: {
                content: ''
            },
            userinfo: {},
            drawer: false,
            textarea: '',
            commentList: [],
            pendingflag: false,
            updatetype: '', //记录修改按钮从哪个位置点入
            single: true,
            multiple: true,
            roleinfotitle: '',
            dialogcolnmVisible: false,
            dialogroleVisible: false,
            dataTree: [],
            search: {
                keyword: '',
                status: '正常',
                // createdate: ''
            },

            griddata: [
                { prop: 'datetime', label: '发布时间', width: '' },
                { prop: 'descstr', label: '标题', width: '' },
                { prop: 'detail', label: '内容', width: '' },
                { prop: 'username', label: '发布人', width: '' },

                // { prop: 'tabNo', label: '大厅编号', width: '' },
                // { prop: 'windowNo', label: '窗口编号', width: '' }
            ],
            tableData: [],
            multipleSelection: [],
            currentPage: 1,
            form: {
                title: "",
                detail: "",
            },
            // 表单校验
            rules: {
                title: [
                    { required: true, message: "反馈名称不能为空", trigger: "blur" }
                ]
            },
            current: 1,
            size: 10,
            total: 0,
            dataitem: [],
        }
    },
    methods: {
        init() {
            this.query()

        },
        //将json数组转化为url地址ping拼接的字符串
        transpicurl(arr) {
            let arrsub = []
            arr.forEach(element => {
                arrsub.push(element.url)
            })
            return arrsub.join(',')
        },
        handleRemovewl(file, fileList) {
            this.fileListwl = fileList
        },
        handlePictureCardPreviewwl(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleSuccesswl(response, file, fileList) {
            console.log(response, file, fileList)
            let url = file.response.url
            // let url = response.data
            let name = file.name
            let obj = {
                url,
                name
            }
            this.fileListwl.push(obj)
        },
        //列表查看图片
        showimg(val) {
            this.dialogTableVisible = true
            this.imgshow = val
        },
        searchfun() {
            this.query()
        },
        resetfun() {
            this.search.keyword = ''
            // this.search.status = ''
            // this.search.createdate = ''
        },
        handleChange(val) {
            console.log(val)
        },

        handleSelectionChange(val) {
            this.multipleSelection = val;
            this.single = val.length != 1
            this.multiple = !val.length
        },
        handleSizeChange(val) {
            this.size = val
            this.query()
        },
        handleCurrentChange(val) {
            this.current = val
            this.query()
        },
        headerstyle() {
            return "background-color: #f1f1f1"
        },
        //自定义列提交
        colnmsubmit() {
            this.dialogcolnmVisible = false
        },
        query() {
            // if (this.search.createdate == null || this.search.createdate == undefined || this.search.createdate == '') {
            //     this.search.createdate = []
            // }
            // let startTime = ""
            // let endTime = ""
            // if (this.search.createdate.length > 0) {
            //     startTime = trans_data_fun(this.search.createdate[0])
            //     endTime = trans_data_fun(this.search.createdate[1])
            // }
            let obj = {
                current: this.current,
                keyword: this.search.keyword,
                size: this.size,
                date: []
                // status: this.search.status == "正常" ? 0 : 1
            }
            this.pendingflag = true
            queryarticle(obj).then(res => {
                this.tableData = res.resdata.map((val,i)=>{
                    if(val.trans_pic){
                        val.receive_Arrpic = val.trans_pic.split(',')
                    }else{
                        val.receive_Arrpic = []
                    }
                    return val
                })
                this.total = res.reslen[0].countlen
                this.pendingflag = false
            }).catch(error => {
                // this.$message.error('操作失败')
                this.pendingflag = false
            })
        },
        getnowdate() {
            var nowDate = new Date();
            var year = nowDate.getFullYear();
            var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
            var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
            var dateStr = year + "-" + month + "-" + day;
            return dateStr;
        },
        getnowtime() {
            let date = new Date()
            let hours = date.getHours()
            let minutes = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()
            let seconds = date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds()
            let time = hours + ':' + minutes + ':' + seconds
            return time

        },

        //用户信息修改提交
        userinfosubmit() {
            let obj = this.userinfo
            this.pendingflag = true
            //获取当前选中的菜单，将id存入数组
            if (this.roleinfotitle == "新增反馈") {
                let objadd = {
                    descstr: this.form.title,
                    detail: this.form.detail,
                    datetime: this.getnowdate() + " " + this.getnowtime(),
                    trans_pic : this.transpicurl(this.fileListwl),
                    username: this.userinfo.userName,
                    userid: this.userinfo.id,
                    status: 1
                }
                this.reset()
                //新增
                addarticle(objadd).then(res => {
                    this.query()
                    this.$message.success('操作成功')
                    this.dialogitemVisible = false
                }).catch(error => {
                    // this.$message.error('操作失败')
                    this.dialogitemVisible = false
                    this.pendingflag = false
                })
            } else {
                let id
                if (this.updatetype == 'top') {
                    id = this.multipleSelection[0].id
                }
                if (this.updatetype == 'line') {
                    id = this.form.id
                }
                //修改
                let objedit = {
                    descstr: this.form.title,
                    detail: this.form.detail,
                    datetime: this.getnowdate() + " " + this.getnowtime(),
                    trans_pic : this.transpicurl(this.fileListwl),
                    username: this.userinfo.userName,
                    userid: this.userinfo.id,
                    id,
                }
                updateannouncement(objedit).then(res => {
                    this.query()
                    this.$message.success('操作成功')
                    this.dialogitemVisible = false
                }).catch(error => {
                    // this.$message.error('操作失败')
                    this.dialogitemVisible = false
                    this.pendingflag = false
                })
            }
            this.dialogroleVisible = false
        },
        updatedata() {
            this.dialogroleVisible = true;
            this.roleinfotitle = '修改反馈'
            this.updatetype = 'top'
            this.form = this.multipleSelection[0]
            //this.checkedkeyArr = this.multipleSelection[0].menuIds

        },
        seedata(index, row) {
            this.id = row.id
            this.querychatfun()
            this.drawer = true
        },
        handleEdit(index, row) {
            this.updatetype = 'line'
            this.roleinfotitle = '修改反馈'
            this.dialogroleVisible = true
            let rownew = deepCopy(row)
            this.form = rownew
            this.form.status = rownew.status ? 0 : 1
            console.log(this.form)
            //this.checkedkeyArr = row.menuIds  //赋值已有的菜单

        },
        changestatus(index, row) {
            let objedit = {
                id: row.id,
                status: row.status ? 0 : 1
            }
            updateannostatus(objedit).then(res => {
                this.query()
                this.$message.success('操作成功')
            }).catch(error => {
                // this.$message.error('操作失败')

            })

        },

        handleDelete(index, row) {
            let that = this
            this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                that.pendingflag = true
                let obj = { id: row.id}
                deletearticle(obj).then(res => {
                    that.pendingflag = false
                    that.query()
                    that.$message.success('操作成功')

                }).catch(error => {
                    that.$message.error('操作失败')
                    that.pendingflag = false

                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        addtop() {
            this.fileListwl = []
            this.dialogroleVisible = true;
            this.roleinfotitle = '新增反馈'
            this.reset()
        },
        reset() {
            this.form.title = ""
            this.form.detail = ""
        },
        querychatfun() {
            let objext = {
                annid: this.id
            }
            querychatart(objext).then(res => {
                console.log(res)
                let parentarr = []
                res.forEach(element => {
                    if (element.PARENTID == 0) {
                        parentarr.push(element)
                    }
                });
                parentarr = parentarr.map((val, i) => {
                    val.CHILD_ANWSER_LIST = []
                    return val
                })
                for (let i = 0; i < parentarr.length; i++) {
                    for (let j = 0; j < res.length; j++) {
                        if (parentarr[i].id == res[j].PARENTID) {
                            parentarr[i].CHILD_ANWSER_LIST.push(res[j])
                        }
                    }
                }
                this.commentList = parentarr

            }).catch(err => {
                console.log(err)
            })
        },
        //发表新评论
        submitfun() {
            console.log(this.userinfo)
            if (!this.userinfo) {
                this.$message({
                    message: '请先登录',
                    type: 'error',
                    duration: 1000
                });
                return false
            }
            // "FIRSTNICKNAME": "张三",
            //         "IS_PRAISE": null,
            //         "COMMENT": "你这个话题很新颖啊",
            //         "PRAISE_NUM": 8,
            //         "CANDELETE": 13,
            //         "HEADIMGURL": "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
            //         "PARENTID": "004",
            //         "SECONDNICKNAME": null,
            let obj = {

                annid: this.id,
                commenttime: this.getnowdate() + " " + this.getnowtime(),
                firstnickname: this.userinfo.userName,
                ispraise: null,
                comment: this.textarea,
                praisenum: 0,
                candelete: 0,
                headimg: 'https://mp-7d66f2cd-2fba-462e-ad49-e2c42e1693fd.cdn.bspapp.com/img/logo01.png',
                parentid: 0,
                secondnickname: null,


                // annid: this.id,
                // FIRSTNICKNAME: this.userinfo.userName,
                // IS_PRAISE: null,
                // COMMENT: this.textarea,
                // PRAISE_NUM: 0,
                // CANDELETE: 0,
                // HEADIMGURL: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
                // PARENTID: 0,
                // SECONDNICKNAME: null
            }
            insertchatart(obj).then(res => {
                console.log(res)
                this.$message({
                    message: '提交成功',
                    type: 'success',
                    duration: 3000
                });
                this.textarea = ""
                this.querychatfun()
            }).catch(error => {
                console.log(error)
            })



        },
        //回复评论
        submitsubfun() {
            if (!this.userinfo) {
                this.$message({
                    message: '请先登录',
                    type: 'error',
                    duration: 3000
                });
                return false
            }
            let parid
            if (this.recevobj.PARENTID == 0) {
                parid = this.recevobj.id
            } else {
                parid = this.recevobj.PARENTID
            }
            let obj = {
                annid: this.id,
                commenttime: this.getnowdate() + " " + this.getnowtime(),
                firstnickname: this.userinfo.userName,
                ispraise: null,
                comment: this.formvisi.content,
                praisenum: 0,
                candelete: 0,
                headimg: 'https://mp-7d66f2cd-2fba-462e-ad49-e2c42e1693fd.cdn.bspapp.com/img/logo01.png',
                parentid: parid,
                secondnickname: this.recevobj.FIRSTNICKNAME
            }
            console.log(obj)
            insertchatart(obj).then(res => {
                console.log(res)
                this.$message({
                    message: '提交成功',
                    type: 'success',
                    duration: 1000
                });
                this.dialogFormVisible = false
                this.formvisi.content = ""
                this.querychatfun()
            }).catch(error => {
                console.log(error)
            })
        },
        clickPraiseComment(val) {
            console.log("clickPraiseComment", val)
        },
        clickDeleteComment(val) {
            console.log("clickDeleteComment", val)
        },
        clickDeleteCommentChild(val) {
            console.log("clickDeleteCommentChild", val)
        },
        clickRecomment(val) {
            console.log("clickRecomment", val)
            this.dialogFormVisible = true
            this.placeholdercontent = `回复 ${val.FIRSTNICKNAME}：`
            this.recevobj = val
        },
        clickRecommentChild(val) {
            console.log("clickRecommentChild", val)
            this.dialogFormVisible = true
            this.placeholdercontent = `回复 ${val.FIRSTNICKNAME}：`
            this.recevobj = val
        }

    },
    watch: {
    },
    filters: {
        updatestatus(val) {
            switch (val) {
                case 0:
                    return "离线";
                    break;
                case 1:
                    return "在线";
                    break;
            }
        },
    },
}
</script>

<style scoped>
.user-main {
    padding: 2%;
}

.search-user {
    width: 70%;
}

.search-butgroup {
    display: flex;
    justify-content: left;
    align-items: center;
}

.demo-user-tablemore {
    margin-top: 15px;
}

.user-demoleft,
.user-demoright {
    height: 75vh;
}

.user-demoleft {
    border-right: 1px solid #f1f1f1;
}

.demo-user-search {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 15px;
    border-radius: 5px;
}

.demo-user-contentfu {
    margin-top: 15px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 15px;
    border-radius: 5px;
}

.demo-user-tree {
    font-size: 0.8em;
    font-weight: bold;
}

.dialogcolnmbut {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dataitem-content {
    height: 300px;
    overflow: auto;
}

.dataitem-content::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 10px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}

.dataitem-content::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #535353;
}

.dataitem-content::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #EDEDED;
}

.itemclass {
    height: 150px;
    overflow: auto;
}

.itemclass::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 10px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}

.itemclass::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #535353;
}

.itemclass::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #EDEDED;
}
</style>


<style>
.search-user .el-input__inner {
    height: 30px;
    line-height: 30px;
}

.search-user-date .el-date-editor {
    height: 30px;
    line-height: 30px;
    padding: 0px 10px;
}

.search-user .el-input__icon {
    line-height: 30px;
}

.search-user-date .el-range-separator {
    line-height: 25px;
}

.demo-user-contentbutleftsub {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 15px;
}

.demo-user-contentbutrightsub {
    display: flex;
    justify-content: right;
    align-items: center;
    margin-top: 15px;
}

.demo-user-tablemore th>.cell {
    padding-left: 14px;
    padding-right: 14px;

}

.user-demoleft .el-input__inner {
    height: 30px;
    line-height: 30px;
}

.user-demoleft .el-input__icon {
    line-height: 30px;
}

.demo-user-transfer .el-transfer-panel__item .el-checkbox__input {
    position: absolute;
    top: 8px;
    left: 15px;
}

.demo-user-transfer .el-transfer-panel__item.el-checkbox .el-checkbox__label {
    text-align: left;
}

.demo-user-transfer .el-transfer-panel .el-transfer-panel__header .el-checkbox {
    text-align: left;
}

.roledia .el-dialog__body {
    padding: 0px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
}

.diaitemrole .el-dialog {
    margin-top: 5vh !important;
}
</style>