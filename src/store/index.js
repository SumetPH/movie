import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movie: {},
    price: 100,
    movies: [],
    cart: [],
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setCart(state, cart) {
      state.cart = cart;
    },
  },
  actions: {
    fetchMovies({ commit }) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=151f1c9fb18680ccc406b5ea32fd3f24&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        )
        .then((res) => {
          // console.log(res.data);
          commit("setMovies", res.data.results);
        });
    },
    searchMovies({ commit }, movie) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=151f1c9fb18680ccc406b5ea32fd3f24&language=en-US&query=${movie}&page=1&include_adult=false
      `
        )
        .then((res) => {
          commit("setMovies", res.data.results);
        });
    },
    fetchCart({ commit }) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      if (cart) commit("setCart", cart);
    },
    addCart({ commit, state }) {
      try {
        let cart = state.cart;
        cart.push({
          movie: state.movie,
          price: state.price,
        });
        commit("setCart", cart);
        localStorage.setItem("cart", JSON.stringify(cart));
        return true;
      } catch (error) {
        return false;
      }
    },
    deleteCart({ commit, state }, index) {
      const cart = state.cart.filter((c, i) => i !== index);
      commit("setCart", cart);
      localStorage.setItem("cart", JSON.stringify(cart));
    },
  },
  modules: {},
});
