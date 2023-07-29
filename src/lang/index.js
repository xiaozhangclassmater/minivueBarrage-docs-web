import locale from 'element-ui/lib/locale';
import elementEN from 'element-ui/lib/locale/lang/en'; // 引入饿了么的英文包
import elementZH from 'element-ui/lib/locale/lang/zh-CN'; // 引入饿了么的中文包
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import langEn from './module/en';
import langZh from './module/zh';
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    en: {
      ...elementEN,
      ...langEn
    },
    zh: {
      ...elementZH,
      ...langZh
    }
  }
})
// 配置elementUI 语言转换关系
locale.i18n((key, value) => i18n.t(key, value))

export default i18n