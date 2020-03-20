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
import Fresh from '../pages/fresh/fresh.vue'
import Favorite from '../pages/favorite/favorite.vue'
import Mine from '../pages/mine/mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/index',component:Index,meta:{title:'首页'},children:[
      {path:'',redirect:'tuijian'},
      {path:'tuijian',component:Tuijian},
      {path:'jiachang',component:Jiachang},
      {path:'hongpei',component:Hongpei},
      {path:'baby',component:Baby},
      {path:'zaocan',component:Zaocan},
    ]},
    {path:'/jiachangitem/:id',component:Jiachangitem},
    {path:'/class',component:Class},
    {path:'/fresh',component:Fresh},
    {path:'/favorite',component:Favorite},
    {path:'/mine',component:Mine},
  ]
})
