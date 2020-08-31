<template>
  <div>
    <div class="btn">Read &rarr;</div>
  </div>
</template>
<style lang="scss" scoped>
.btn {
  color: #e45447;
  display: inline-block;
  text-decoration: none;
  border-bottom: 1px solid #e45447;
  padding: 3px;
  transition: all 0.2s;

  &:hover {
    background-color: #e45447;
    color: #fff;
    box-shadow: 0 1rem 2rem rgba(#2b2929, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 0.5rem 1rem rgba(#2b2929, 0.15);
    transform: translateY(0);
  }
}
</style>
