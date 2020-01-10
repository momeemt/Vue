let UserList = {
  template: '#user-list'
}

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
      component: UserList
    }
  ]
})

let app = new Vue({
  router: router
}).$mount('#app')