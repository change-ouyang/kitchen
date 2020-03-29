<template>
    <div>
        <!-- 返回 -->
        <mt-header title="注册" class="r-register-header">
            <router-link to="/personal" slot="left">
                <mt-button icon="back">取消</mt-button>
            </router-link>
        </mt-header>
        <div class="register-ipt">
            <div @click="user(password)">
                <label for="">手机号</label>
                <input type="text" v-model="username" placeholder="请输入手机号"><br>
                <label for="" style="margin-left:10px">密码</label>
                <input type="text" v-model="password" placeholder="请输入密码">
            </div>
            <div class="protocol">
                <span @click="icon()" class="el-icon-football" v-show="iconshow"></span>
                <span @click="icon()" class="el-icon-success" v-show="!iconshow"></span>
                <span class="title">
                    阅读并同意
                    <span style="color:orange;font-size:12px">
                        《用户协议》《隐私协议》
                    </span>
                </span>
            </div>
            <div class="register-btn">
                <mt-button v-show="showbtn" disabled class="btn-item1" type="primary" size="large" @click="register(username,password)">立即注册</mt-button>
                <mt-button v-show="hidebtn" class="btn-item2" type="primary" size="large">立即注册</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import { Button } from 'mint-ui';
import Vue from 'vue'
Vue.component(Button.name, Button);
export default {
    name:'register',
    data() {
        return {
            username:'',
            password:'',
            showbtn:true,
            hidebtn:false,
            iconshow:true,
        }
    },
    methods: {
        user(username){
            if(!this.username==='' && this.iconshow===true){
                this.showbtn=false
                this.hidebtn=true
            }
        },
        register(username,password){
            console.log(username,password);
        },
        icon(){
            this.iconshow=!this.iconshow
        }
    },
}
</script>
<style lang="">
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