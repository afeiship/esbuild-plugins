import Vue from 'vue'
import VueIos7Switch from './components/VueIos7Switch.vue'

Vue.component(VueIos7Switch.name, VueIos7Switch)

console.log(VueIos7Switch);

Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<div><vue-ios7-switch>Hello</vue-ios7-switch></div>',
  components: { VueIos7Switch }
})
