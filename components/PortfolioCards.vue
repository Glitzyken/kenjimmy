<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 dark:text-kjColorGray">
    <div id="natours" class="h-128 rounded-lg card">
      <div class="p-8 md:flex justify-between align-bottom">
        <h2 class="font-bold text-lg capitalize">
          natours
        </h2>
        <p class="text-xs mt-2">
          Node.js Express.js MongoDb
        </p>
      </div>
    </div>

    <div id="eloquent" class="h-128 rounded-lg card">
      <div class="p-8 md:flex justify-between align-bottom">
        <h2 class="font-bold text-lg capitalize">
          eloquent english
        </h2>
        <p class="text-xs mt-2">
          Angular
        </p>
      </div>
    </div>

    <div id="graphics" class="h-128 rounded-lg card">
      <div class="p-8 md:flex justify-between align-bottom">
        <h2 class="font-bold text-lg capitalize">
          graphic design
        </h2>
        <p class="text-xs mt-2">
          Photoshop Illustrator InDesign
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#natours {
  background: url('../assets/images/My-works/natours.jpg');
  background-size: cover;
  background-position: center;
}

#eloquent {
  background: url('../assets/images/My-works/eloquent.jpg');
  background-size: cover;
  background-position: center;
}

#graphics {
  background: url('../assets/images/My-works/graphics.jpg');
  background-size: cover;
  background-position: center;
}
</style>
