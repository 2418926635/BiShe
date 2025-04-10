<template>
    <div class="user-main">
        <el-row :gutter="20">
            <el-col :span="24" class="user-demoright">
                <div class="passclass">
                    <h3 style="text-align:left; margin-right: 20px;width: 100px;">账号：</h3>
                    <el-input v-model="form.empNo" placeholder="请输入账号" maxlength="30" />
                </div>
            </el-col>
            <el-col :span="24" class="user-demoright">
                <div class="passclass">
                    <h3 style="text-align:left; margin-right: 20px;width: 100px;">姓名：</h3>
                    <el-input v-model="form.userName" placeholder="请输入账号" maxlength="30" />
                </div>
            </el-col>
            <el-col :span="24" class="user-demoright">
                <div class="passclass">
                    <h3 style="text-align:left; margin-right: 20px;width: 100px;">密码：</h3>
                    <el-input type="password" v-model="form.password" placeholder="请输入密码" maxlength="30" />
                </div>
            </el-col>
            <el-col :span="24" class="user-demoright">
                <div class="passclass">
                    <h3 style="text-align:left; margin-right: 20px;width: 100px;">电话：</h3>
                    <el-input v-model="form.mobile" placeholder="请输入电话" maxlength="30" />
                </div>
            </el-col>
            <el-col :span="24" class="user-demoright">
                <div class="passclass">
                    <h3 style="text-align:left; margin-right: 20px;width: 100px;">邮箱：</h3>
                    <el-input v-model="form.email" placeholder="请输入邮箱" maxlength="30" />
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="10" class="user-demoright">
                <el-button style="width: 100%;" type="primary" @click="update">修改信息</el-button>
            </el-col>
            <el-col :span="10" class="user-demoright">
                <el-button style="width: 100%;" type="success" @click="sepwd">修改密码</el-button>
            </el-col>
        </el-row>

    </div>
</template>
<script>
import { updateSysUsersim, resetPassword } from '@/api/sysapi'
import { cleandatafun } from '@/utils/clean'



export default {
    name: 'report01',
    components: {

    },
    created() {
        this.userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
        this.form = this.userinfo
    },
    data() {
        return {
            userinfo: {
                id: '',
                password: '',
                userName: '',
                empNo: '',
                email: '',
                mobile: ''
            },
            pendingflag: false,
            form: {
                id: '',
                password: '',
                userName: '',
                empNo: '',
                email: '',
                mobile: ''
            }
        }
    },
    methods: {
        update() {
            let obj = this.form
            updateSysUsersim(obj).then(res => {
                this.$message.success('修改成功')
                setTimeout(() => {
                    //需要清除所有数据
                    cleandatafun()
                    if (this.userinfo.role == '用户') {
                        location.href = '#/userlogin?' + Math.random()
                    } else {
                        location.href = '#/login?' + Math.random()
                    }
                    //此处采用强制刷新，清除缓存(也可使用其它方式：https://juejin.cn/post/6844903982301708302)
                    location.reload()
                }, 1000);



            }).catch(error => {
                console.log(error)
                // this.$message.error('操作失败')
            })
        },
        sepwd() {
            let obj = {
                id: this.userinfo.id,
                password: this.form.password
            }
            resetPassword(obj).then(res => {
                this.$message.success('修改成功')
                setTimeout(() => {
                    //需要清除所有数据
                    cleandatafun()
                    if (this.userinfo.role == '用户') {
                        location.href = '#/userlogin?' + Math.random()
                    } else {
                        location.href = '#/login?' + Math.random()
                    }
                    //此处采用强制刷新，清除缓存(也可使用其它方式：https://juejin.cn/post/6844903982301708302)
                    location.reload()
                }, 1000);
            }).catch(error => {
                console.log(error)

            })
        }
    },
    watch: {
    },
}
</script>

<style scoped>
.user-main {
    padding: 2%;
    width: 30%;
}

.passclass {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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

.demo-user-tablemore th>.cell {
    padding-left: 14px;
    padding-right: 14px;

}
</style>