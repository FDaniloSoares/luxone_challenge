<template>
  <div class="result">
    <div v-for="index in userRepository.length" :key="index">
      <span class="title">{{ userRepository[index -1 ].name }}</span>
      <span>{{ userRepository[index -1 ].description }}</span>
      <span>
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
  computed: mapState(['userRepository','user']),
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
    width: 303px;
    height: 43px;
    left: 0px;
    top: 0px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 43px;
  }
</style>