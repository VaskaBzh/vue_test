<template>
  <section class="collection">
    <div class="collection__container">
      <div class="collection__header">
        <all-selected
          @filterItems="this.filter"
          :items="this.renderedItems"
        ></all-selected>
        <selected-item
          @resetItem="this.reset"
          :item="this.renderedItem"
        ></selected-item>
      </div>
      <div class="collection__body">
        <items-wrapper
          @getItem="this.renderIteLeft"
          :items="this.itemsLeft"
        ></items-wrapper>
        <items-wrapper
          @getItem="this.renderIteRight"
          :items="this.itemsRight"
        ></items-wrapper>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "collection-view",
  data() {
    return {
      renderedItems: [],
      renderedItem: {},
      itemsLeft: [
        {
          id: 1,
          name: "Shoes 1",
        },
        {
          id: 2,
          name: "Shoes 2",
        },
        {
          id: 3,
          name: "Shoes 3",
        },
        {
          id: 4,
          name: "Shoes 4",
        },
        {
          id: 5,
          name: "T-shirt 1",
        },
        {
          id: 6,
          name: "T-shirt 2",
        },
        {
          id: 7,
          name: "T-shirt 3",
        },
        {
          id: 8,
          name: "T-shirt 4",
        },
      ],
      itemsRight: [
        {
          id: 11,
          name: "Jacket 1",
        },
        {
          id: 12,
          name: "Jacket 2",
        },
        {
          id: 13,
          name: "Jacket 3",
        },
        {
          id: 14,
          name: "Jacket 4",
        },
        {
          id: 15,
          name: "Hoodie 1",
        },
        {
          id: 16,
          name: "Hoodie 2",
        },
        {
          id: 17,
          name: "Hoodie 3",
        },
        {
          id: 18,
          name: "Hoodie 4",
        },
      ],
    };
  },
  methods: {
    renderIteLeft(item) {
      if (this.renderedItems[0] !== item) {
        this.renderedItems.unshift(item);
      }
      if (this.renderedItems.length > 6) {
        this.renderedItems.pop();
      }
    },
    renderIteRight(item) {
      this.renderedItem = item;
    },
    filter(item) {
      this.renderedItems = this.renderedItems.filter(
        (el) => el.name !== item.name
      );
    },
    reset() {
      this.renderedItem = {};
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
