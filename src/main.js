import '@/icons'
import i18n from '@/lang'
import '@/styles/index.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'normalize.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Vue.use(miniVueBarrage)
Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
