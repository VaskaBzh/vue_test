<template>
  <div class="home"></div>
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

<style lang="scss" scoped></style>
