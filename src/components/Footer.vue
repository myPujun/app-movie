<template>
    <footer class="footer">
        <ul class="footer_list">
            <router-link tag="li" v-for="item,index in footerList" to="" :key="index"
            :class="{active:activeIndex == index}" @click.native="changeActive(index,item.link)">
                <p class="title">{{item.title}}</p>
            </router-link>
        </ul>
    </footer>
</template>
<script>
    export default {
        name:'footerNav',
        data(){
            return {
                activeIndex:0,
                footerList:[
                    {
                        link:'index',
                        title:'首页'
                    },
                    {
                        link:'showing',
                        title:'热映'
                    },
                    {
                        link:'rankingList',
                        title:'Top250'
                    }
                ]
            }
        },
        methods: {
            changeActive(index,link){
                this.activeIndex = index
                this.$emit('changeView',link) 

            }
        }
    }
</script>
<style scoped>
    .footer{
        position: fixed;
        width: 100%;
        height: .98rem;
        background-color: #FFF;
        left: 0;
        bottom: 0;
    }
    .footer_list{
        display: flex;
        height: 100%;
        justify-content:space-evenly;
        align-items: center;
    }
    .footer_list li .title{
        color: #999;
    }
    .footer_list .active .title{
        color: #a975c7;
    }
</style>
