import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
import Product from './views/Product.vue'
import Good from './views/Good.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', component: Home, children:[
       {path:"", component: Index },
    ]},
    {path:'/Product',component:Product,children:[
      {path:'',component:Good},
    ]},


  ]
})
