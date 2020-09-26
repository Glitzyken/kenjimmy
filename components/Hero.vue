<template>
  <header class="md:flex mt-10">
    <div class="md:flex-1">
      <div class="callout top-right">It's me</div>
      <h1 class="text-5xl font-black leading-none mb-4">
        <span class="letter">K</span>
        <span class="letter">e</span>
        <span class="letter">n</span>
        <span class="letter">n</span>
        <span class="letter">e</span>
        <span class="letter">t</span>
        <span class="letter">h</span> <br />
        <span class="letter"> &nbsp; </span>
        <span class="letter"> &nbsp; </span>
        <span class="letter"> &nbsp; </span>
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
        AKA Glitzyken, I'm a code ninja from Lagos Nigeria and am happy to work
        with you on your next project.
      </p>

      <div class="mt-10 hire-wrapper">
        <a href="tel:+2348139113069">
          <div ref="hire" class="hire">
            <img
              src="../assets/images/hireMeButton.png"
              alt="hire button"
              class="hire-img"
            />
            <div ref="hirePulse" class="hire-pulse"></div>
          </div>
        </a>
      </div>
    </div>
    <div class="mt-10 md:flex-1">
      <img
        class="w-128"
        src="../assets/images/kenjimmydotmepic.png"
        alt="ken photo"
      />
    </div>
  </header>
</template>

<script>
import { gsap, Back, Elastic, Expo } from 'gsap';

export default {
  mounted() {
    this.animateHero();
  },
  methods: {
    animateHero() {
      const { hire, hirePulse } = this.$refs;
      const tl = gsap.timeline();

      tl.to(
        '.callout',
        {
          scale: 1,
          duration: 1,
          ease: 'elastic.out(1, 0.3)'
        },
        0.5
      )
        .to('.letter', { fontSize: '3rem', duration: 0.05, stagger: 0.1 })
        .to('.des', { opacity: 1, y: 0, duration: 0.7 }, 4)
        .to(
          '.message',
          { opacity: 1, y: 0, duration: 1, ease: 'back.out(1.7)' },
          '-=.5'
        )
        .to('.hire-wrapper', { opacity: 1 })
        .to(
          hire,
          {
            duration: 0.4,
            scale: 0.8,
            rotation: 16,
            ease: Back.easeOut.config(1.7)
          },
          5
        )
        .to(
          hirePulse,
          {
            duration: 0.5,
            scale: 0.9,
            opacity: 1
          },
          '-=0.6'
        )
        .to(hire, {
          duration: 1.2,
          scale: 1,
          rotation: '-=16',
          ease: Elastic.easeOut.config(2.5, 0.5)
        })
        .to(
          hirePulse,
          {
            duration: 1.1,
            scale: 3,
            opacity: 0,
            ease: Expo.easeOut
          },
          '-=1.2'
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

.des {
  transform: translateY(70px);
  opacity: 0;
}

.message {
  transform: translateY(100px);
  opacity: 0;
}

.hire-wrapper {
  position: relative;
  opacity: 0;
}

.hire {
  position: relative;
  right: -55px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  background: #e6ce99;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

.hire-pulse {
  position: absolute;
  z-index: 1;
  height: 120px;
  width: 120px;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -60px;
  background: #e29d51;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
}

.hire-img {
  height: 70%;
}
</style>
