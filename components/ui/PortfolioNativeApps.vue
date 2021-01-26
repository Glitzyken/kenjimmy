<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 dark:text-kjColorGray">
    <a
      v-for="nativeApp in nativeApps"
      :key="nativeApp.name"
      :href="nativeApp.link"
      target="_blank"
    >
      <div
        :style="{
          background: 'url(' + nativeApp.bgImage + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }"
        class="h-128 rounded-lg card pf-card"
      >
        <div class="p-8 md:flex justify-between align-bottom">
          <h2 class="font-bold text-lg capitalize">
            {{ nativeApp.name }}
          </h2>
          <p class="text-xs mt-2">
            {{ nativeApp.techUsed }}
          </p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import { ipaMastery } from '~/docs/portfolios.js';

export default {
  data() {
    return {
      nativeApps: [ipaMastery]
    };
  }
};
</script>
