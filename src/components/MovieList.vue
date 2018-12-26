<template>
    <div>
        <ul class="movie_list">
            <router-link :to="{path:'/movieDetails',query:{id:item.id}}" tag="li" class="movie_list_li" 
            v-for="item,index in dataList" :key="index">
                <div class="images">
                    <img :src="getImages(item.images.small)" />
                </div>
                <div class="message">
                    <h2 class="name">{{item.title}}</h2>
                    <ul class="message_list">
                        <li>时间：<span>{{item.year}}</span></li>
                        <li>类型：<span v-for="type in item.genres">{{type}}/</span></li>
                        <li>导演：<span v-for="key in item.directors">{{key.name+'/'}}</span></li>
                        <li>评分：<span class="rating">{{item.rating.average | filterGrade}}</span></li>
                    </ul>
                </div>
                <div class="ranking" v-if="isRanking == undefined ? true : isRanking">
                    {{index+1}}
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
    export default {
        name:'movieList',
        data(){
            return {

            }
        },
        props:['dataList','isRanking'],
        created () {

        }
    }
</script>
<style scoped>
    .movie_list{
        padding: .3rem;
    }
    .movie_list_li{
        position: relative;
        display: flex;
        flex-direction: row;
        margin-bottom: .3rem;
    }
    .movie_list_li .ranking{
        position: absolute;
        left:0;
        top: 0;
        background-color: #92969F;
        color: #FFF;
        width: .5rem;
        height: .5rem;
        font-size: .24rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top-left-radius: 4px;
        border-bottom-right-radius: 4px;
        box-shadow: 1px 3px 3px rgba(0,0,0,.5);
    }
    .movie_list_li:first-child .ranking{
        background-color: #ff5fa5;
    }
    .movie_list_li:nth-child(2) .ranking{
        background-color: #ff9c2f;
    }
    .movie_list_li:nth-child(3) .ranking{
        background-color: #ffa949;
    }
    .movie_list_li .images{
        width: 2.4rem;
        height: 3rem;
        min-width: 2.4rem;
        min-height: 3rem;
        margin-right: .3rem;
        border-radius: 4px;
        overflow: hidden;
    }
    .movie_list_li .images img{
        width: 100%;
        height:100%;
    }
    .movie_list_li .message .name{
        font-size: .4rem;
        line-height: 100%;
        margin-bottom: .2rem;
    }
    .message_list li{
        font-size: .3rem;
        margin-top: .1rem;
    }
    .message_list li span{
        font-size: .3rem;
        color: rgba(0,0,0,.6);
    }
    .message_list li span.rating{
        color: #a975c7;
        font-size: .34rem;
        font-weight: bold;
    }
</style>
