<template>
    <div class="user-main">

        <el-dialog title="详情" :visible.sync="dialogTableVisible">
            <el-descriptions title="请求相关" direction="vertical" :column="1">
                <el-descriptions-item label="请求URL">{{ reqform.detail }}</el-descriptions-item>
            </el-descriptions>
        </el-dialog>

        <!-- 编辑框 -->
        <el-dialog :close-on-click-modal="false" :title="titlestr" :visible.sync="dialogFormVisible" width="70%">
            <el-form :model="form">
                <el-row :gutter="20">
                    <el-col :span="24">
                        <div class="grid-content bg-purple user">
                            <el-form-item label="习题分类" :label-width="formLabelWidth">
                                <el-select v-model="form.classstr" placeholder="请选择">
                                    <el-option v-for="(item,i) in options" :key="i" :label="item.title"
                                        :value="item.title">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="24">
                        <div class="grid-content bg-purple">
                            <el-form-item label="考试题目" :label-width="formLabelWidth">
                                <el-input v-model="form.title" auto-complete="off"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <el-form-item label="习题类型" :label-width="formLabelWidth">
                                <el-select style="width:100%;" v-model="form.tmlx" placeholder="请选择">
                                    <el-option v-for="item in tmlxArr" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <el-form-item label="习题答案" :label-width="formLabelWidth">
                                <el-input v-model="form.tmzqda" auto-complete="off"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="12" v-for="(item, index) of this.form.inputArr" :key="index">
                        <div class="grid-content bg-purple">
                            <el-form-item label="选项" :label-width="formLabelWidth">
                                <el-input v-model="form.inputArr[index]">
                                    <el-button slot="append" @click.native.prevent="deleteoption(index, form.inputArr)">
                                        删除</el-button>
                                </el-input>
                                <!-- <el-input v-model="item" auto-complete="off">
									<el-button slot="append" @click.native.prevent="deleteoption(index, form.inputArr)">删除</el-button>
								</el-input> -->
                            </el-form-item>
                        </div>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="addoption">添加选项</el-button>
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitoption">确 定</el-button>
            </div>
        </el-dialog>



        <el-row :gutter="20">
            <el-col :span="24" class="user-demoright">
                <div class="demo-user-search">
                    <el-row :gutter="20">
                        <el-col :xs="24" :md="12" :lg="8">
                            <div class="demo-input-suffix">
                                习题名称
                                <el-input placeholder="请输入内容" v-model="search.tmnr" class="search-user">
                                </el-input>
                            </div>
                        </el-col>
                        <!-- <el-col :xs="24" :md="12" :lg="8">
                            <div class="demo-input-suffix search-user-date">
                                操作时间
                                <el-date-picker class="search-user" v-model="search.createdate" type="daterange"
                                    range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">
                                </el-date-picker>
                            </div>
                        </el-col> -->
                        <el-col :xs="24" :md="12" :lg="8">
                            <div class="search-butgroup">
                                <el-button size="mini" type="primary" icon="el-icon-search" round @click="searchfun">搜索
                                </el-button>
                                <el-button size="mini" icon="el-icon-refresh-right" round @click="daorutiku">爬取
                                </el-button>

                                <!-- <input type="file" id="file"> -->

                                <!-- <input type="file" id="file">
                                <el-upload class="upload-demo" ref="upload"
                                    action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
                                    :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
                                    <el-button style="margin-left:15px;" slot="trigger" size="mini" type="warning" round
                                        icon="el-icon-download">导入</el-button>
                                </el-upload> -->


                                <!-- 
                                <el-button size="mini"  type="warning" icon="el-icon-refresh-right" round @click="inputdata">导入
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
                                    <el-button size="mini" type="primary" icon="el-icon-plus"
                                        @click="addquestion('添加题目')">新增
                                    </el-button>
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
                        <el-table border v-loading="pendingflag"
                            :header-cell-style="{ 'text-align': 'center', 'background-color': '#f1f1f1' }"
                            ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
                            @selection-change="handleSelectionChange" class="demo-log-tablemore"
                            :cell-style="{ 'text-align': 'center' }">
                            <el-table-column label="操作类型" width="120">
                                <template slot-scope="scope">
                                    <el-tag type="success" v-if="scope.row.tmlx == '1'">{{ '单选' }}</el-tag>
                                    <el-tag type="success" v-if="scope.row.tmlx == '2'">{{ '多选' }}</el-tag>
                                    <el-tag type="warning" v-if="scope.row.tmlx == '3'">{{ '判断' }}</el-tag>
                                </template>
                            </el-table-column>
                            <el-table-column show-overflow-tooltip v-for="(val, i) in griddata" :key="i"
                                :prop="val.prop" :label="val.label" :width="val.width">
                            </el-table-column>
                            <el-table-column label="操作" width="150">
                                <template slot-scope="scope">
                                    <el-button type="primary" icon="el-icon-edit" circle plain size="mini"
                                        @click="handleEdit(scope.$index, scope.row, '修改')">
                                    </el-button>
                                    <el-button type="danger" icon="el-icon-delete" circle plain size="mini"
                                        @click="handleDelete(scope.$index, scope.row)">
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div style="margin-top:10px;">
                            <el-pagination background @size-change="handleSizeChange"
                                @current-change="handleCurrentChange" :current-page="current"
                                :page-sizes="[10, 20, 30, 50]" :page-size="size"
                                layout="total, sizes, prev, pager, next, jumper" :total="total">
                            </el-pagination>
                        </div>
                    </div>
                </div>

            </el-col>
        </el-row>

    </div>
