<template>
    <div class="user-main" v-loading="pendingflag">
        <el-form ref="form" :model="form" :rules="rules" label-width="120px">
            <el-row>
                <el-col :span="24">
                    <el-form-item label="物业名称" prop="title">
                        <el-input v-model="form.title" placeholder="请输入" maxlength="30" />
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="宣传图册" prop="trans_pic" style="text-align: left;">
                        <el-upload action="/api/uploadfile" list-type="picture-card"
                            :on-preview="handlePictureCardPreviewwl" :on-remove="handleRemovewl"
                            :on-success="handleSuccesswl" :file-list="fileListwl">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="相关简介" prop="detail">
                        <el-input type="textarea" :rows="5" v-model="form.detail" placeholder="请输入">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="物业管理费" prop="title" style="text-align: left;">
                        <el-input-number v-model="form.fee1" :min="1" :max="10" label="每月（元）"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="水费(吨/元)" prop="title" style="text-align: left;">
                        <el-input-number v-model="form.fee2" :min="1" :max="10" label="每吨（元）"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="电费(度/元)" prop="title" style="text-align: left;">
                        <el-input-number v-model="form.fee3" :min="1" :max="10" label="每度（元）"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="燃气费(平方/元)" prop="title" style="text-align: left;">
                        <el-input-number v-model="form.fee4" :min="1" :max="10" label="每立方（元）"></el-input-number>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button  @click="userinfosubmit">确 定</el-button>
            <el-button @click="dialogroleVisible = false">取 消</el-button>
        </div>
        <!-- 列表查看图片 -->
        <el-dialog title="查看图片" :visible.sync="dialogTableVisible">
            <img class="diagimg" :src="imgshow">
        </el-dialog>
    </div>
</template>
<script>
import { queryannouncementext, updateannouncementext } from '@/api/sysapi'
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
            radio: '',
            selectList: {},
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
            tableData: [],
            fileListwl: [],
            multipleSelection: [],
            currentPage: 1,
            form: {
                title: "",
                detail: "",
                id:"",
                fee1:'',
                fee2:'',
                fee3:'',
                fee4:'',
            },
            // 表单校验
            rules: {
                // title: [
                //     { required: true, message: "公司名称不能为空", trigger: "blur" }
                // ]
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
        },
        headerstyle() {
            return "background-color: #f1f1f1"
        },
        //自定义列提交
        colnmsubmit() {
            this.dialogcolnmVisible = false
        },
        query() {
            let obj = {}
            this.pendingflag = true
            queryannouncementext(obj).then(res => {
                let rownew = deepCopy(res[0])
                this.form = rownew
                this.form.status = rownew.status ? 0 : 1
                console.log(this.form)
                //快递图片
                let trans_pic = rownew.trans_pic
                try {
                    if (trans_pic.indexOf('^^^') > -1 || trans_pic) {
                        let arr = trans_pic.split('^^^')
                        let arrfu = []
                        arr.forEach((val, i) => {
                            let obj = {
                                url: val,
                                name: ''
                            }
                            arrfu.push(obj)
                        })
                        this.fileListwl = arrfu
                    } else {
                        this.fileListwl = []
                    }
                } catch (error) {
                    this.fileListwl = []
                }
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
            this.pendingflag = true
            //修改
            let objedit = {
                trans_pic: this.transpicurl(this.fileListwl),
                title: this.form.title,
                detail: this.form.detail,
                id: this.form.id,
                fee1: this.form.fee1,
                fee2: this.form.fee2,
                fee3: this.form.fee3,
                fee4: this.form.fee4,
            }
            updateannouncementext(objedit).then(res => {
                if(res == 'success'){
                    this.query()
                    this.$message.success('操作成功')
                    return true
                }
                this.$message.error('操作失败')
                
            }).catch(error => {
                this.$message.error('操作失败')
                this.dialogitemVisible = false
                this.pendingflag = false
            })

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
        handleRemovewl(file, fileList) {
            this.fileListwl = fileList
        },
        handlePictureCardPreviewwl(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleSuccesswl(response, file, fileList) {
            console.log(response, file, fileList)
            let url = file.response
            // let url = response.data
            let name = file.name
            let obj = {
                url,
                name
            }
            this.fileListwl.push(obj)
        },
        handleEdit(index, row) {
            let rownew = deepCopy(row)
            this.form = rownew
            this.form.status = rownew.status ? 0 : 1
            console.log(this.form)
            //快递图片
            let trans_pic = rownew.trans_pic
            try {
                if (trans_pic.indexOf('^^^') > -1 || trans_pic) {
                    let arr = trans_pic.split('^^^')
                    let arrfu = []
                    arr.forEach((val, i) => {
                        let obj = {
                            url: val,
                            name: ''
                        }
                        arrfu.push(obj)
                    })
                    this.fileListwl = arrfu
                } else {
                    this.fileListwl = []
                }
            } catch (error) {
                this.fileListwl = []
            }
            //this.checkedkeyArr = row.menuIds  //赋值已有的菜单

        },
        reset() {
            this.form.fee1 = ""
            this.form.fee2 = ""
            this.form.fee3 = ""
            this.form.fee4 = ""
            this.form.title = ""
            this.form.detail = ""
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