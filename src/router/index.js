import Vue from 'vue'
import Router from 'vue-router'
import gridview from '@/components/dataview/gridview'
import listview from '@/components/dataview/listview'



Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/gridview'
    },
    
    {
      path: '/gridview',
      name: 'gridview',
      component: gridview
    },
    {
      path: '/listview',
      name: 'listview',
      component: listview
    }
  ]
})
