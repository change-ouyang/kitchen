<template>
    <div class="indexwrap">
        <div class="index-search">
            <i class="el-icon-search"></i>
            <input id="index-ipt" placeholder="再此输入菜名/食材/搜索菜谱">
        </div>
        <div class="index-nav">
            <ul>
                <router-link to="/index/tuijian" active-class="color" tag="li">推荐</router-link>
                <router-link to="/index/jiachang" active-class="color" tag="li">家常菜</router-link>
                <router-link to="/index/hongpei" active-class="color" tag="li">烘焙</router-link>
                <router-link to="/index/baby" active-class="color" tag="li">宝宝辅食</router-link>
                <router-link to="/index/zaocan" active-class="color" tag="li">早餐</router-link>
            </ul>
                <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name:'index'
}
</script>
<style lang="">
    .index-search{
        width: 90%;
        margin: 0 auto;
        position: relative;
    }
    .index-search .el-icon-search{
        position: absolute;
        right: 15px;
        line-height: 55px;
        font-size: 22px;
        color: gray;
    }
    #index-ipt{
        width: 100%;
        margin-top: 10px;
        text-align: left;
        text-indent: 1.5em;
        border-radius: 50px;
        border: 2px gray solid;
        height: 30px;
        background: #F5F7F6;
        font-size: 12px;
    }
    .index-nav{
        padding: 10px;
        box-sizing: border-box;
        width: 100%;
        height: 30px;
    }
    .index-nav ul{
        width: 100%;
        height: 30px;
    }
    .index-nav ul li{
        width: 100%;
        height: 30px;
        line-height: 30px;
        width: 20%;
        list-style: none;
        display: inline-block;
        float: left;
        text-align: center;
        font-size: 14px;
    }
    .index-nav .color{
        background: #FFB044;
        color: white;
        border-radius: 100%;
        transition: all 0.2s;
    }
</style>