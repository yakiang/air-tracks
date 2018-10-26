import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const initQuery = {
  union: '',
  dep: 'PEK',
  aircode: '',
  arr: 'SZX',
  isStop: 0,      // 经停
  isCross: 0,    // 跨境
  isConnect: 0,  // 转机
  isDomestic: 1,  // 境内
};

const store = new Vuex.Store({
  state: {
    query: Object.assign({}, initQuery),

    result: {}
  },

  mutations: {
    reset (state) {
      state.query = Object.assign({}, initQuery);
    },

    exchange (state) {
      const tmp = state.query.dep;
      state.query.dep = state.query.arr;
      state.query.arr = tmp;
    },

    gotresult (state, result) {
    },

    goterror (state, error) {
    }
  }
})

export default store
