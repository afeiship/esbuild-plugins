import Vue from 'vue'
import VueIos7Switch from './components/VueIos7Switch.vue'

Vue.component(VueIos7Switch.name, VueIos7Switch)

console.log(VueIos7Switch);

Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `
    <div>
      <vue-ios7-switch :checked="false"/>
      <vue-ios7-switch size="20px" theme="blue" :checked="true" />
      <vue-ios7-switch size="30px" :checked="false" />
      <vue-ios7-switch size="200px" theme="green" :checked="true" />
    </div>
  `,
  components: { VueIos7Switch }
})
