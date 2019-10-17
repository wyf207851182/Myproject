<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{num}}</h2>
    <h2>{{address}}</h2>
    <h2>{{age}}</h2>
    <h3>{{list}} - {{arr}} - {{arr2}}</h3>
    <button @click="plus">Plus</button>
    <button @click="add">add</button>
    <button @click="testPromise">测试promise</button>
  </div>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  computed:{
    // 映射形式：对象形式（左边是当前组件内的属性名称、右边是仓库的数据名称）
    ...mapState({
      num:'count',
      address:'address'
    }),
    list(){
      return this.$store.state.list
    },
    age(){
      return 19
    },
    arr(){
      return this.$store.getters.arr
    },
    // 映射形式：数组形式（直接写一个名字，代表组件内的属性名和仓库里的数据名称是一致的）
    ...mapGetters(['arr2'])
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    plus(){
      this.$store.commit('increment') //调用mutations里的函数，修改仓库数据
    },
    add(){
      this.$store.dispatch('add',{num:3})
    },
    testPromise(){
      this.$store.dispatch('testPromise2')
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
