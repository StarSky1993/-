import Vue from 'vue'
import App from './App'
import router from './router'
//清除默认样式
import './assets/style/reset.less'
//引入公共样式
import './assets/style/common.less'
//图片懒加载
import VueLazyload from 'vue-lazyload'
// 或者添加VueLazyload 选项
Vue.use(VueLazyload)
//引入动画
import animate from "animate.css"
Vue.use(animate)
//引入axios请求
import Axios from 'axios'
//跨域代理 加$
Vue.prototype.$api = '/api'
Vue.prototype.$axios = Axios
Vue.config.productionTip = false
//引入请求头
import qs from 'qs'
//默认路径
Axios.defaults.baseURL = "BASE_URL";
// //设置axios   请求拦截器
// Axios.interceptors.request.use(function(config) {
// 	if(config.method == "post") {
// 		config.data = qs.stringify(config.data)
// 	}
// 	return config;
// },function(error) {
// 	return Promise.reject(error);
// })
// //设置axios   响应拦截器
// Axios.interceptors.response.use(function(response) {
// 	return response;
// }, function(error) {
// 	return Promise.reject(error)
// })
// 全局路由拦截守卫
// router.beforeEach( (to, from, next) => {
// 	if(to.path === '/login'){
// 		if(localStorage.isLogin=='true'){
// 			next('/index');
// 			return;
// 		}
// 		next();
// 		return;
// 	}
// 	if(localStorage.isLogin!='true'){
// 		next({ path: '/' })
// 	}else{
// 		next();
// 	}
// })
new Vue({
  el: '#app',
  router,
  components: {
  	App
  },
  template: '<App/>'
})
