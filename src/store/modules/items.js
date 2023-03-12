export default {
  state: {
    renderedItem: {},
    renderedItems: [],
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
  },
  getters: {
    allLeftItems(state) {
      return state.itemsLeft;
    },
    allRightItems(state) {
      return state.itemsRight;
    },
    renderedItems(state) {
      return state.renderedItems;
    },
    renderedItem(state) {
      return state.renderedItem;
    },
  },
  mutations: {
    renderItemLeft(state, item) {
      state.renderedItems = state.renderedItems.filter((el) => item !== el);
      state.renderedItems.unshift(item);
      if (state.renderedItems.length > 6) {
        state.renderedItems.pop();
      }
    },
    renderItemRight(state, item) {
      console.log(item);
      state.renderedItem = item;
    },
    removeItemLeft(state, item) {
      state.renderedItems = state.renderedItems.filter((el) => item !== el);
    },
    removeItemRight(state) {
      state.renderedItem = {};
    },
  },
  actions: {},
};
