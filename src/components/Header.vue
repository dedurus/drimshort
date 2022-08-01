<template>
  <header class="header">
    <b-navbar class="" toggleable="md" type="light">
      <b-navbar-brand>
        <g-link class="logo-home logo-desktop" to="/">
          <Logo />
        </g-link>
        <g-link class="logo-home logo–mobile" to="/">
          <Logo />
        </g-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto justify-content-center">
          <g-link class="nav--link" to="/about">About</g-link>
          <g-link class="nav--link" to="/blog">Blog</g-link>
          <g-link class="nav--link" to="/contact">Contact</g-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Logo from '~/components/Logo.vue'

export default {
  name: "Navbar",
  components: {
      Logo
  }
}
</script>

<style lang="scss">
nav {
  width: 100%;
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  /* padding: 2rem 1rem; */
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.logo-home {
  font-size: 24px;
  max-width: 75%;
  font-weight: bold;
  &:hover {
    text-decoration: none;
  }
}

.logo-desktop {
  @media(max-width: 419px) {
    display: none;
  }
  @media (min-width: 420px) {
    display: default;
  }
}

.logo–mobile {
  @media(max-width: 419px) {
    display: default;
  }
  @media (min-width: 420px) {
    display: none;
  }
}

.logo-image {
  width: 40px;
}

.nav--link {
  margin-left: 20px;
  @media (max-width: 419px) {
    margin: 0;
    padding: 15px 10px 10px 0;
  }
}

.active--exact {
  font-weight: bold;
}
.navbar{
  /* background-color: rgba(30, 20, 32, 0.6); */
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding: .1rem 1rem;
}
.navbar-toggler{
  position: relative;
}

.navbar-toggler:focus,
.navbar-toggler:active {
    outline: 0;
}

.navbar-toggler span {
   display: block;
   background-color: #fff;
   height: 3px;
   width: 25px;
   margin-top: 4px;
   margin-bottom: 4px;
   -webkit-transform: rotate(0deg);
   -moz-transform: rotate(0deg);
   -o-transform: rotate(0deg);
   transform: rotate(0deg);
   position: relative;
   left: 0;
   opacity: 1;
}

.navbar-toggler span:nth-child(1),
.navbar-toggler span:nth-child(3) {
   -webkit-transition: transform .35s ease-in-out;
   -moz-transition: transform .35s ease-in-out;
   -o-transition: transform .35s ease-in-out;
   transition: transform .35s ease-in-out;
}

.navbar-toggler:not(.collapsed) span:nth-child(1) {
    position: absolute;
    left: 12px;
    top: 10px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
    opacity: 0.9;
}

.navbar-toggler:not(.collapsed) span:nth-child(2) {
    height: 12px;
    visibility: hidden;
    background-color: transparent;
}

.navbar-toggler:not(.collapsed) span:nth-child(3) {
    position: absolute;
    left: 12px;
    top: 10px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
    opacity: 0.9;
}
</style>
