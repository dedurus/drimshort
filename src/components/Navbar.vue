<template>
    <div class="Navbar">
        <nav class="navbar navbar-expand-sm flex-nowrap fixed-top" id="navbar_wrapper">
            <button  v-on:click="onClick" class="navbar-toggler mr-2 collapsed" id="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
                <span> </span>
                <span> </span>
                <span> </span>
            </button>
            <span  class="navbar-brand w-100">
                <g-link class="nav-link" to="/"><Logo /></g-link>
            </span>
            <div class="navbar-collapse collapse w-100 justify-content-center" id="navbar">
                <ul class="navbar-nav mx-auto">
                     <li class="nav-item">
                        <g-link class="nav-link text-center" to="/" exact>Home</g-link>
                    </li>

                    <li class="nav-item">
                        <g-link class="nav-link text-center" to="/about/">About</g-link>
                    </li>
                    <li class="nav-item">
                        <g-link class="nav-link text-center" to="/program2020/">Program 2020</g-link>
                    </li>
                    <li class="nav-item">
                        <g-link class="nav-link text-center" to="/sponsors/">Sponsors</g-link>
                    </li>


                </ul>
            </div>
            <div class="w-100"><!--spacer--></div>
        </nav>

    </div>
</template>


<script>
import Logo from '~/components/Logo.vue'

export default {
  name: "Navbar",
  components: {
      Logo
  },
  methods: {
    onClick: function (e) {
        /* console.log('e: ', e.target);
        e => e.target.classList.toggle('collapsed') */
        document.getElementById('navbar-toggler').classList.toggle('collapsed')
        document.getElementById('navbar').classList.toggle('collapse')
        document.getElementById('navbar_wrapper').classList.toggle('nav_opened')
    }
  }
};
</script>

<style>
.navbar{
    padding: .1rem 1rem;
    background: -moz-linear-gradient(top,  rgba(43,25,44,1) 0%, rgba(43,25,44,1) 40%, rgba(43,25,44,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(43,25,44,1) 0%,rgba(43,25,44,1) 40%,rgba(43,25,44,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(43,25,44,1) 0%,rgba(43,25,44,1) 40%,rgba(43,25,44,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2b192c', endColorstr='#002b192c',GradientType=0 ); /* IE6-9 */
}

.navbar.nav_opened{
    background-color: rgba(43,25,44,1);
     background: -moz-linear-gradient(top,  rgba(43,25,44,1) 0%, rgba(43,25,44,1) 90%, rgba(43,25,44,0) 100%);
    background: -webkit-linear-gradient(top,  rgba(43,25,44,1) 0%,rgba(43,25,44,1) 90%,rgba(43,25,44,0) 100%);
    background: linear-gradient(to bottom,  rgba(43,25,44,1) 0%,rgba(43,25,44,1) 90%,rgba(43,25,44,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2b192c', endColorstr='#002b192c',GradientType=0 );
}



@media (max-width: 480px){

    .navbar-expand-sm .navbar-nav .nav-link {
        font-weight: 800;
    }
    .navbar-expand-sm .navbar-nav{
        padding-bottom: 15px;
    }
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
