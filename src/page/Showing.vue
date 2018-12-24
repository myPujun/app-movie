<template>
    <div class="showing">
        <movie-list :dataList="message.addList"></movie-list>
    </div>
</template>
<script>
    import MovieList from '@/components/MovieList'
    export default {
        name:'showing',
        data(){
            return {
                showingList:[],
                ctiy:'广州',
                activeMovieStart:0,
                message:{}
            }
        },
        components:{
            MovieList
        },
        created() {
            this.message = {
                url:`/in_theaters?city=广州`,
                MovieStart:this.activeMovieStart,
                addList:this.message.addList,
                localName:'showing'
            }
            let data = this.localGet('showing')
            if(data == false){
                let url = '/in_theaters?city=广州&start=0&count=10'
                this.Api(url).then( data => {
                    this.activeMovieStart+=10
                    this.message.addList = data.subjects
                    this.localSet('showing',this.message.addList)
                })
            }else{
                this.message.addList = data
            }
            this.scroll(this.message)
        },
    }
</script>
<style scoped>

</style>
