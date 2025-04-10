<template>
    <div class="user-main" v-loading="pendingflag">
        <el-row :gutter="20">
            <el-col :span="24" class="user-demoright">
                <div class="demo-user-search">
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <div class="demo-input-suffix">
                                组团名称：
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
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="demo-user-contentfu">
                    <!-- <div class="demo-user-content">
                        <el-row class="demo-user-contentbutleft">
                            <el-col :span="10">
                                <div class="demo-user-contentbutleftsub">
                                    <el-button size="mini" type="primary" icon="el-icon-plus" @click="addtop">新增
                                    </el-button>
                                </div>
                            </el-col>
                            <el-col :span="6">&nbsp;</el-col>
                            <el-col :span="8">
                                <div class="demo-user-contentbutrightsub">
                                </div>
                            </el-col>
                        </el-row>
                    </div> -->
                    <div class="demo-user-page">
                        <el-table :header-cell-style="headerstyle" ref="multipleTable" :data="tableData" height="500"
                            tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange"
                            class="demo-user-tablemore">
                            <el-table-column show-overflow-tooltip v-for="(val, i) in griddata" :key="i"
                                :prop="val.prop" :label="val.label" :width="val.width">
                            </el-table-column>
                            <el-table-column label="是否启用" width="160">
                                <template slot-scope="scope">
                                    <el-switch v-model="scope.row.status" active-color="#13ce66"
                                        inactive-color="#ff4949" @change="changestatus(scope.$index, scope.row)">
                                    </el-switch>
                                </template>
                            </el-table-column>
                            <el-table-column prop="img" label="图片" width="160">
                                <template v-slot="scope">
                                    <div class="receiveclasspic">
                                        <img v-for="(val, i) in scope.row.trans_Arrpic" :key="i" :src="val" alt=""
                                            width="45" height="45" @click="showimg(val)">
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column fixed="right" label="操作" width="110">
                                <template slot-scope="scope">

                                    <el-button type="primary" icon="el-icon-edit" circle plain size="mini"
                                        @click="handleEdit(scope.$index, scope.row)">
                                    </el-button>
                                    <el-button type="danger" icon="el-icon-delete" circle plain size="mini"
                                        @click="handleDelete(scope.$index, scope.row)"></el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <!-- <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                            :current-page="currentPage" :page-sizes="[10, 20, 30, 50]" :page-size="100"
                            layout="total, sizes, prev, pager, next, jumper" :total="total">
                        </el-pagination> -->
                    </div>
                </div>

            </el-col>
        </el-row>


        <!-- 组团信息弹框 -->
        <el-dialog :title="roleinfotitle" :visible.sync="dialogroleVisible" width="700px" append-to-body
            class="diaitemrole">
            <el-table :data="subtable">
                <el-table-column property="empNo" label="账号" width="130"></el-table-column>
                <el-table-column property="userName" label="姓名" width="130"></el-table-column>
                <el-table-column property="mobile" label="电话" width="150"></el-table-column>
                <el-table-column fixed="right" label="操作" width="120">
                    <template slot-scope="scope">
                        <el-button size="mini" type="danger"
                            @click="handlesubDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="userinfosubmit">确 定</el-button>
                <el-button @click="dialogroleVisible = false">取 消</el-button>
            </div> -->
        </el-dialog>
        <!-- 列表查看图片 -->
        <el-dialog title="查看图片" :visible.sync="dialogTableVisible">
            <img class="diagimg" :src="imgshow">
        </el-dialog>
    </div>
</template>
<script>
import { deleteuseractivity,queryactivityuserlist,queryactivitylist, addsysnews, updatesysnews, updataactivitystatus, deleteactivity } from '@/api/sysapi'
import { deepCopy } from '@/utils/trans'


