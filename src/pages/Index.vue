<template>
  <Naslovna>

  <div class="align-items-center main_scroll">








<div class="js-ticker">
  <ul class="wrapper">
    <li>&middot; DREAM SHORT AT DRIM SHORT FILM FESTIVAL</li>
    <li>&middot; 29.07 - 01.08.2021 </li>
    <li>&middot; STRUGA, SEE YOU! </li>
  </ul>
</div>

<!-- <div class="js-ticker">
  <ul class="wrapper">
    <li>No. 1 \ First point</li>
    <li>No. 2 \ Second point</li>
    <li>No. 3 \ Third point</li>
  </ul>
</div>
 -->



         <!--  DREAM SHORT AT DRIM SHORT FILM FESTIVAL / 29.07-01.08 2021 / STRUGA, SEE YOU! -->






  </div>

  </Naslovna>
</template>

<script>
//import MarqueeText from 'vue-marquee-text-component'
import { gsap } from "gsap";
import Naslovna from '~/layouts/Naslovna.vue'





export default {
  components: {
    Naslovna
  },
  metaInfo: {
    title: ' Home',

    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'full_bg'
    },
  },
  mounted:function() {
    //this.$nextTick(function () {
    this.clone_ticker()
    //}
  },
  methods: {
      clone_ticker: function(){
        document.querySelectorAll('.js-ticker .wrapper').forEach(ticker => {

          let clone_el = ticker.querySelectorAll("li");


          clone_el.forEach(function (el, index) {

            let clone = el.cloneNode(true);



                ticker.append(clone);
            })
          })

          this.start_anim()
      },
      start_anim: function(){
        const dur = 50;
        const wrap = gsap.utils.wrap(0, 1);
        let wrapper = document.querySelector('.js-ticker .wrapper');

        let ticker = wrapper.querySelectorAll("li")
        let totalDistance;
        //const items = ticker.querySelectorAll("li");
        let anim;

        let startPos;

        if (anim) {
          anim.play(0)
        };
        //totalDistance = $(ticker).width() / 2;
        totalDistance = wrapper.offsetWidth / 2


        anim = gsap.to(wrapper, {
            duration: dur,
            x: -totalDistance,
            ease: "none",
            repeat: -1,
            overwrite: true
        });

      }
  }
}
</script>

<style scoped>

.main_scroll{
  font-size: 15rem;
  overflow: hidden;
  position: relative;
  white-space: nowrap;

}


@media only screen and (min-width: 768px) {
  #app{
    justify-content: center;
  }
}



body {
  background: black;
  overflow-x: hidden;
}

.js-ticker {
  width: 100vw;
  height: 100vh;
  position: relative;
  display:flex;
  align-items:center;
}

.js-ticker .wrapper {
  position: absolute;
  white-space: nowrap;
  padding: 0;
  will-change: transform;
}

.js-ticker li {
  list-style: none;
  padding: 0;
  font-family: sans-serif;
  color: white;
  font-weight: 300;
  font-size: 15vw;
  display: inline-block;
  margin-right: 30px;
}
ul.wrapper li{
  padding-left: 1%;
  color: #2EFFE3;
}
</style>
