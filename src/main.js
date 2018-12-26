// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import publicJs from '../static/js/public'
import Loading from '@/Loading'

//js控制字体
import '../static/js/fontSize.js'
//清除默认样式
import '../static/css/base.css'
//css公用样式
import '../static/css/public.css'


Vue.config.productionTip = false

Vue.prototype.$http = Axios

//评分保留一位小数点
Vue.filter('filterGrade',function(value){
    return value.toFixed(1)
})

Vue.use(publicJs)
Vue.use(Loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