export default {
    name: 'extenddevice',
    components: {

    },
    created() {
        this.userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
        this.init()
    },
    data() {
        return {
            activityid:'',
            subtable:[],
            dialogTableVisible: false,
            imgshow: '',
            dialogFormVisible: false,
            id: '',
            placeholdercontent: '',
            formvisi: {
                content: ''
            },
            userinfo: {},
            drawer: false,
            textarea: '',
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
                { prop: 'projectname', label: '组团名称', width: '150' },
                { prop: 'renshu', label: '人数', width: '130' },
                { prop: 'activitydate', label: '截止时间', width: '150' },
                { prop: 'userdesc', label: '发布人', width: '250' },
                { prop: 'detail', label: '详情', width: '250' }
            ],
            tableData: [],
            fileListwl: [],
            multipleSelection: [],
            currentPage: 1,
            form: {
                title: '',
                mdd: '',
                jtfs: '',
                fee: '',
                xingcheng: '',
                zhuyi: ''
            },
            // 表单校验
            rules: {
                title: [
                    { required: true, message: "组团名称不能为空", trigger: "blur" }
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
        searchfun() {
            this.query()
        },
        //列表查看图片
        showimg(val) {
            this.dialogTableVisible = true
            this.imgshow = val
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
        deletedata() {
            let that = this
            this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let arrid = []
                that.multipleSelection.forEach((val, i) => {
                    arrid.push(val.id)
                })
                let obj = {
                    ids: arrid
                }
                that.pendingflag = true
                deleteactivity(obj).then(res => {
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
                parentid: 0,
                keyword:this.search.keyword
            }
            this.pendingflag = true
            queryactivitylist(obj).then(res => {
                this.tableData = res.map((val, i) => {
                    val.status = val.status == "已审核" ? true : false
                    if (val.img) {
                        val.trans_Arrpic = val.img.split('^^^')
                    }
                    return val
                })
                console.log(this.tableData)
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
            if (this.roleinfotitle == "新增组团") {
                let objadd = {
                    trans_pic: this.transpicurl(this.fileListwl),
                    title: this.form.title,
                    mdd: this.form.mdd,
                    jtfs: this.form.jtfs,
                    fee: this.form.fee,
                    xingcheng: this.form.xingcheng,
                    zhuyi: this.form.zhuyi,
                    datetime: this.getnowdate() + " " + this.getnowtime(),
                    submitbody: obj.userName,
                    status: 0
                }
                this.reset()
                //新增
                addsysnews(objadd).then(res => {
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
                    trans_pic: this.transpicurl(this.fileListwl),
                    title: this.form.title,
                    mdd: this.form.mdd,
                    jtfs: this.form.jtfs,
                    fee: this.form.fee,
                    xingcheng: this.form.xingcheng,
                    zhuyi: this.form.zhuyi,
                    datetime: this.getnowdate() + " " + this.getnowtime(),
                    submitbody: obj.userName,
                    id,
                }
                updatesysnews(objedit).then(res => {
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
        //将json数组转化为url地址ping拼接的字符串
        transpicurl(arr) {
            let arrsub = []
            arr.forEach(element => {
                arrsub.push(element.url)
            })
            return arrsub.join('^^^')
        },
        updatedata() {
            this.dialogroleVisible = true;
            this.roleinfotitle = '修改组团成员'
            this.updatetype = 'top'
            this.form = this.multipleSelection[0]
            //this.checkedkeyArr = this.multipleSelection[0].menuIds

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
            let url = response.data
            let name = file.name
            let obj = {
                url,
                name
            }
            this.fileListwl.push(obj)
        },
        seedata(index, row) {
            this.id = row.id
            this.querychatfun()
            this.drawer = true
        },
        handleEdit(index, row) {
            this.activityid = row.id
            this.updatetype = 'line'
            this.roleinfotitle = '修改组团成员'
            this.dialogroleVisible = true
            let rownew = deepCopy(row)
            this.form = rownew
            this.querysub()

        },
        changestatus(index, row) {
            let objedit = {
                id: row.id,
                status: row.status ? "已审核" : "未审核"
            }
            updataactivitystatus(objedit).then(res => {
                this.query()
                this.$message.success('操作成功')
            }).catch(error => {
                // this.$message.error('操作失败')

            })

        },
        querysub(){
            let obj = {
                activityid: this.activityid
            }
            this.pendingflag = true
            queryactivityuserlist(obj).then(res => {
                this.subtable = res
                this.pendingflag = false
            }).catch(error => {
                // this.$message.error('操作失败')
                this.pendingflag = false
            })

        },
        handlesubDelete(index, row) {
            let that = this
            this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                that.pendingflag = true
                let obj = { id: row.id }
                that.pendingflag = true
                deleteuseractivity(obj).then(res => {
                    that.querysub()
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

        handleDelete(index, row) {
            let that = this
            this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                that.pendingflag = true
                let obj = { id: row.id }
                that.pendingflag = true
                deleteactivity(obj).then(res => {
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
            this.dialogroleVisible = true;
            this.roleinfotitle = '新增组团'
            this.reset()
        },
        reset() {
            this.form.title = ''
            this.form.mdd = ''
            this.form.jtfs = ''
            this.form.fee = ''
            this.form.xingcheng = ''
            this.form.zhuyi = ''
            this.fileListwl = []
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
.diagimg {
    width: 100%;
    height: auto;
}

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