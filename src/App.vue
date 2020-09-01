<template>
  <div id="app">
    <Header />
    <Sidebar />
    <Main />
  </div>
</template>

<script>
import Header from './components/template/Header'
import Sidebar from './components/template/Sidebar'
import Main from './components/template/Main'

export default {
  name: 'App',
  components: { Header, Sidebar, Main }
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
