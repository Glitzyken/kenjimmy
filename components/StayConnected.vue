<template>
  <section class="max-w-xs m-auto mt-32 text-center">
    <div class="capitalize font-bold">
      stay connected
    </div>
    <div class="text-gray-600 text-sm mt-6">
      Lagos, Nigeria
    </div>
    <div class="mt-2 font-medium text-xl">
      kenjimmy17@gmail.com
    </div>
    <div class="text-sm mt-2">
      (+234) 813 - 9113 - 069
    </div>
    <div class="mt-12 flex justify-center">
      <div class="w-8 h-8 rounded-full">
        <a href="https://t.me/Glitzyken" target="_blank">
          <font-awesome-icon :icon="['fab', 'telegram']" class="text-2xl" />
        </a>
      </div>
      <div class="w-8 h-8 rounded-full ml-5">
        <a href="https://www.instagram.com/glitzyken/" target="_blank">
          <font-awesome-icon :icon="['fab', 'instagram']" class="text-2xl" />
        </a>
      </div>
      <div class="w-8 h-8 rounded-full ml-5 md:hidden">
        <a href="https://wa.me/2348139113069">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-2xl" />
        </a>
      </div>
      <div class="w-8 h-8 rounded-full ml-5 md:block hidden">
        <a
          target="_blank"
          title="Contact Kenneth Jimmy On WhatsApp"
          href="https://web.whatsapp.com/send?phone=+2348139113069&amp;text=Hi, I would like to get more information..."
        >
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-2xl" />
        </a>
      </div>
    </div>
  </section>
</template>
