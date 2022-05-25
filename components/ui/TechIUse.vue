<template>
  <div>
    <!-- FRONT-END TOOLS -->
    <div
      class="mb-8 p-3 md:px-10 md:py-5 bg-kjColorLight dark:bg-kjColorBlack border-2 border-kjColorLight"
    >
      <h2 class="text-gray mb-10">
        <i
          >These are, but not limited to, the tech I use for building
          client-side applications</i
        >
      </h2>
      <div
        v-for="front in frontStack"
        :key="front.name"
        class="w-16 inline-block mb-2 brand"
      >
        <span :title="front.name">
          <a :href="front.website" target="_blank">
            <img
              :src="front.url"
              :alt="front.name"
              class="h-12 inline brand__img"
            />
          </a>
        </span>
      </div>
    </div>
    <!-- BACK-END TOOLS -->
    <div
      class="mb-8 p-3 md:px-10 md:py-5 bg-kjColorLight dark:bg-kjColorBlack border-2 border-kjColorLight"
    >
      <h2 class="text-gray mb-10">
        <i
          >These are, but not limited to, the tech I use for building fast and
          scalable backend applications</i
        >
      </h2>
      <div
        v-for="back in backStack"
        :key="back.name"
        class="w-16 inline-block brand"
      >
        <span :title="back.name">
          <a :href="back.website" target="_blank">
            <img
              :src="back.url"
              :alt="back.name"
              class="h-12 inline brand__img"
            />
          </a>
        </span>
      </div>
    </div>
    <!-- BUILD TOOLS -->
    <!-- <div
      class="mb-8 p-3 md:px-10 md:py-5 bg-kjColorLight dark:bg-kjColorBlack border-2 border-kjColorLight"
    >
      <h2 class="text-gray mb-10">
        <i>These are, but not limited to, the build tools I use</i>
      </h2>
      <div
        v-for="buildTool in buildTools"
        :key="buildTool.name"
        class="w-16 inline-block brand"
      >
        <span :title="buildTool.name">
          <a :href="buildTool.website" target="_blank">
            <img
              :src="buildTool.url"
              :alt="buildTool.name"
              class="h-12 inline brand__img"
            />
          </a>
        </span>
      </div>
    </div> -->
    <!-- CMS TOOLS -->
    <!-- <div
      class="mb-8 p-3 md:px-10 md:py-5 bg-kjColorLight dark:bg-kjColorBlack border-2 border-kjColorLight"
    >
      <h2 class="text-gray mb-10">
        <i>Some Content Management tools I use</i>
      </h2>
      <div
        v-for="cmsTool in cmsTools"
        :key="cmsTool.name"
        class="w-16 inline-block brand"
      >
        <span :title="cmsTool.name">
          <a :href="cmsTool.website" target="_blank">
            <img
              :src="cmsTool.url"
              :alt="cmsTool.name"
              class="h-12 inline brand__img"
            />
          </a>
        </span>
      </div>
    </div> -->
    <!-- OTHER -->
    <div
      class="mb-8 p-3 md:px-10 md:py-5 bg-kjColorLight dark:bg-kjColorBlack border-2 border-kjColorLight"
    >
      <h2 class="text-gray mb-10">
        <i>Other tech tools I use...and much more!</i>
      </h2>

      <div class="flex flex-wrap">
        <div
          v-for="other in others"
          :key="other.name"
          class="w-16 brand md:mb-4"
        >
          <span :title="other.name">
            <a :href="other.website" target="_blank">
              <img :src="other.url" :alt="other.name" class="h-12 brand__img" />
            </a>
          </span>
        </div>
      </div>
    </div>
    <!-- GRAPHIC TOOLS 
    <h1 class="mt-6 text-2xl font-bold capitalize">graphic tools I use</h1>
    <CustomBorder />
    <div
      class="mt-8 mb-8 p-3 md:px-10 md:py-5 bg-kjColorLight dark:bg-kjColorBlack border-2 border-kjColorLight"
    >
      <h2 class="text-gray mb-10">
        <i>These are the tools I use to do my graphic works</i>
      </h2>
      <div
        v-for="graphicTool in graphicTools"
        :key="graphicTool.name"
        class="w-16 inline-block brand"
      >
        <span :title="graphicTool.name">
          <a :href="graphicTool.website" target="_blank">
            <img
              :src="graphicTool.url"
              :alt="graphicTool.name"
              class="h-12 inline brand__img"
            />
          </a>
        </span>
      </div>
    </div>
    -->
  </div>
</template>

<script>
import {
  html,
  sass,
  tailwindcss,
  javascript,
  vuejs,
  vuetify,
  nuxt,
  nodejs,
  mongodb,
  express,
  mongoose,
  // vscode,
  postman,
  webpack,
  npm,
  puppeteer,
  storyblok,
  // wordpress,
  // vapid,
  git,
  github,
  netlify,
  heroku,
  // indesign,
  // illustrator,
  // photoshop,
  // xd,
  flutter,
  prisma,
  postgresql,
  redis,
  digitalocean,
  docker,
  prometheus,
  aws,
  typescript,
  gsap,
  css
} from '~/docs/brands.js';
export default {
  name: 'Resume',
  data() {
    return {
      frontStack: [
        html,
        css,
        sass,
        tailwindcss,
        javascript,
        nuxt,
        gsap,
        flutter
      ],
      backStack: [
        nodejs,
        express,
        mongodb,
        postgresql,
        mongoose,
        prisma,
        typescript
      ],
      // buildTools: [vscode, postman, webpack, npm],
      // cmsTools: [wordpress, vapid],
      others: [
        npm,
        git,
        github,
        redis,
        docker,
        aws,
        prometheus,
        netlify,
        heroku,
        digitalocean,
        puppeteer,
        storyblok,
        webpack,
        postman
      ]
      // graphicTools: [indesign, illustrator, photoshop, xd]
    };
  }
};
</script>

<style lang="scss" scoped>
.brand {
  text-align: center;

  &:not(:last-child) {
    margin-right: 25px;
  }

  &__img {
    filter: grayscale(100%);
    transition: all 0.2s;
    object-fit: contain;

    &:hover {
      transform: scale(1.3);
      filter: none;
    }
  }
}
</style>
