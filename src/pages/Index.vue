<template>
  <Naslovna>

    <div class="align-items-center main_scroll">

      <div class="pulsing_container">

        <div class="s1 item"></div>
        <div class="s2 item"></div>
        <div class="s3 item"></div>
        <div class="s4 item"></div>
        <div class="s41 item"></div>
        <div class="s5 item"></div>
        <div class="s51 item"></div>
        <div class="s52 item"></div>
        <div class="s53 item"></div>
        <div class="s54 item"></div>
        <div class="s6 item"></div>
        <div class="s7 item"></div>


      </div>

      <div class="type_container">
        <div class='console-container'><span id='text'></span>
        </div>
      </div>

    </div>

  </Naslovna>
</template>

<script>
//import MarqueeText from 'vue-marquee-text-component'
import '~/assets/css/openning_sequence_2022.css'
import { gsap, SteppedEase } from "gsap";
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
  mounted: function () {
    this.consoleText(['DRIM SHORT FILM FESTIVAL', '6-9 AUGUST 2022', 'CULTURAL CENTER, STRUGA'], 'text', ['#FF000']);
  },
  methods: {
    consoleText: function (words, id, colors) {
      if (colors === undefined) colors = ['#fff'];
      var visible = true;
      var con = document.getElementById('console');
      var letterCount = 1;
      var x = 1;
      var waiting = false;
      var target = document.getElementById(id)
      target.setAttribute('style', 'color:' + colors[0])
      window.setInterval(function () {

        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount)
          window.setTimeout(function () {
            var usedColor = colors.shift();
            colors.push(usedColor);
            var usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute('style', 'color:' + colors[0])
            letterCount += x;
            waiting = false;
          }, 800)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(function () {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 3000)
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount)
          letterCount += x;
        }
      }, 120)

    }

  }
}
</script>

<style scoped>



















/* Animation */
.typewriter {
  width: 0;
}

.main_scroll {
  font-size: 15rem;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
}

@media only screen and (max-width: 768px) {
  #app {
    justify-content: center;
  }
}



body {
  background: #fff;
  overflow-x: hidden;
}

.s1 {
  width: 300px;
  height: 150px;
  /* position: absolute; */
}

.s1:before,
.s1:after {
  content: "";
  width: 300px;
  height: 150px;
  background-color: rgb(255, 0, 0);
  position: absolute;
  /* border-radius: 50%; */
  animation: pulse0 8s linear 0s infinite forwards;
  opacity: 0.05;
}

.s2 {
  width: 280px;
  height: 140px;
  /* position: absolute; */
}

.s2:before,
.s2:after {
  content: "";
  width: 280px;
  height: 140px;
  background-color: rgb(255, 0, 0);
  position: absolute;
  animation: pulse0 6s linear 0s infinite forwards;
  opacity: 0.05;
}

.s3 {
  width: 260px;
  height: 130px;
}

.s3:before,
.s3:after {
  content: "";
  width: 260px;
  height: 130px;
  background-color: rgb(255, 0, 0);
  position: absolute;
  animation: pulse0 9s linear 0s infinite forwards;
  opacity: 0.05;
}

.s4 {
  width: 250px;
  height: 125px;
}

.s4:before,
.s4:after {
  content: "";
  width: 250px;
  height: 125px;
  background-color: rgba(255, 0, 0, 0.1);
  position: absolute;
  animation: pulse1 9s linear 0s infinite forwards;
}

.s41 {
  width: 240px;
  height: 120px;
}

.s41:before,
.s41:after {
  content: "";
  width: 240px;
  height: 120px;
  background-color: rgba(255, 0, 0, 0.1);
  position: absolute;
  animation: pulse1 8s linear 0s infinite forwards;
}

.s4 {
  width: 230px;
  height: 110px;
}

.s4:before,
.s4:after {
  content: "";
  width: 230px;
  height: 110px;
  background-color: rgb(255, 0, 0);
  position: absolute;
  animation: pulse0 7s linear 0s infinite forwards;
  opacity: 0.05;
}

.s5 {
  width: 200px;
  height: 100px;
}

.s5:before,
.s5:after {
  content: "";
  width: 200px;
  height: 100px;
  background-color: rgb(255, 0, 0);
  position: absolute;
  animation: pulse3 7s linear 0s infinite forwards;
  opacity: 0.05;
}

