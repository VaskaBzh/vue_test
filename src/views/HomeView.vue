<template>
  <div class="home">
    <div class="home__container">
      <main-title>Добро пожаловать!</main-title>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    viewportWidth: Number,
  },
  mounted() {
    document.title = "Главная";
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 120px 0;
  .title {
    text-align: center;
  }
}
</style>
