<template>
  <div class="layout">
      <Navbar/>
      <transition name="fade" appear>
      <div class="container">
        <slot/>
      </div>
      </transition>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


export default {
  components: {
    Footer,
    Navbar,
  }
}
</script>


<style lang="scss">
body, html {
  height: 100%;
}

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:6rem 0 0 0;
  line-height: 1.5;
}

@media screen and (orientation:landscape) {
  .container{
    padding-bottom: 3rem;
  }
}
.container{
  margin-bottom: 4rem;
}

body.full_bg .container{
  margin-bottom: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
/* .container-fluid{
  padding-left: 10px !important;
  padding-right: 10px !important;
} */

/* #content-wrapper {
  flex: 1 0 auto;
  max-width: 950px;
  width: 90vw;
  margin: 0 auto;
} */
</style>
