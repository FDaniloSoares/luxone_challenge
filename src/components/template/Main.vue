<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style>
  .main {
    grid-area: main;
    height: 100%;
    width: 100%;
  }
</style>