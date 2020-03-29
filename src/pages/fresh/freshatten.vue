<template>
    <div class="freshsquare-wrap">
        <!-- 整体数据 -->
        <div class="freshsquare-item" v-for="(item, index) in attendata" :key="index">
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
                    <img :src="img" alt="">
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
    name:'freshatten',
    store:store,
    computed:mapGetters(['attendata']),
    created() {
        this.$store.dispatch('users')
    },
    methods: {
        ...mapActions(['like','atten']),
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