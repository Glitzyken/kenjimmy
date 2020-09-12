<template>
  <section class="mt-12 md:mt-56">
    <h1 class="capitalize text-3xl md:text-4xl font-bold leading-none">
      what i can do
    </h1>
    <p class="capitalize mt-2 text-lg">service offers</p>
    <CustomBorder />
    <div class="grid grid-cols-1 md:grid-cols-2 mt-10 bg-kjColorLight">
      <div class="p-5 md:mx-8 services">
        <h2 class="text-lg font-black uppercase mb-3">
          app development
        </h2>
        <p class="mb-5">
          I build modern-driven web and mobile applications using modern
          technology stacks such as Node.js
        </p>
        <h2 class="text-lg font-black uppercase mb-3">
          ui/ux design
        </h2>
        <p class="mb-5">
          I create jaw-dropping mobile and web designs and prototypes using
          Adobe XD or Figma
        </p>
        <h2 class="text-lg font-black uppercase mb-3">
          graphic design
        </h2>
        <p>
          Creating illustrations, logos and vector graphics used for app
          development or designing a book, flyer, magazine, brochure or even a
          banner is a cinch. Feel free to check out one of my books on
          <a href="" target="_blank" class="font-bold underline"> Amazon </a>
        </p>
      </div>
      <div class="hidden lg:block illustration">
        <img
          class="illustration__img illustration__img--1"
          src="../assets/images/Illustrations/illustration-01.png"
          alt="illustration 1"
        />
        <img
          class="illustration__img illustration__img--2"
          src="../assets/images/Illustrations/illustration-02.png"
          alt="illustration 2"
        />
        <img
          class="illustration__img illustration__img--3"
          src="../assets/images/Illustrations/illustration-03.png"
          alt="illustration 3"
        />
        <img
          class="illustration__img illustration__img--4"
          src="../assets/images/Illustrations/illustration-04.png"
          alt="illustration 4"
        />
        <img
          class="illustration__img illustration__img--5"
          src="../assets/images/Illustrations/illustration-05.png"
          alt="illustration 5"
        />
        <img
          class="illustration__img illustration__img--6"
          src="../assets/images/Illustrations/illustration-06.png"
          alt="illustration 6"
        />
        <img
          class="illustration__img illustration__img--7"
          src="../assets/images/Illustrations/illustration-07.png"
          alt="illustration 7"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { gsap, Back, Elastic, Expo } from 'gsap';

export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          title: 'Web development',
          des: 'I build websites and web applications.'
        },
        {
          title: 'Ux/ui design',
          des: 'I design application user interface.'
        },
        {
          title: 'Graphic design',
          des: 'I design logos, flyers, cards, etc.'
        }
      ]
    };
  },
  mounted() {
    this.animateServices();
  },
  methods: {
    animateServices() {
      let tl = new TimelineMax({ onUpdate: updatePercentage });

      const scene = this.$scrollmagic
        .scene({
          triggerElement: '.wrapper',
          triggerHook: 0,
          duration: '300%'
        })
        .setPin('.wrapper')
        .setTween(tl);

      this.$scrollmagic.addScene(scene);

      function updatePercentage() {
        tl.progress();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.illustration {
  position: relative;
  height: 30rem;

  &__img {
    position: absolute;
    bottom: 0;
    width: 80%;

    &--1 {
      left: 0;
      z-index: 2;
    }

    &--2 {
      top: 25%;
      z-index: 1;
    }

    &--3 {
      top: -2%;
    }

    &--4 {
      top: -20%;
      left: -20%;
    }

    &--5 {
      top: -20%;
      right: -5%;
    }

    &--7 {
      top: -2%;
      right: -2%;
    }

    &--6 {
      top: 0;
      left: -22%;
    }
  }
}

.services {
  text-align: center;
}
</style>
