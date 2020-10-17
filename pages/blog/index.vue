<template>
  <div>
    <h1 class="mt-6 text-2xl font-bold capitalize">My articles</h1>
    <CustomBorder />
    <section class="mt-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <ArticleCard
            v-for="article in articles"
            :key="article.title"
            :title="article.title"
            :description="article.description"
            :author="article.author"
            :date="article.date.toLocaleDateString()"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  asyncData() {
    const articles = [
      {
        title: 'How to make your articles Vuetiful',
        description:
          'This article guides you through all the steps to make an article shine with your favourite framework, Vue',
        author: {
          name: 'Naruto Uzumaki',
          image:
            'https://a.storyblok.com/f/83078/500x500/cb27fcd15a/naruto-avatar.jpg'
        },
        date: new Date()
      },
      {
        title: 'How to make your articles Vuetiful',
        description:
          'This article guides you through all the steps to make an article shine with your favourite framework, Vue',
        author: {
          name: 'Naruto Uzumaki',
          image:
            'https://a.storyblok.com/f/83078/500x500/cb27fcd15a/naruto-avatar.jpg'
        },
        date: new Date()
      },
      {
        title: 'How to make your articles Vuetiful',
        description:
          'This article guides you through all the steps to make an article shine with your favourite framework, Vue',
        author: {
          name: 'Naruto Uzumaki',
          image:
            'https://a.storyblok.com/f/83078/500x500/cb27fcd15a/naruto-avatar.jpg'
        },
        date: new Date()
      }
    ];

    return { articles };
  }
};
</script>
