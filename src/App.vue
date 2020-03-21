<template>
  <div id="app">
    <router-view/>
    <tabbar :istab="showtab"></tabbar>
  </div>
</template>

<script>
import Tabbar from '../src/components/tabbar'
export default {
  name: 'App',
  components:{
    Tabbar
  },
  data() {
    return {
      showtab:true
    }
  },
  watch: {
    '$route':function(to,from,next){
      let arr=['/index','/index/tuijian','/index/jiachang','/index/hongpei','/index/baby','/index/zaocan','/class','/fresh','/favorite','/mine']
      if(arr.includes(to.path)){
        this.showtab=true
      }else{
        this.showtab=false
      }
    }
  },
  beforeCreate() {
    // this.$router.push('/index')
  },
}
</script>

<style>
    *{
      margin: 0;
      padding: 0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        font-size: 1em;
    }
</style>
