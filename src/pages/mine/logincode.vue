<template>
    <div class="logincodewrap">
        <div class="logincode-ipt">
            <div @click="user(password)">
                <label for="">手机号</label>
                <input type="text" v-model="username" placeholder="请输入手机号"><br>
                <label for="">验证码</label>
                <input type="text" v-model="password" placeholder="请输入短信验证码">
                <p class="code">获取验证码</p>
            </div>
            <div class="logincode-btn">
                <mt-button v-show="showbtn" disabled class="btn-item1" type="primary" size="large" @click="logincode(username,password)">立即登录</mt-button>
                <mt-button v-show="hidebtn" class="btn-item2" type="primary" size="large">立即登录</mt-button>
            </div>
        </div>
        <div class="account">
            <p>登录即同意<span style="color:orange">《用户协议》《隐私协议》</span></p>
        </div>
    </div>
</template>
<script>
import { Button } from 'mint-ui';
import Vue from 'vue'
Vue.component(Button.name, Button);
export default {
    name:'logincodecode',
    data() {
        return {
            username:'',
            password:'',
            showbtn:true,
            hidebtn:false,
        }
    },
    methods: {
        user(username){
            if(!this.username==''){
                this.showbtn=false
                this.hidebtn=true
            }
        },
        logincode(username,password){
            
        }
    },
}
</script>
<style lang="">
    .logincodewrap{
        width: 100%;
    }
    .logincode-ipt{
        width: 90%;
        margin: 0 auto;
        position: relative;
    }
    .logincode-ipt .code{
        width: 80px;
        height: 25px;
        line-height: 25px;
        font-size: 12px;
        background: #EBEBEB;
        color: orange;
        border-radius: 5px;
        text-align: center;
        position: absolute;
        right: 10px;
        top: 62px;
    }
    .logincode-ipt label{
        font-weight: bold;
        height: 30px;
        line-height: 30px;
    }
    .logincode-ipt input{
        width: 80%;
        height: 30px;
        line-height: 30px;
        margin-left: 10px;
        margin-top: 15px;
        border: none;
    }
    .logincode-ipt .forget{
        height: 20px;
        position: absolute;
        right: 0;
        font-size: 12px;
        color: gray;
    }
    .logincode-btn{
        width: 100%;
        margin-top: 30px;
        padding-bottom: 10px;
        box-sizing: border-box;
    }
    .logincode-btn .btn-item1{
        background: #DDDDDD;
        font-weight: normal;
        font-size: 14px;
        color: white;
    }
    .logincode-btn .btn-item2{
        background: #FEF3DF;
        font-weight: normal;
        font-size: 14px;
        color: orange;
    }
    .logincode-btn .btn-item3{
        margin-top: 10px;
        background: white;
        font-weight: normal !important;
        font-size: 14px;
        color: orange;
        border: 1px solid orange;
    }
    .logincodewrap .account{
        width: 100%;
        position: absolute;
        bottom: 0;
        padding-bottom: 20px;
        box-sizing: border-box;
    }
    .logincodewrap .account p:nth-child(1){
        text-align: center;
        color: gray;
        font-size: 12px;
    }

</style>