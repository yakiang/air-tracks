import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    query: {
      union: '',
      ftype: '',
      dep: 'PEK',
      depType: '',
      aircode: '',
      arr: 'SZX',
      arrType: '',
      isStop: '',
      isCross: '',
      isConnect: ''
    },

    result: []
  },

  mutations: {
    exchange (state) {
      const tmp = state.query.dep;
      state.query.dep = state.query.arr;
      state.query.arr = tmp;
    }
  }
})

export default store
