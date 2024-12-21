import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return{
      loginStatus:true,
      count:0
    }
  },
  getters: {
    //相当于计算属性,做了一个缓存,并且能获取
    len(state) {
      return state.count
    }
  },
  mutations: {
    chageCount(state, num) {
      //在vue里 this.$store.state.count 但是在vuex中使用 state.count
      state.count += num;
      console.log('mutation执行了,count值为:',state.count)
    }
  },
  actions: {
    delayChangeCount(store,num) {
      setTimeout(()=>{
        store.commit('chageCount',num)
      },3000)
    }
  },
  modules: {
    //这里一般是,在store下面新建一个 moudules, 然后在里面写a, b, 引入ab在这里面
    a:{
      //这里面就是和上面一样的

      /*
      statue, getter, mutation, action, modules
       */
    }
  }
})
