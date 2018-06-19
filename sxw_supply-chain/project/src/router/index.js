import Vue from 'vue'
import Router from 'vue-router'
/*登录*/
import Login from '@/page/login/login'
/*首页*/
import Index from '@/page/index/index'
/*主界面*/
import Home from '@/page/home/home'
/*商品审核*/
import Audit from '@/page/audit/audit'
/*商品审核录入表单*/
import Entering from '@/page/entering/entering'
//商品库存管理
import Repertory from '@/page/repertory/repertory'
//订单管理
import Order from '@/page/order/order'
//结算管理
import Accounts from '@/page/accounts/accounts'
//退货管理
import Refund from '@/page/refund/refund'
//审核通过
import LookStatus from '@/page/lookstatus/lookstatus'
//审核中
import Progress from '@/page/progress/progress'
//审核不通过
import NotGo from '@/page/notgo/notgo'
Vue.use(Router)
//引入懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: "/index",
      name: "index",
      component: Index,
      redirect: "/index/home",
      children:[
        {
          path: 'home',
          component: Home,
        },
        {
          path: 'audit',
          component: Audit,
        },
        {
          path: 'entering',
          component: Entering,
        },
        {
          path: 'lookstatus',
          component: LookStatus
        },
        {
          path: 'progress',
          component: Progress
        },
        {
          path: 'notgo',
          component: NotGo
        },
        {
          path: 'repertory',
          component: Repertory,
        },
        {
          path: 'order',
          component: Order,
          meta: {auth: true}
        },
        {
          path: 'accounts',
          component: Accounts,
          meta: {auth: true}
        },
        {
          path: 'refund',
          component: Refund,
          meta: {auth: true}
        }
      ]
    }
  ]
})