<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'App',
  data () {
      return {
          
      }
  },
  created () {
      // 添加请求拦截器
    let _this = this
    Axios.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        _this.$loading.show()
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });
    // 添加响应拦截器
    Axios.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        _this.$loading.hide()
        return response;
    }, function (error) {
        // 对响应错误做点什么
        _this.$loading.hide()
        return Promise.reject(error);
    });
  }
}
</script>

<style>

</style>
