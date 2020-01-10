let headerTemplate = `
  <div>
    <slot name="header">No title</slot>
  </div>
`

let contentTemplate = `
  <div>
    <slot name="content">No contents</slot>
  </div>
`

Vue.component('page-header', {
  template: headerTemplate
})

Vue.component('page-content', {
  template: contentTemplate
})

let counterButton = Vue.extend({
  template: '<span>{{counter}}個<button v-on:click="addToCart">追加</button></span>',
  data: function() {
    return {
      counter: 0
    }
  },
  methods: {
    addToCart: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
})

const fruits_counter_object = new Vue({
  el: '#fruits-counter',
  components: {
    'counter-button': counterButton
  },
  data: {
    total: 0,
    fruits: [
      {name: '梨'},
      {name: 'イチゴ'}
    ]
  },
  methods: {
    incrementCartStatus: function () {
      this.total += 1
    }
  }
})

Vue.component('item-desc', {
  props: {
    itemName: {
      type: String
    }
  },
  template: '<p>{{ itemName }}は便利です。</p>'
})

Vue.component('fruits-list-title', {
  template: '<h1>フルーツ一覧</h1>'
})

Vue.component('fruits-list-description', {
  template: '<p>季節の代表的なフルーツの一覧です</p>'
})

Vue.component('fruits-list-table', {
  template: `
  <table>
    <tr>
      <th>季節</th>
      <th>フルーツ</th>
    </tr>
    <tr>
      <td>春</td>
      <td>いちご</td>
    </tr>
    <tr>
      <td>夏</td>
      <td>スイカ</td>
    </tr>
    <tr>
      <td>秋</td>
      <td>ぶどう</td>
    </tr>
    <tr>
      <td>冬</td>
      <td>みかん</td>
    </tr>
  </table>
  `
})
 
const fruits_list_object = new Vue({
  el: '#fruits-list'
})

const my_item_pbject = new Vue({
  el: '#app',
  data: {
    myItem: 'pen'
  }
})