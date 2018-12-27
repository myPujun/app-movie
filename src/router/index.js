import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

//登录界面
import Register from '@/page/Register'
//Home
import Home from '@/page/Home'
//首页
import Index from '@/page/Index'
//搜索
import Search from '@/page/Search'
//详情页
import MovieDetails from '@/page/MovieDetails'
//热映
import Showing from '@/page/Showing'
//Top250
import RankingList from '@/page/RankingList'
//找回密码
import Retrieve from '@/page/RetrievePassword'
//演员详情
import ActorDetails from '@/page/ActorDetails'

Vue.use(Router)

export default new Router({
    // mode:'history',
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
        },
        {
            path:'/retrieve',
            name:'retrieve',
            component: Retrieve
        },
        {
            path:'/actorDetails',
            name:'actorDetails',
            component: ActorDetails
        }
    ]
})
