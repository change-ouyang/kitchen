<template>
    <div class="j-item-wrap">
        <!-- 返回 -->
        <mt-header title="" class="j-item-header">
            <router-link to="/index/jiachang" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right" @click="more()"></mt-button>
        </mt-header>
        <!-- 弹出 -->
        <mt-actionsheet v-model="isshow">

        </mt-actionsheet>
        <div class="j-item-content">
            <div>
                <img :src="obj.img" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import { Indicator } from 'mint-ui';
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import { Actionsheet } from 'mint-ui';
Vue.component(Actionsheet.name, Actionsheet);
export default {
    name:'jiachangitem',
    data() {
        return {
            jiachangitemdata:[],
            obj:'',
            isshow:false
        }
    },
    created() {
        

        this.$ajax.setGet('../../../../static/json/jiachangitem.json')
        .then((res)=>{
            this.jiachangitemdata=res
            var id=this.$route.params.id;
            this.obj=this.jiachangitemdata.find((item)=>item.id==id)
        })
    },
    methods: {
        more(){
            this.isshow=true
        }
    },
}
</script>
<style lang="">
    /* .j-item-header{
        background: transparent;
    } */
    .j-item-wrap .video{
        width: 100%;
    }
    .j-item-content img{
        width: 100%;
    }
</style>