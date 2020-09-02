<template>
  <section>
    <h1 class="capitalize mt-20 text-3xl md:text-4xl font-bold leading-none">
      what i can do
    </h1>
    <p class="capitalize mt-2 text-lg">service offers</p>
    <CustomBorder />
  </section>
</template>

<script>
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

<style lang="scss" scoped>
// .card {
//   transition: all 0.2s;

//   // Write a media query to fix this
//   // &:not(:last-child) {
//   //   margin-right: 1rem;
//   // }

//   &:hover {
//     border: 3px solid #607393;
//     box-shadow: 1px 1px 30px #bab6b5;
//     transform: translateY(-5px);
//   }
// }
</style>
