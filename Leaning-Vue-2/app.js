let items = [
  {
    name: '鉛筆',
    price: 300,
    quantity: 0
  },
  {
    name: 'ノート',
    price: 400,
    quantity:0
  },
  {
    name: '消しゴム',
    price: 500,
    quantity: 0
  }
];

let vm = new Vue({
  el: '#app',
  data: {
    items: items,
    loggedInButton: 'ログイン済のため購入できます。',
    canBuy: false
  },
  filters: {
    numberWithDelimiter: function (value) {
      if (!value) {
        return '0'
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1, ')
    }
  }
});

window.vm = vm;