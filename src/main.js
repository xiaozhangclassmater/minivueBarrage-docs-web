import '@/icons'
import '@/styles/index.scss'
import miniVueBarrage from 'minivuebarrage/'
import 'minivuebarrage/lib/mini-vue-barrage.css'
import 'normalize.css'
import Vue from 'vue'
import App from './App.vue'
import { attributeType, themeType } from './constant'
import router from './router'
import { setAttribute } from './utils'
Vue.use(miniVueBarrage)
Vue.config.productionTip = false

setAttribute('html', attributeType.DATA_THEME, themeType.LIGHT)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
