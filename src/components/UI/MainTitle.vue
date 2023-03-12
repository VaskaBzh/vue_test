<template>
  <h1 class="title">
    <slot />
  </h1>
</template>

<script>
export default {
  name: "main-title",
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 72px;
}
</style>
