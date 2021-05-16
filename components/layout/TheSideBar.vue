<template>
  <div>
    <div class="w-32">
      <nuxt-link to="/">
        <img
          class="w-12 pb-2 inline-block"
          src="~/assets/images/kjlogo.png"
          alt="logo"
        />
      </nuxt-link>
      <div class="md:mt-64">
        <div class="md:h-6 md:w-6">
          <a
            href="https://www.linkedin.com/in/kenneth-jimmy-b84092191/"
            target="_blank"
          >
            <font-awesome-icon
              :icon="['fab', 'linkedin']"
              class="text-2xl hidden md:block"
            />
          </a>
        </div>
        <div class="md:h-6 md:w-6 md:mt-5">
          <a href="https://github.com/Glitzyken" target="_blank">
            <font-awesome-icon
              :icon="['fab', 'github']"
              class="text-2xl hidden md:block"
            />
          </a>
        </div>
        <div class="md:h-6 md:w-6 md:mt-5">
          <a href="https://www.instagram.com/glitzyken/" target="_blank">
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              class="text-2xl hidden md:block"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
