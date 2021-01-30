<template>
  <div>
    <div
      class="w-full h-full fixed top-0 left-0 bg-black-t-50"
      @click="closeSidebarPanel"
      v-if="isPanelOpen"
    ></div>
    <transition name="slide">
      <div
        class="overflow-y-auto bg-kjColorLight dark:bg-kjColorBlack shadow-2xl fixed left-0 top-0 h-full z-50 w-2/3"
        v-if="isPanelOpen"
      >
        <div class="h-full pt-10 px-5 relative">
          <div @click="closeSidebarPanel">
            <a href="tel:+2348139113069">
              <div>
                <font-awesome-icon :icon="['fas', 'phone']" class="text-lg" />
                <span class="ml-4 capitalize">Call me</span>
              </div>
            </a>

            <a href="mailto:kenjimmy17@gmail.com">
              <div class="mt-3">
                <font-awesome-icon
                  :icon="['fas', 'envelope']"
                  class="text-lg"
                />
                <span class="ml-4 capitalize">Email me</span>
              </div>
            </a>

            <nuxt-link to="/shelf">
              <div class="mt-3">
                <font-awesome-icon :icon="['fas', 'book']" class="text-lg" />
                <span class="ml-4 capitalize">shelf</span>
              </div>
            </nuxt-link>
          </div>
          <div class="absolute bottom-0 mb-3">
            <a
              href="https://www.linkedin.com/in/kenneth-jimmy-b84092191/"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'linkedin']" class="text-lg" />
            </a>
            <a href="https://github.com/Glitzyken" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'github']"
                class="text-lg ml-3"
              />
            </a>
            <a href="https://twitter.com/glitzyken17" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                class="text-lg ml-3"
              />
            </a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { store, mutations } from '@/store/store.js';
export default {
  methods: {
    closeSidebarPanel: mutations.toggleNav
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}
</style>
