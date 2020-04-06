<template>
    <div>
        <!-- 头部 -->
        <div class="mineheader" v-if="usershow">
            <p>
                <span class="el-icon-message"></span>
                <span class="el-icon-setting"></span>
            </p>
        </div>
        <!-- 登录 -->
        <div class="login" @click="personal()" v-if="usershow">
            <img src="../../../static/image/drawable-xxhdpi-v4/mine_no_login_head.png" alt="">
            <h4>请登录</h4>
        </div>
        <!-- 头部 -->
        <div class="minesheader"  v-if="!usershow">
            <p class="icon-top">
                <span class="el-icon-message"></span>
                <span class="el-icon-setting"></span>
            </p>
            <!-- 用户 -->
            <div class="mineuser" v-if="!usershow">
                <div class="mineuser-div">
                    <div class="user-img">
                        <img src="../../../static/image/drawable-hdpi-v4/play.png" alt="">
                    </div>
                    <div class="user-name">
                        <h4>{{username | exillpops}}</h4>
                        <p>请添加您的专长</p>
                    </div>
                </div>
                <div class="mineuser-grade">
                    <span class="el-icon-male"></span>
                    <span class="grade">LV.1</span>
                    <span class="el-icon-s-opportunity"></span>
                    <i class="el-icon-arrow-right"></i>
                </div>
            </div>
            <!-- 粉丝 -->
            <div class="fans">
                <div>
                    <p>0</p>
                    <p>关注</p>
                </div>
                <div>
                    <p>0</p>
                    <p>粉丝</p>
                </div>
                <div>
                    <p class="el-icon-edit-outline"></p>
                    <p style="background:#FFC384;font-size:12px;padding:2px;border-radius:8px">签到</p>
                </div>
            </div>
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
    data() {
        return {
            usershow:true,
            username:"",
        }
    },
    filters:{
        exillpops(val){
            if(!val) return '';
            if(val.length>6){
                return val.slice(0,6)+'...'
            }
            return val;
        }
    },
    methods: {
        personal(){
            this.$router.push({
                path:'/personal'
            })
        }
    },
    created() {
        let id=this.$route.query.id
        if(id){
            this.username=id
            this.usershow=false
        }
    },
    watch: {
        '$route':function(to,from){

        }
    },
    beforeRouteUpdate (to, from, next) {
        console.log(to);
        let id=this.$route.query.id
        if(id,to.path=='/mine'){
            this.usershow=false
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
    .mineheader p span{
        margin-right: 10px;
    }
    .login{
        width: 90%;
        margin: 0 auto;
        height: 60px;
        background: white;
        border-radius: 10px;
        margin-top: -30px;
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
    .minesheader{
        width: 100%;
        height: 210px;
        background: url('../../../static/image/mipmap-xxhdpi-v4/sign_bg.jpg') repeat center bottom;
        background-size: cover;
        position: relative;
        z-index: -100;
        margin-bottom: -50px;
    }
    .minesheader .icon-top{
        width: 100%;
        height: 60px;
        text-align: right;
        font-size: 23px;
        color: white;
        padding: 10px;
        box-sizing: border-box;
    }
    .minesheader .icon-top span{
        margin-right: 10px;
    }
    .minesheader .mineuser{
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: row;
    }
    .minesheader .mineuser-div{
        flex: 1;
        height: 60px;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
    }
    .minesheader .mineuser-div .user-img{
        width: 40px;
        height: 40px;
        margin-left: 8px;
    }
    .minesheader .mineuser-div .user-img img{
        width: 100%;
    }
    .minesheader .mineuser-div .user-name{
        margin-left: 8px;
    }
    .minesheader .mineuser-div .user-name h4{
        font-size: 16px;
    }
    .minesheader .mineuser-div .user-name p{
        font-size: 12px;
        margin-top: 5px;
    }
    .minesheader .mineuser-grade{
        flex: 1;
        height: 60px;
        padding: 10px;
        box-sizing: border-box;
    }
    .minesheader .mineuser-grade .el-icon-male{
        background: #FCD286;
        border-radius: 50%;
        color: blue;
        font-size: 18px;
        vertical-align: middle;
    }
    .minesheader .mineuser-grade .grade{
        background: #FCD286;
        border-radius: 5px;
        color: white;
        font-size: 12px;
        padding: 3px;
        box-sizing: border-box;
        vertical-align: middle;
        margin-left: 10px;
    }
    .minesheader .mineuser-grade .el-icon-s-opportunity{
        background: #E3DFD4;
        border-radius: 50%;
        color: white;
        font-size: 12px;
        padding: 3px;
        box-sizing: border-box;
        vertical-align: middle;
        margin-left: 10px;
    }
    .minesheader .mineuser-grade .el-icon-arrow-right{
        color: white;
        font-size: 18px;
        padding: 3px;
        box-sizing: border-box;
        margin-left: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .minesheader .fans{
        width: 100%;
        height: 60px;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .minesheader .fans div{
        width: 33%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
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
        background: white;
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
        background: white;
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