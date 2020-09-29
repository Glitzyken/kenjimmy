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
        <nuxt-link to="/resume">
          <li class="uppercase inline-block text-xs md:mr-6 py-1 px-2 f-link">
            my resume
          </li>
        </nuxt-link>
        <nuxt-link to="/portfolio">
          <li class="uppercase inline-block text-xs md:mr-6 py-1 px-2 f-link">
            my works
          </li>
        </nuxt-link>
        <nuxt-link to="/blog">
          <li class="uppercase inline-block text-xs md:mr-6 py-1 px-2 f-link">
            my shelf
          </li>
        </nuxt-link>
      </ul>
    </div>
    <div class="uppercase text-center text-xs md:w-1/4">
      <p class="py-1 px-2">
        &copy; 2020 ken. all rights reserved
      </p>
    </div>
  </footer>
</template>

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
