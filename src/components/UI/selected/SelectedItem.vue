<template>
  <div class="selected" v-if="this.renderedItem.id">
    <div class="selected_button" @click="this.reset">
      <span class="selected_button-remove"></span>
    </div>
    <span v-if="!this.renderedItem.img">{{ this.renderedItem.name }}</span>
    <img
      v-if="this.renderedItem.img"
      :src="require(`@/assets/img/${this.renderedItem.img}`)"
      alt="selected_img"
    />
  </div>
  <div class="selected selected-nothing" v-else>
    <span>Chose item</span>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: {
    item: Object,
  },
  name: "selected-item",
  computed: mapGetters(["renderedItem"]),
  methods: {
    ...mapMutations(["removeItemRight"]),
    reset() {
      this.removeItemRight();
    },
  },
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
  justify-content: center;
  position: relative;
  @media (max-width: 798.98px) {
    max-width: 100%;
  }
  span {
    font-size: 18px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  &-nothing {
    display: flex;
    align-items: center;
    justify-content: center;
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
