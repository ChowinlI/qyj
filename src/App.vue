<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<div>-->
      <!--<p>-->
        <!--If iView is successfully added to this project, you'll see an-->
        <!--<code v-text="'<Button>'"></code>-->
        <!--below-->
      <!--</p>-->
      <!--<Button type="primary">Button</Button>-->
    <!--</div>-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }

  html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
</style>
