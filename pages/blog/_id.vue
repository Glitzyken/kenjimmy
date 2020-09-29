<template>
  <div>
    <div class="h-40 mt-20">
      <h1 class="text-5xl text-center font-bold leading-none mb-4">
        <span class="letter">c</span>
        <span class="letter">o</span>
        <span class="letter">m</span>
        <span class="letter">i</span>
        <span class="letter">n</span>
        <span class="letter">g</span>
        <span class="letter"> &nbsp; </span>
        <span class="letter">s</span>
        <span class="letter">o</span>
        <span class="letter">o</span>
        <span class="letter">n</span>
        <span class="letter">.</span>
        <span class="letter">.</span>
        <span class="letter">.</span>
      </h1>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  mounted() {
    const tl = gsap.timeline();

    tl.to('.letter', {
      fontSize: '3rem',
      duration: 0.05,
      repeat: -1,
      stagger: 0.1
    });
  }
};
</script>

<style lang="scss" scoped>
.letter {
  font-size: 0;
  margin: -6px;
}
</style>