.s51 {
  width: 180px;
  height: 90px;
}

.s51:before,
.s51:after {
  content: "";
  width: 180px;
  height: 90px;
  background-color: rgb(255, 0, 0);
  position: absolute;
  animation: pulse0 7s linear 0s infinite forwards;
  opacity: 0.05;
}

.s52 {
  width: 160px;
  height: 80px;
}

.s52:before,
.s52:after {
  content: "";
  width: 160px;
  height: 80px;
  background-color: rgb(255, 0, 0);
  position: absolute;
  animation: pulse0 7s linear 0s infinite forwards;
  opacity: 0.05;
}

.s53 {
  width: 140px;
  height: 70px;
}

.s53:before,
.s53:after {
  content: "";
  width: 140px;
  height: 70px;
  background-color: rgb(255, 0, 0);
  position: absolute;
  animation: pulse0 7s linear 0s infinite forwards;
  opacity: 0.05;
}

.s54 {
  width: 120px;
  height: 65px;
}

.s54:before,
.s54:after {
  content: "";
  width: 120px;
  height: 65px;
  background-color: rgb(255, 0, 0);
  position: absolute;
  animation: pulse0 7s linear 0s infinite forwards;
  opacity: 0.05;
}

/* .s5 {
  width: 100px;
  height: 60px;
}

.s5:before,
.s5:after {
  content: "";
  width: 100px;
  height: 60px;
  background-color: rgb(255, 0, 0);
  position: absolute;
  animation: pulse0 7s linear 0s infinite forwards;
  opacity: 0.05;
} */

.s6 {
  width: 30px;
  height: 30px;
}

.s6:before,
.s6:after {
  content: "";
  width: 30px;
  height: 30px;
  background-color: rgb(255, 0, 0);
  position: absolute;
  animation: pulse 7s linear 0s infinite forwards;
  opacity: 0.08;
}

.s7 {
  width: 20px;
  height: 20px;
}

.s7:before,
.s7:after {
  content: "";
  width: 20px;
  height: 20px;
  background: rgba(255, 0, 0, 0.2);
  /* background: radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 25%); */
  position: absolute;
  animation: pulse 8s linear 0s infinite forwards;
  opacity: 0.07;
}



@keyframes pulse0 {
  0% {
    transform: scale(1);

  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.7);
    opacity: 0.07;
  }

  50% {
    transform: scale(1.3);
    opacity: 0.03;
  }

  100% {
    transform: scale(0.7);
    opacity: 0.07;
  }
}

@keyframes pulse1 {
  0% {
    transform: scale(0.7);
    opacity: 0.1;
  }

  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

@keyframes pulse3 {
  0% {
    transform: scale(0.2);
    opacity: 0.04;
  }

  50% {
    transform: scale(1);
    opacity: 0;
  }

  100% {
    transform: scale(0.2);
    opacity: 0.04;
  }
}

.pulsing_container {
  background: rgb(255, 0, 0);
  /*  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,69,0,0.12) 45%, rgba(255,69,0,0.12) 46%, rgba(255,255,255,1) 100%); */
  /* background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 0, 0, 0.1) 50%, rgba(255, 255, 255, 1) 100%); */
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 30%, rgba(255, 69, 0, 0.12) 50%, rgba(255, 255, 255, 1) 70%);
  /* border: 1px solid #2d2d2d; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "overlap";
  height: 150px;
}

.item {
  grid-area: overlap;
  align-self: center;
  justify-self: center;

}

/** Typewritting  */
.type_container {
  display: flex;
  justify-content: center;
  margin-top: 5%;
  font-size: 1.2rem;
  height: 2.4rem;
}

/* .typewriter {
  overflow: hidden;
  font-size: 2rem;
  text-align: center;
  border-right: .15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  nimation:
    typing 10s steps(40, end),
    blink-caret .75s step-end infinite;
} */

/* The typing effect */
@keyframes typing {
  0% {
    width: 0
  }

  10% {
    width: 100%
  }

  50% {
    width: 100%
  }

  75% {
    width: 100%;
  }

  80% {
    width: 0%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {

  0%,
  75%,
  100% {
    opacity: 1;
  }

  25% {
    opacity: 0;
  }
}

.console-container:after {
  content: "|";
  animation: blink-caret 1s infinite;
  animation-timing-function: step-end;
  opacity: .8;
}
</style>
