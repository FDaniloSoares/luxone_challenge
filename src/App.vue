<template>
  <div id="app" :class="{'show-only-main': !isHeaderSidebarVisibel }">
      <Header v-if="isHeaderSidebarVisibel"/>
      <Sidebar v-if="isHeaderSidebarVisibel"/>
      <Main />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from './components/template/Header'
import Sidebar from './components/template/Sidebar'
import Main from './components/template/Main'

export default {
  name: 'App',
  components: { Header, Sidebar, Main },
  computed: mapState(['isHeaderSidebarVisibel'])
}
</script>

<style>

  body {
    margin: 0;
    display: block;
    width: 100%;
  }

  #app {  
    height: 100vh;
    display: grid ;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 60px 1fr;  
    grid-template-areas:
      "header header"
      "sidebar main";
  }

  #app.show-only-main {
    grid-template-areas:
      "main main"
      "main main";
  }
</style>
