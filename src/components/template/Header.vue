<template>
  <header class="header">
    <div @click='showMain' class="header-title">
      <router-link to="/">Github <span>Search</span></router-link >     
    </div><br>
    <Search/>
  </header>
</template>

<script>
import Search from '../Search'

export default {
  name: 'Header',
  components: { Search }
}
</script>

<style>
  .header {
    grid-area: header;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto Mono', monospace;
    font-style: normal;
    font-size: 64px;
    line-height: 75px;
    color:#000000;
  }
    
  .header-title {
    width: 300px;
    height: 30px;
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 35px;
    font-weight: bold;    
  }

  .header-title a {
    color:#000000;
    text-decoration:none; 
  }

  .header-title a:hover {
    color:#000000;
    text-decoration:none; 
  }

  .header-title span {
    font-family: 'Rubik', sans-serif;
    font-weight: normal;
    font-style: italic;
  }
</style>