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
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  }
};
</script>

<style lang="scss" scoped></style>
