<template>
  <div class="md:w-3/4 px-2 py-4 mt-12 md:mt-32 m-auto">
    <div class="select-none mb-6 w-full">
      <div class="px-4 relative">
        <div
          class="bg-kjColorLight dark:bg-kjColorBlack rounded-lg shadow-2xl border-2 border-kjColorLight"
        >
          <div class="p-4 grid md:gap-5 grid-cols-1 md:grid-cols-2">
            <img
              class="w-128 rounded-lg"
              src="https://res.cloudinary.com/dwa1jtluu/image/upload/q_auto,f_auto/v1643459345/kenjimmy.me/portfolioMe_ho8140.jpg"
            />
            <div class="pt-10">
              <div>
                <font-awesome-icon
                  :icon="['fas', 'microscope']"
                  class="text-lg inline-block"
                />
                <p class="inline-block ml-1">
                  Building
                  <a
                    href="https://joinveet.com/"
                    target="_blank"
                    class="font-bold underline"
                    >joinveet.com</a
                  >
                </p>
              </div>

              <div>
                <font-awesome-icon
                  :icon="['fas', 'users']"
                  class="text-lg inline-block"
                />
                <p class="inline-block ml-1">
                  Scaling
                  <a
                    href="https://spasora.xyz/"
                    target="_blank"
                    class="font-bold underline"
                    >spasora.xyz</a
                  >
                </p>
              </div>

              <div class="mt-2">
                <font-awesome-icon
                  :icon="['fas', 'seedling']"
                  class="text-lg inline-block"
                />
                <p class="inline-block ml-1">
                  Fancy Web3
                </p>
              </div>

              <div class="mt-2">
                <font-awesome-icon
                  :icon="['fas', 'chess-knight']"
                  class="text-lg inline-block"
                />
                <p class="inline-block ml-1">
                  Play online chess at leisure
                </p>
              </div>

              <div class="mt-2">
                <p class="inline-block ml-1">
                  <span class="font-bold">Fun Fact:</span> I am a pretty good
                  dancer 😁
                </p>
              </div>
            </div>
          </div>

          <div class="p-4">
            <div class="mt-10">
              <div class="text-lg mb-5">
                <span class="font-medium uppercase">README</span>
                <CustomBorder />
              </div>

              <p>
                I am a seasoned software engineer with strong knowledge and
                experience in the ever-evolving realm of technology.
              </p>

              <p class="mt-2">
                I participated in several intense tech programs where I acquired
                both technical and soft skills. I have also acquired high-level
                programming skills from online courses on renowned platforms
                like Udemy, Pluralsight, and Udacity. I am a self-taught
                software developer with a strong discipline to learn, improve,
                and evolve.
              </p>

              <p class="mt-2">
                When I am not coding, I am either playing chess, soccer, video
                games, or watching a movie. Other times I am reading a
                newsletter or learning a new tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numOfYears: 5
    };
  },
  mounted() {
    this.numOfYears = new Date().getFullYear() - 2018;
  }
};
</script>
