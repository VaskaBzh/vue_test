<template>
  <div class="selected">
    <div class="selected__wrapper">
      <main-item
        v-for="item in this.items"
        :key="item.key"
        :item="item"
        class="no-hover"
      >
        <div class="selected_button" @click="this.$emit('filterItems', item)">
          <span class="selected_button-remove"></span></div
      ></main-item>
    </div>
    <span class="selected_subtitle">selected: N / M</span>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  name: "all-selected",
};
</script>

<style lang="scss" scoped>
.selected {
  max-width: 360px;
  width: 100%;
  min-height: 200px;
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  @media (max-width: 798.98px) {
    max-width: 100%;
  }
  &__wrapper {
    width: 100%;
    min-height: 80%;
    display: grid;
    grid-template-rows: repeat(2, 60px);
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    padding: 8px 8px 0;
  }
  &_subtitle {
    width: 100%;
    text-align: center;
    font-size: 18px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .no-hover {
    position: relative;
    cursor: default;

    .selected_button {
      visibility: hidden;
      opacity: 0;
      transition: all 0.3s ease 0s;
    }

    &:hover {
      transform: scale(1);

      .selected_button {
        visibility: visible;
        opacity: 1;
      }
    }
  }
  &_button {
    display: inline-flex;
    cursor: pointer;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 8px;
    right: 8px;
    &-remove {
      position: relative;
      min-width: 100%;
      min-height: 100%;
      &:before,
      &:after {
        content: "";
        position: absolute;
        width: 12px;
        height: 1px;
        background-color: #000;
      }
      &:before {
        right: 50%;
        top: 50%;
        transform-origin: top;
        transform: translate(50%) rotate(-45deg);
      }
      &:after {
        right: 45%;
        top: 50%;
        transform-origin: top;
        transform: translate(50%) rotate(45deg);
      }
    }
  }
}
</style>
