<template>
  <div>
    <AlertMessage
      v-if="showAlert"
      @alertJimmy="showHideAlert"
      :message="message"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 dark:text-kjColorLight">
      <a :href="veet.link" target="_blank">
        <div
          class="relative pf-card rounded-lg"
          @mouseenter="showDetails(1)"
          @mouseleave="hideDetails"
        >
          <transition name="slide">
            <div
              v-if="showDetials1"
              class="py-4 px-8 w-full bg-kjColorSecondary bg-opacity-75 absolute bottom-0 z-50 rounded-br-lg rounded-bl-lg"
            >
              <h2 class="font-bold text-lg text-kjColorLight capitalize">
                {{ veet.name }}
              </h2>
              <p class="text w-2/3 text-kjColorLight mt-2">
                {{ veet.techUsed }}
              </p>
            </div>
          </transition>

          <img :src="veet.imgUrl" alt="veet" class="rounded-lg" />
        </div>
      </a>

      <a :href="spasora.link" target="_blank">
        <div
          class="relative pf-card rounded-lg"
          @mouseenter="showDetails(2)"
          @mouseleave="hideDetails"
        >
          <transition name="slide">
            <div
              v-if="showDetials2"
              class="py-4 px-8 w-full bg-kjColorSecondary bg-opacity-75 absolute bottom-0 z-50 rounded-br-lg rounded-bl-lg"
            >
              <h2 class="font-bold text-lg text-kjColorLight capitalize">
                {{ spasora.name }}
              </h2>
              <p class="text w-2/3 text-kjColorLight mt-2">
                {{ spasora.techUsed }}
              </p>
            </div>
          </transition>

          <!-- <video class="rounded-lg" autoplay muted loop>
            <source :src="spasora.videoLink" type="video/mp4" />
            Your browser is not supported!
          </video> -->
          <img :src="spasora.imgUrl" alt="spasora" class="rounded-lg" />
        </div>
      </a>

      <div
        class="relative pf-card rounded-lg"
        @mouseenter="showDetails(4)"
        @mouseleave="hideDetails"
        @click="showHideAlert"
      >
        <transition name="slide">
          <div
            v-if="showDetials4"
            class="py-4 px-8 w-full bg-kjColorSecondary bg-opacity-75 absolute bottom-0 z-50 rounded-br-lg rounded-bl-lg"
          >
            <h2 class="font-bold text-lg text-kjColorLight capitalize">
              kenneth jimmy
            </h2>
            <p class="text w-2/3 text-kjColorLight mt-1">
              Nuxt.js TailwindCSS GSAP Storyblok
            </p>
          </div>
        </transition>

        <!-- <video class="rounded-lg" autoplay muted loop>
          <source :src="kenJimmy.videoLink" type="video/mp4" />
          Your browser is not supported!
        </video> -->
        <img :src="kenJimmy.imgUrl" alt="kenJimmy" class="rounded-lg" />
      </div>

      <a :href="mazino.link" target="_blank">
        <div
          class="relative pf-card rounded-lg"
          @mouseenter="showDetails(5)"
          @mouseleave="hideDetails"
        >
          <transition name="slide">
            <div
              v-if="showDetials5"
              class="py-4 px-8 w-full bg-kjColorSecondary bg-opacity-75 absolute bottom-0 z-50 rounded-br-lg rounded-bl-lg"
            >
              <h2 class="font-bold text-lg text-kjColorLight capitalize">
                {{ mazino.name }}
              </h2>
              <p class="text w-2/3 text-kjColorLight mt-2">
                {{ mazino.techUsed }}
              </p>
            </div>
          </transition>

          <!-- <video class="rounded-lg" autoplay muted loop>
            <source :src="mazino.videoLink" type="video/mp4" />
            Your browser is not supported!
          </video> -->
          <img :src="mazino.imgUrl" alt="mazino" class="rounded-lg" />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { veet, spasora, kenJimmy, mazino } from '~/docs/portfolios.js';

export default {
  data() {
    return {
      showDetials1: false,
      showDetials2: false,
      showDetials3: false,
      showDetials4: false,
      showDetials5: false,
      showDetials6: false,
      veet,
      spasora,
      kenJimmy,
      mazino,
      message: 'Ken appreciates you 😎. Thanks for visiting! :)',
      showAlert: false
    };
  },
  methods: {
    showDetails(num) {
      if (num == 1) {
        this.showDetials1 = true;
      }

      if (num == 2) {
        this.showDetials2 = true;
      }

      if (num == 3) {
        this.showDetials3 = true;
      }

      if (num == 4) {
        this.showDetials4 = true;
      }

      if (num == 5) {
        this.showDetials5 = true;
      }

      if (num == 6) {
        this.showDetials6 = true;
      }
    },
    hideDetails() {
      this.showDetials1 = false;
      this.showDetials2 = false;
      this.showDetials3 = false;
      this.showDetials4 = false;
      this.showDetials5 = false;
      this.showDetials6 = false;
    },
    showHideAlert() {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
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
  transform: translateY(10%);
  transition: all 150ms ease-in 0s;
}
</style>
