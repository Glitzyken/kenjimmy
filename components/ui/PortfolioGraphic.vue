<template>
  <div class="grid grid-cols-1 dark:text-kjColorLight">
    <VueSlickCarousel v-bind="settings">
      <div
        v-for="slide in slides"
        :key="slide.src"
        :style="{
          background: 'url(' + slide.src + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }"
        class="h-128 md:h-256 object-cover "
      ></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

import {
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7
} from '~/docs/graphic.js';

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        arrows: false,
        autoplay: true,
        pauseOnFocus: true
      },
      slides: [slide1, slide2, slide3, slide4, slide5, slide6, slide7]
    };
  }
};
</script>
