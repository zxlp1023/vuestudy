import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  selected: 'waimai',
  // xuanzhong: '1'
}
const mutations = {
  addNum(state){
    state.count++
  },
  minusNum(state) {
    // state.count--
    if (!state.count <= 0) { state.count--  }
  }
}

export default new Vuex.Store({
  state,
  mutations
})