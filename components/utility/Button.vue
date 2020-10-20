<template>
  <nuxt-link class="inline-block" :to="linkTo">
    <svg
      id="btn"
      xmlns="http://www.w3.org/2000/svg"
      width="220"
      height="60"
      viewBox="0 0 220 60"
    >
      <rect
        x="0"
        y="0"
        width="60"
        height="60"
        rx="30"
        ry="30"
        fill="#e45447"
        style="opacity: 0.4;"
      />
      <text
        transform="translate(80 38)"
        text-anchor="middle"
        font-size="20"
        fill="#000"
      >
        {{ displayTitle }}
      </text>
    </svg>
  </nuxt-link>
</template>

<script>
import { gsap, Elastic } from 'gsap';

export default {
  mounted() {
    this.animateButtonOnHover();
  },
  props: {
    displayTitle: String,
    linkTo: String
  },
  methods: {
    animateButtonOnHover() {
      document.querySelector('#btn').addEventListener('mouseenter', animate);
      document.querySelector('#btn').addEventListener('mouseleave', animate);

      const tl = new TimelineMax();
      tl.to(document.querySelector('#btn').children[0], 0.4, {
        attr: { width: 160, fill: '#e45447' },
        autoAlpha: 0.8,
        ease: Elastic.easeOut.config(1, 1)
      });
      tl.to('text', 0.2, { fill: '#f2f0ee', ease: Linear.easeNone }, 0);
      tl.reversed(true);

      function animate() {
        tl.reversed(!tl.reversed());
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#btn {
  font-weight: 700;
  overflow: visible;
}
</style>
