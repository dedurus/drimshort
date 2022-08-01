
//import DefaultLayout from '~/layouts/DefaultLayout.vue'

import { BootstrapVue, BVConfigPlugin } from 'bootstrap-vue'
import '~/assets/styles/main.scss'
import '~/assets/css/styles.css'

//import checkIfMobile from './mixins/checkIfMobile'

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  //Vue.component('Layout', DefaultLayout)
  //Vue.mixin(checkIfMobile)

  /* head.script.push({
    src: 'http://www.geoplugin.net/javascript.gp',
    body: true
  }) */

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: 'https://drimshortfestival.mk/',
    })
    head.meta.push({
      key: 'og:image:secure',
      name: 'og:image:secure',
      content: 'https://drimshortfestival.mk/SOCIAL/dsff.jpg',
    })
    head.meta.push({
      key: 'og:title',
      name: 'og:title',
      content: 'Drim Short Film Festival - 2022',
    })
    head.meta.push({
      key: 'og:description',
      name: 'og:description',
      content: '2022 Edition of Drim Short Film Festival in Struga',
    })

    head.meta.push({
      key: 'twitter:title',
      name: 'twitter:title',
      content: 'Drim Short Film Festival - 2022',
    })
    head.meta.push({
      key: 'twitter:description',
      name: 'twitter:description',
      content: '2022 Edition of Drim Short Film Festival in Struga',
    })
    head.meta.push({
      key: 'twitter:image',
      name: 'twitter:image',
      content: 'https://drimshortfestival.mk/SOCIAL/dsff.jpg',
    })
    head.meta.push({
      key: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    })

    // font
    head.link.push({
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap'
    })
    head.link.push({
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Square+Peg&text=Tower%20of%20Eternity'
    })


    next()
  })
}
