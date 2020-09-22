<template>
  <div>
    <!-- FRONT-END TOOLS -->
    <div class="mb-8 px-10 py-5 bg-kjColorLight">
      <h2 class="text-gray mb-10">
        <i
          >These are, but not limited to, the tech I use to develop beautiful
          user interface and experience</i
        >
      </h2>
      <div
        v-for="front in frontStack"
        :key="front.name"
        class="w-16 inline-block brand"
      >
        <a :href="front.website" target="_blank">
          <img
            :src="front.url"
            :alt="front.name"
            class="h-12 inline brand__img"
          />
        </a>
      </div>
    </div>
    <!-- BACK-END TOOLS -->
    <div class="mb-8 px-10 py-5 bg-kjColorLight">
      <h2 class="text-gray mb-10">
        <i
          >These are, but not limited to, the tech I use to develop fast and
          scalable back-end applications</i
        >
      </h2>
      <div
        v-for="back in backStack"
        :key="back.name"
        class="w-16 inline-block brand"
      >
        <a :href="back.website" target="_blank">
          <img
            :src="back.url"
            :alt="back.name"
            class="h-12 inline brand__img"
          />
        </a>
      </div>
    </div>
    <!-- BUILD TOOLS -->
    <div class="mb-8 px-10 py-5 bg-kjColorLight">
      <h2 class="text-gray mb-10">
        <i>These are, but not limited to, the build tools I use</i>
      </h2>
      <div
        v-for="buildTool in buildTools"
        :key="buildTool.name"
        class="w-16 inline-block brand"
      >
        <a :href="buildTool.website" target="_blank">
          <img
            :src="buildTool.url"
            :alt="buildTool.name"
            class="h-12 inline brand__img"
          />
        </a>
      </div>
    </div>
    <!-- CMS TOOLS -->
    <div class="mb-8 px-10 py-5 bg-kjColorLight">
      <h2 class="text-gray mb-10">
        <i>Some Content Management tools I use</i>
      </h2>
      <div
        v-for="cmsTool in cmsTools"
        :key="cmsTool.name"
        class="w-16 inline-block brand"
      >
        <a :href="cmsTool.website" target="_blank">
          <img
            :src="cmsTool.url"
            :alt="cmsTool.name"
            class="h-12 inline brand__img"
          />
        </a>
      </div>
    </div>
    <!-- OTHER -->
    <div class="mb-8 px-10 py-5 bg-kjColorLight">
      <h2 class="text-gray mb-10">
        <i>Other tech tools I use...and much more!</i>
      </h2>
      <div
        v-for="other in others"
        :key="other.name"
        class="w-16 inline-block brand"
      >
        <a :href="other.website" target="_blank">
          <img
            :src="other.url"
            :alt="other.name"
            class="h-12 inline brand__img"
          />
        </a>
      </div>
    </div>
    <!-- GRAPHIC TOOLS -->
    <h1 class="uppercase text-black text-4xl font-bold leading-none my-10">
      graphic tools I use
    </h1>
    <div class="mb-8 px-10 py-5 bg-kjColorLight">
      <h2 class="text-gray mb-10">
        <i>These are the tools I use to do my graphic works</i>
      </h2>
      <div
        v-for="graphicTool in graphicTools"
        :key="graphicTool.name"
        class="w-16 inline-block brand"
      >
        <a :href="graphicTool.website" target="_blank">
          <img
            :src="graphicTool.url"
            :alt="graphicTool.name"
            class="h-12 inline brand__img"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {
  html,
  sass,
  tailwindcss,
  javascript,
  angular,
  vuejs,
  vuetify,
  nuxt,
  nodejs,
  mongodb,
  express,
  mongoose,
  vscode,
  postman,
  webpack,
  npm,
  wordpress,
  vapid,
  git,
  github,
  netlify,
  heroku,
  indesign,
  illustrator,
  photoshop,
  xd
} from '~/docs/brands.js';
export default {
  name: 'Resume',
  data() {
    return {
      frontStack: [
        html,
        sass,
        tailwindcss,
        javascript,
        angular,
        vuejs,
        vuetify,
        nuxt
      ],
      backStack: [nodejs, express, mongodb, mongoose],
      buildTools: [vscode, postman, webpack, npm],
      cmsTools: [wordpress, vapid],
      others: [git, github, netlify, heroku],
      graphicTools: [indesign, illustrator, photoshop, xd]
    };
  }
};
</script>

<style lang="scss" scoped>
.brand {
  text-align: center;

  &:not(:last-child) {
    margin-right: 30px;
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
