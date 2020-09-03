<template>
  <div class="search">
    <input v-model="userLogin" type="text" placeholder="Login do github..."/>
    <button @click="getInfos" >
      <i class="fa fa-search"></i>
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import { showError } from '../global'

export default {
  name: 'Search',
  data: function(){
    return {
      userLogin: '',
      user: {},
      userRepo: {},
      baseUrl: 'https://api.github.com/users'
    }
  },
  methods: {
    showOnlyMain() {
      this.$store.commit('showOnlyMain', true)
      this.$router.push({ name: 'result' })
    },
    getUser() {
      const url = `${this.baseUrl}/${this.userLogin}`
      axios.get(url)
        .then(res => {
          this.user = res.data
          this.$store.commit('setUser', this.user )
          this.getUserRepositories()
          this.showOnlyMain()
      }).catch(showError) 
    },
    getUserRepositories() {
      const url = `${this.baseUrl}/${this.userLogin}/repos`
      axios.get(url)
        .then(res => {
          this.userRepo = res.data
          this.$store.commit('setUserRepository', this.userRepo )            
      }).catch(showError)
    },
      getInfos() {
        this.getUser()
      }
  }
}
</script>

<style>
  .search {
    display: flex;
    justify-content: center;
    align-items: center;    
  }
  
  .search input {
    box-sizing: border-box;
    width: 30rem;
    height: 2.2rem;
    padding-left: 10px;
    background: #FFFFFF;
    border: 0.1rem solid #000000;
    font-size: 20px;
  }

  .search button {
    box-sizing: border-box;
    background-color: #000000;
    float: left;
    width: 4rem;
    height: 2.2rem;
    border: solid #000000;
    margin-left:-4rem;
  }

  .search button:hover {
    background-color: rgb(53, 46, 46);
  }

  .search button i {
    color: #ffffff;
    font-size: 23px;
  }
</style>