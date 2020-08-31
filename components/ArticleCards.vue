<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="(article, index) in articles" :key="index" class="card h-">
        <div class="w-full p-8 bg-red-500">
          <div>
            <div class="text-xl font-bold capitalize mb-5">
              {{ article.title }}
            </div>
            <p>{{ article.preview }}</p>
          </div>
        </div>
        <div class="w-full h-auto py-2 px-8">
          <div class="relative mt-2">
            <div class="absolute right-0">
              <nuxt-link to="/">
                <Button />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
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
            "In this article, you'll learn how to use Puppeteer to fetch a bunch of image urls from a comic website automatically. In the process, you'll learn how to use some commonly used Puppeteer methods like .waitFor, .click and .evaluate to do web scraping. Finally, you'll learn how to automatically save your scraped data into a file."
        },
        {
          title: 'How to create sticky nav in Angular',
          preview: 'Some preview text here.'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.card {
  min-height: 23rem;
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
</style>
