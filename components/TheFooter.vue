<template>
  <div class="mt-10 md:flex">
    <div class="uppercase text-xs md:w-1/4">
      <nuxt-link to="/">
        <img class="w-12 pb-2" src="~/assets/images/kjlogo.png" alt="logo" />
      </nuxt-link>
    </div>
    <div class="text-center md:w-2/4">
      <nuxt-link to="/about">
        <span class="uppercase text-xs mr-2 md:mr-6">about me</span>
      </nuxt-link>
      <nuxt-link to="/portfolio">
        <span class="uppercase text-xs mr-2 md:mr-6">works</span>
      </nuxt-link>
      <nuxt-link to="/blog">
        <span class="uppercase text-xs mr-2 md:mr-6">my shelf</span>
      </nuxt-link>
      <nuxt-link to="/contact">
        <span class="uppercase text-xs">contact</span>
      </nuxt-link>
    </div>
    <div class="uppercase text-center text-xs md:w-1/4">
      &copy; 2020 ken. all rights reserved
    </div>
  </div>
</template>
