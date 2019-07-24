// i18n.js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
// 引入各个语言配置文件
import cn from './langs/cn'
import en from './langs/en'
import locale from 'element-ui/lib/locale' // lang i18n
// import messages from './langs'

// set ElementUI lang to EN
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.lang || 'cn',
  cn,
  en
})
locale.i18n((key, value) => i18n.t(key, value)) // 重点：为了实现element插件的多语言切换

export default i18n
