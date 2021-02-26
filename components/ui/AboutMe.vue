<template>
  <div class="md:w-3/4 px-2 py-4 mt-12 md:mt-32 m-auto">
    <div class="select-none mb-6 w-full">
      <div class="relative pb-64 bg-img">
        <img
          class="absolute w-full h-128 rounded-lg object-cover object-top border-b shadow-2xl img z-10"
          src="../../assets/images/ken-face.jpg"
        />
      </div>

      <div class="px-4 relative">
        <div
          class="bg-kjColorLight dark:bg-kjColorBlack rounded-lg shadow-2xl border-2 border-kjColorLight"
        >
          <div class="p-4">
            <div class="mt-20">
              <div class="text-lg mb-5">
                <span class="font-medium uppercase">About Me</span>
                <CustomBorder />
              </div>

              <p>
                I am a full stack developer with a passion for thoughtful UI
                design.
              </p>

              <p class="mt-2">
                Besides participating in tech programs where I have been trained
                to have both technical and soft skills, I have also acquired
                high level programming knowledge from taking online courses on
                Udemy, Pluralsight and Udacity, bagging a Node.js certificate,
                Expert in JavaScript IQ test and JavaScript Certificate
                respectively.
              </p>

              <p class="mt-2">
                When I am not coding, I am either playing chess, soccer, video
                game, or watching a movie. Other times I am reading or learning
                a new technology.
              </p>
              <p class="mt-2">
                Currently, I work as a remote fullstack engineer at
                <a href="https://novugrid.com" target="_blank"
                  ><u>NovuGrid</u></a
                >.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.img {
  filter: grayscale(100%);
}
</style>
