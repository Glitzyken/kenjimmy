<template>
  <div class="container mx-auto px-4 mt-4">
    <header>
      <h2 class="text-5xl">{{ article.content.title }}</h2>
      <div class="flex items-center mt-6">
        <img
          class="w-20 rounded-full border-4 border-kjColorSecondary"
          :src="author.content.Avatar.filename"
          :alt="author.content.name"
        />
        <div class="ml-6">
          <p class="text-xl font-bold">{{ author.name }}</p>
          <p class="text-sm mt-1">
            {{ article.content.date.toLocaleDateString() }}
          </p>
        </div>
      </div>
    </header>
    <div v-html="$md.render(article.content.long_text)" class="prose mt-8">
      {{ article.content.long_text }}
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  async asyncData({ app, route, error }) {
    // Get the slug from the route
    const slug = route.params.slug;

    const res = await app.$storyapi.get('cdn/stories', {
      starts_with: 'articles/',
      by_slugs: '*/' + slug,
      resolve_relations: 'author'
    });

    const article = res.data.stories[0];
    if (!article) return error(`Article with slug ${slug} not found`);
    article.content.date = new Date(article.content.date);

    return { article, author: article.content.author };
  }
};
</script>