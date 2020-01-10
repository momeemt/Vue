let router = new VueRouter({
  routes: [
    {
      path: '/top',
      component: {
        template: '<div>トップページです。</div>'
      }
    },
    {
      path: '/users',
      component: {
        template: '<div>ユーザー一覧ページです</div>'
      }
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: {
        template: '<div>ユーザーIDは {{ $route.params.userId }} です。</div>'
      }
    }
  ]
})

let app = new Vue({
  router: router
}).$mount('#app')