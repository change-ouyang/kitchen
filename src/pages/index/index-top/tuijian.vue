<template>
    <div class="tuijian-wrap">
        <div v-for="(item, index) in tuijiandata" :key="index">
            <div class="tuijian-top">
                <h3>{{item.name}}</h3>
                <img :src="item.img" alt="">
                <div class="title">
                    <p>{{item.username}}</p>
                    <p>可能感兴趣</p>
                    <p>{{item.favorite}}人收藏</p>
                </div>
            </div>
            <div class="tuijian-bottom">
                <h3>{{item.package[0].name}}</h3>
                <div class="zi-photo">
                    <div>
                        <img :src="item.package[0].img1" alt="">
                    </div>
                    <div>
                        <img :src="item.package[0].img2" alt="">
                    </div>
                    <div>
                        <img :src="item.package[0].img3" alt="">
                    </div>
                </div>
                <div class="title">
                    <p>{{item.package[0].username}}</p>
                    <p>{{item.package[0].user}}可能感兴趣</p>
                    <p>{{item.package[0].favorite}}人收藏</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'tuijian',
    data() {
        return {
            tuijiandata:[]
        }
    },
    created() {
        this.$ajax.setGet('../../../../static/json/tuijian.json').then((res)=>{
            console.log(res);
            this.tuijiandata=res
        })
    },
}
</script>
<style lang="">
    .tuijian-wrap{
        width: 100%;
        margin-top: 30px;
        padding-bottom: 50px;
    }
    .tuijian-top{
        width: 100%;
        padding: 5px;
        box-sizing: border-box;
    }
    .tuijian-top h3{
        font-size: 14px;
        padding-bottom: 10px;
    }
    .tuijian-top img{
        width: 100%;
        border-radius: 8px;
        padding-bottom: 10px;
    }
    .tuijian-top .title{
        width: 100%;
        height: 25px;
    }
    .tuijian-top .title p:nth-child(1){
        color: gray;
        font-size: 12px;
        margin-right: 15px;
        float: left;
    }
    .tuijian-top .title p:nth-child(2){
        color: orange;
        font-size: 12px;
        float: left;
    }
    .tuijian-top .title p:nth-child(3){
        color: gray;
        font-size: 12px;
        float: right;
    }
    .tuijian-bottom{
        width: 100%;
        padding: 5px;
        box-sizing: border-box;
        padding-top: 15px;
        padding-bottom: 30px;
    }
    .tuijian-bottom .zi-photo{
        width: 100%;
        padding-top: 15px;
        display: flex;
    }
    .tuijian-bottom .zi-photo div{
        flex: 1;
        padding: 5px;
    }
    .tuijian-bottom .zi-photo div img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
    .tuijian-bottom .title{
        width: 100%;
        height: 25px;
    }
    .tuijian-bottom .title{
        width: 100%;
        height: 25px;
    }
    .tuijian-bottom .title p:nth-child(1){
        color: gray;
        font-size: 12px;
        margin-right: 15px;
        float: left;
    }
    .tuijian-bottom .title p:nth-child(2){
        color: orange;
        font-size: 12px;
        float: left;
    }
    .tuijian-bottom .title p:nth-child(3){
        color: gray;
        font-size: 12px;
        float: right;
    }
</style>
        