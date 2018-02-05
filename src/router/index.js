import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import parentBaba from '@/components/parentBaba'
import todoList from '@/components/todoList'
import zujian from '@/components/zujian'
import waimai from '@/components/waimai'
import order from '@/components/order'
import faxian from '@/components/faxian'
import me from '@/components/me'
import navbar from '@/components/navbar/navbar'
import tabbar from '@/components/tabbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {path:'/parent',name:'parent',component:parentBaba},
    {path:'/todoList',name:'todoList',component:todoList},
    {path:'/zujian',name:'zujian',component:zujian},
    {path:'/waimai',name:'waimai',component:waimai},
    {path: '/nav', name: 'nav', component: navbar},
    {path:'/order',name:'order',component:order},
    {path:'/faxian',name:'faxian',component:faxian},
    {path:'/me',name:'me',component:me},
    {path:'/tabbar',name:'tabbar',component:tabbar},
  ]
})

