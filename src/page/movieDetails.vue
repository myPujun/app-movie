<template>
    <div>
        <header-top :showState='showState'></header-top>
        <div class="movieDetails" v-for="item in movieMessage" key="item">
            <div class="bg_img" :style="{backgroundImage:'url(' + item.images.small + ')'}"></div>
            <div class="details_message">
                <section class="top_content">
                    <div class="images">
                        <img :src="getImages(item.images.small)" alt="">
                    </div>
                    <div class="message">
                        <h2 class="name">{{item.title}}</h2>
                        <ul class="message_list">
                            <li>时间：<span>{{item.year}}</span></li>
                            <li>类型：<span v-for="item in item.genres">{{item}}/</span></li>
                            <li>导演：<span>{{item.directors[0].name}}</span></li>
                            <li>评分：<span>{{item.rating.average}}</span></li>
                        </ul>
                    </div>
                </section> 
                <ul class="subject_mark">
                    <li>想看({{item.wish_count}})</li>
                    <li>看过({{item.reviews_count}})</li>
                </ul>
                <div class="movie_intro">
                    <h3 class="title">详情简介</h3>
                    <p class="intro">
                        {{item.summary}}
                    </p>
                </div>
                <div class="actor_list">
                    <h3 class="title">演职人员</h3>
                    <ul class="list">
                        <router-link tag="li" :to="{path:'/actorDetails',query:{id:value.id}}" v-for="value,index in item.casts" :key="index">
                            <div class="head">
                                <img :src="getImages(value.avatars.small)" alt="">
                            </div>
                            <h2 class="name">{{value.name}}</h2>
                        </router-link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headerTop from '@/components/Header'
export default {
    name:'movieDetails',
    data(){
        return {
            showState:{
                ispageUp:false,
                isTitle:true,
                title:null
            },
            movieMessage:[]
        }
    },
    created () {
        this.api()
    },
    components:{
        headerTop
    },
    methods: {  
        api(){
            let url = `/subject/${this.$route.query.id}`
            this.Api(url).then( data => {
                this.$nextTick(()=>{
                    this.movieMessage.push(data)
                    this.showState.title = data.title
                })
            }).catch(err => {
                console.log(err)
            })
            
        }
    }
}
</script>
<style scoped>
    .movieDetails{
        position: relative;
    }
    .bg_img{
        position: relative;
        height: 5rem;
        background-color: #ccc;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .bg_img::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: inherit;
        filter: blur(2px);
        z-index: 2;
    }
    .details_message{
        position: absolute;
        top: 2rem;
        left: .5rem;
        width: 5.9rem;
        padding: .3rem;
        background-color: #FFF;
        border-radius: 4px;
        box-shadow: 0px 0px 5px rgba(0,0,0,.3);
        margin-bottom: .3rem;
        z-index: 2;
    }
    .top_content{
        display: flex;
        flex-direction: row;
    }
    .details_message .images{
        position: absolute;
        top: -.5rem;
        width: 2.5rem;
        height: 3rem;
        overflow: hidden;
        border-radius: 6px;
    }
    .details_message .images img{
        width: 100%;
        height: 100%;
    }
     .top_content .message{
         margin-left: 2.8rem;
     }
     .message .name{
         font-size: .3rem;
         margin-bottom: .1rem;
     }
     .message .message_list li,.message .message_list li span{
         font-size: .28rem;
     }
     .message .message_list li span{
         color: #7b7b7b;
     }
     .movie_intro .title,.actor_list .title{
         margin-top: .3rem;
         font-size: .32rem;
     }
     .movie_intro .intro{
         margin-top: .1rem;
         font-size: .26rem;
         line-height: .45rem;
         color: #7b7b7b;
     }
     .subject_mark{
         margin-top: .3rem;
         display: flex;
     }
     .subject_mark li{
         flex: 2;
         text-align: center;
         border: 1px solid #a975c7;
         padding: 6px 12px;
         color: #a975c7;
         margin: 0 5px;
         border-radius: 20px;
     }
     .subject_mark li:first-child{
         background-color: #a975c7;
         color: #FFF;
     }
     .actor_list .list{
         margin-top: .2rem;
         display: flex;
         flex-direction: row;
         flex-wrap: wrap;
     }
     .actor_list .list li{
         width: 25%;
         text-align: center;
     }
     .actor_list .head{
         width: 1.2rem;
         height: 1.2rem;
         margin: 0 auto;
         border-radius: 50%;
         overflow: hidden;
     }
    .actor_list .head img{
        width: 100%;
        height: 100%;
    }
    .actor_list .name{
        font-size: .26rem;
        text-align: center;
        margin-top: .1rem;
    }
</style>

