<template>
  <div class="result">
    <div v-for="index in userRepository.length" :key="index">
      <span class="title">{{ userRepository[index -1 ].name }}</span>
      <span class="description">{{ userRepository[index -1 ].description }}</span>
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
    width: 1028px;
    height: 56px;
    margin: 0px 10px 5px 0px;
    font-size: 22px;
    line-height: 28px;
    color: #757575;
  }

  .stars i {
    height: 20px;
    width: 20px;
    box-sizing: border-box;
    margin: 0px 5px 25px 0px;
    color: #000000;
  }

  .stars span {
    height: 20px;
    width: 20px;
    margin: 0px 5px 25px 0px;
    color: #757575;
  }
</style>