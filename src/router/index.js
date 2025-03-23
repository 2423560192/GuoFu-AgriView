// 简化版路由，不使用vue-router，避免运行时依赖错误
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/HomePage.vue')
  },
  {
    path: '/agricultural',
    name: 'Agricultural',
    component: () => import('../pages/AgriculturalPage.vue')
  },
  {
    path: '/economic',
    name: 'Economic',
    component: () => import('../pages/EconomicPage.vue')
  },
  {
    path: '/grain',
    name: 'Grain',
    component: () => import('../pages/GrainPage.vue')
  }
]

// 创建一个简单的路由对象，减少对完整vue-router的依赖
const router = {
  routes,
  currentRoute: { path: '/' },
  push(path) {
    this.currentRoute.path = path;
    window.history.pushState(null, '', path);
    // 触发视图更新
    if (window.app) {
      window.app.$forceUpdate();
    }
  }
}

// 模拟简化版的$route和$router
export default {
  install(Vue) {
    // 提供全局的$router和$route
    Vue.prototype.$router = {
      push: (location) => {
        if (typeof location === 'string') {
          router.push(location);
        } else if (location && location.path) {
          router.push(location.path);
        }
      }
    };
    
    Vue.prototype.$route = router.currentRoute;
    
    // 监听浏览器前进/后退
    window.addEventListener('popstate', () => {
      router.currentRoute.path = window.location.pathname;
      if (window.app) {
        window.app.$forceUpdate();
      }
    });
  },
  
  // 导出路由配置供App.vue使用
  routes,
  currentRoute: router.currentRoute
} 