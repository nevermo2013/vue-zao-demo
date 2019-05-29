import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return {x:0,y:0}
  },
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/home',
      name: 'home',
      meta:{
        footShow: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "home" */ '@/views/home/Home.vue')
    },
    {
      path: '/kind',
      name: 'kind',
      meta:{
        footShow:true
      },
      component: () => import(/* webpackChunkName: "kind" */ '@/views/kind/Kind.vue'),
    },
    {
      path: '/kind/subkind/:subKindId',
      name: 'subKind',
      component: () => import(/* webpackChunkName: "kind" */ '@/views/kind/subkind/SubKind.vue'),
    },
    // {
    //   path: '/kind/subkind/:subKindId/detail/:id',
    //   name: 'goodsDetail',
    //   component: () => import(/* webpackChunkName: "kind" */ '@/views/kind/detail/GoodsDetail.vue'),
    // },
    {
      path: '/goods/detail/:id',
      name: 'goodsDetail',
      component: () => import(/* webpackChunkName: "goods" */ '@/views/kind/detail/GoodsDetail.vue'),
    },
    {
      path: '/find',
      name: 'find',
      redirect: '/find/article',
      meta:{
        footShow:true
      },
      component: () => import(/* webpackChunkName: "find" */ '@/views/find/Find.vue'),
      children:[
        {
          path:'article',
          name: 'findArticle',
          component: () => import(/* webpackChunkName: "find" */ '@/views/find/article/Article.vue'),
          meta:{
            footShow:true
          },
        },
        {
          path:'goods',
          name: 'findGoods',
          component: () => import(/* webpackChunkName: "find" */ '@/views/find/goods/Goods.vue'),
          meta:{
            footShow:true
          },
        },
      ]
    },
    {
      path:'/article/detail/:id',
      name: 'articleDetail',
      component: () => import(/* webpackChunkName: "find" */ '@/views/find/article/ArticleDetail.vue'),
      
    },
    {
      path:'/find/goods/detail/:id',
      name: 'findGoodsDetail',
      component: () => import(/* webpackChunkName: "find" */ '@/views/find/goods/GoodsDetail.vue'),
      
    },
    {
      path: '/main',
      name: 'main',
      meta:{
        footShow:true
      },
      component: () => import(/* webpackChunkName: "main" */ '@/views/main/Main.vue')
    },
    {
      path: '/main/order',
      name: 'order',
      component: () => import(/* webpackChunkName: "order" */ '@/views/main/order/Order.vue')
    },
    {
      path: '/main/order/detail/:id',
      name: 'orderDetail',
      component: () => import(/* webpackChunkName: "orderDetail" */ '@/views/main/orderDetail/OrderDetail.vue')
    },
    {
      path: '/main/logistics/:id',
      name: 'logistics',
      component: () => import(/* webpackChunkName: "logistics" */ '@/views/main/logistics/Logistics.vue')
    },
    {
      path: '/main/score/:id',
      name: 'score',
      component: () => import(/* webpackChunkName: "score" */ '@/views/main/score/Score.vue')
    },
    {
      path: '/main/saleAfter/:id',
      name: 'saleAfter',
      component: () => import(/* webpackChunkName: "saleAfter" */ '@/views/main/saleAfter/SaleAfter.vue')
    },
    {
      path: '/main/goodsColl',
      name: 'goodsColl',
      component: () => import(/* webpackChunkName: "goodsColl" */ '@/views/other/goodsColl/GoodsColl.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import(/* webpackChunkName: "goodsColl" */ '@/views/cart/Cart.vue')
    },
    {
      path: '*',
      redirect: '/home'
    }

  ]
})
