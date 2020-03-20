<template>
  <div id="app">
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from '../src/components/tabbar'
export default {
  name: 'App',
  components:{
    Tabbar
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
