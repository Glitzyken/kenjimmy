<template>
  <nav>
    <!--ON DESKTOP VIEW-->
    <div class="hidden md:flex">
      <div class="text-kjColorGray text-sm md:flex-1">
        <div class="font-bold md:mr-4 inline-block py-1 px-2 f-link">
          <a href="tel:+2348139113069">
            Call me (+234) 8139113069
            <font-awesome-icon :icon="['fas', 'phone']" class="text-lg ml-1" />
          </a>
        </div>
        /
        <div class="font-bold md:ml-4 inline-block py-1 px-2 f-link">
          <a href="mailto:kenjimmy17@gmail.com">
            kenjimmy17@gmail.com
            <font-awesome-icon
              :icon="['fas', 'envelope']"
              class="text-lg ml-1"
            />
          </a>
        </div>
      </div>
      <nuxt-link to="/blog">
        <button class="focus:outline-none py-1 px-2 capitalize f-link">
          shelf
          <font-awesome-icon :icon="['fas', 'book']" class="text-lg ml-1" />
        </button>
      </nuxt-link>
    </div>

    <!--ON MOBILE VIEW-->
    <Sidebar />
    <Burger />
  </nav>
</template>
