<template>
  <span class="cursor-pointer ml-10 dark:text-kjColorLight">
    <font-awesome-icon
      :icon="['fas', 'moon']"
      class="text-lg ml-1"
      @click="toggleDarkMode()"
      v-if="isDarkMode"
    />
    <font-awesome-icon
      :icon="['fas', 'sun']"
      class="text-lg ml-1"
      @click="toggleDarkMode()"
      v-else
    />
  </span>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.$colorMode.preference =
        this.$colorMode.value == 'light' ? 'dark' : 'light';
    }
  }
};
</script>
>
