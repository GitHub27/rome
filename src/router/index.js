import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [{
    path: '/login',
    component: () =>
      import ('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () =>
      import ('@/views/404'),
    hidden: true
  },
  {
    path: '/index',
    component: Layout,
    children: [{
      path: '',
      name: '首页',
      hidden: true,
      component: () =>
        import ('@/views/index/index'),
      // meta: { title: '首页', icon: 'table', channel: 'QJS' }

    }]
  },
  {
    path: '/myvisit',
    component: Layout,
    children: [{
      path: '',
      name: '我的访问',
      hidden: true,
      component: () =>
        import ('@/views/myVisit/index'),

    }]
  },

  {
    path: '/',
    component: Layout,
    redirect: '/product/QJS',
    name: '货架',
    hidden: true
  },
  {
    path: '/product',
    component: Layout,
    redirect: '/product/QJS',
    name: 'product',
    meta: {
      title: '产品货架',
      icon: 'tree'
    },
    children: [{
        path: 'QJS',
        name: 'QJS',
        component: () =>
          import ('@/views/product/index'),
        meta: {
          title: '侨金所',
          icon: 'table',
          channel: 'QJS'
        }
      },
      {
        path: 'GAN',
        name: 'GAN',
        component: () =>
          import ('@/views/product/index'),
        meta: {
          title: '赣金中心',
          icon: 'table',
          channel: 'GAN'
        }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

// 异步挂载的路由
// 动态需要根据权限加载的路由表
export const asyncRouterMap = [{
    path: '/account',
    component: Layout,
    redirect: '/account/newaccount',
    name: 'manageraccount',
    meta: {
      title: '账号管理',
      icon: 'example',
      role: [1]
    }, // 页面需要的权限
    children: [{
        path: 'newaccount',
        name: 'newaccount',
        component: () =>
          import ('@/views/account/newAccount'),
        meta: {
          title: '创建账号',
          icon: 'table'
        }
      },
      {
        path: 'editAccount',
        name: 'editaccount',
        component: () =>
          import ('@/views/account/editAccount'),
        meta: {
          title: '编辑账号',
          icon: 'tree'
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
