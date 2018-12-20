<template>
    <transition name="slide-fade">
    <div class="menu" v-if="isMenu" @click="isMenu = !isMenu">
        <div class="left_menu" @click.stop="">
            <section class="person_message">
                <div class="head">
                    <img src="../../static/img/movie_default.png" alt="">
                </div>
                <div class="datum">
                    <h2 class="name">张学友</h2>
                    <p class="Member_Level">LV6<span>会员</span></p>
                </div>
            </section>
            <ul class="menu_list">
                <li>想看的电影</li>
                <li>看过的电影</li>
                <li>修改密码</li>
                <li>帮助与反馈</li>
                <li>联系我们</li>
                <li>关于我们</li>
            </ul>
            <router-link to="/register" class="drop_out" @click="isMenu = !isMenu">退出登录</router-link> 
        </div>
    </div>
    </transition>
    
</template>
<script>
    import bus from '../../static/js/bus'
    export default {
        name:'leftMenu',
        data(){
            return {
                isMenu:false
            }
        },
        components:{

        },
        created() {
            bus.$on('showMenu' ,(data) => {
                this.isMenu = data
            })
            
        },
    }
</script>
<style scoped>
    .menu{
        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
        background-color: rgba(0,0,0,.3);
        z-index: 999;
    }
    .left_menu{
        position: relative;
        width: 5rem;
        height: 100%;
        background-color: #FFF;
    }
    .person_message{
        padding:.6rem 0 .3rem .6rem;
        display: flex;
        align-items:center;
    }
    .person_message .head{
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        margin-right: .3rem;
        border: 2px solid #a975c7;
        box-sizing: content-box;
        overflow: hidden;
    }
    .person_message .head img{
        width: 100%;
        height: 100%;
    }
    .person_message .name{
        font-size: .32rem;
        font-weight: normal;
        color: #333;
        margin-bottom: .1rem;
    }
    .person_message .Member_Level{
        color: #a975c7;
        display: flex;
        align-items: center;
    }
    .person_message .Member_Level span{
        font-size: .24rem;
        color: #a975c7;
        padding: .02rem .2rem;
        border: 1px solid #a975c7;
        border-radius: 20px;
        margin-left: .1rem;
    }
    .menu_list{
        padding-left: .6rem;
    }
    .menu_list li{
        position: relative;
        padding: .3rem 0;
    }
    .menu_list li::after{
        content: " ";
        position: absolute;
        top: 50%;
        right:.6rem;
        margin-top:-.15rem;
        width: .3rem;
        height: .3rem;
        transform: rotate(180deg);
        -o-transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        background-image: url('../../static/img/back.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .drop_out{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: .3rem 0 .3rem .6rem;
        color: #a975c7;
    }
    .drop_out::after{
        display: none;
    }
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.2, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to{
        transform: translateX(-7rem);
    }
</style>
