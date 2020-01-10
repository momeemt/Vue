let getUsers = function (callback) {
  setTimeout(function () {
    callback(null, [
      {
        id: 1,
        name: 'Takuya Tejima'
      },
      {
        id: 2,
        name: 'Yohei Noda'
      }
    ])
  }, 1000)
}

let UserList = {
  template: '#user-list',
  data: function () {
    return {
      loading: false,
      users: function () { return [] },
      error: null
    }
  },
  created: function () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData: function () {
      this.loading = true
      getUsers((function (err, users) {
        this.loading= false
        if (err) {
          this.error = err.tostring()
        } else {
          this.users = users
        }
      }).bind(this))
    }
  }
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