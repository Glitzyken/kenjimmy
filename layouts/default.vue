<template>
  <div class="md:bg-kjColorLight md:py-16">
    <div
      class="bg-white md:max-w-6xl md:m-auto sm:rounded-lg p-2 md:p-8 text-kjColorGray md:shadow-2xl"
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
    </div>
    <div class="md:max-w-6xl md:m-auto p-2 md:p-8 text-kjColorGray">
      <TheFooter />
      <div class="h-3 mt-5 flex">
        <div class="h-full w-1/4 bg-kjColorPrime"></div>
        <div class="h-full w-1/4 bg-kjColorGold"></div>
        <div class="h-full w-1/4 bg-kjColorPrimeLight"></div>
        <div class="h-full w-1/4 bg-kjColorSecondary"></div>
      </div>
    </div>
  </div>
</template>
