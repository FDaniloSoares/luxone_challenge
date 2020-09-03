<template>
  <aside class="sidebar">
    <img v-if="user.avatar_url" :src="user.avatar_url" alt="Person" width="250" height="250" class="img">
    <img v-else src="image" alt="Person" width="250" height="250" class="img">
    <div class="name">
      <div >
        <span v-if="user.name" >{{ user.name }}</span>    
        <span v-else >{{ user.login }}</span>
      </div>
    <div>{{ user.login }}</div>
    </div>
    <div class="information">
      <div class="icons">
        <div>
          <i class="fa fa-briefcase"></i>
          <span v-if="user.company">{{ user.company }}</span>
          <span v-else>Não Informado</span>
        </div>
        <div>
          <i class="fa fa-map-pin"></i>
          <span v-if="user.location">{{ user.location }}</span>
          <span v-else>Não Informado</span>
        </div>
        <div>
          <i class="far fa-star"></i>
          <span >{{ totalStars }}</span>
        </div>
        <div>
          <i class="far fa-folder-open"></i>
          <span v-if="user.public_repos">{{ user.public_repos }}</span>
          <span v-else>0</span>
        </div>
        <div>
          <i class="fas fa-user-friends"></i>
          <span v-if="user.followers">{{ userClone.followers }}</span>
          <span v-else>0</span>
        </div>
      </div>            
    </div>      
  </aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Sidebar',
  computed: mapState(['user', 'totalStars']),
  data: function () {
    return {
        image: require('@/assets/img/person.png'),
    }
  }
}
</script>

<style>
  .sidebar {
    padding: 20px;
    font-family: 'Rubik', sans-serif;
    font-weight: normal;
    grid-area: sidebar;
    display: flex;
    flex-direction: column;    
  }

  .img {
    border: solid 1px ;
    border-color: #e8e8e8
  }

  .name {
    margin: 10px 0px;
  }

  .information {
    font-family: 'Rubik', sans-serif;
    font-weight: normal;
    display: flex;
    box-sizing: border-box;
  }

  .icons {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: flex-start;
  }

  .icons div i {
    height: 20px;
    width: 20px;
    box-sizing: border-box;
    margin: 5px 5px 5px 0px;
  }

  .icons div span {
    margin-left: 5px;
  }
</style>