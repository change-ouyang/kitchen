<template>
    <div class="favorite-wrap">
        <div class="favoritemenu-album">
            <i class="el-icon-arrow-down"></i>
            <p>课程专辑（0）</p>
            <span>查看全部</span>
        </div>
        <div class="favoritemenu-favor">
            <i :class="{'el-icon-arrow-down':isicon,'el-icon-arrow-up':!isicon}" @click="favor()"></i>
            <p>课程收藏（0）</p>
        </div>
        <div class="favoritemenu-default" v-show="isdefault">
            <img src="../../../static/image/drawable-xxhdpi-v4/icon_default_empty.png" alt="">
            <p>空空如也，快去收藏吧</p>
        </div>
        <div class="favor-menu">
            <h4>热门课程推荐</h4>
            <div class="favor-menu-item" v-for="(item, index) in favoritemenu" :key="index">
                <div class="favor-itemleft">
                    <img :src="item.img" alt="">
                </div>
                <div class="favor-itemright">
                    <h3>{{item.name}}</h3>
                    <p>{{item.user}}</p>
                    <p>{{item.favor}}人收藏</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'favoritecourse',
    data() {
        return {
            favoritemenu:[],
            isicon:true,
            isdefault:true
        }
    },
    created() {
        this.$ajax.setGet('../../../static/json/favorite.json').then((res)=>{
            this.favoritemenu=res[1];
        })
    },
    methods: {
        favor(){
            this.isicon=!this.isicon
            if(this.isicon){
                this.isdefault=true
            }else{
                this.isdefault=false
            }
        }
    },
}
</script>
<style lang="">
    .favorite-wrap{
        width: 100%;
        margin-top: 35px;
        padding-bottom: 20px;
    }
    .favoritemenu-album{
        width: 100%;
        height: 30px;
        background: #F2F2F2;
        font-size: 14px;
        margin-bottom: 10px;
    }
    .favoritemenu-album i{
        line-height:30px;
        float:left;
        margin-left: 10px;
    }
    .favoritemenu-album p{
        line-height:30px;
        float:left;
        margin-left: 5px;
        font-size: 12px;
    }
    .favoritemenu-album span{
        line-height:30px;
        float:right;
        margin-right: 15px;
        font-size: 10px;
        color: gray;
    }
    .favoritemenu-favor{
        width: 100%;
        height: 30px;
        background: #F2F2F2;
        font-size: 14px;
    }
    .favoritemenu-favor i{
        line-height:30px;
        float:left;
        margin-left: 10px;
    }
    .favoritemenu-favor p{
        line-height:30px;
        float:left;
        margin-left: 5px;
        font-size: 12px;
    }
    .favoritemenu-default{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5px;
        box-sizing: border-box;
        margin: 0 auto;
    }
    .favoritemenu-default img{
        width: 100px;
        height: 80px;
    }
    .favoritemenu-default p{
        color: #ABABAB;
        padding: 15px;
        box-sizing: border-box;
        text-align: center;
        margin: 0 auto;
    }
    .favor-menu{
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    }
    .favor-menu h4{
        width: 100%;
        margin-bottom: 10px;
    }
    .favor-menu .favor-menu-item{
        width: 100%;
        height: 80px;
        display: flex;
        padding-bottom: 10px;
    }
    .favor-menu .favor-menu-item .favor-itemleft{
        flex: 4;
    }
    .favor-menu .favor-menu-item .favor-itemleft img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    .favor-menu .favor-menu-item .favor-itemright{
        flex: 6;
        margin-left: 15px;
    }
    .favor-menu .favor-menu-item .favor-itemright h3{
        font-size: 14px;
    }
    .favor-menu .favor-menu-item .favor-itemright p:nth-child(2){
        font-size: 12px;
        margin-top: 5px;
        color: black;
    }
    .favor-menu .favor-menu-item .favor-itemright p:nth-child(3){
        font-size: 12px;
        margin-top: 20px;
        color: gray;
    }
</style>