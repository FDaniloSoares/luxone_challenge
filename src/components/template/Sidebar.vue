<template>
    <aside class="sidebar">
        <img :src="image" alt="Person" width="250" height="250" class="img">
        <div class="name">
            <div>Nome</div>
            <div>Login</div>
        </div>
        <div class="information">
            <div class="icons">
                <i class="fa fa-briefcase"></i>
                <i class="fa fa-map-pin"></i>
                <i class="far fa-star"></i>
                <i class="far fa-folder-open"></i>
                <i class="fas fa-user-friends"></i>
            </div>
            <div class="content">
                <span>YohStore</span>
                <span>Fortaleza,CE</span>
                <span>15</span>
                <span>10</span>
                <span>10</span>
            </div>
            
        </div>
    </aside>
</template>

<script>
export default {
    name: 'Sidebar',
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
        align-content: flex-start;
        align-items: center;
    }

    .icons i {
        margin: 5px 5px 5px 0px;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        align-items: flex-start;
    }

    .content span {
        margin: 4px;
    }

</style>