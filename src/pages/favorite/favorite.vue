<template>
    <div class="favorite-wrap">
        <div class="favorite-item">
            <div class="menu" @click="menu()">
                <router-link to="/favorite/favoritemenu" tag="div" active-class="favorite-color">
                菜谱
                </router-link>
                <p class="unline" v-show="ismenu"></p>
            </div>
            <div class="course" @click="course()">
                <router-link to="/favorite/favoritecourse" tag="div" active-class="favorite-color">
                课程
                </router-link>
                <p class="unline" v-show="iscourse"></p>
                <i class="el-icon-search"></i>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'favorite',
    data() {
        return {
            ismenu:true,
            iscourse:false
        }
    },
    methods: {
        menu(){
            this.ismenu=true
            this.iscourse=false
        },
        course(){
            this.ismenu=false
            this.iscourse=true
        }
    },
}
</script>
<style lang="">
    .favorite-wrap{
        width: 100%;
    }
    .favorite-item{
        width: 35px;
        line-height: 35px;
        width: 100%;
        display: flex;
        position: fixed;
        top: 0;
        background: white;
    }
    .favorite-item .favorite-color,.unline{
        color: orange;
        
    }
    .favorite-item .menu{
        flex: 1;
        text-align: center;
        margin-left: 30px;
    }
    .favorite-item .unline{
        width: 30px;
        height: 2px;
        background: orange;
        margin: 0 auto;
    }
    .favorite-item .course{
        flex: 1;
        text-align: center;
        margin-right: 30px;
    }
    .favorite-item .course i{
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 18px;
        color: black;
    }
</style>