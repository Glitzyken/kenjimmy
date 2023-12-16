<template>
  <div>
    <PreLoader v-if="showHideSpinner" />
    <!-- <CustomCursor /> -->

    <div class="md:bg-kjColorLight dark:bg-kjColorBlack md:py-16">
      <div
        class="bg-white dark:bg-kjColorBlack md:max-w-6xl md:m-auto sm:rounded-lg p-2 md:p-8 text-kjColorGray dark:text-kjColorLight md:shadow-2xl"
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
      <div
        class="md:max-w-6xl md:m-auto p-2 md:p-8 text-kjColorGray dark:text-kjColorLight"
      >
        <TheFooter />
        <div class="h-3 mt-5 flex">
          <div class="h-full w-1/4 bg-kjColorPrime"></div>
          <div class="h-full w-1/4 bg-kjColorGold"></div>
          <div class="h-full w-1/4 bg-kjColorPrimeLight"></div>
          <div class="h-full w-1/4 bg-kjColorSecondary"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.showHideSpinner = true;
  },
  mounted() {
    this.showHideSpinner = false;
  },
  data() {
    return {
      showHideSpinner: true
    };
  }
};
</script>

<style lang="scss">
.card {
  position: relative;
  min-height: 23rem;
  box-shadow: 0 0.332071px 2.21381px rgba(0, 0, 0, 0.0119),
    0 0.798012px 5.32008px rgba(0, 0, 0, 0.0258),
    0 1.50259px 10.0172px rgba(0, 0, 0, 0.0368),
    0 2.68036px 17.869px rgba(0, 0, 0, 0.0479),
    0 5.01331px 33.4221px rgba(0, 0, 0, 0.0621), 0 12px 80px rgba(0, 0, 0, 0.09);
  border-radius: 0.5rem;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
}

.pf-card {
  position: relative;
  box-shadow: 0 0.332071px 2.21381px rgba(0, 0, 0, 0.0119),
    0 0.798012px 5.32008px rgba(0, 0, 0, 0.0258),
    0 1.50259px 10.0172px rgba(0, 0, 0, 0.0368),
    0 2.68036px 17.869px rgba(0, 0, 0, 0.0479),
    0 5.01331px 33.4221px rgba(0, 0, 0, 0.0621), 0 12px 80px rgba(0, 0, 0, 0.09);
  border-radius: 0.5rem;
  transition: all 0.2s;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter {
  opacity: 0;
  transform: translateX(25px);
}
.page-leave-to {
  opacity: 0;
  transform: translateX(-25px);
}
</style>
