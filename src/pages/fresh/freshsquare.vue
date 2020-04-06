<template>
    <div class="freshsquare-wrap">
        <!-- 整体数据 -->
        <div class="freshsquare-item" v-for="(item, index) in list" :key="index">
            <!-- 用户信息区 -->
            <div class="user">
                <div class="user-left">
                    <div>
                        <img :src="item.avatar" alt="">
                    </div>
                    <div>
                        <h4>{{item.name}}</h4>
                        <p>{{item.time}}</p>
                    </div>
                </div>
                <div class="user-right">
                    <div @click="atten(item.id)">
                        <p class="atten" v-show="$store.state.attenshow">+关注</p>
                        <p class="attens" v-show="$store.state.attenhide">已关注</p>
                    </div>
                    <el-dropdown trigger="click" class="report" @command="report()">
                        <span class="el-dropdown-link">
                            <i class="el-icon-arrow-down"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                举报该食话
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <!-- 图片区 -->
            <div class="photo">
                <div v-for="(img, index) in item.img[0]" :key="index">
                    <img :src="img" alt="" @click="bigphoto(img)">
                </div>
            </div>
            <!-- 遮罩层 -->
            <div class="freshsquare-bg" v-show="$store.state.photoshow" @click="clearbg()">
                <div class="dialog">
                    <img :src="$store.state.photoindex" alt="">
                </div>
            </div>
            <!-- 文本描述区 -->
            <p class="title">{{item.title}}</p>
            <!-- 回复点赞区 -->
            <div class="comment">
                <div class="huifudiv">
                    <input class="huifu" type="text" placeholder="快捷回复">
                </div>
                <div @click="like(item.id)">
                    <div class="image" v-show="$store.state.likeshow">
                        <img src="../../../static/image/drawable-hdpi-v4/icon_recipe_enjoy.png" alt="">
                        <p>点个赞</p>
                    </div>
                    <div class="images" v-show="$store.state.likehide">
                        <img src="../../../static/image/drawable-hdpi-v4/icon_recipe_enjoy_highlight.png" alt="">
                        <p>点个赞</p>
                    </div>
                </div>
            </div>
            <!-- 评论区 -->
            <div class="fresh-comwrap">
                <span class="fresh-com">{{item.comment}}人评论&nbsp;</span>
                <span class="fresh-like"> {{item.like}}人点赞</span>
            </div>
        </div>
    </div>
</template>
<script>
import store from '../../store/index'
import {mapState,mapGetters,mapActions} from 'vuex'
import { Toast } from 'mint-ui';
export default {
    name:'freshquare',
    store:store,
    computed:mapGetters(['list']),
    created() {
        this.$store.dispatch('users')
    },
    methods: {
        ...mapActions(['like','atten','bigphoto','clearbg']),
        report(){
            Toast({
                message: '举报成功',
                position: 'middle',
                duration: 2000
            });
        }
    },
}
</script>
<style lang="">
    .freshsquare-wrap{
        width: 100%;
        margin-top: 60px;
        padding-bottom: 35px;
        box-sizing: border-box;
    }
    .freshsquare-item{
        width: 100%;
        padding: 10px;
        padding-bottom: 20px;
        box-sizing: border-box;
    }
    .freshsquare-item .user{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .freshsquare-item .user .user-left{
        flex: 1;
        display: flex;
    }
    .freshsquare-item .user .user-left div:nth-child(1) img{
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }
    .freshsquare-item .user .user-left div:nth-child(2){
        margin-left: 10px;
    }
    .freshsquare-item .user .user-left div:nth-child(2) p{
        font-size: 12px;
        color: gray;
        margin-top: 5px;
    }
    .freshsquare-item .user .user-right{
        flex: 1;
        display: flex;
        justify-content: center;
    }
    .freshsquare-item .user .user-right .atten{
        width: 40px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background: #FFF3EC;
        border-radius: 5px;
        font-size: 12px;
        color: orange;
        margin-left: 60px;
    }
    .freshsquare-item .user .user-right .attens{
        width: 40px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background: #F7F7F7;
        border-radius: 5px;
        font-size: 12px;
        color: gray;
        margin-left: 60px;
    }
    .freshsquare-item .user .user-right .report{
        width: 40px;
        height: 20px;
        line-height: 20px;
        text-align: right;
        font-size: 18px;
    }
    .freshsquare-item .photo{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .freshsquare-item .photo div{
        width: 33%;
        margin-top: 10px;
        padding: 5px;
        box-sizing: border-box;
    }
    .freshsquare-item .photo div img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    .freshsquare-bg{
        width: 100%;
        height: 100vh;
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .5);
    }
    .freshsquare-bg .dialog{
        width: 100wh;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .freshsquare-bg .dialog img{
        width: 100%;
    }
    .freshsquare-item .title{
        width: 100%;
        padding: 5px;
        box-sizing: border-box;
    }
    .freshsquare-item .comment{
        width: 100%;
        display: flex;
        position: relative;
    }
    .like-title{
        background: white;
        color: #000;
        margin-bottom: 50px;
        box-shadow: 0px 0px 5px gray;
    }
    .like-title span{
        font-size: 10px;
        font-weight: bold;
    }
    .freshsquare-item .comment .huifudiv{
        width: 75%;
    }
    .freshsquare-item .comment .huifu{
        width: 100%;
        margin-top: 10px;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 30px;
        background: #F7F7F7;
        border: none;
        text-indent: 1em;
    }
    .freshsquare-item .comment .image{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        margin-top: 10px;
    }
    .freshsquare-item .comment .image img{
        margin-top: 6px;
        width: 20px;
    }
    .freshsquare-item .comment .image p{
        width: 50px;
        font-size: 12px;
        color: gray;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        top: 20px;
    }
    .freshsquare-item .comment .images{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        margin-top: 10px;
    }
    .freshsquare-item .comment .images img{
        margin-top: 6px;
        width: 20px;
    }
    .freshsquare-item .comment .images p{
        width: 50px;
        font-size: 12px;
        color: orange;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        top: 20px;
    }
    .fresh-comwrap{
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        font-size: 12px;
        color: gray;
    }
</style>