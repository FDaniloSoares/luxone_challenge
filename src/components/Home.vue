<template>
  <div class="home-horizontal">
    <div class="home-vertical">
      <div class="home-title">
        Github <span>Search</span>        
      </div><br>
      <Search/>
    </div>
  </div>
</template>

<script>
import Search from './Search'

export default {
  name: 'Home',
  components: { Search },
  mounted: function() {
    this.$store.commit('showOnlyMain', false)
  }
}
</script>

<style>
  .home {
    font-family: 'Roboto Mono', monospace;
    font-style: normal;
    font-size: 64px;
    line-height: 75px;
    color:#000000;
    height: 100vh;
  }

  .home-horizontal {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .home-vertical {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
  }
    
  .home-title {
    width: 311px;
    height: 50px;
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 49px;
    font-weight: bold;
  }

  .home-title span {
    font-family: 'Rubik', sans-serif;
    font-weight: normal;
    font-style: italic;
  }    
</style>