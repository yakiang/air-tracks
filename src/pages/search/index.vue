<template>
  <div class="container">
    <div id="airports">
      <input id="dep-airport" v-model="query.dep" />
      <img id="exchange" src="../../../static/exchange.png" @click="exchangeAirports"/>
      <input id="arr-airport" v-model="query.arr" />
    </div>

    <div id="filters">
      <!--checkbox for unions-->
      <!--picker for airlines-->
      <!--switch for switchers-->
    </div>

    <div id="buttons">
      <div class="space"></div>
      <img id="reset" src="../../../static/reset.png" @click="resetQuery"/>
      <div class="space"></div>
      <img id="search" src="../../../static/search.png" @click="sendQuery"/>
      <div class="space"></div>
    </div>
  </div>
</template>

<script>
import store from '../../store'

export default {
  data () {
    return {}
  },

  computed: {
    query () {
      return store.state.query;
    }
  },

  components: {
  },

  methods: {
    resetQuery: function () {
      store.commit('reset');
    },

    exchangeAirports: function () {
      store.commit('exchange');
    },

    sendQuery: function () {
      wx.request({
        url: 'https://map.variflight.com/___api/SuXAvAQ0qWkchQuUUqHN/dr',
        method: 'POST',
        data: store.state.query,
        header: {
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        success (res) {
          if (!res.data.code) {
            store.commit('gotresult', res.data.data);
          } else {
            store.commit('goterror', res.data.msg);
          }
        },
        fail (e) {
          store.commit('goterror', e);
        }
      });
    }
  },

  created () {
  }
}
</script>

<style scoped>
  #airports {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: solid 1px #aeaeae;
    border-bottom: solid 1px #aeaeae;
    height: 20vh;
  }
  #dep-airport {
    text-align: left;
    padding: 0 10vw;
    flex: 1;
  }
  #arr-airport {
    text-align: right;
    padding: 0 10vw;
    flex: 1;
  }
  #exchange {
    width: 10vw;
    height: 10vw;
  }

  #buttons {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    height: 15vh;
    width: 100%;
  }
  #reset {
    width: 11vw;
    height: 11vw;
  }
  #search {
    width: 12vw;
    height: 12vw;
  }
  #buttons .space {
    width: 12vw;
  }
</style>
