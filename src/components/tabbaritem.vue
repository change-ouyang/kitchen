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
            typeid:'',
        }
    },
    created() {
        let id=this.$route.query.id;
        this.typeid=id
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
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        box-shadow: 0px 0px 1px gray;
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