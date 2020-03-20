<template>
    <div class="tabbaritem" @click="torouter()">
        <span v-show="!bol"><slot name="img1"></slot></span>
        <span v-show="bol"><slot name="img2"></slot></span>
        <p :class="{active:bol}">{{title}}</p>
    </div>
</template>
<script>
export default {
    name:'tabbaritem',
    props:['title','mark','active'],
    data() {
        return {
            
        }
    },
    computed: {
        bol(){
            if(this.mark==this.active){
                return true;
            }else{
                return false;
            }
        }
    },
    methods: {
        torouter(){
            this.$emit('getevent',this.mark)
            this.$router.push(`/${this.mark}`)
        }
    },
}
</script>
<style lang="">
    .tabbaritem{
        width: 20%;
        height: 50px;
        float: left;
        outline: 1px dashed gray;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
    }
    .tabbaritem img{
        width: 20px;
    }
    .tabbaritem p{
        margin: 0;
        font-size: 12px;
    }
    .tabbaritem .active{       
        color:#FEAA49;
    }
</style>