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

  .target {
    position: relative;
    @media (min-width: 1280.98px) {
      &:before {
        content: "";
        border-radius: 50%;
        background: linear-gradient(
          179.87deg,
          #e6eaf0 1.02%,
          #e6eaf1 4.79%,
          #e7ebf1 8.76%,
          #eaeef4 14.75%,
          #e8ecf2 19.07%
        );
        width: 80px;
        height: 80px;
        position: absolute;
        left: 25%;
        bottom: -580%;
      }
    }
  }

  .logo {
    position: relative;
    @media (min-width: 1280.98px) {
      &:before {
        content: "";
        border-radius: 50%;
        background: linear-gradient(
          179.87deg,
          #e6eaf0 1.02%,
          #e6eaf1 4.79%,
          #e7ebf1 8.76%,
          #eaeef4 14.75%,
          #e8ecf2 19.07%
        );
        width: 150px;
        height: 150px;
        position: absolute;
        left: 10%;
        bottom: -295%;
      }
    }
  }
}
</style>
