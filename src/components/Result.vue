<template>
  <div class="result">
    <div class="title" v-if="user.public_repos===0" >Não Ha Repositorios Publicos</div>
    <div else v-for="index in userRepository.length" :key="index">
      <span class="title">{{ userRepository[index -1 ].name }}</span>
      <span v-if="userRepository[index -1 ].description" class="description">{{ userRepository[index -1 ].description }}</span>
      <span class="stars">
        <i class="far fa-star"></i>
        <span >{{ userRepository[index -1 ].stargazers_count }}</span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Result',
  computed: mapState(['userRepository','user','isHeaderSidebarVisibel']),
  methods: {
    beforeRouteEnter(to, from, next) {
    try {
      if (this.isHeaderSidebarVisibel === true) {
        return
      } else {
        this.$router.push('/')
      }
    } catch(error) {
      next('/')
    } 
  }
  },
  mounted: function() {
    this.$store.commit('showOnlyMain', true)
    this.beforeRouteEnter()
  },
  created: function() {
    this.beforeRouteEnter()
  }
}
</script>

<style>
  .result {
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .result div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .title {      
    min-width: 303px;
    min-height: 43px;
    left: 0px;
    top: 0px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 43px;
  }

  .description {
    max-width: 1028px;
    min-height: 30px;
    margin: 0px 10px 0px 0px;
    font-size: 22px;
    line-height: 28px;
    color: #757575;
  }

  .stars i {
    height: 20px;
    width: 20px;
    box-sizing: border-box;
    margin: 0px 5px 12px 0px;
    color: #000000;
  }

  .stars span {
    height: 20px;
    width: 20px;
    margin: 0px 5px 12px 0px;
    color: #757575;
  }
</style>