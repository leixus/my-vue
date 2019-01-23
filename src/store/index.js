import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {

}

export default new Vuex.Store({
  // 第一种
  // state: {
  //   city: defaultCity
  // },
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  // mutations: {
  //   changeCity (state, city) {
  //     state.city = city
  //     try {
  //       localStorage.city = city
  //     } catch (e) {}
  //   }
  // }
  // 第二种
  // state: state,
  // mutations: mutations
  state,
  mutations,
  getters: {
    doubleCity () {
      return state.city +','+ state.city
    }
  }
})
