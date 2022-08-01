<template>
  <div class="layout">
    <Navbar />
    <transition name="fade" appear>
      <div class="container-fluid">
        <slot />
      </div>
    </transition>
    <Footer />
  </div>
</template>

<script>

import Footer from '../components/FooterNaslovna'
import Navbar from '../components/NavbarNaslovna'


export default {

  components: {
    Footer,
    Navbar,
  }
}
</script>


<style lang="scss">
body,
html {
  height: 100%;
}

body.full_bg {
  font-family: 'Roboto Mono', monospace;
  background-color: #fff;
  color: #FF0000;
  margin: 0;
  padding: 6rem 0 0 0;
  line-height: 1.5;

}

body.full_bg a {
  color: #FF0000;
}

body.full_bg .nav-link.logo {
  text-decoration: none !important;
  color: #ff0000 !important;
}

body.full_bg .navbar-toggler span {
  background-color: #ff0000;
}

body.full_bg a.nav-link.active,
body.full_bg a.nav-link:hover,
body.full_bg a.nav-link:focus {
  color: #FF0000;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-thickness: 0.15rem;

}

body.full_bg {
  padding: 0;
}

body.full_bg .container {
  padding-right: 0;
  padding-left: 0;
}

body.full_bg .hide_x_overflow {
  overflow-x: hidden;
}

@media screen and (orientation:landscape) {
  .container {
    padding-bottom: 3rem;
  }
}

.container {
  margin-bottom: 4rem;
}

body.full_bg .container {
  margin-bottom: 0;
}

/* #app {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-content: center;
  justify-content: center !important;
} */

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
