<template>
  <div class="md:w-3/4 px-2 py-4 mt-12 md:mt-32 m-auto">
    <div class="select-none mb-6 w-full">
      <div class="relative pb-64 bg-img">
        <img
          class="absolute w-full h-128 rounded-lg object-cover object-top border-b shadow-md img"
          src="../../assets/images/ken-face.jpg"
        />
      </div>

      <div class="px-4 relative">
        <div class="bg-white rounded-lg shadow-2xl border">
          <div class="p-5"></div>

          <div class="pb-3 px-4">
            <div>
              <div class="text-gray-800 text-lg mb-5">
                <span class="font-medium uppercase">About Ken</span>
                <CustomBorder />
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat earum totam at esse, suscipit explicabo sequi quod!
                Voluptate mollitia expedita dolores pariatur facere distinctio,
                commodi neque tenetur iste corporis error?
              </p>

              <p class="mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat earum totam at esse, suscipit explicabo sequi quod!
                Voluptate mollitia expedita dolores pariatur facere distinctio,
                commodi neque tenetur iste corporis error?
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
