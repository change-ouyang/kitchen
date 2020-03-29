<template>
    <div>
        <!-- 返回 -->
        <mt-header title="登录" class="r-login-header">
            <router-link to="/mine" slot="left">
                <mt-button icon="back">取消</mt-button>
            </router-link>
        </mt-header>
        <div class="r-register-tab">
            <router-link to="/personal/login" active-class="person" tag="div">密码登录</router-link>
            <router-link to="/personal/logincode" active-class="person" tag="div">验证码登录</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import { TabContainer, TabContainerItem } from 'mint-ui';
import Vue from 'vue'
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
export default {
    name:'register',
}
</script>
<style lang="">
    .r-login-header{
        width: 100%;
        height: 50px;
        background: white;
        color: black;
    }
    .r-register-tab{
        width: 100%;
        height: 40px;
        line-height: 20px;
        box-shadow: 0px 0px 2px gray;
        display: flex;
        padding: 10px;
        box-sizing: border-box;
    }
    .r-register-tab div:nth-child(1){
        flex: 1;
        text-align: center;
        font-weight: bold;
        color: gray;
    }
    .r-register-tab div:nth-child(2){
        flex: 1;
        text-align: center;
        color: gray;
        font-weight: bold;
    }
    .r-register-tab div.person{
        color: orange;
    }
</style>