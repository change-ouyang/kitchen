<template>
    <div class="classmore-wrap">
        <!-- 返回 -->
        <mt-header title="课程专辑" class="j-item-header">
            <router-link to="/class" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="classmore-item">
            <div class="classmore-div" v-for="(item, index) in classmore" :key="index">
                <div class="classmore-left">
                    <img :src="item.img" alt="">
                </div>
                <div class="classmore-right">
                    <h3>{{item.name}}</h3>
                    <p class="title">{{item.title}}</p>
                    <p class="typesof" v-for="(item, index) in item.type" :key="index">{{item.typesof1}}</p>
                    <p class="ficat">共节{{item.class}}课程</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'classmore',
    data() {
        return {
            classmore:[]
        }
    },
    created() {
        this.$ajax.setGet('../../../static/json/classmore.json')
        .then((res)=>{
            this.classmore=res;
        })
    },
}
</script>
<style>
    .j-item-header{
        width: 100%;
        background: white;
        box-shadow: 0px 0px 3px gray;
        color: black;
        position: fixed;
        top: 0;
        z-index: 10;
    }
    .classmore-item{
        widows: 100%;
        margin-top: 40px;
        padding-bottom: 20px;
        padding: 15px;
        box-sizing: border-box;
    }
    .classmore-item .classmore-div{
        width: 100%;
        display: flex;
        padding-bottom: 12px;
        box-sizing: border-box;
        position: relative;
    }
    .classmore-item .classmore-div .classmore-left{
        flex: 4;
    }
    .classmore-item .classmore-div .classmore-left img{
        width: 100%;
        height: 120px;
        border-radius: 5px;
    }
    .classmore-item .classmore-div .classmore-right{
        flex: 6;
        margin-left: 15px;
    }
    .classmore-item .classmore-div .classmore-right h3{
        font-size: 14px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .classmore-item .classmore-div .classmore-right .title{
        font-size: 12px;
        color: gray;
        margin-top: 10px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .classmore-item .classmore-div .classmore-right .typesof{
        width: 40px;
        text-align: center;
        font-size: 12px;
        color: gray;
        background: #F8F8F8;
        position: absolute;
        top: 50%;
    }
    .classmore-item .classmore-div .classmore-right .ficat{
        font-size: 12px;
        color: gray;
        margin-top: 10px;
        position: absolute;
        bottom: 18px;
    }
</style>
