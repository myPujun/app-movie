<template>
    <div class="home">
        <header-top :showState="{ispageUp:true,isTitle:true,isSearchIcon:true}"></header-top>
        <left-menu></left-menu>
        <keep-alive>
            <component :is="changeName"></component>
        </keep-alive>
        <footer-nav v-on:changeView="changeLink"></footer-nav>
    </div>
</template>

<script>
    import headerTop from '@/components/header'
    import FooterNav from '@/components/footer'
    import LeftMenu from '@/components/LeftMenu'
    import Index from '@/page/index'
    import Showing from '@/page/showing'
    import RankingList from '@/page/RankingList'

    export default {
        name:'home',
        data () {
            return {
                changeName:'index',
            }
        },
        watch:{
            
        },
        components: {
            headerTop,FooterNav,Index,Showing,RankingList,LeftMenu
        },
        created () {
            
        },
        methods:{
            changeLink(val){
                this.changeName = val
            }
        }
    }
</script>
<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
