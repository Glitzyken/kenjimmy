<template>
  <div>
    <h1 class="mt-6 text-2xl font-bold capitalize">Tech i use</h1>
    <CustomBorder />
    <div class="mt-8">
      <TechIUse />
      <h1 class="mt-6 text-2xl font-bold capitalize">experience</h1>
      <CustomBorder />
      <div
        class="mt-10 md:mt-8 mb-10 max-w-lg h-32 md:h-24 p-5 shadow-xl relative"
      >
        <div
          class="p-2 mr-4 md:mr-10 -mt-2 md:-mt-4 w-40 text-center text-white font-semibold bg-kjColorSecondary shadow-lg absolute right-0 top-0"
        >
          Since 2016
        </div>
        <h3 class="mt-8 md:mt-0 font-bold">Working remotely</h3>
        <p class="mt-2">Full-stack developer</p>
      </div>
      <div class="ml-8">
        <h3 class="font-bold">
          <a href="https://bossbusworld.com" target="_blank"
            ><u>BossBus Technologies</u></a
          >
        </h3>
        <p class="mt-2">Backend developer (Remote)</p>
      </div>
      <div class="ml-8 mt-8">
        <h3 class="font-bold">
          <a href="https://spasora.com" target="_blank"
            ><u>Spasora Limited</u></a
          >
        </h3>
        <p class="mt-2">Fullstack developer (Part-time)</p>
      </div>
      <div class="ml-8 mt-8">
        <h3 class="font-bold">
          <a href="https://novugrid.com" target="_blank"><u>Novugrid</u></a>
        </h3>
        <p class="mt-2">Fullstack developer (Full-time)</p>
      </div>
      <div class="ml-8 mt-8">
        <h3 class="font-bold">
          <a href="https://www.remoteplatz.com" target="_blank"
            ><u>Remoteplatz</u></a
          >
        </h3>
        <p class="mt-2">Freelancer</p>
      </div>
      <div class="flex justify-between items-center flex-wrap">
        <a
          href="https://drive.google.com/file/d/1C0spQeln1R-UdF5lPIrht4f-iBj8iR1e/view?usp=sharing"
          target="_blank"
        >
          <button
            class="p-2 mt-10 mb-10 md:mb-0 w-48 text-center text-white font-semibold bg-kjColorSecondary shadow-lg cursor-pointer my-cv"
          >
            Download My Resume
          </button>
        </a>
        <div
          class="max-w-xl shadow-2xl h-40 py-5 md:py-0 px-5 md:px-10 mt-10 md:flex justify-between items-center"
        >
          <p class="text-lg font-bold mr-4 mb-3 md:mb-0">
            I ocationally write tech articles too! See them 👉
          </p>
          <Button displayTitle="MY SHELF" linkTo="/shelf" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-cv {
  transition: all 0.2s;

  &:hover {
    transform: translateY(-0.2rem);
  }

  &:focus {
    outline: none;
    transform: translateY(0rem);
  }
}
</style>
