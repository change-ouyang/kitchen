<template>
    <div>
        <!-- 头部 -->
        <div class="mineheader">
            <p>
                <span class="el-icon-message"></span>
                <span class="el-icon-setting"></span>
            </p>
        </div>
        <!-- 登录 -->
        <div class="login" @click="personal()">
            <img src="../../../static/image/drawable-xxhdpi-v4/mine_no_login_head.png" alt="">
            <h3>请登录</h3>
        </div>
        <!-- vip商城 -->
        <div class="vipshop">
            <div class="vip-div">
                <div>
                    <img src="../../../static/image/drawable-xxhdpi-v4/me_vip_icon.png" alt="">
                </div>
                <div>
                    <h4>VIP会员</h4>
                    <p>1w+课程免费看</p>
                </div>
            </div>
            <div class="shop-div">
                <div>
                    <img src="../../../static/image/drawable-xxhdpi-v4/me_ecoin_icon.png" alt="">
                </div>
                <div>
                    <h4>厨币商城</h4>
                    <p>赚厨币，兑好礼</p>
                </div>
            </div>
        </div>
        <!-- 网上厨房 -->
        <div class="wang-img">
            <img src="../../../static/image/drawable-xxhdpi-v4/mine_original_img.jpg" alt="">
        </div>
        <!-- 功能 -->
        <div class="features">
            <div>
                <img src="../../../static/image/drawable-xxhdpi-v4/home_me_icon_works.png" alt="">
                <p>作品</p>
            </div>
            <div>
                <img src="../../../static/image/drawable-xxhdpi-v4/home_me_icon_collection.png" alt="">
                <p>收藏</p>
            </div>
            <div>
                <img src="../../../static/image/drawable-xxhdpi-v4/home_me_icon_lesson.png" alt="">
                <p>课程</p>
            </div>
            <div>
                <img src="../../../static/image/drawable-xxhdpi-v4/home_me_icon_basket.png" alt="">
                <p>菜篮</p>
            </div>
        </div>
        <!-- mine -->
        <div class="mine-div">
            <div class="money">
                <p>我的钱包</p>
                <p><span class="el-icon-arrow-right"></span></p>
            </div>
            <div class="draft">
                <p>草稿箱</p>
                <p><span class="el-icon-arrow-right"></span></p>
            </div>
            <div class="talent">
                <p>达人申请</p>
                <p><span class="el-icon-arrow-right"></span></p>
            </div>
            <div class="cust">
                <p>联系客服</p>
                <p><span class="el-icon-arrow-right"></span></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'mine',
    methods: {
        personal(){
            this.$router.push({
                path:'/personal'
            })
        }
    },
}
</script>
<style lang="">
    .mineheader{
        width: 100%;
        height: 130px;
        background: url('../../../static/image/mipmap-xxhdpi-v4/sign_bg.jpg') repeat center bottom;
        background-size: cover;
    }
    .mineheader p{
        width: 100%;
        height: 60px;
        text-align: right;
        font-size: 23px;
        color: white;
        padding: 10px;
        box-sizing: border-box;
    }
    .login{
        width: 90%;
        margin: 0 auto;
        height: 60px;
        background: white;
        border-radius: 10px;
        margin-top: -60px;
        box-shadow: 1px 2px 3px #888888;
        padding: 15px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
    }
    .login img{
        padding: 5px;
        width: 40px;
        height: 40px;
    }
    .vipshop{
        width: 90%;
        margin: 0 auto;
        height: 60px;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
    }
    .vip-div{
        padding: 10px;
        box-sizing: border-box;
        box-shadow: 1px 2px 3px #888888;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    }
    .vip-div div img{
        width: 30px;
        height: 30px;
    }
    .shop-div{
        padding: 10px;
        box-sizing: border-box;
        box-shadow: 1px 2px 3px #888888;
        display: flex;
        border-radius: 5px;
        align-items: center;
        border-radius: 5px;
    }
    .shop-div div img{
        width: 30px;
        height: 30px;
    }
    .vipshop h4{
        margin-left: 5px;
    }
    .vipshop p{
        margin-left: 5px;
        font-size: 12px;
        color: gray;
    }
    .wang-img img{
        width: 100%;
    }
    .features{
        width: 100%;
        display: flex;
        padding: 10px;
        box-sizing: border-box;
        text-align: center;
    }
    .features div{
        flex: 1;
    }
    .features div img{
        width: 30px;
        height: 30px;
    }
    .features div p{
        font-size: 14px;
        margin-top: 5px;
    }
    .mine-div{
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        margin-top: 10px;
    }
    .mine-div div{
        width: 100%;
        height: 20px;
        padding-bottom: 15px;
    }
    .mine-div div p:nth-child(1){
        font-weight: 600;
        height: 20px;
        float: left;
    }
    .mine-div div p:nth-child(2){
        font-weight: 600;
        height: 20px;
        float: right;
        font-size: 20px;
    }
</style>