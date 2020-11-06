
import DefaultLayout from '~/layouts/Default.vue'

import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import './assets/styles/main.scss'
import '~/assets/css/styles.css'

import checkIfMobile from './mixins/checkIfMobile'

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  Vue.use(IconsPlugin)
  Vue.component('Layout', DefaultLayout)
  Vue.mixin(checkIfMobile)
}
