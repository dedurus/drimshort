<template>
    <div class="Navbar">
        <nav class="navbar navbar-expand-sm flex-nowrap fixed-top" id="navbar_wrapper">
            <button v-on:click="onClick" class="navbar-toggler mr-2 collapsed" id="navbar-toggler" type="button"
                data-toggle="collapse" data-target="#navbar">
                <span> </span>
                <span> </span>
                <span> </span>
            </button>
            <span class="navbar-brand w-100">
                <g-link class="nav-link logo" to="/">
                    <Logo />
                </g-link>
            </span>
            <div class="navbar-collapse collapse w-100 justify-content-center" id="navbar">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <g-link class="nav-link text-center" to="/" exact>Home</g-link>
                    </li>
                    <li class="nav-item">
                        <g-link class="nav-link text-center" to="/program2022/">DSFF 2022</g-link>
                    </li>
                    <!-- <li class="nav-item">
                        <g-link class="nav-link text-center" to="/about/">About</g-link>
                    </li> -->
                    <b-nav-item-dropdown text="About" right>
                        <b-dropdown-item href="/about/">DSFF</b-dropdown-item>

                        <b-dropdown-item href="/production/">Production</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <li class="nav-item">
                        <g-link class="nav-link text-center" to="/tsfm/">TSFM Word-Frame Struga</g-link>
                    </li>
                    <li class="nav-item">
                        <g-link class="nav-link text-center" to="/script/">Consulting</g-link>
                    </li>
                    <!-- <li class="nav-item">
                        <g-link class="nav-link text-center" to="/production/">Production</g-link>
                    </li>
                    <li class="nav-item">
                        <g-link class="nav-link text-center" to="/sponsors/">Sponsors</g-link>
                    </li> -->



                    <!-- <li class="nav-item">
                        <g-link class="nav-link text-center watch" to="/stream/">Watch Now</g-link>
                    </li> -->


                </ul>
            </div>
            <div class="w-100">
                <!--spacer-->
            </div>
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
.nav-link.logo {
    text-decoration: none !important;
    color: #FF0000 !important;
}

.navbar {
    padding: .1rem 1rem;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    background-color: transparent;
    /* background-color: rgba(255, 255, 255, 0.15); */
}

.dropdown-menu {
    border: #FF0000 solid 1px;
}

.dropdown-menu a.dropdown-item {
    color: #FF0000;
}

.dropdown-menu a.dropdown-item:hover {
    background-color: rgba(255, 0, 0, 0.1);
}


.navbar-expand-sm .navbar-nav .nav-link {
    white-space: nowrap;
}

@media only screen and (max-width: 480px) {
    .navbar-nav {
        align-items: end;
    }

    .navbar-expand-sm .navbar-nav .nav-link {
        font-weight: 800;
    }

    .navbar-expand-sm .navbar-nav {
        padding-bottom: 15px;
    }
}

/* @media only screen and (max-width: 768px) {
    .navbar-expand-sm .navbar-toggler {
        display: block;
    }
} */

.navbar-toggler {
    position: relative;
}

.navbar-toggler:focus,
.navbar-toggler:active {
    outline: 0;
}

a.nav-link.watch {
    color: red;
    font-weight: 800;
}

a.nav-link.watch.active {
    color: #FF0000;
    font-weight: 800;
}

a.nav-link.watch:hover {
    color: #FF0000;
}

.navbar-toggler span {
    display: block;
    background-color: #FF0000;
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

.cl-effect-3 a {
    padding: 8px 0;
}

.cl-effect-3 a::after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(0, 0, 0, 0.1);
    content: '';
    opacity: 0;
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    -moz-transition: opacity 0.3s, -moz-transform 0.3s;
    transition: opacity 0.3s, transform 0.3s;
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    transform: translateY(10px);
}

.cl-effect-3 a:hover::after,
.cl-effect-3 a:focus::after {
    opacity: 1;
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    transform: translateY(0px);
}
</style>
