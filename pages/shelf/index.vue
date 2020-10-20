<template>
  <div>
    <h1 class="mt-6 text-2xl font-bold capitalize">My articles</h1>
    <CustomBorder />
    <section class="mt-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <ArticleCard
            v-for="article in articles"
            :key="article.content.title"
            :slug="`/shelf/${article.slug}`"
            :title="article.content.title"
            :description="article.content.intro"
            :author="article.content.author"
            :date="article.content.date.toLocaleDateString()"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ app, error }) {
    const res = await app.$storyapi.get('cdn/stories', {
      starts_with: 'articles/',
      resolve_relations: 'author'
    });

    // Let's convert content.date from a String to a Date
    const articles = res.data.stories.map(story => {
      story.content.date = new Date(story.content.date);
      return story;
    });

    return { articles };
  }
};
</script>
