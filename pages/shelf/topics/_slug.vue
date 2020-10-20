<template>
  <div>
    <h1 class="mt-6 text-2xl font-bold capitalize">
      {{ topic.taggings_count }} articles on <i>#{{ topic.name }}</i>
    </h1>
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
import { createSEOMeta } from '@/utils/seo';
import kebabCase from 'lodash/kebabCase';

export default {
  async asyncData({ app, params }) {
    // Find tag based on the slug
    const { data: tagsData } = await app.$storyapi.get('cdn/tags/');
    const topic = tagsData.tags.find(t => kebabCase(t.name) === params.slug);

    // Fetch articles
    const { data: articlesData } = await app.$storyapi.get('cdn/stories', {
      starts_with: 'articles/',
      resolve_relations: 'author',
      with_tag: topic.name
    });
    const articles = articlesData.stories.map(story => {
      story.content.date = new Date(story.content.date);
      return story;
    });

    return { topic, articles };
  },
  head() {
    return {
      title: `${this.topic.name} - NarutoDose`
    };
  }
};
</script>
