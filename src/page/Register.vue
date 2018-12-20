<template>
    <div class="register">
        <ul class="change_mode">
            <li :class="{_this:thisIndex == index}" @click="changeMode(index)" v-for="item,index in list">{{item}}</li>
        </ul>
       <login v-if="thisIndex == 0"/>
       <enroll v-else/>
    </div>
</template>
<script>
    import Login from '@/components/login'
    import Enroll from '@/components/Enroll'
    export default {
        name:'register',
        data(){
            return {
                thisIndex:0,
                list:['登录','注册']
            }
        },
        components:{
            Login,Enroll
        },
        methods:{
            changeMode(index){
                this.thisIndex = index
            }
        }
    }
</script>
<style scoped>
    .register{
        position: fixed;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('../../static/img/loading_bg.png');
        background-size: 7.5rem;
        background-repeat: no-repeat;
        background-position:bottom;
    }
    .change_mode{
        display: flex;
        flex-direction: row;
        justify-content:center;
        margin: .6rem 0;
    }
    .change_mode li{
        font-size: .36rem;
        padding: .3rem .6rem;
        color: #c9c9c9;
        border-bottom: 1px solid #c9c9c9;
    }
    .change_mode li._this{
        color:#a975c7 ;
        border-bottom: 1px solid #a975c7;
    }
</style>

