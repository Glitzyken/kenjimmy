<template>
  <nuxt-link class="card p-4 md:p-8" :to="slug">
    <header class="text-2xl font-bold capitalize mb-5 leading-8">
      {{ title }}
    </header>
    <p class="md:mt-5 text-lg">{{ description }}</p>
    <footer class="flex items-center absolute bottom-0 mb-3">
      <img
        class="w-10 md:w-12 rounded-full border-4 border-kjColorSecondary"
        :src="author.content.Avatar.filename"
        :alt="author.content.name"
      />
      <div class="ml-6">
        <p class="font-bold text-sm md:text-base">{{ author.name }}</p>
        <p class="text-xs md:text-sm mt-1">{{ date }}</p>
      </div>
    </footer>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: String,
    slug: String,
    description: String,
    author: Object,
    date: String
  }
};
</script>
