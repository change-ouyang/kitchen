<template>
    <div 
        class="register-wrap"
        v-loading="loading"
        element-loading-text="加载登录页..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)">
        <!-- 返回 -->
        <mt-header title="注册" class="r-register-header">
            <router-link to="/personal" slot="left">
                <mt-button icon="back">取消</mt-button>
            </router-link>
        </mt-header>
        <div class="register-ipt">
            <div>
                <label for="">手机号</label>
                <input type="text" v-model="username" placeholder="请输入手机号"><br>
                <label for="" style="margin-left:10px">密码</label>
                <input type="text" v-model="password" placeholder=" 请输入密码">
            </div>
            <div class="protocol">
                <span @click="icon(username,password)" class="el-icon-football" v-show="iconshow"></span>
                <span @click="icon(username,password)" class="el-icon-success" v-show="!iconshow"></span>
                <span class="title">
                    阅读并同意
                    <span style="color:orange;font-size:12px">
                        《用户协议》《隐私协议》
                    </span>
                </span>
            </div>
            <div class="register-btn">
                <mt-button v-show="showbtn" disabled class="btn-item1" type="primary" size="large">立即注册</mt-button>
                <mt-button v-show="!showbtn" class="btn-item2" type="primary" size="large" @click="register(username,password)">立即注册</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import { Button } from 'mint-ui';
import Vue from 'vue'
Vue.component(Button.name, Button);
import { Toast } from 'mint-ui';
export default {
    name:'register',
    data() {
        return {
            username:'',
            password:'',
            showbtn:true,
            iconshow:true,
            loading: false
        }
    },
    methods: {
        register(username,password){
            Toast({
                message: '注册成功',
                position: 'middle',
                duration: 1000
            });
            setTimeout(() => {
                this.loading=true;
            }, 1500);
            setTimeout(() => {
                this.$router.push({
                    path:`/personal/login`,
                    query:{
                        username:username,
                        password:password
                    }
                })
            }, 4000);
        },
        icon(username,password){
            this.iconshow=!this.iconshow
            if(this.username!=='' && this.password!=='' && this.iconshow===false){
                this.showbtn=!this.showbtn
            }else{
                this.showbtn=!this.showbtn
            }
        }
    },
}
</script>
<style lang="">
    .register-wrap{
        width: 100wh;
        height: 100vh;
    }
    .r-register-header{
        width: 100%;
        height: 50px;
        background: white;
        color: black;
        box-shadow: 0px 0px 1px  gray;
    }
    .register-ipt{
        width: 90%;
        margin: 0 auto;
        position: relative;
    }
    .register-ipt::-webkit-input-placeholder { /* WebKit browsers */
        color: gray;
        font-size: 14px;
    }
    .register-ipt label{
        font-weight: bold;
        height: 30px;
        line-height: 30px;
    }
    .register-ipt input{
        width: 80%;
        height: 30px;
        line-height: 30px;
        margin-left: 10px;
        margin-top: 15px;
        border: none;
    }
    .register-ipt .forget{
        height: 20px;
        position: absolute;
        right: 0;
        font-size: 12px;
        color: gray;
    }
    .protocol{
        width: 100%;
        height: 35px;
        line-height: 35px;
        display: flex;
        align-items: center;
    }
    .protocol .el-icon-football{
        color: orange;
        font-size: 18px;
    }
    .protocol .el-icon-success{
        color: orange;
        font-size: 18px;
    }
    .protocol .title{
        margin-left: 5px;
        font-size: 12px;
    }
    .register-btn{
        width: 100%;
        margin-top: 10px;
        padding-bottom: 10px;
        box-sizing: border-box;
    }
    .register-btn .btn-item1{
        background: #DDDDDD;
        font-weight: normal;
        font-size: 14px;
        color: white;
    }
    .register-btn .btn-item2{
        background: #FEF3DF;
        font-weight: normal;
        font-size: 14px;
        color: orange;
    }
</style>