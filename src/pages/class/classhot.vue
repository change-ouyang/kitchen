<template>
    <div>
        <div class="classnew-item">
            <div v-for="(item, index) in classhot" :key="index">
                <img :src="item.img" alt="">
                <h3>{{item.name}}</h3>
                <p>{{item.user}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'classhot',
    data() {
        return {
            classhot:[]
        }
    },
    async created() {
        this.$ajax.setinter();
        let res=await this.$ajax.setGet('../../../static/json/classcourse.json')
        this.classhot=res[1];
    },
}
</script>
<style>
    .classnew-item{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 10px;
        box-sizing: border-box;
    }
    .classnew-item div{
        width: 50%;
        padding: 5px;
        padding-bottom: 20px;
        box-sizing: border-box;
    }
    .classnew-item div img{
        width: 100%;
        border-radius: 8px;
    }
    .classnew-item div h3{
        width: 100%;
        font-size: 14px;
        padding: 5px;
        box-sizing: border-box;
    }
    .classnew-item div p{
        width: 100%;
        font-size: 12px;
        padding: 5px;
        box-sizing: border-box;
        color: gray;
    }
</style>