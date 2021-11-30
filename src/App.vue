<template>
  <!-- <input type="search" placeholder="Search... "/>
  <button>Search</button> -->
  <div>
    <router-link to='/'>Get started</router-link><br/>
    <router-link to='/allnews'>All News</router-link><br/>
    <router-link to='/headline'>Top Headline</router-link>

    <router-view />
    <!-- <Newslist /> -->
  </div>
  
</template>

<script>

// import Newslist from './components/Newslist.vue' 

export default {
  name: 'App',
  components: {
  //  Newslist
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
