<template>
    <div class="jiachang-wrap">
        <div id="jiachang-item">
            <div class="jiachang-item" v-for="(item, index) in jiachangdata" :key="index" @click="todetails(item.id)">
                <h3>{{item.name}}</h3>
                <img alt="" v-lazy="item.img">
                <div class="title">
                    <p>{{item.username}}</p>
                    <p>{{item.favorite}}人收藏</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
import axios from 'axios'
import { Indicator } from 'mint-ui';
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
export default {
    name:'jiachang',
    data() {
        return {
            jiachangdata:[],
            loading:false,
            start:0,
            count:5,
        }
    },
    created() {
        // //拦截器的使用
        axios.interceptors.request.use(function (config) {
            Indicator.open({
                text: 'Loading...',
                spinnerType: 'fading-circle',
            });
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });
        axios.interceptors.response.use(function (response) {
            Indicator.close();
            return response;
        }, function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
        });
        this.loadMore(); //调用数据
    },
    methods: {
        loadMore(){
            this.loading=true;
            this.$ajax.setGet('../../../../static/json/jiachang.json',)
            .then((res)=>{
                this.jiachangdata=res;
                // this.jiachangdata.splice(this.start,this.count)
                // console.log(this.jiachangdata);
                this.loading=false;
            })
        },
        todetails(id){
            this.$router.push({
                path:'/jiachangitem/'+id
            })
        }
    },
}
</script>
<style lang="">
    .jiachang-wrap{
        width: 100%;
        padding-bottom: 50px;
        margin-top: 20px;
    }
    #jiachang-item{
        height: 100vh;
    }
    .jiachang-item{
        width: 100%;
        padding: 10px;
        padding-bottom: 30px;
        box-sizing: border-box;
    }
    .jiachang-item h3{
        font-size: 14px;
        padding-bottom: 15px;
    }
    .jiachang-item img{
        width: 100%;
    }
    .jiachang-item .title{
        width: 100%;
        height: 25px;
        padding: 10px;
        box-sizing: border-box;
    }
    .jiachang-item .title p:nth-child(1){
        color: gray;
        float: left;
    }
    .jiachang-item .title p:nth-child(2){
        color: gray;
        float: right;
    }
</style>