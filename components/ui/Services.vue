<template>
  <section class="mt-12 md:mt-32 services">
    <h1 class="capitalize text-3xl md:text-4xl font-bold leading-none">
      my top skills
    </h1>
    <p class="capitalize mt-2 text-lg">what i do</p>
    <CustomBorder />
    <div
      class="grid grid-cols-1 lg:grid-cols-2 mt-10 rounded-lg bg-kjColorLight dark:bg-kjColorBlack border-2 border-kjColorLight"
    >
      <div class="p-5 md:mx-8 services__data">
        <h2 class="text-lg font-black uppercase mb-3 data-2">
          backend
        </h2>
        <p class="mb-5 data-2">
          I build scalable and maintainable backend applications using
          cutting-edge technologies like Nest.js, Docker, Redis, PostgreSQL, and
          MongoDB
        </p>

        <h2 class="text-lg font-black uppercase mb-3 data-1">
          frontend
        </h2>
        <p class="mb-5 data-1">
          I build client-side applications with modern features like SPA and
          maintain semantic coding style among other best practices for SEO
          optimisation, using modern tech like Nuxt (Vue.js), TailwindCSS,
          Pinia, and GSAP.
        </p>

        <!-- <h2 class="text-lg font-black uppercase mb-3 data-3">
          native
        </h2>
        <p class="data-3">
          Use Flutter for building simple native mobile applications. Flutter is
          modern, fast, cross-platform, and popular.
        </p> -->
        <div class="mt-8 see-project-btn">
          <Button displayTitle="SEE MY WORKS" linkTo="/portfolio" />
        </div>
      </div>
      <div class="hidden lg:block illustration">
        <img
          class="illustration__img illustration__img--1"
          src="../../assets/images/Illustrations/illustration-01.png"
          alt="illustration 1"
        />
        <img
          class="illustration__img illustration__img--2"
          src="../../assets/images/Illustrations/illustration-02.png"
          alt="illustration 2"
        />
        <img
          class="illustration__img illustration__img--3"
          src="../../assets/images/Illustrations/illustration-03.png"
          alt="illustration 3"
        />
        <img
          class="illustration__img illustration__img--4"
          src="../../assets/images/Illustrations/illustration-04.png"
          alt="illustration 4"
        />
        <img
          class="illustration__img illustration__img--5"
          src="../../assets/images/Illustrations/illustration-05.png"
          alt="illustration 5"
        />
        <img
          class="illustration__img illustration__img--6"
          src="../../assets/images/Illustrations/illustration-06.png"
          alt="illustration 6"
        />
        <img
          class="illustration__img illustration__img--7"
          src="../../assets/images/Illustrations/illustration-07.png"
          alt="illustration 7"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { gsap, Back, Elastic, Expo } from 'gsap';

export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          title: 'Web development',
          des: 'I build websites and web applications.'
        },
        {
          title: 'Ux/ui design',
          des: 'I design application user interface.'
        },
        {
          title: 'Graphic design',
          des: 'I design logos, flyers, cards, etc.'
        }
      ]
    };
  },
  mounted() {
    this.animateServices();
  },
  methods: {
    animateServices() {
      const { services } = this.$refs;
      let tl = new TimelineMax({ onUpdate: updatePercentage });

      tl.from('.illustration__img--1', 0.5, { scale: 0.5 }, 0)
        .from('.illustration__img--2', 0.5, { opacity: 0, y: -50 }, 0.2)
        .from('.illustration__img--3', 0.5, { opacity: 0, y: -50 }, 0.5)
        .from('.data-1', 1, { opacity: 0, stagger: 1 }, 0.7)
        .from('.illustration__img--5', 0.5, { opacity: 0, x: 100 }, 1.4)
        .from('.illustration__img--6', 0.5, { opacity: 0, x: -100 }, 1.7)
        .from('.data-2', 1, { opacity: 0, stagger: 1 }, 1.9)
        .from('.illustration__img--4', 0.5, { opacity: 0, x: -100 }, 2.6)
        .from('.illustration__img--7', 0.5, { opacity: 0, x: 100 }, 2.9)
        .from('.data-3', 1, { opacity: 0, stagger: 1 }, 3.1)
        .to('.see-project-btn', 1, { opacity: 1 }, 3.5);

      const scene = this.$scrollmagic
        .scene({
          triggerElement: '.services',
          triggerHook: 0,
          duration: '300%'
        })
        .setPin('.services')
        .setTween(tl);

      this.$scrollmagic.addScene(scene);

      function updatePercentage() {
        tl.progress();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.illustration {
  position: relative;
  height: 30rem;

  &__img {
    position: absolute;
    bottom: 0;
    width: 80%;

    &--1 {
      left: 0;
      z-index: 2;
    }

    &--2 {
      top: 25%;
      z-index: 1;
    }

    &--3 {
      top: -2%;
    }

    &--4 {
      top: -20%;
      left: -20%;
    }

    &--5 {
      top: -20%;
      right: -5%;
    }

    &--7 {
      top: -2%;
      right: -2%;
    }

    &--6 {
      top: 0;
      left: -22%;
    }
  }
}

.services {
  &__data {
    text-align: center;
  }
}

.see-project-btn {
  opacity: 0;
}
</style>
