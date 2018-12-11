<template>
    <div>
        <header-top :showState='showState'>
            <template slot="search" >
                <div class="topSearch">
                    <input type="text" placeholder="请输入搜索内容" v-model="searchMessage">
                    <input type="button" value="" class="searchSubmit" @click="putMessage">
                </div>
            </template>
        </header-top>
        <div class="tag_list">
            <span v-for="item in tagList" @click="putMessage(item)">{{item}}</span>
        </div>
        <ul class="movie_list">
            <router-link :to="{path:'/movieDetails',query:{id:item.id}}" tag="li" class="movie_list_li" 
            v-for="item in searchList">
                <div class="images">
                    <img :src="getImages(item.images.small)" />
                </div>
                <div class="message">
                    <h2 class="name">{{item.title}}</h2>
                    <ul class="message_list">
                        <li>时间：<span>{{item.year}}</span></li>
                        <li>类型：<span v-for="type in item.genres">{{type}}/</span></li>
                        <li>导演：<span>{{item.directors.name}}</span></li>
                        <li>评分：<span>{{item.rating.average}}</span></li>
                    </ul>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
    import headerTop from '@/components/header'
    export default {
        name:'search',
        data(){
            return {
                showState:{
                    ispageUp:false,
                    isTitle:false,
                },
                searchMessage:null,
                searchList:[],
                tagList:['海王','云上日出','无名之辈','毒液：致命守护者','狗十三','惊涛飓浪','恐怖快递']
            }
        },
        components:{
            headerTop
        },
        methods:{
            putMessage(){
                this.api()
            },
            api(){
                let url = `/douban/search?tag=${this.searchMessage}&start=0&count=10`
                this.$http.get(url).then( res => {
                    this.searchList = res.data.subjects
                })
            },
        }
    }
</script>
<style scoped>
    .tag_list{
        display:flex;
        flex-wrap: wrap; 
        margin-top: .2rem;
        padding: 0 .1rem;
    }
    .tag_list span{
        padding: 5px 15px;
        border: 1px solid #b1b1b1;
        border-radius: 40px;
        font-size: .26rem;
        margin: 5px;
        color: #b1b1b1;
    }
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
    }
    .message_list li{
        font-size: .3rem;
        margin-top: .05rem;
    }
    .message_list li span{
        font-size: .3rem;
        color: rgba(0,0,0,.6);
    }
    .subhead{
        margin-left: .2rem;
    }
    .topSearch{
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .topSearch input[type="text"]{
        width: 100%;
        height: .68rem;
        border: none;
        background: none;
        border-radius: 20px;
        font-size: 14px;
        background-color: rgba(169,117,199,.2);
        text-indent: .3rem;
    }
    .searchSubmit{
        border: none;
        background: none;
        position: absolute;
        right: 0;
        top: 0;
        width: 1rem;
        height: 100%;
        background-image: url('../../static/img/search.png');
        background-repeat: no-repeat;
        background-size: .5rem .5rem;
        background-position: center;
    }
</style>