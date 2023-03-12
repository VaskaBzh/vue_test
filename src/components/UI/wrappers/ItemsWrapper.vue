<template>
  <div class="wrapper">
    <main-item
      @getItem="this.getter"
      v-for="item in this.items"
      :key="item.key"
      :item="item"
      >item.name</main-item
    >
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  name: "items-wrapper",
  methods: {
    getter(item) {
      this.$emit("getItem", item);
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  border: 2px solid #000;
  padding: 24px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 60px;
  gap: 24px 8px;
}
</style>
