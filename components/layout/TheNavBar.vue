<template>
  <nav>
    <!--ON DESKTOP VIEW-->
    <div class="hidden md:flex">
      <div class="text-kjColorGray text-sm md:flex-1">
        <div class="font-bold md:mr-4 inline-block py-1 px-2 f-link">
          <a href="tel:+2348133930845">
            Call me (+234) 8133930845
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

        <!--DARK MODE TOGGLE-->
        <ToggleDarkLightMode />
        <!------------------------------>
      </div>
      <nuxt-link to="/shelf">
        <button class="focus:outline-none py-1 px-2 capitalize f-link">
          shelf
          <font-awesome-icon :icon="['fas', 'book']" class="text-lg ml-1" />
        </button>
      </nuxt-link>
    </div>

    <!--ON MOBILE VIEW-->
    <!--DARK MODE TOGGLE-->
    <span class="absolute left-0 top-0 ml-24 mt-3 md:hidden">
      <ToggleDarkLightMode />
    </span>
    <!------------------------------>
    <Sidebar />
    <Burger />
  </nav>
</template>
