<template>
  
      <div class="home-horizontal">
     <div class="home-vertical">
        <div class="home-title">
            Github <span>Search</span>        
        </div><br>
        <div class="home-search">
            <input type="text" placeholder="Login do github..."/>
            <button @click="showOnlyMain" >
                <i class="fa fa-search"></i>
            </button>
        </div>  
    
  </div>
  </div>
  
</template>

<script>
export default {
    name: 'Home',
    methods: {
        showOnlyMain() {
            this.$store.commit('showOnlyMain')
            this.$router.push({ name: 'result' })
        }
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
    }

    .home-search {
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .home-search input {
        box-sizing: border-box;
        width: 30rem;
        height: 2.2rem;
        padding-left: 10px;
        background: #FFFFFF;
        border: 0.1rem solid #000000;

        font-size: 20px;
    }
    .home-search button {
        box-sizing: border-box;
        background-color: #000000;
        float: left;
        width: 4rem;
        height: 2.2rem;
        border: solid #000000;
        margin-left:-4rem;
    }

    .home-search button:hover {
        background-color: rgb(53, 46, 46);
    }

    .home-search button i {
        color: #ffffff;
        font-size: 23px;
    }
    
</style>