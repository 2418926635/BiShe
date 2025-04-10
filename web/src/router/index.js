import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 扩展路由加载
import { systemAddRouter } from './system'
import { shetuanAddRouter } from './shetuan'
import { xitiAddRouter } from './xiti'






const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

// replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}


const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue'),
    // redirect: '/index/first',
    redirect: '/index/system/user',
    //注意并不是最终是在index页面显示所以放在下面，而不是说放在contentnew下面
    children: [
      {
        name: 'indexfirst',
        path: '/index/first',
        desc: '首页',
        meta: { keepAlive: true },    // 需要缓存
        component: () => import('@/views/menu/index')
      },
      ...systemAddRouter,
      ...shetuanAddRouter,
      ...xitiAddRouter
    ]
  },
]

const router = new VueRouter({
  // mode: 'history',
  routes
})


// router.beforeEach((to, from, next) => {
//   //路由验证当为
//   //首先判断是否具有有效token
//   if (to.path === '/login') {
//     next();
//   } else {
//     let token = localStorage.getItem('AUTHORIZATIONGENERAL')
//     if (token == null || token == '' || token == undefined) {
//       next('/login')
//     } else {
//       if (to.matched.length === 0) { //未匹配到的时候跳转到404页面
//         next({ name: "404" })
//       } else {
//         next()  //匹配到的时候跳转相应的路由
//       }

//     }
//   }
// })

router.beforeEach((to, from, next) => {
  //路由验证当为
  //首先判断是否具有有效token
  if (to.path === '/login') {
    next();
  } else {
    let userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
    try {
      if (userinfo.isadmin === 0) {
        next();
      } else {
        next('/login')
      }
    } catch (error) {
      next('/login')
    }

  }
})


export default router
