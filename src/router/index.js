import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

//登录界面
import Register from '@/page/Register'
//Home
import Home from '@/page/Home'
//首页
import Index from '@/page/index'
//搜索
import Search from '@/page/Search'
//详情页
import MovieDetails from '@/page/movieDetails'
//热映
import Showing from '@/page/Showing'
//Top250
import RankingList from '@/page/RankingList'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path:'/',
            name:'home',
            component:Home,
        },
        {
            path: '/index',
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
        },
        {
            path:'/showing',
            name:'showing',
            component:Showing
        },
        {
            path:'/rankingList',
            name:'RankingList',
            component: RankingList
        },
        {
            path:'/register',
            name:'register',
            component: Register
        }
    ]
})
