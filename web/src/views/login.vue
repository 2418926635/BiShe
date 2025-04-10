<template>
    <div class="login-main">
        <div class="head">
            <div class="bigtitle">智慧社区后台管理系统</div>
        </div>
        <div class="content">
            <el-card shadow="hover" class="login-mainsub">
                <el-form ref="form" :model="form" :rules="loginRules">
                    <el-form-item>
                        <div class="login-title">欢迎使用</div>
                    </el-form-item>
                    <el-form-item prop="account">
                        <el-input placeholder="请输入登录账号" prefix-icon="el-icon-user" v-model="form.account">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="请输入登录密码" prefix-icon="el-icon-lock" v-model="form.password">
                        </el-input>
                    </el-form-item>
                    <!-- <el-form-item prop="code">
                        <el-row :gutter="20">
                            <el-col :span="13">
                                <el-input @keyup.native.enter="vertiylogin" placeholder="请输入验证码"
                                    prefix-icon="el-icon-connection" v-model="form.code">
                                </el-input>
                            </el-col>
                            <el-col :span="11">
                                <div class="login-pic">
                                    <img class="login-piccontent" :src="imgbase" @click="changeimg">
                                </div>
                            </el-col>
                        </el-row>
                    </el-form-item> -->
                    <!-- <el-form-item label="">
                    <div class="login-remember">
                        <el-checkbox-group v-model="form.remember">
                            <el-checkbox label="记住密码" name="remember"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                </el-form-item> -->
                    <el-button class="login-submit" type="primary" @click="vertiylogin">登录</el-button>
                </el-form>
            </el-card>
        </div>
        <div class="mid"></div>

    </div>
</template>
<script>

import { login, verify, getUserBasicInfo } from '@/api/sysapi'
export default {
    components: {

    },
    data() {
        return {
            imgbase: '',
            form: {
                account: '',
                password: '',
                code: '',
                uuid: '',
                remember: []
            },
            loginRules: {
                account: [
                    { required: true, trigger: "blur", message: "请输入您的账号" }
                ],
                password: [
                    { required: true, trigger: "blur", message: "请输入您的密码" }
                ],
                code: [{ required: true, trigger: "blur", message: "请输入验证码" }]
            },

        }
    },
    created() {
    },
    methods: {
        // changeimg() {
        //     verify().then(res => {
        //         console.log(res)
        //         this.imgbase = 'data:image/png;base64,' + res.data.img
        //         this.form.uuid = res.data.uuid
        //     }).catch(error => {
        //     })
        // },
        getData() {

        },
        vertiylogin() {
            let obj = {
                password: this.form.password,
                empNo: this.form.account,
                uuid: this.form.uuid,
                // verifyCode: this.form.code
            }
            login(obj).then(res => {
                let arr = res
                // .filter((val, i) => {
                //     return val.role == "系统管理员"
                // })
                if (arr.length > 0) {
                    sessionStorage.setItem('userinfo', JSON.stringify(arr[0]))
                    this.$message({
                        message: '登录成功',
                        type: 'success',
                        duration: 1000
                    });
                    setTimeout(() => {
                        this.$router.push({ name: 'systemuser' })
                    }, 1000);
                } else {
                    this.$message.error('登录错误请重试')
                }
            }).catch(error => {
                console.log(error)
            })
        },

    }
}
</script>

<style scoped>
.login-main {
    width: 100%;
    height: 100vh;
    background-color: #7aa35d;
}

.head {
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}



.content {
    height: 66%;
    background-image: url("@/assets/bg.jpg");
    background-clip: padding-box;
    background-repeat: repeat-x;
    background-size: contain;
    background-position: center center;
    padding-right: 8%;
    display: flex;
    justify-content: right;
    align-items: center;
}

.mid {
    height: 12%;
}

.bottom {
    height: 7%;
    background-color: #ededed;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bottom-sub {
    font-size: 0.8em;
}


.bigtitle {
    color: aliceblue;
    font-size: 2em;
    font-weight: bold;
}

.smalltitle {
    font-size: 0.8em;
    color: #cfb8b8;
    margin-top: 10px;
}


.login-mainsub {
    width: 25%;
}

.login-pic {
    height: 38px;
    width: 100%;
    background-color: rgb(195, 210, 205);
}

.login-remember {
    display: flex;
    justify-content: left;
    align-items: center;
}

.login-submit {
    width: 100%;
}

.login-title {
    font-size: 1.5em;
}

.login-text {
    font-size: 0.8em;
    position: absolute;
    bottom: 20px;
}

.login-piccontent {
    height: 38px;
    width: 100%;
}
</style>