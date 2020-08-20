<template>
  <div class="md:bg-kjColorLight md:py-16">
    <div
      class="bg-white md:max-w-6xl md:m-auto sm:rounded-lg p-2 md:p-8 text-gray-800"
    >
      <div class="md:flex">
        <div>
          <TheSideBar />
        </div>
        <div class="md:flex-1">
          <TheNavBar />
          <Nuxt />
        </div>
      </div>
      <TheFooter />
    </div>
  </div>
</template>
