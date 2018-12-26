<template>
    <div class="actor">
        <header-top :showState="showState"></header-top>
        <div class="actor_message" :style="{backgroundImage: 'url('+getImages(actrorMessage.avatars.small)+')'}">
            <div class="message">
                <section class="head">
                    <img :src="getImages(actrorMessage.avatars.small)" alt="">
                </section>
                <h2 class="name">{{actrorMessage.name}}（{{actrorMessage.born_place}}）</h2>
                <p class="nationality">{{actrorMessage.name_en}}</p>
            </div>
        </div>
       <movie-list :dataList='ParticipatingList'></movie-list>
    </div>
</template>
<script>
import headerTop from '@/components/Header'
import MovieList from '@/components/MovieList'
export default {
    name:'actorDetails',
    data(){
        return {
            showState:{
                ispageUp:false,
                isTitle:true,
                title:'演员详情',
                isSearchIcon:false
            },
            actrorMessage:{},
            ParticipatingList:[]
        }
    },
    components:{
        headerTop,MovieList
    },
    created () {
        let url = `/celebrity/${this.$route.query.id}`  
        this.Api(url).then(data => {
            this.actrorMessage = data
            let _this = this
            console.log(this.actrorMessage)
            data.works.forEach((key,index) => {
                _this.ParticipatingList.push(key.subject)
            })
        })
    },
    mounted() {
       
    },
    methods: {
        
    },
}
</script>
<style scoped>
    .actor_message{
        position: relative;
        height: 5rem;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        overflow: hidden;
    }
    .actor_message::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: inherit;
        filter: blur(10px);
        z-index: 2;
    }
    .message{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0,.5);
        z-index: 9;
    }
    .head{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 0px 15px rgba(255,255,255,1);
        overflow: hidden;
    }
    .head img{
        width: 100%;
    }
    .name{
        color: #FFF;
        font-size: .34rem;
        margin: .3rem 0;
    }
    .nationality{
        color: #cecece;
    }
</style>
