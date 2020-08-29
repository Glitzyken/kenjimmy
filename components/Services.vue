<template>
  <section>
    <h1 class="capitalize mt-20 text-3xl md:text-4xl font-bold leading-none">
      what i can do for you
    </h1>
    <p class="capitalize mt-2 text-lg">service offers</p>
    <CustomBorder />
    <div class="flex mt-10">
      <div class="w-1/3 h-128 mr-4 rounded-lg shadow-2xl card">
        <div class="w-full h-48"></div>
        <div class="w-full h-auto py-2 px-4">
          <span class="text-xl font-bold capitalize">web development</span>
        </div>
      </div>
      <div class="w-1/3 h-128 mr-4 bg-red-500">
        UI-UX
      </div>
      <div class="w-1/3 h-128 bg-red-300">
        Graphic Design
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card {
  transition: all 0.2s;

  &:hover {
    border: 3px solid #607393;
    box-shadow: 1px 1px 30px #bab6b5;
    transform: translateY(-5px);
  }
}
</style>
