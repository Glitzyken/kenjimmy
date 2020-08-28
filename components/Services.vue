<template>
  <section>
    <h1
      class="capitalize mt-20 text-3xl sm:text-4xl md:text-5xl font-bold leading-none"
    >
      what i can do for you
    </h1>
    <p class="capitalize mt-2 sm:text-2xl">service offers</p>
    <CustomBorder />
    <div id="web" class="md:w-5/6 h-64 md:ml-16 mt-10 rounded-lg"></div>
    <div class="md:w-5/6 h-64 mt-5 bg-kjColorSecondaryLight rounded-lg"></div>
    <div class="md:w-5/6 h-64 md:ml-20 mt-5 bg-kjColorLight rounded-lg"></div>
  </section>
</template>

<style lang="scss" scoped>
#web {
  background-image: url('../assets/images/web.jpg');
  background-size: cover;
}
// .service {
//   transition: all 0.2s;

//   &:hover {
//     transform: translateX(10px);
//   }
// }
</style>
