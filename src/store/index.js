import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
Vue.use(Vuex)

let state={
    list:[], //食话用户数据
    likeshow:true, //点赞显示
    likehide:false, //点赞隐藏
    numshow:0,
    attendata:[], //关注数据
    attenshow:true, //未关注
    attenhide:false, //已关注
    photoshow:false,
    photoindex:'',
}
let getters={
    list(state){
        return state.list
    },
    attendata(state){
        return state.attendata
    }
}
let actions={
    users({commit}){ //食话用户数据
        axios.get('../../static/json/freshquare.json').then((res)=>{
            commit('users',res.data);
        })
    },
    like({commit},index){ //食话点赞传值
        // console.log(index);
        commit('like',index)
    },
    atten({commit},id){ //点赞显示和人数显示
        commit('atten',id)
    },
    bigphoto({commit},img){ //图片放大
        console.log(img);
        commit('bigphoto',img)
    },
    clearbg({commit}){ //清除遮罩层
        commit('clearbg')
    }
}
let mutations={
    users(state,data){ //用户信息
        state.list=data
    },
    like(state,index){ //点赞显示和人数显示
        // this.axios.interceptors.request.use() //调用拦截器
        let likeindex=state.list.find((item)=>{
            // console.log(item.id);
            return item.id==index
        })
        let {id}=likeindex;
        let {zan}=likeindex
        console.log(zan);
        if(id==index){
            state.likeshow=!state.likeshow
            state.likehide=!state.likehide
        }else{
            state.likehide=true
        }
        if(state.likehide){
            likeindex.like++;
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            setTimeout(() => {
                Indicator.close();
                Toast({
                    message: '网上厨房：点赞成功',
                    position: 'bottom',
                    className:'like-title',
                    duration: 1500
                });
            }, 500);
        }else{
            likeindex.like--;
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            setTimeout(() => {
                Indicator.close();
                Toast({
                    message: '网上厨房：取消点赞',
                    position: 'bottom',
                    className:'like-title',
                    duration: 1500
                });
            }, 500); 
        }  
    },
    atten(state,typeid){ //关注显示
        let attenindex=state.list.find((item)=>item.id==typeid)
        let attenlist=state.attendata.find((item)=>item.id==typeid)
        console.log(attenlist);
        if(!attenlist){
            state.attendata.push(attenindex)
        }else{
            state.attendata
        }
        state.attenshow=!state.attenshow
        state.attenhide=!state.attenhide
        if(state.attenhide){
            Toast({
                message: '网上厨房：关注成功',
                position: 'bottom',
                className:'like-title',
                duration: 1500
            });
        }else{
            Toast({
                message: '网上厨房：取消关注成功',
                position: 'bottom',
                className:'like-title',
                duration: 1500
            });
        }
    },
    bigphoto(state,img){ //图片放大
        let imgindex=state.list.find((item)=>{
            // console.log(item.id);
            return item.img[0];
        })
        // console.log(imgindex);
        state.photoindex=img
        state.photoshow=true
    },
    clearbg(state){ //清除遮罩层
        state.photoshow=false
    }
}
export default  new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})