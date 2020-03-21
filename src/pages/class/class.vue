<template>
    <div class="classwrap">
        <!-- 搜索区 -->
        <div class="class-search">
            <div class="class-s-item">
                <i class="el-icon-search"></i>
                <input type="text" id="class-ipt" placeholder="搜索 课程">
            </div>
            <div class="class-i-item">
                <i class="el-icon-video-play"></i>
            </div>
        </div>
        <!-- 分类区 -->
        <div class="feat">
            <div class="content">
                <span style="color:#E16565" class="el-icon-dish-1"></span>
                <p>烘焙</p>
            </div>
            <div>
                <span style="color:#5613DE" class="el-icon-fork-spoon"></span>
                <p>中餐</p>
            </div>
            <div>
                <span style="color:#DF79A3" class="el-icon-knife-fork"></span>
                <p>西餐</p>
            </div>
            <div>
                <span style="color:#2ACEA3" class="el-icon-apple"></span>
                <p>营养餐</p>
            </div>
            <div>
                <span style="color:#E7C021" class="el-icon-hot-water"></span>
                <p>点心</p>
            </div>
            <div>
                <span style="color:#4159A9" class="el-icon-cold-drink"></span>
                <p>饮品</p>
            </div>
            <div>
                <span style="color:#ED7A66" class="el-icon-tableware"></span>
                <p>创意菜</p>
            </div>
            <div>
                <span style="color:#4F10DD" class="el-icon-menu"></span>
                <p>其他</p>
            </div>
        </div>
        <div class="coures">
            <h3>课程专辑</h3>
            <p>查看更多</p>
        </div>
        <!-- 轮播图 -->
        <slide></slide>
    </div>
</template>
<script>
import Slide from '../class/slide'
export default {
    name:'class',
    components:{
        Slide
    }
}
</script>
<style lang="">
    .classwrap{
        width: 100%;
        padding-bottom: 50px;
        box-sizing: border-box;
    } 
    .class-search{
        width: 100%;
        height: 150px;
        background: #333438;
        box-sizing: border-box;
        display: flex;
    }
    .class-s-item{
        width: 80%;
        margin: 0 auto;
    }
    .class-s-item .el-icon-search{
        position: absolute;
        margin-left: 80px;
        line-height: 40px;
        font-size: 16px;
        color: #DCDCDC;
    }
    .class-s-item #class-ipt{
        width: 100%;
        margin-top: 5px;
        border: none;
        border-radius: 8px;
        height: 30px;
        background: #717274;
        text-align: center;
    }
    input::-webkit-input-placeholder { /* WebKit browsers */  
        color: #DCDCDC; 
    }  
    .class-i-item{
        color: #E2E2E2;
        font-size: 27px;
        margin-top: 5px;
        margin-right: 10px;
    }
    .feat{
        width: 90%;
        margin: 0 auto;
        background: white;
        margin-top: -50px;
        border-radius: 10px;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        padding: 15px;
        box-shadow: 0px 1px 5px gray;
    }
    .feat div{
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 12px;   
        padding-bottom: 15px;
    }
    .feat div p{
        margin-top: 10px;
    }
    .feat div span{
        width: 45px;
        height: 30px;
        line-height: 40px;
        background: #F5F5F5;
        border-radius: 50%;
        font-size: 25px;
        padding-bottom: 10px;
    }
    .coures{
        width: 100%;
        padding: 10px;
        line-height: 30px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
    }
    .coures p{
        height: 25px;
        line-height: 30px;
        background: #EBEBEB;  
        border-radius: 15px;
        color: gray;
    }
</style>