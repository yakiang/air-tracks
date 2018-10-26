import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const initQuery = {
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
};

const store = new Vuex.Store({
  state: {
    query: Object.assign({}, initQuery),

    result: []
  },

  mutations: {
    reset (state) {
      state.query = Object.assign({}, initQuery);
    },

    exchange (state) {
      const tmp = state.query.dep;
      state.query.dep = state.query.arr;
      state.query.arr = tmp;
    }
  }
})

export default store
