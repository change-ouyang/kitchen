<template>
    <div class="freshwrap">
        <div class="fresh-header">
            <div class="square">
                <i class="el-icon-camera" @click="camera()"></i>
                <router-link to="/fresh/freshsquare" active-class="fresh-color" tag="div">广场</router-link>
            </div>
            <div class="atten">
                <router-link to="/fresh/freshatten" active-class="fresh-color" tag="div">关注</router-link>
                <i class="el-icon-message"></i>
            </div>
        </div>
        <mt-actionsheet
            :actions="actions"
            v-model="sheetVisible">
        </mt-actionsheet>
        <router-view></router-view>
    </div>
</template>
<script>
import { Actionsheet } from 'mint-ui';
import Vue from 'vue'
Vue.component(Actionsheet.name, Actionsheet);
export default {
    name:'fresh',
    data() {
        return {
            actions:[{name:'拍照'},{name:'从相册中选择',}],
            method(){},
            sheetVisible:false
        }
    },
    methods: {
        camera(){
            this.sheetVisible=true
        }
    },
}
</script>
<style lang="">
    .freshwrap{
        width: 100%
    }
    .fresh-header{
        width: 100%;
        height: 35px;
        display: flex;
        background: white;
        justify-content: space-between;
        box-shadow: 0px 0px 2px gray;
        position: fixed;
        top: 0;
        z-index: 10;
    }
    .fresh-header .square{
        width: 100%;
        height: 35px;
        line-height: 35px;
        flex: 1;
        display: flex;
    }
    .fresh-header .fresh-color{
        color: orange;
        border-bottom: 2px solid orange;
    }
    .fresh-header .square i{
        width: 100%;
        height: 35px;
        line-height: 35px;
        text-align: left;
        margin-left: 10px;
        font-size: 18px;
    }
    .fresh-header .square div{
        width: 100%;
        text-align: center;
    }
    .fresh-header .atten{
        flex: 1;
        height: 35px;
        line-height: 35px;
        display: flex;
        text-align: right;
    }
    .fresh-header .atten i{
        width: 100%;
        height: 35px;
        line-height: 35px;
        text-align: right;
        margin-right: 10px;
        font-size: 18px;
    }
    .fresh-header .atten div{
        width: 100%;
        text-align: center;
    }
</style>