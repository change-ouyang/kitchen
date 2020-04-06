<template>
    <div class="loginwrap">
        <div class="login-ipt">
            <!-- 账号密码 -->
            <div>
                <label for="">账号</label>
                <input type="text" @click="find()" v-model="username" placeholder="请输入手机号/Email(区分大小写)"><br>
                <label for="">密码</label>
                <input type="password" @click="find()" v-model="password" placeholder="请输入密码">
                <div class="forget">
                    <p>忘记密码？</p>
                </div>
            </div>
            <!-- 登录注册 -->
            <div class="login-btn">
                <mt-button v-show="showbtn" disabled class="btn-item1" type="primary" size="large">立即登录</mt-button>
                <mt-button v-show="!showbtn" class="btn-item2" type="primary" size="large" @click="login(username,password)">立即登录</mt-button>
                <mt-button class="btn-item3" size="large" @click="toregister()">没有账号？立即注册</mt-button>
            </div>
        </div>
        <!-- 第三方账号登录 -->
        <div class="account">
            <p>
                第三方账号登录
            </p>
            <div class="account-div">
                <div class="qq">
                    <img src="../../../static/image/drawable-xxhdpi-v4/login_qq.png" alt="">
                    <p>qq</p>
                </div>
                <div class="weicat">
                    <img src="../../../static/image/drawable-xxhdpi-v4/login_wechat.png" alt="">
                    <p>微信</p>
                </div>
                <div class="weibo">
                    <img src="../../../static/image/drawable-xxhdpi-v4/login_weibo.png" alt="">
                    <p>微博</p>
                </div>
            </div>
            <p>登录即同意<span style="color:orange">《用户协议》《隐私协议》</span></p>
        </div>
    </div>
</template>
<script>
import Register from '../mine/register'
import { Button } from 'mint-ui';
import Vue from 'vue'
Vue.component(Button.name, Button);
import { MessageBox } from 'mint-ui';
export default {
    name:'login',
    components:{
        Register
    },
    data() {
        return {
            username:'',
            password:'',
            showbtn:true,
            loading:false,
        }
    },
    created() {
        let user=this.$route.query.username;
        let pwd=this.$route.query.password;
        let root=localStorage.getItem('user')
        // console.log(user);
    },
    methods: {
        find(){
            if(this.username!='' || this.password!=''){
                this.showbtn=false
            }else{
                this.showbtn=true
            }
        },
        login(username,password){
            this.bgshow=true;
            let user=this.$route.query.username;
            let pwd=this.$route.query.password;
            if(user==username && pwd==password){
                // console.log(this.username);
                // console.log(username);
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                setTimeout(() => {
                    loading.close();
                    this.$router.push({
                        path:'/mine',
                        query:{
                            id:username
                        }
                    })
                }, 1500);
            }else{
                MessageBox('提示', '登录失败');
            }
        },
        toregister(){
            this.$router.push({
                path:'/register'
            })
        }
    },
}
</script>
<style lang="">
    .loginwrap{
        width: 100%;
        height: calc(100vh - 90px);
    }
    .login-ipt{
        width: 90%;
        margin: 0 auto;
        position: relative;
    }
    .login-ipt label{
        font-weight: bold;
        height: 30px;
        line-height: 30px;
    }
    .login-ipt input{
        width: 80%;
        height: 30px;
        line-height: 30px;
        margin-left: 10px;
        margin-top: 15px;
        border: none;
    }
    .login-ipt .forget{
        height: 20px;
        position: absolute;
        right: 0;
        margin-top: 5px;
        font-size: 12px;
        color: gray;
    }
    .login-btn{
        width: 100%;
        margin-top: 30px;
        padding-bottom: 10px;
        box-sizing: border-box;
    }
    .login-btn .btn-item1{
        background: #DDDDDD;
        font-weight: normal;
        font-size: 14px;
        color: white;
    }
    .login-btn .btn-item2{
        background: #FEF3DF;
        font-weight: normal;
        font-size: 14px;
        color: orange;
    }
    .login-btn .btn-item3{
        margin-top: 10px;
        background: white;
        font-weight: normal !important;
        font-size: 14px;
        color: orange;
        border: 1px solid orange;
    }
    .loginwrap .account{
        width: 100%;
        position: absolute;
        bottom: 0;
        padding-bottom: 20px;
        box-sizing: border-box;
    }
    .loginwrap .account p:nth-child(1){
        text-align: center;
        color: gray;
    }
    .loginwrap .account p:nth-child(3){
        text-align: center;
        color: gray;
        font-size: 12px;
    }
    .loginwrap .account-div{
        display: flex;
        margin-top: 20px;
        padding-bottom: 20px;
        box-sizing: border-box;
    }
    .loginwrap .account-div div{
        flex: 1;
        text-align: center;
        color: gray;
    }
    .loginwrap .account-div img{
        width: 30px;
        height: 30px;
    }
</style>