var app = new Vue({ 
  el: '#app',
  data: {
      message: 'Hello Vue!'
  }
});
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  }
})
var app6 =new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})
var app8 = new Vue({
  el: '#app-8',
  data: {
    message: 'Hello Vue.js!',
    temp: '[ReverseText]'
  },
  methods: {
    reverseMessage: function(){
      this.temp = this.message.split('').reverse().join('')
    }
  }
})
var app9 = new Vue({
  el: '#app-9',
  data: {
    inputText: '',
    outputText: []
  },
  methods: {
    anagramOutput: function(){
      var tempList = ''
      tempList = this.inputText.split('')
      this.outputText = this.anagramCreate(tempList)
    },
    anagramCreate: function(tempList){
      if(tempList.length === 0){
        return null;
      }
      if(tempList.length === 1){
        return [[tempList[0]]];
      }
      var result = [], head, copyList;
      for( var i = 0 , n = tempList.length; i<n ; i++ ){
        //配列のコピー
        copyList = tempList.slice(0);
        //i番目の配列を抜きだす
        head = copyList.splice( i,1 );
        //再起処理
        newList = this.anagramCreate( copyList );
        for( var j = 0 , m = newList.length ; j<m ; j++ ){
          newList[j].unshift( head[0] );
          result.push( newList[j] );
        }
      }
      return result;
    }
  }
})