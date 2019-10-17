import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 1.仓库数据
    count:0,
    address: '成都市武侯区力宝大厦',
    list:[1,2,3,4,5,6,7,8,9,10],
  },
  getters:{
    arr(state){
      return state.list.filter(value=>value>5)
    },
    arr2(state){
      return state.list.filter(value=>value<5)
    }
  },
  mutations:{
    // 2.修改仓库数据的唯一途径(mutations)
    increment (state){
      state.count++
    },
    decrement (state,obj){
      state.count -= obj.num
    }
  },
  actions: {
    add(context,obj){
      setTimeout(() => {
        context.commit("decrement",obj)
      },1000)
    },
    testPromise(){
      return new Promise((resolve,reject) => {
        resolve("1234")
      })
    },
    testPromise2({dispatch,commit}){
      dispatch('testPromise').then((res)=>{
        console.log(res);
      })
    }
  }
})

export default store
