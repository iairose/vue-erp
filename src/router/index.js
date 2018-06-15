import Vue from 'vue'
import Router from 'vue-router'
import gridview from '@/components/dataview/gridview'
import listview from '@/components/dataview/listview'
import adminindex from '@/components/index'
import product from '@/components/product'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index/gridview'
    },         
    {
      path: '/index',
      name: 'index',
      component: adminindex,
      children: [
      {path: '/index/gridview',name: 'gridview',component: gridview},
      {path: '/index/listview',name: 'listview',component: listview},
      ]
    },
    {path: '/product',name: 'product',component: product},
  ]
})
