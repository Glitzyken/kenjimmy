<template>
  <div>
    <font-awesome-icon
      :icon="['fas', 'bars']"
      class="text-3xl mt-1 mr-2 absolute right-0 top-0 md:hidden"
      @click.prevent="toggle"
    />
  </div>
</template>

<script>
import { store, mutations } from '@/store/store.js';
export default {
  computed: {
    isBurgerActive() {
      return store.isNavOpen;
    }
  },
  methods: {
    toggle() {
      mutations.toggleNav();
    }
  }
};
</script>
