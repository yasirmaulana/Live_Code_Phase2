<template>
  <div id="app">
    <cToolbar/>
    <router-view/>
    <cFooter/>
    
  </div>
</template>

<script>
import cToolbar from '@/components/com-toolbars.vue'
import cHome from '@/components/com-home.vue'
import cFooter from '@/components/com-footer.vue'

export default {
  name: 'App',
  components: {
    cToolbar,
    cHome,
    cFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
