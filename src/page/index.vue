<template>
    <div class="index" ref="indexContent">
        <div class="nav_wrap">
            <div class="nav_content">
                <ul class="nav_list">
                    <li :class="{active:this_Index == index}" 
                        v-for="key,index in navList" 
                        @click="changeNav(index,key)">{{key}}
                    </li>
                </ul>
            </div>
        </div>
        <ul class="index_movie_list">
            <router-link tag="li" :to="{path:'/movieDetails',query:{id:item.id}}" 
            v-for="item in message.addList">
                <div class="movie_images">
                    <img :src="getImages(item.images.small)"/>
                </div>
                <div class="movie_message">
                    <h2 class="movie_name">{{item.title}}</h2>
                    <div class="message">
                        <p class="type">
                            <span v-for="genre in item.genres">{{genre+'/'}}</span>
                        </p>
                        <span class="grade">评分：{{item.rating.average}}</span>
                    </div>
                </div> 
            </router-link>
        </ul>
    </div>
</template>
<script>
    export default {
        name:'index',
        data() {
            return {
                this_Index: 0 ,
                navList:['动作','喜剧','剧情','爱情','科幻','动画','悬疑','惊悚','恐怖','犯罪','同性','音乐','歌舞','传记','历史','战争','西部','奇幻','冒险','灾难','武侠','情色'],
                
                activeMovieType:'动作片',
                activeMovieStart:0,
                cacheList:[],
                message:{}
            }
        },
        mounted() {
            this.message = {
                MovieStart:this.activeMovieStart,
                url: `search?tag=${this.activeMovieType}`,
                addList:this.message.addList,
                localName:'indexData'
            }
            let data = this.localGet('indexData')
            if (data == false) {
                this.typeApi()
            }else{
                this.message.addList = data
            }
            this.scroll(this.message)
        },
        updated () {
           
        },
        methods:{
            changeNav(index,key){
                this.this_Index = index
                this.activeMovieType = key
                this.typeApi()
            },
            getImages( _url ){  //请求图片的地址进行缓存
                if( _url !== undefined ){
                    let _u = _url.substring( 7 );
                    return 'https://images.weserv.nl/?url=' + _u;
                }
            },
            typeApi(){
                let url = `/douban/search?tag=${this.activeMovieType}&start=${this.activeMovieStart}&count=10`
                this.$http.get(url).then(res => {
                    this.message.addList = res.data.subjects
                    this.localSet('indexData',this.message.addList)
                }).catch( err => {
                    
                })
            },
        },
        destroyed(){
            window.onscroll = '' //清空监听事件
        },
    }
</script>
<style scoped>
    .nav_wrap{
        position: relative;
        height: 1rem;
    }
    .nav_content{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: 0 .3rem;
        overflow: hidden;
        height: 1rem;
    }
    .nav_list{
        overflow: hidden;
        overflow-x: auto;
        display: flex;
        height: 100%;
        align-items: center;
    }
    .nav_list li{
        color: #999;
        flex: 0 0 22%;
        text-align: center;
        line-height: 1rem;
        font-size: .28rem;
    }
    .nav_list li.active{
        position: relative;
        color: #333;
    }
    .nav_list li.active::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: .05rem;
        background-color: #a975c7;
    }
    .index_movie_list{
        padding-left: .3rem;
        padding-right: .07px;
        padding-bottom: .98rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .index_movie_list li{
        width: 3.33rem;
        box-shadow: 0px 2px 3px rgba(0,0,0,.1);
        border-radius: 4px;
        margin-right: .23rem;
        margin-top: .23rem;
        overflow: hidden;
    }
    .movie_images{
        width: 3.33rem;
        height: 4rem;
    }
    .movie_images img{
        width: 100%;
        height: 100%;
    }
    .movie_name{
        font-weight: normal;
        font-size: .24rem;
        color: #333;
    }
    .type{
        line-height: 100%;
    }
    .movie_message{
        padding: .2rem;
    }
    .message{
        margin-top: .1rem;
    }
    .message span{
        font-size: .24rem;
        color: #999;
    }
    .movie_message .message{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>