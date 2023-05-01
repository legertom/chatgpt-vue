<template>
 
  <ChatGPT/>
</template>

<script>

import ChatGPT from './components/ChatGPT.vue'

export default {
  name: 'App',
  components: {
   
    ChatGPT
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
