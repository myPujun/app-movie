import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

//首页
import Index from '@/page/index'
//搜索
import Search from '@/page/Search'
//详情页
import MovieDetails from '@/page/movieDetails'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
        path: '/',
        name: 'index',
        component: Index
        },
        {
            path:'/search',
            name:'search',
            component: Search
        },
        {
            path:'/movieDetails',
            name:'movieDetails',
            component: MovieDetails
        }
    ]
})
