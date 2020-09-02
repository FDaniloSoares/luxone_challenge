<template>
    <header class="header">
        <div class="header-title">
            Github <span>Search</span>        
        </div><br>
        <div class="header-search">
            <input type="text" placeholder="Login do github..."/>
            <button>
                <i class="fa fa-search"></i>
            </button>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style>
    .header {
        grid-area: header;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Roboto Mono', monospace;
        font-style: normal;
        font-size: 64px;
        line-height: 75px;
        color:#000000;
    }
    
    .header-title {
        width: 300px;
height: 30px;

font-family: Roboto Mono;
font-style: normal;
font-weight: bold;
font-size: 35px;
line-height: 35px;
        font-weight: bold;
    }

    .header-title span {
        font-family: 'Rubik', sans-serif;
        font-weight: normal;
    }

    .header-search {
        padding-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .header-search input {
        box-sizing: border-box;
        width: 30rem;
        height: 2.2rem;
        padding-left: 10px;

        background: #FFFFFF;
        border: 0.1rem solid #000000;

        font-size: 20px;
    }
    .header-search button {
        box-sizing: border-box;
        background-color: #000000;
        float: left;
        width: 4rem;
        height: 2.2rem;
        border: solid #000000;
        margin-left:-4rem;
    }

    .header-search button:hover {
        background-color: rgb(53, 46, 46);
    }

    .header-search button i {
        color: #ffffff;
        font-size: 23px;
    }
</style>