<!--<template>-->
<!--  <div id="app">-->
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    <router-view/>-->
<!--  </div>-->
<!--</template>-->

<!--<template>-->
<!--  <div id="app">-->
<!--    {{num}}-->
<!--    <button @click="$store.commit('increment')">num++</button>-->
<!--    <button @click="$store.dispatch('increment2')">num++</button>-->
<!--  </div>-->
<!--</template>-->
<template>
  <div id="app">
    <span>小米</span><br>
    数量:{{num}}<br>
    <button :disabled="num>0?false:true" @click="$store.commit('increment')">购买一台</button>
    <button :disabled="num>1?false:true" @click="$store.commit('increment3')">购买2台</button><br>
    <input type="number" min="0" max="10" v-model="$store.state.Num"><button :disabled="num>0?false:true" @click="$store.commit('increment4')">购买</button>
  </div>
</template>

<script>
  export default {
    name: 'App',
    computed: {
      num(){
          return this.$store.state.num
      }
    }
  }
</script>

<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--}-->

<!--#nav {-->
<!--  padding: 30px;-->
<!--}-->

<!--#nav a {-->
<!--  font-weight: bold;-->
<!--  color: #2c3e50;-->
<!--}-->

<!--#nav a.router-link-exact-active {-->
<!--  color: #42b983;-->
<!--}-->
<!--</style>-->
