<template>
  <section class="mt-12 md:mt-56">
    <h1 class="capitalize text-3xl md:text-4xl font-bold leading-none">
      what i can do
    </h1>
    <p class="capitalize mt-2 text-lg">service offers</p>
    <CustomBorder />
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

<style lang="scss" scoped></style>
