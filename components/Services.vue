<template>
  <section class="mt-12 md:mt-32 services">
    <h1 class="capitalize text-3xl md:text-4xl font-bold leading-none">
      what i can do
    </h1>
    <p class="capitalize mt-2 text-lg">service offers</p>
    <CustomBorder />
    <div class="grid grid-cols-1 lg:grid-cols-2 mt-10 bg-kjColorLight">
      <div class="p-5 md:mx-8 services__data">
        <h2 class="text-lg font-black uppercase mb-3 data-1">
          app development
        </h2>
        <p class="mb-5 data-1">
          I build modern-driven web and mobile applications using modern
          technology stacks such as Node.js
        </p>
        <h2 class="text-lg font-black uppercase mb-3 data-2">
          ui/ux design
        </h2>
        <p class="mb-5 data-2">
          I create jaw-dropping mobile and web designs and prototypes using
          Adobe XD or Figma
        </p>
        <h2 class="text-lg font-black uppercase mb-3 data-3">
          graphic design
        </h2>
        <p class="data-3">
          Creating illustrations, logos and vector graphics used for app
          development or designing a book, flyer, magazine, brochure or even a
          banner is a cinch. Feel free to check out one of my books on
          <a href="" target="_blank" class="font-bold underline"> Amazon </a>
        </p>
        <div class="mt-8 see-project-btn">
          <nuxt-link to="/portfolio">
            <Button displayTitle="SEE PROJECTS" />
          </nuxt-link>
        </div>
      </div>
      <div class="hidden lg:block illustration">
        <img
          class="illustration__img illustration__img--1"
          src="../assets/images/Illustrations/illustration-01.png"
          alt="illustration 1"
        />
        <img
          class="illustration__img illustration__img--2"
          src="../assets/images/Illustrations/illustration-02.png"
          alt="illustration 2"
        />
        <img
          class="illustration__img illustration__img--3"
          src="../assets/images/Illustrations/illustration-03.png"
          alt="illustration 3"
        />
        <img
          class="illustration__img illustration__img--4"
          src="../assets/images/Illustrations/illustration-04.png"
          alt="illustration 4"
        />
        <img
          class="illustration__img illustration__img--5"
          src="../assets/images/Illustrations/illustration-05.png"
          alt="illustration 5"
        />
        <img
          class="illustration__img illustration__img--6"
          src="../assets/images/Illustrations/illustration-06.png"
          alt="illustration 6"
        />
        <img
          class="illustration__img illustration__img--7"
          src="../assets/images/Illustrations/illustration-07.png"
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
