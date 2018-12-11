<template>
    <div class="index" ref="indexContent">
        <header-top :showState="{ispageUp:true,isTitle:true,isSearchIcon:true}"></header-top>
        <ul class="nav_list">
            <li :class="{active:this_Index == index}" 
                v-for="key,index in navList" 
                @click="changeNav(index,key)">{{key}}</li>
        </ul>
        <ul class="index_movie_list">
            <router-link tag="li" :to="{path:'/movieDetails',query:{id:item.id}}" 
            v-for="item in movieList" >
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
        <div class="loading" v-show="isloading">加载中...</div>
    </div>
</template>
<script>
    import headerTop from '@/components/header'
    export default{
        name:'index',
        data() {
            return {
                this_Index: 0 ,
                navList:['动作片','动漫','喜剧片','记录片'],
                activeMovieType:'动作片',
                activeMovieStart:0,
                isloading:false,
                movieList:[],
                cacheList:[]
            }
        },
        components: {
            headerTop
        },
        mounted() {
            let data = this.localGet('indexData',1000*60)
            if(data == false){
                this.typeApi()
            }else{
                this.movieList = data
                this.isloading = false
            }
            this.scroll()
        },
        updated () {

        },
        methods:{
            changeNav(index,key){
                localStorage.getItem('indexData')
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
                this.isloading = true
                let url = `/douban/search?tag=${this.activeMovieType}&start=${this.movieList}&count=10`
                this.$http.get(url).then(res => {
                    this.movieList = res.data.subjects
                    this.isloading = false
                })
            },
            scroll() {
                this.$nextTick(() => { 
                    window.onscroll = () => {
                        // 距离底部时加载一次
                        let content = this.$refs.indexContent
                        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
                        if((window.innerHeight + scrollTop)-44 == content.clientHeight){
                            this.isloading = true
                            this.activeMovieStart += this.movieList.length
                            let url = `/douban/search?tag=${this.activeMovieType}&start=${this.activeMovieStart}&count=10`
                            this.$http.get(url).then(res => {
                                let list = res.data.subjects
                                list.forEach((item,index) => {
                                    this.movieList.push(item)
                                })
                                this.isloading = false
                                this.localSet('indexData',this.movieList)
                            })
                        }
                   }
                })
              }
        },
        destroyed(){
            window.onscroll = '' //清空监听事件
        },
    }
</script>
<style scoped>
    .loading{
        position: fixed;
        top: 50%;
        left: 50%;
        width: 2rem;
        height: 1rem;
        margin-top: -.5rem;
        margin-left: -1rem;
        background-color: rgba(0,0,0,.75);
        border-radius: 4px;
        text-align: center;
        line-height: 1rem;
        color: #FFF;
    }
    .nav_list{
        display: flex;
        justify-content: space-around;
        
    }
    .nav_list li{
        color: #999;
        padding: .4rem .1rem .25rem .1rem;
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
        margin-top: .22rem;
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