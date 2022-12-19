import { createStore } from "vuex";

export default createStore({
  state: {
    isAuthenticated: false,
    token: "",
  },
  getters: {},
  mutations: {
    onStart(state) {
      let token = localStorage.getItem("token");
      if (token) {
        state.isAuthenticated = true;
        state.token = true;
      } else {
        state.isAuthenticated = false;
        state.token = "";
      }
    },
    login(state, token) {
      if (token) {
        state.isAuthenticated = true;
        state.token = true;
        localStorage.setItem("token", token);
      } else {
        state.isAuthenticated = false;
        state.token = "";
        localStorage.removeItem("token");
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  actions: {},
  modules: {},
});
