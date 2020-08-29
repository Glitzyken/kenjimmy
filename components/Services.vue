<template>
  <section>
    <h1 class="capitalize mt-20 text-3xl md:text-4xl font-bold leading-none">
      what i can do for you
    </h1>
    <p class="capitalize mt-2 text-lg">service offers</p>
    <CustomBorder />
    <div class="md:flex mt-10">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="md:w-1/3 h-128 rounded-lg shadow-2xl card"
      >
        <div class="w-full h-48"></div>
        <div class="w-full h-auto py-2 px-4">
          <div>
            <span class="text-xl font-bold capitalize">{{
              service.title
            }}</span>
            <p>{{ service.des }}</p>
          </div>
          <div class="relative mt-2">
            <div class="absolute right-0">
              <nuxt-link to="/portfolio">
                <Button />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
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
.card {
  transition: all 0.2s;

  // Write a media query to fix this
  // &:not(:last-child) {
  //   margin-right: 1rem;
  // }

  &:hover {
    border: 3px solid #607393;
    box-shadow: 1px 1px 30px #bab6b5;
    transform: translateY(-5px);
  }
}
</style>
