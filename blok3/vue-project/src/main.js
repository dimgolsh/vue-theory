import Vue from "vue";
import App from "./App.vue";
import List from "./List.vue";
import Onoff from "./Onoff.vue";
import ColorDirect from "./color";

Vue.directive("colored", ColorDirect);

export const eventEmitter = new Vue();

Vue.filter("uppercase", value => {
  return value.toUpperCase();
});

Vue.filter("add", value => {
  return value + " Yess";
});

Vue.component("app-list", List);
Vue.component("app-onoff", Onoff);


Vue.mixin({
  beforeCreate() {}
});

new Vue({
  el: "#app",
  render: h => h(App)
});
