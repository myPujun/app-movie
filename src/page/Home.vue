<template>
    <div>
        <header-top :showState="{ispageUp:true,isTitle:true,isSearchIcon:true}"></header-top>
        <keep-alive>
            <component :is="changeName"></component>
        </keep-alive>
        <footer-nav v-on:changeView="changeLink"></footer-nav>
    </div>
</template>

<script>
    import headerTop from '@/components/header'
    import FooterNav from '@/components/footer'
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
            headerTop,FooterNav,Index,Showing,RankingList
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