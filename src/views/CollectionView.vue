<template>
  <section class="collection">
    <div class="collection__container">
      <div class="collection__header">
        <all-selected></all-selected>
        <selected-item></selected-item>
      </div>
      <div class="collection__body">
        <items-wrapper
          @getItem="this.renderItems"
          :items="this.allLeftItems"
        ></items-wrapper>
        <items-wrapper
          @getItem="this.renderItem"
          :items="this.allRightItems"
        ></items-wrapper>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "collection-view",
  computed: mapGetters(["allRightItems", "allLeftItems"]),
  methods: {
    ...mapMutations(["renderItemRight", "renderItemLeft"]),
    renderItems(item) {
      this.renderItemLeft(item);
    },
    renderItem(item) {
      this.renderItemRight(item);
    },
  },
};
</script>

<style lang="scss" scoped>
.collection {
  padding: 32px 0;
  &__container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    @media (max-width: 798.98px) {
      flex-direction: column;
    }
  }
  &__body {
    display: flex;
    gap: 24px;
    min-height: 50vh;
    @media (max-width: 798.98px) {
      flex-direction: column;
      gap: 16px;
    }
  }
}
</style>
