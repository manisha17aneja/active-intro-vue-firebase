import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    },
    isloggedIn: false
  },
  getters: {
    user(state){
      return state.user
    },
    isloggedIn(state){
      return state.isloggedIn
    },
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      //console.log(value);
      state.isloggedIn = value;
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
});
