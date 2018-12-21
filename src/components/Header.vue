<template>
    <header class="header_top">
        <div class="classify" >
            <img src="../../static/img/classify.png" alt="" v-if="showState.ispageUp" @click="isMenu">
            <img src="../../static/img/back.png" alt="" @click="$router.back(-1)" v-else>
        </div>
        <div class="top_title">
            <slot name="search"></slot>
            <h2 class="title" v-if="showState.isTitle">{{showState.title || '豆瓣电影'}}</h2>
        </div>
        <router-link to="/search" class="search" v-if="showState.isSearchIcon">
            <img src="../../static/img/search.png"/>
        </router-link>
    </header>
</template>
<script>
    import bus from '../../static/js/bus'
    export default {
        name:'headerTop',
        data(){
            return {

            }
        },
        props:{
            showState:{
                type:Object,
                required:true
            }
        },
        created() {
        
        },
        methods: {
            isMenu(){
                bus.$emit('showMenu',true)
            }
        },
    }
</script>
<style scoped>
    .header_top{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: .88rem;
        display: flex;
        justify-content: space-around;
        background-color: #FFF;
        z-index: 99;
    }
    .header_top .classify{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        padding-left: .3rem;
        display: flex;
        align-items: center;
    }
    .header_top .classify img{
        width: .5rem;
        height: .5rem;
    }
    .header_top .top_title{
        width: 100%;
        height: .88rem;
        padding: 0 1rem;
        text-align: center;
    }
    .top_title .title{
        line-height:.88rem; 
        font-size: .36rem;
        color: #a975c7;
        font-weight: normal;
    }
    .header_top .search{
        position: absolute;
        height: 100%;
        top: 0;
        right: 0;
        padding-right: .3rem;
        display: flex;
        align-items: center;
    }
    .header_top .search img{
        width: .5rem;
        height: .5rem;
    }
</style>