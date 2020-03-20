<template>
    <div>
        <div class="swiper-container" id="class-slide">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in classslidedata" :key="index">
                    <img :src="item.img" alt="">
                    <p>{{item.title}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
export default {
    name:"slide",
    data() {
        return {
            classslidedata:[]
        }
    },
    mounted() {
        this.listdata();
    },
    methods: {
        listdata(){
            this.$ajax.setGet('../../../static/json/classslide.json')
            .then((res)=>{
                this.classslidedata=res;
                this.$nextTick(()=>{
                    this.swiperdata();
                })
            })
        },
        swiperdata(){
            var swiper = new Swiper('#class-slide', {
                loop: true, // 循环模式选项
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                slidesPerView: 2.5,
                spaceBetween: 10,
            });
        }
    },
}
</script>
<style lang="">
    @import '../../../node_modules/swiper/css/swiper.min.css';
    #class-slide {
      width: 100%;
      height: 200px;
    }
    #class-slide .swiper-wrapper{
        margin-left: 10px;
    }
    #class-slide .swiper-slide {
      text-align: left;
      font-size: 18px;
      background: #fff;
      display: flex;
      flex-direction: column;
    }
    #class-slide .swiper-slide img{
        width: 100%;
        height: 150px;
    }
    #class-slide .swiper-slide p{
        font-size: 12px;
        color: black;
        margin-top: 5px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }
</style>