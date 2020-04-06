import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index/index.vue'
import Tuijian from '../pages/index/index-top/tuijian.vue'
import Jiachang from '../pages/index/index-top/jiachang.vue'
import Jiachangitem from '../pages/index/index-top/jiachangitem.vue'
import Hongpei from '../pages/index/index-top/hongpei.vue'
import Baby from '../pages/index/index-top/baby.vue'
import Zaocan from '../pages/index/index-top/zaocan.vue'
import Class from '../pages/class/class.vue'
import Classmore from '../pages/class/classmore.vue'
import Classnew from '../pages/class/classnew.vue'
import Classhot from '../pages/class/classhot.vue'
import Classold from '../pages/class/classold.vue'
import Fresh from '../pages/fresh/fresh.vue'
import Freshsquare from '../pages/fresh/freshsquare.vue'
import Freshatten from '../pages/fresh/freshatten.vue'
import Favorite from '../pages/favorite/favorite.vue'
import Favoritemenu from '../pages/favorite/favoritemenu.vue'
import Favoritecourse from '../pages/favorite/favoritecourse.vue'
import Mine from '../pages/mine/mine.vue'
import Personal from '../pages/mine/personal.vue'
import Login from '../pages/mine/login.vue'
import Logincode from '../pages/mine/logincode.vue'
import Register from '../pages/mine/register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'index'},
    {path:'/index',component:Index,meta:{showtab:true,title:'首页'},children:[
      {path:'/',redirect:'tuijian'},
      {path:'tuijian',component:Tuijian,meta:{showtab:true}},
      {path:'jiachang',component:Jiachang,meta:{showtab:true}},
      {path:'hongpei',component:Hongpei,meta:{showtab:true}},
      {path:'baby',component:Baby,meta:{showtab:true}},
      {path:'zaocan',component:Zaocan,meta:{showtab:true}},
    ]},
    {path:'/jiachangitem/:id',component:Jiachangitem},
    {path:'/class',component:Class,meta:{showtab:true},children:[
      {path:'',redirect:'classnew',meta:{showtab:true}},
      {path:'classnew',component:Classnew,meta:{showtab:true}},
      {path:'classhot',component:Classhot,meta:{showtab:true}},
      {path:'classold',component:Classold,meta:{showtab:true}},
    ]},
    {path:'/classmore',component:Classmore},
    {path:'/fresh',component:Fresh,meta:{showtab:true},children:[
      {path:'',redirect:'freshsquare'},
      {path:'freshsquare',component:Freshsquare,meta:{showtab:true}},
      {path:'freshatten',component:Freshatten,meta:{showtab:true}},
    ]},
    {path:'/favorite',component:Favorite,meta:{showtab:true},children:[
      {path:'',redirect:'favoritemenu'},
      {path:'favoritemenu',component:Favoritemenu,meta:{showtab:true}},
      {path:'favoritecourse',component:Favoritecourse,meta:{showtab:true}},
    ]},
    {path:'/mine',component:Mine,meta:{showtab:true}},
    {path:'/register',component:Register},
    {path:'/personal',component:Personal,children:[
      {path:'',redirect:'login'},
      {path:'login',component:Login},
      {path:'logincode',component:Logincode},
    ]},
  ]
})
