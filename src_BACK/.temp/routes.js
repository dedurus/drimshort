const c1 = () => import(/* webpackChunkName: "page--src-pages-script-vue" */ "D:\\work_pc\\drimshort\\src\\pages\\Script.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-sponsors-vue" */ "D:\\work_pc\\drimshort\\src\\pages\\Sponsors.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-stream-index-vue" */ "D:\\work_pc\\drimshort\\src\\pages\\stream\\Index.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-production-vue" */ "D:\\work_pc\\drimshort\\src\\pages\\Production.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-program2020-vue" */ "D:\\work_pc\\drimshort\\src\\pages\\Program2020.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-program2021-vue" */ "D:\\work_pc\\drimshort\\src\\pages\\Program2021.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\work_pc\\drimshort\\src\\pages\\About.vue")
const c8 = () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "D:\\work_pc\\drimshort\\src\\pages\\404.vue")
const c9 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\work_pc\\drimshort\\src\\pages\\Index.vue")

export default [
  {
    path: "/script/",
    component: c1
  },
  {
    path: "/sponsors/",
    component: c2
  },
  {
    path: "/stream/",
    component: c3
  },
  {
    path: "/production/",
    component: c4
  },
  {
    path: "/program2020/",
    component: c5
  },
  {
    path: "/program2021/",
    component: c6
  },
  {
    path: "/about/",
    component: c7
  },
  {
    name: "404",
    path: "/404/",
    component: c8
  },
  {
    name: "home",
    path: "/",
    component: c9
  },
  {
    name: "*",
    path: "*",
    component: c8
  }
]
