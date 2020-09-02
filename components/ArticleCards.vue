<template>
  <div>
    <nuxt-link to="/">
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
          preview: 'Some preview text here.',
          createdAt: 'September 1, 2020'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  min-height: 18rem;
  box-shadow: 0 0.332071px 2.21381px rgba(0, 0, 0, 0.0119),
    0 0.798012px 5.32008px rgba(0, 0, 0, 0.0258),
    0 1.50259px 10.0172px rgba(0, 0, 0, 0.0368),
    0 2.68036px 17.869px rgba(0, 0, 0, 0.0479),
    0 5.01331px 33.4221px rgba(0, 0, 0, 0.0621), 0 12px 80px rgba(0, 0, 0, 0.09);
  border-radius: 1rem;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
}

.publish {
  position: absolute;
  bottom: 20px;
  right: 30px;
}
</style>
