<template>
  <div
    class="flex justify-center items-center h-24 w-screen md:w-2/4 bg-kjColorGold fixed z-50 text-kjColorLight md:text-xl px-5 text-center alert"
  >
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.alert {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
