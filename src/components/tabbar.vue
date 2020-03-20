<template>
    <div class="tabbarwrap">
        <tabbaritem title="首页" @getevent="setevent" mark="index" class="tabbarwrap-div" :active="bol">
            <img src="../../static/image/drawable-xhdpi-v4/icon_main_home_normal.png" alt="" slot="img1">
            <img src="../../static/image/drawable-xhdpi-v4/icon_main_home_sel.png" alt="" slot="img2">
        </tabbaritem>
        <tabbaritem title="课堂" @getevent="setevent" mark="class" class="tabbarwrap-div" :active="bol">
            <img src="../../static/image/drawable-xhdpi-v4/icon_main_course_normal.png" alt="" slot="img1">
            <img src="../../static/image/drawable-xhdpi-v4/icon_main_course_sel.png" alt="" slot="img2">
        </tabbaritem>
        <tabbaritem title="食话" @getevent="setevent" mark="fresh" class="tabbarwrap-div" :active="bol">
            <img src="../../static/image/drawable-xhdpi-v4/icon_main_talk_normal.png" alt="" slot="img1">
            <img src="../../static/image/drawable-xhdpi-v4/icon_main_talk_sel.png" alt="" slot="img2">
        </tabbaritem>
        <tabbaritem title="收藏" @getevent="setevent" mark="favorite" class="tabbarwrap-div" :active="bol">
            <img src="../../static/image/drawable-xhdpi-v4/icon_main_collection.png" alt="" slot="img1">
            <img src="../../static/image/drawable-xhdpi-v4/icon_main_collection_sel.png" alt="" slot="img2">
        </tabbaritem>
        <tabbaritem title="我的" @getevent="setevent" mark="mine" class="tabbarwrap-div" :active="bol">
            <img src="../../static/image/drawable-xhdpi-v4/icon_main_mine_normal.png" alt="" slot="img1">
            <img src="../../static/image/drawable-xhdpi-v4/icon_main_mine_sel.png" alt="" slot="img2">
        </tabbaritem>
    </div>
</template>
<script>
import Tabbaritem from '../components/tabbaritem'
export default {
    name:'tabbar',
    components:{
        Tabbaritem,
    },
    data() {
        return {
            bol:'index'
        }
    },
    methods: {
        setevent(item){
            this.bol=item;
        }
    },
}
</script>
<style lang="">
    .tabbarwrap{
        width: 100%;
        height: 50px;
        position: fixed;
        bottom: 0;
        left: 0;
        background: white;
    }
</style>