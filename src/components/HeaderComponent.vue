<template>
  <header class="header">
    <div class="header__container">
      <router-link class="logo" :to="{ name: 'home' }"> YrColl </router-link>
      <header-links
        class="target"
        :viewportWidth="this.viewportWidth"
      ></header-links>
    </div>
  </header>
</template>
<script>
import HeaderLinks from "@/components/navs/HeaderLinks.vue";

export default {
  name: "header-component",
  components: {
    HeaderLinks,
  },
  props: {
    viewportWidth: Number,
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 24px 0 24px;
  background-color: #331a38;

  &__container {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    align-items: center;
  }

  .logo {
    position: relative;
  }
}
</style>
