import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as netfliyIdentityWidget from "netlify-identity-widget";
import GoTrue from "gotrue-js";

Vue.config.productionTip = false;

//Initialize Netlify Identity
netfliyIdentityWidget.init()

//Initialize GoTrue js for Netlify
export const auth=new GoTrue({
  APIUrl:"https://vue-dashboard-lm666.netlify.app/.netlify/identity",
  setCookie:true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
