<template>
    <div ref="rankingContent">
        <movie-list :dataList="message.addList"></movie-list>
        <div class="loading" v-show="isloading">加载中...</div>
    </div>
</template>
<script>
    import MovieList from '@/components/movieList'
    export default {
        name:'rankingList',
        data(){
            return {
                activeMovieStart:0,
                isloading:false,
                message:{}
            }
        },
        components:{
            MovieList
        },
        mounted (){
            this.message = {
                url:`/douban/top250?start=${this.activeMovieStart}&count=10`,
                content:this.$refs.rankingContent,
                MovieStart:this.activeMovieStart,
                addList:null
            }
            let url = `/douban/top250?start=0&count=10`
            this.$http.get(url).then( res => {
                this.message.addList = res.data.subjects
            })
            //滑动底部加载数据
            this.scroll(this.message)
        },
        methods:{
            
        }
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
</style>
