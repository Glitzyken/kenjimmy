<template>
  <div>
    <nuxt-link to="/blog/id">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(article, index) in articles" :key="index" class="card">
          <div class="p-8 mb-12">
            <div>
              <div class="text-xl font-bold capitalize mb-5">
                {{ article.title }}
              </div>
              <p class="md:mt-10">{{ article.preview }}</p>
            </div>
          </div>
          <div class="inline-block publish">
            <p class="text-sm">{{ article.createdAt }} ...</p>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      articles: [
        {
          title: 'Web scraping using Puppeteer',
          preview:
            "Learn how to use some commonly used Puppeteer methods like .waitFor, .click and .evaluate to do web scraping. Finally, you'll learn how to automatically save your scraped data into a file.",
          createdAt: 'August 23, 2020'
        },
        {
          title: 'How to create sticky nav in Angular',
          preview:
            'You are in for the know-how of creating sticky nav on scroll trigger in the Angualar way!',
          createdAt: 'September 1, 2020'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.publish {
  position: absolute;
  bottom: 20px;
  right: 30px;
}
</style>
