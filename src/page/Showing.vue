<template>
    <div class="showing">
        <movie-list :dataList="showingList"></movie-list>
    </div>
</template>
<script>
    import MovieList from '@/components/movieList'
    export default {
        name:'showing',
        data(){
            return {
                showingList:[],
                ctiy:'广州'
            }
        },
        components:{
            MovieList
        },
        created() {
            let data = this.localGet('showing')
            if(data == false){
                let url = `/douban/in_theaters?city=广州&start=0&count=20`
                this.$http.get(url).then( res => {
                    this.showingList = res.data.subjects
                    this.localSet('showing',this.showingList)
                })
            }else{
                this.showingList = data
            }
            
        },
    }
</script>
<style scoped>

</style>
