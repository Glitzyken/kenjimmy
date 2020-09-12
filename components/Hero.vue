<template>
  <header class="md:flex mt-20">
    <div class="md:flex-1">
      <div class="callout top-right">it's me</div>
      <h1 class="text-5xl font-black leading-none mb-4 names">
        <span class="letter">K</span>
        <span class="letter">e</span>
        <span class="letter">n</span>
        <span class="letter">n</span>
        <span class="letter">e</span>
        <span class="letter">t</span>
        <span class="letter">h</span>
        <span class="letter"> &nbsp; </span>
        <span class="letter">J</span>
        <span class="letter">i</span>
        <span class="letter">m</span>
        <span class="letter">m</span>
        <span class="letter">y</span>
      </h1>
      <p class="uppercase font-bold des">
        Programmer, Designer and Chess lover
      </p>
      <p class="text-kjColorGray text-sm mt-10 w-64 message">
        25 year old code ninja from Lagos Nigeria. Happy to work with you on
        your next big project.
      </p>
      <button
        class="bg-kjColorRed w-32 shadow-xl py-2 px-4 uppercase mt-10 rounded text-kjColorLight text-xs transition duration-200 hover:bg-kjColorDark focus:outline-none"
      >
        Hire me
      </button>
    </div>
    <div class="mt-10 md:mt-0 md:flex-1">
      <img
        class="w-128"
        src="../assets/images/kenjimmydotmepic.png"
        alt="ken photo"
      />
    </div>
  </header>
</template>

<script>
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  mounted() {
    this.startAnimations();
  },
  methods: {
    startAnimations() {
      // gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline();

      tl.to('.callout', {
        scale: 1,
        duration: 1,
        ease: 'elastic.out(1, 0.3)'
      })
        .to('.letter', { fontSize: '3rem', duration: 0.05, stagger: 0.1 })
        .from('.des', { opacity: 0, y: 70, duration: 0.7 })
        .from(
          '.message',
          { opacity: 0, y: 100, duration: 1, ease: 'back.out(1.7)' },
          '-=.5'
        );
    }
  }
};
</script>

<style lang="scss" scoped>
.letter {
  font-size: 0;
  margin: -6px;
}

.callout {
  height: 18px;
  width: 80px;
  background-color: #2b2929;
  background-image: -moz-linear-gradient(top, #2b2929, #2b2929);
  position: relative;
  color: #ccc;
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0px 0px 20px #999;
  margin: 25px;
  min-height: 50px;
  border: 1px solid #2b2929;
  text-shadow: 0 0 1px #000;
  transform: scale(0);
}

.callout::before {
  content: '';
  width: 0px;
  height: 0px;
  border: 0.8em solid transparent;
  position: absolute;
}

.callout.top-right::before {
  right: 7px;
  bottom: -20px;
  border-top: 10px solid #2b2929;
}
</style>
