<template>
  <div>
    <h1 class="mt-6 text-2xl font-bold capitalize">Web Applications</h1>
    <CustomBorder />

    <div class="mt-8">
      <PortfolioWebApps />
    </div>

    <h1 class="mt-6 text-2xl font-bold capitalize">Native Applications</h1>
    <CustomBorder />
    <div class="mt-8">
      <PortfolioNativeApps />
    </div>

    <h1 class="mt-6 text-2xl font-bold capitalize">Graphic Designs</h1>
    <CustomBorder />
    <div class="mt-8"></div>

    <div
      class="max-w-xl shadow-2xl h-40 py-5 md:py-0 px-5 md:px-10 mt-10 md:flex justify-between items-center"
    >
      <p class="text-lg font-bold mb-3 md:mb-0">
        Want to know more about my skills? See my resume.
      </p>
      <Button displayTitle="MY RESUME" linkTo="/resume" />
    </div>
  </div>
</template>
