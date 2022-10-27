<template>
 <div class="card-started" id="home-card">
      <!--
  Profile
-->
      <div class="profile no-photo">
        <!-- profile image -->
        <div
          class="slide"
          style="background-image: url(images/man5_big.jpg)"
        ></div>

        <!-- profile titles -->
        <div class="title">Meena Rani</div>
        <!--<div class="subtitle">Web Designer</div>-->
        <TypingAnimation />

        <div class="social" style="text-align: right !important;">
           
           <b>   <span class="black">Follow me: </span>&nbsp;&nbsp;&nbsp;
              <a target="_blank" href="https://github.com/meenarani22"
           ><span class="fa fa-github"></span
         ></a>&nbsp;&nbsp;
         <a target="_blank" href="https://linkedin.com/"
           ><span class="fa fa-linkedin"></span
         ></a>&nbsp;&nbsp;
         <a target="_blank" href="https://stackoverflow.com/"
                  ><span class="fa fa-stack-overflow"></span
                ></a></b>
            </div>

        <!-- profile buttons -->
        <div class="lnks">
          <a href="/MeenResume.pdf" target="_blank" class="lnk">
            <span class="text">Download CV</span>
            <span class="ion ion-archive"></span>
          </a>
          <a href="#" class="lnk discover" @click="navFunction.activeSection('contacts')">
            <span class="text">Contact Me</span>
            <span class="arrow"></span>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
import TypingAnimation from "./TypingAnimation.vue";
import { navFunction } from "../navFunction";
export default {
  name: `Contact`,
  data() {
    return {
      navFunction      
    };
  },
  components: { TypingAnimation },
};
</script>