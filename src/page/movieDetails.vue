<template>
    <div>
        <header-top :showState='showState'></header-top>
        <div class="movieDetails">
            <div class="bg_img" :style="{backgroundImage:'url(' + movieMessage.images.small + ')'}"></div>
            <div class="details_message">
                <section class="top_content">
                    <div class="images">
                        <img :src="getImages(movieMessage.images.small)" alt="">
                    </div>
                    <div class="message">
                        <h2 class="name">{{movieMessage.title}}</h2>
                        <ul class="message_list">
                            <li>时间：<span>{{movieMessage.year}}</span></li>
                            <li>类型：<span v-for="item in movieMessage.genres">{{item}}/</span></li>
                            <li>导演：<span>{{movieMessage.directors[0].name}}</span></li>
                            <li>评分：<span>{{movieMessage.rating.average}}</span></li>
                        </ul>
                    </div>
                </section>
                <div class="movie_intro">
                    <h3 class="title">详情简介</h3>
                    <p class="intro">
                        {{movieMessage.summary}}
                    </p>
                </div>
                <div class="actor_list">
                    <h3 class="title">演职人员</h3>
                    <ul class="list">
                        <li v-for="item in movieMessage.casts">
                            <div class="head">
                                <img :src="getImages(item.avatars.small)" alt="">
                            </div>
                            <h2 class="name">{{item.name}}</h2>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headerTop from '@/components/header'
export default {
    name:'movieDetails',
    data(){
        return {
            showState:{
                ispageUp:false,
                isTitle:true,
                title:null
            },
            movieMessage:{}
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
            let _this = this
            let url = `/douban/subject/${this.$route.query.id}`
            this.$http.get(url).then( res => {
                _this.$nextTick(function(){
                    _this.movieMessage = res.data
                    _this.showState.title = res.data.title
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
     }
     .message .message_list li,.message .message_list li span{
         font-size: .28rem;
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

