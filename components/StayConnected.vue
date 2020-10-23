<template>
  <section class="max-w-xs m-auto mt-32 text-center">
    <div class="capitalize font-bold text-lg">
      stay connected
    </div>
    <div class="text-gray-600 text-sm mt-8">
      Lagos, Nigeria
    </div>
    <div class="mt-4 font-medium text-xl">
      <a href="mailto:kenjimmy17@gmail.com">
        kenjimmy17@gmail.com
      </a>
    </div>
    <div class="text-sm mt-4">
      <a href="tel:+2348139113069">
        (+234) 813 - 9113 - 069
      </a>
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
      <div class="w-8 h-8 rounded-full ml-5 lg:hidden">
        <a href="https://wa.me/2348139113069">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-2xl" />
        </a>
      </div>
      <div class="w-8 h-8 rounded-full ml-5 lg:block hidden">
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
