
import DefaultLayout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'
import '~/assets/css/styles.css'

import checkIfMobile from './mixins/checkIfMobile'

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)
  Vue.mixin(checkIfMobile)

  /* head.script.push({
    src: 'http://www.geoplugin.net/javascript.gp',
    body: true
  }) */

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:title',
      name: 'og:title',
      content: 'Drim Short Film Festival - 2021',
    })
    head.meta.push({
      key: 'og:description',
      name: 'og:description',
      content: '2021 Edition of Drim Short Film Festival in Struga',
    })
    head.meta.push({
      key: 'og:image',
      name: 'og:image',
      content: 'http://drimshortfestival.mk/SOCIAL/dsff.jpg',
    })
    head.meta.push({
      key: 'twitter:title',
      name: 'twitter:title',
      content: 'Drim Short Film Festival - 2021',
    })
    head.meta.push({
      key: 'twitter:description',
      name: 'twitter:description',
      content: '2021 Edition of Drim Short Film Festival in Struga',
    })
    head.meta.push({
      key: 'twitter:image',
      name: 'twitter:image',
      content: 'http://drimshortfestival.mk/SOCIAL/dsff.jpg',
    })
    head.meta.push({
      key: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    })

    next()
  })
}
