import './firebase'
import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueFire from 'vuefire';

library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueFire);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
