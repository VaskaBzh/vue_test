<template>
  <div class="item" @click="this.$emit('getItem', this.item)">
    <slot />
    <span v-if="!this.item.img">{{ this.item.name }}</span>
    <img
      v-if="this.item.img"
      :src="require(`@/assets/img/${this.item.img}`)"
      alt="selected_img"
    />
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  name: "main-item",
};
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  height: 60px;
  border: 2px solid #000;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 4px;
  transition: all 0.3s ease 0s;
  &.no-hover {
    position: relative;
    cursor: default;
    &:hover {
      transform: scale(1);
    }
  }
  &:hover {
    transform: scale(1.05);
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
