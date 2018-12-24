<template>
    <div ref="rankingContent">
        <movie-list :dataList="message.addList"></movie-list>
    </div>
</template>
<script>
    import MovieList from '@/components/MovieList'
    export default {
        name:'rankingList',
        data(){
            return {
                activeMovieStart:0,
                message:{}
            }
        },
        components:{
            MovieList
        },
        mounted (){
            this.message = {
                url:`/top250?`,
                MovieStart:this.activeMovieStart,
                addList:null,
                localName:'rankingList'
            }
            let data = this.localGet('rankingList')
            if(data == false){
                let url = `/top250?start=0&count=10`
                this.Api(url).then( data => {
                    this.message.addList = data.subjects
                    this.localSet('rankingList',this.message.addList)
                })
            }else{
                this.message.addList = data
            }
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
