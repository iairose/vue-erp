import Vue from 'vue'
import Router from 'vue-router'
import gridview from '@/components/dataview/gridview'
import listview from '@/components/dataview/listview'
import adminindex from '@/components/index'
import product from '@/components/product'

import tab_1 from '@/components/product/on-website'
import tab_2 from '@/components/product/on-hand'
import tab_3 from '@/components/product/forecasted'
import tab_4 from '@/components/product/product-moves'
import tab_5 from '@/components/product/reordering-rule'
import tab_6 from '@/components/product/sales'
import tab_7 from '@/components/product/bill-of-materials'
import more_link from '@/components/product/more-link'
import more_link_2 from '@/components/product/more-link-2'
import more_link_3 from '@/components/product/more-link-3'


// import tab_top from '@/components/product/tab-top'
// import tab_bottom from '@/components/product/tab-bottom'
// import tab_bottom_1 from '@/components/product/tab-b-1'
// import tab_bottom_2 from '@/components/product/tab-b-2'


// import general_information from '@/components/product/general-information'

import test from '@/components/test/test'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index/gridview'
    },   

    {
      path: '/product',
      redirect: '/product/tab-1'
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
    {
    path: '/product',
    name: 'product',
    component: product,
    children:[
{path:'/product/tab-1',name:'tab-1',component:tab_1},
{path:'/product/tab-2',name:'tab-2',component:tab_2},
{path:'/product/tab-3',name:'tab-3',component:tab_3},
{path:'/product/tab-4',name:'tab-4',component:tab_4},
{path:'/product/tab-5',name:'tab-5',component:tab_5},
{path:'/product/tab-6',name:'tab-6',component:tab_6},
{path:'/product/tab-7',name:'tab-7',component:tab_7},
{path:'/product/tab-more-1',name:'tab-more-1',component:more_link},
{path:'/product/tab-more-2',name:'tab-more-2',component:more_link_2},
{path:'/product/tab-more-3',name:'tab-more-3',component:more_link_3},
]
},
{
path: '/test',
name: 'test',
component: test,
},




]
})
