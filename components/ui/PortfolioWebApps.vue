<template>
  <div>
    <AlertMessage
      v-if="showAlert"
      @alertJimmy="showHideAlert"
      :message="message"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 dark:text-kjColorGray">
      <a
        v-for="webApp in webApps"
        :key="webApp.name"
        :href="webApp.link"
        target="_blank"
      >
        <div
          :style="{
            background: 'url(' + webApp.bgImage + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }"
          class="h-128 rounded-lg card pf-card"
        >
          <div class="p-8 md:flex justify-between align-bottom">
            <h2 class="font-bold text-lg capitalize">
              {{ webApp.name }}
            </h2>
            <p class="text-xs mt-2">
              {{ webApp.techUsed }}
            </p>
          </div>
        </div>
      </a>

      <div
        :style="{
          background: 'url(' + kenJimmy.bgImage + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }"
        class="h-128 rounded-lg cursor-pointer card"
        @click="showHideAlert"
      >
        <div class="p-8 md:flex justify-between align-bottom">
          <h2 class="font-bold text-lg capitalize">
            kenneth jimmy
          </h2>
          <p class="text-xs mt-2">
            Nuxt.js TailwindCSS GSAP Storyblok
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { kenJimmy, mazino, natours, eloquent } from '~/docs/portfolios.js';

export default {
  data() {
    return {
      kenJimmy: kenJimmy,
      webApps: [mazino, natours, eloquent],
      message: 'Ken says you are awesome 😎. Thanks for visiting! :)',
      showAlert: false
    };
  },
  methods: {
    showHideAlert() {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
    }
  }
};
</script>
