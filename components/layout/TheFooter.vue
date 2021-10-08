<template>
  <footer class="mt-10 md:flex">
    <div
      class="uppercase text-xs md:w-1/4 text-center mb-3 md:mb-0 md:text-left"
    >
      <nuxt-link to="/">
        <img
          class="w-12 pb-2 inline-block"
          src="~/assets/images/kjlogo.png"
          alt="logo"
        />
      </nuxt-link>
    </div>
    <div class="text-center md:w-2/4 mb-3 md:mb-0">
      <ul>
        <nuxt-link to="/portfolio">
          <li class="uppercase inline-block text-xs md:mr-6 py-1 px-2 f-link">
            works
          </li>
        </nuxt-link>
        <nuxt-link to="/resume">
          <li class="uppercase inline-block text-xs md:mr-6 py-1 px-2 f-link">
            resume
          </li>
        </nuxt-link>
        <nuxt-link to="/shelf">
          <li class="uppercase inline-block text-xs md:mr-6 py-1 px-2 f-link">
            shelf
          </li>
        </nuxt-link>
      </ul>
    </div>
    <div class="uppercase text-center text-xs md:w-1/4">
      <!-- 
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// ---------------------------------------------------------------------------------------------------------LICENSE-------------------------------------------LICENSE----------------------------------LICENSE------------------------------LICENSE-------------------------------------------LICENSE-------------------------------------------LICENSE---------------------LICENSE-------------------------------------------LICENSE--------------------------------LICENSE-------------------------------------------LICENSE-------------------------------------------LICENSE---------------
        
        YOU MUST UNCOMMENT AND KEEP THE FOLLOWING SIGNATURE IF YOU WANT TO FREELY USE THIS CODEBASE FOR YOURSELF: 👇
        -->

      <!-- 
        <p class="py-1 px-2">
        Made with ♥ by <a href="https/www.kenjimmy.me" target="_blank">Ken</a>
      </p>       
       -->
      <p class="py-1 px-2">&copy; {{ year }} ken. all rights reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  mounted() {
    this.getYear();
  },
  data() {
    return {
      year: null
    };
  },
  methods: {
    getYear() {
      this.year = new Date().getFullYear();
    }
  }
};
</script>

<style lang="scss">
.f-link {
  transition: all 0.2s;

  &:hover,
  &:active {
    background-color: #e45447;
    color: #f2f0ee;
    box-shadow: 0 1rem 2rem rgba(#2b2929, 0.4);
    transform: rotate(-5deg) scale(1.1);
  }
}
</style>
