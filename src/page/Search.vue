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
        <movie-list :dataList='searchList'></movie-list>
        <div class="hint" v-if="isHint">未搜索到相关内容</div>
    </div>
</template>
<script>
    import headerTop from '@/components/header'
    import MovieList from '@/components/movieList'
    export default {
        name:'search',
        data(){
            return {
                showState:{
                    ispageUp:false,
                    isTitle:false,
                },
                isHint:false,
                searchMessage:null,
                searchList:[],
                tagList:[]
            }
        },
        components:{
            headerTop,MovieList
        },
        mounted() {
            let localData = this.localGet('searchShowing')
            if(localData == false){
                let url = `/douban/in_theaters?city=广州&start=0&count=10`
                this.$http.get(url).then( res => {
                    let data = res.data.subjects
                    data.forEach((key,index) => {
                        this.tagList.push(key.title) 
                    })
                    this.localSet('searchShowing',this.tagList)
                }).catch(err => {
                    alert(err)
                })
            }else{
                this.tagList = localData
            }
            
        },
        methods:{
            putMessage(content){
                if(content){
                    this.searchMessage = content
                }
                this.api()
            },
            api(){
                let url = `/douban/search?tag=${this.searchMessage}&start=0&count=10`
                this.$http.get(url).then( res => {
                    if(res.data.subjects.length == 0){
                        this.isHint = true
                    }else{
                        this.isHint = false
                    }
                    this.searchList = res.data.subjects
                }).catch(err => {
                    console.log(err)
                })
            },
        },
        directives: {
            focus:{
                inserted:function(el){
                    el.focus()
                }
            }
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
    .hint{
        text-align: center;
    }
    .tag_list span{
        padding: 5px 15px;
        border: 1px solid #b1b1b1;
        border-radius: 40px;
        font-size: .26rem;
        margin: 5px;
        color: #b1b1b1;
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