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
    import HeaderTop from '@/components/Header'
    import FooterNav from '@/components/Footer'
    import LeftMenu from '@/components/LeftMenu'
    import Index from '@/page/Index'
    import Showing from '@/page/Showing'
    import RankingList from '@/page/RankingList'

    export default {
        name:'home',
        data () {
            return {
                changeName:'index',
                isMenu:null
            }
        },
        components: {
            HeaderTop,FooterNav,Index,Showing,RankingList,LeftMenu
        },
        created () {
           
        },
        methods:{
            changeLink(val){
                this.changeName = val
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
                if(scrollTop > 0){
                    document.body.scrollTop = 0
                    document.documentElement.scrollTop = 0
                    window.pageYOffset = 0
                }
            }
        },
    }
</script>
<style scoped>
    
</style>