</template>
<script>

import { getxikudata,removequestion, questionselect, questioninsertAll, getclassquestion, questionupdata, questionremove, questioninsert } from '@/api/sysapi'
import { trans_data_fun, deepCopy, getnumberda } from '@/utils/trans'

export default {
    name: 'logoperation',
    components: {

    },
    created() {
        this.init()
        this.getclasstmlx()
    },
    mounted() {

    },
    data() {
        return {
            titlestr: '',
            dialogFormVisible: false,
            pendingflag: false,
            single: true,
            multiple: true,
            roleinfotitle: '',
            dialogcolnmVisible: false,
            search: {
                module: '',
                operateType: '',
                tmnr: '',
                status: 0,
                createdate: ''
            },
            reqform: {
                operateUrl: '', //请求URL
                param: '', //请求参数
                requestMethod: '', //请求方式
                jsonResult: '', //返回参数
                errorMsg: '', //错误消息
                userTypeText: '' //用户类型中文描述

            },
            griddata: [
                { prop: 'id', label: '习题编号', width: '100' },
                { prop: 'tmnr', label: '习题题目', width: '' },
            ],
            tableData: [],
            multipleSelection: [],
            operateTypeArr: [],
            currentPage: 1,
            current: 1,
            size: 10,
            total: 0,
            dialogTableVisible: false,
            fileList: [],
            form: {
                sort: '',
                classstr: '',
                title: '',
                optionArr: '',
                inputArr: [],
                type: '',
                tmlx: '',
                tmzqda: ''
            },
            formLabelWidth: '120px',
            tmlxArr: [{
                value: '1',
                label: '单选题'
            }, {
                value: '2',
                label: '多选题'
            }, {
                value: '3',
                label: '判断题'
            }],
            options: [],
            selectid: ''
        }
    },
    methods: {
        init() {
            this.query()
            // this.getenum()
        },
        getclasstmlx(){
            let obj = {
                current: 1,
                keyword: "",
                size: 1000,
                status: 0
            }
            getclassquestion(obj).then(res => {
                this.options = res
            }).catch(error => {
                // this.$message.error('操作失败')
            })
        },
        //添加题目
        addquestion(val) {
            //清空选项
            this.titlestr = val
            this.form.classstr = ''
            this.form.title = ''
            this.form.optionArr = ''
            this.form.inputArr = []
            this.form.type = 'radio'
            this.dialogFormVisible = true

        },
        //添加指定选项
        addoption() {
            let arr = this.form.inputArr
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == '') {
                    this.$message({
                        type: 'info',
                        message: '存在空选项，请完善后再进行添加操作'
                    })
                    return false
                }

            }
            let value = ''
            this.form.inputArr.push(value)
            console.log(this.form.inputArr)
        },
        //删除指定选项
        deleteoption(index, arr) {
            this.$confirm('此操作将删除该选项, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                arr.splice(index, 1)
                this.form.inputArr = arr
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        submitoption() {
            let that = this
            //必填校验
            if (this.form.classstr == '' || this.form.title == '' || this.form.inputArr == []) {
                this.$message({
                    type: 'info',
                    message: '有必填字段未填写'
                })
                return false
            }
            //去除空格
            this.form.title = this.form.title.trim()
            let arrfu = this.form.inputArr.filter((x) => x != '')
            this.form.inputArr = arrfu.map((val, index) => {
                val = val.trim()
                return val
            })
            this.form.optionArr = this.form.inputArr.join(',')
            this.form.type = 'radio'
            //请求数据
            if (this.titlestr == '修改') {
                let arr = this.form.inputArr
                let obj = {
                    id: this.selectid,
                    tmbz: '',
                    tmdas: '',
                    tmlx: this.form.tmlx,
                    tmnd: '',
                    tmtp: '',
                    tmxh: '',
                    tmzqda: this.form.tmzqda,
                    tmzqdatext: getnumberda(this.form.tmzqda),
                    tmzs: '',
                    belong: this.form.classstr,
                    tmnr: this.form.title.trim(),
                    tmda1: arr[0] || '',
                    tmda2: arr[1] || '',
                    tmda3: arr[2] || '',
                    tmda4: arr[3] || '',
                    tmda5: arr[4] || '',
                    tmda6: arr[5] || '',
                }

                questionupdata(obj).then(res => {
                    that.query()
                    that.$message({
                        type: 'success',
                        message: '修改成功!'
                    });
                }).catch(error => {
                    // this.$message.error('操作失败')
                })
            } else {
                let arr = this.form.inputArr
                let obj = {
                    tmbz: '',
                    tmdas: '',
                    tmlx: this.form.tmlx,
                    tmzqda: this.form.tmzqda,
                    tmzqdatext: getnumberda(this.form.tmzqda),
                    tmnd: '',
                    tmtp: '',
                    tmxh: '',
                    tmzs: '',
                    belong: this.form.classstr,
                    tmnr: this.form.title.trim(),
                    tmda1: arr[0] || '',
                    tmda2: arr[1] || '',
                    tmda3: arr[2] || '',
                    tmda4: arr[3] || '',
                    tmda5: arr[4] || '',
                    tmda6: arr[5] || '',
                }

                questioninsert(obj).then(res => {
                    that.query()
                    that.$message({
                        type: 'success',
                        message: '新增成功!'
                    });
                }).catch(error => {
                    // this.$message.error('操作失败')
                })
            }
            this.dialogFormVisible = false
            //调用刷新界面


        },
        submitUpload() {
            this.$refs.upload.submit();
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        getenum() {
            let obj = JSON.parse(sessionStorage.getItem('enumsdata'))
            this.operateTypeArr = obj.operateTypeEnum.option
        },
        query() {
            let that = this
            if (this.search.createdate == null || this.search.createdate == undefined || this.search.createdate == '') {
                this.search.createdate = []
            }
            let startTime = ""
            let endTime = ""
            if (this.search.createdate.length > 0) {
                startTime = trans_data_fun(this.search.createdate[0])
                endTime = trans_data_fun(this.search.createdate[1])
            }
            let obj = {
                current: this.current,
                endTime,
                tmnr: this.search.tmnr,
                size: this.size,
                startTime: startTime
            }
            // this.pendingflag = true
            questionselect(obj).then(res => {
                console.log(res)
                this.tableData = res.data
                this.total = res.count
                this.pendingflag = false
            }).catch(error => {
                // this.$message.error('操作失败')
                this.pendingflag = false
            })
        },
        handleEdit(index, row, val) {
            this.titlestr = val
            console.log(index, row)
            this.form.classstr = row.belong
            this.form.sort = row.sort
            this.form.title = row.tmnr
            this.form.tmlx = row.tmlx
            this.form.tmzqda = row.tmzqda
            this.selectid = row.id
            let optionsub = [row.tmda1, row.tmda2, row.tmda3, row.tmda4, row.tmda5, row.tmda6]
            this.form.inputArr = optionsub.filter((v, i) => {
                return v != ''
            })
            this.dialogFormVisible = true
        },
        //删除问卷
        handleDelete(index, row) {
            let that = this
            this.$confirm('此操作将删除该题目, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {


                let obj = {
                    id: row.id
                }
                questionremove(obj).then(res => {
                    that.query()
                    that.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(error => {
                    // this.$message.error('操作失败')
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        daorutiku() {
            let that = this
            this.$confirm('此操作将爬取最新数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let obj = {}
                getxikudata(obj).then(res => {
                    that.query()
                    that.$message({
                        type: 'success',
                        message: '爬取成功!'
                    });
                }).catch(error => {
                    // this.$message.error('操作失败')
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消爬取'
                });
            });
        },

        searchfun() {
            this.query()
        },
        resetfun() {
            this.search.module = ''
            this.search.operateType = ''
            this.search.tmnr = ''
            this.search.status = ''
            this.search.createdate = ''
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
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
            return "{'text-align':'center','background-color': '#f1f1f1'}"

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
                operateLogdelet(obj).then(res => {
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
        viewRow(index, row) {
            console.log(index, row);
            this.reqform.operateUrl = row.operateUrl //请求URL
            this.reqform.param = row.param
            this.reqform.requestMethod = row.requestMethod
            this.reqform.jsonResult = row.jsonResult
            this.reqform.errorMsg = row.errorMsg //错误消息
            this.reqform.userTypeText = row.userTypeText //用户类型中文描述

            this.dialogTableVisible = true
        },
        rTime(date) {
            var json_date = new Date(date).toJSON();
            return new Date(new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
        },
        //excel相关函数
        excelinit() {
            let that = this
            let jsono = ''
            //首先监听input框的变动，选中一个新的文件会触发change事件
            document.querySelector("#file").addEventListener("change", function () {
                //获取到选中的文件
                var file = document.querySelector("#file").files[0];
                var type = file.name.split('.');
                if (type[type.length - 1] !== 'xlsx' && type[type.length - 1] !== 'xls') {
                    alert('只能选择excel文件导入');
                    return false;
                }
                const reader = new FileReader();
                reader.readAsBinaryString(file);
                reader.onload = (e) => {
                    const data = e.target.result;
                    const zzexcel = window.XLS.read(data, {
                        type: 'binary'
                    });
                    const result = [];
                    for (let i = 0; i < zzexcel.SheetNames.length; i++) {
                        const newData = window.XLS.utils.sheet_to_json(zzexcel.Sheets[zzexcel.SheetNames[i]]);
                        result.push(...newData)
                    }
                    console.log('result', result)
                    jsono = result
                    //处理数组(转化为包含所有key的数组)
                    let jsonall = result.map((val, i) => {
                        val.tmda3 = val.tmda3 || ''
                        val.tmda4 = val.tmda4 || ''
                        val.tmda5 = val.tmda5 || ''
                        val.tmda6 = val.tmda6 || ''
                        val.tmzqda = val.tmzqda || ''
                        val.tmbz = val.tmbz || ''
                        val.tmtp = val.tmtp || ''
                        val.tmzs = val.tmzs || ''
                        val.tmzqdatext = getnumberda(val.tmzqda)


                        return val
                    })

                    //删除表单数据数据
                    that.$confirm('此操作将删除原有数据, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {

                        let obj = {}
                        that.pendingflag = true
                        removequestion(obj).then(res => {
                            questioninsertAll(jsonall).then(res => {
                                console.log(res)
                                //查询表单数据
                                that.query()
                                that.pendingflag = false
                            }).catch(error => {
                                that.pendingflag = false
                            })
                        }).catch(error => {
                            that.pendingflag = false
                        })

                    }).catch(() => {
                        that.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                    });


                }
            });
            const wopts = { bookType: 'xlsx', bookSST: false, type: 'binary' };//这里的数据是用来定义导出的格式类型
        },
        //如果使用 FileSaver.js 就不要同时使用以下函数
        saveAs(obj, fileName) {
            //当然可以自定义简单的下载文件实现方式 
            var tmpa = document.createElement("a");
            tmpa.download = fileName || "下载";
            tmpa.href = URL.createObjectURL(obj);
            //绑定a标签
            tmpa.click();
            //模拟点击实现下载
            setTimeout(function () {
                //延时释放
                URL.revokeObjectURL(obj);
                //用URL.revokeObjectURL()来释放这个object URL
            }, 100);
        },
        downloadExl(data, type) {
            let that = this
            const wb = { SheetNames: ['Sheet1'], Sheets: {}, Props: {} };
            wb.Sheets['Sheet1'] = XLSX.utils.json_to_sheet(data);
            //通过json_to_sheet转成单页(Sheet)数据
            this.saveAs(new Blob([that.s2ab(XLSX.write(wb, wopts))], { type: "application/octet-stream" }), "这里是下载的文件名" + '.' + (wopts.bookType == "biff2" ? "xls" : wopts.bookType));
        },
        s2ab(s) {
            if (typeof ArrayBuffer !== 'undefined') {
                var buf = new ArrayBuffer(s.length);
                var view = new Uint8Array(buf);
                for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
                return buf;
            } else {
                var buf = new Array(s.length);
                for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
                return buf;
            }
        }

    },
    watch: {
        dialogFormVisible(val) {
            if (!val) {
                this.form.sort = ''
                this.form.classstr = ''
                this.form.title = ''
                this.form.optionArr = ''
                this.form.inputArr = []
                this.form.type = ''
                this.form.tmlx = ''
                this.form.tmzqda = ''
            }
        }
    },
    filters: {
        updatestatus(val) {
            switch (val) {
                case 0:
                    return "正常";
                    break;
                case 1:
                    return "停用";
                    break;
            }
        },
    },
}
</script>

<style scoped>
#file {
    font-weight: 500;
    font-size: 12px;
    margin-left: 10px;
    border-radius: 20px;
    padding: 7px 15px;
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

.demo-log-tablemore {
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
</style>


<style>
.user .el-select {
    width: 100%;
}

.demo-log-tablemore .el-table__row td {
    padding: 2px 0 !important;
}

.demo-log-tablemore {
    margin-bottom: 10px;
}

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

.demo-log-tablemore th>.cell {
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
</style>