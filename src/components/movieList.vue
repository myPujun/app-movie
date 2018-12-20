<template>
    <div>
        <ul class="movie_list">
            <router-link :to="{path:'/movieDetails',query:{id:item.id}}" tag="li" class="movie_list_li" 
            v-for="item in dataList">
                <div class="images">
                    <img :src="getImages(item.images.small)" />
                </div>
                <div class="message">
                    <h2 class="name">{{item.title}}</h2>
                    <ul class="message_list">
                        <li>时间：<span>{{item.year}}</span></li>
                        <li>类型：<span v-for="type in item.genres">{{type}}/</span></li>
                        <li>导演：<span v-for="key in item.directors">{{key.name}}</span></li>
                        <li>评分：<span class="rating">{{item.rating.average}}</span></li>
                    </ul>
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
        props:['dataList']
    }
</script>
<style scoped>
    .movie_list{
        padding: .3rem;
    }
    .movie_list_li{
        display: flex;
        flex-direction: row;
        margin-bottom: .3rem;
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
