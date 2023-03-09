<template>
  <header-component :viewpostWidth="this.viewportWidth" />
  <div class="page">
    <router-view :viewpostWidth="this.viewportWidth" />
  </div>
  <footer-component :viewpostWidth="this.viewportWidth" />
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  components: {
    FooterComponent,
    HeaderComponent,
  },
  data() {
    return {
      viewportWidth: 0,
    };
  },
  methods: {
    handleResize() {
      this.viewportWidth = window.innerWidth;
    },
  },
  mounted() {
    this.handleResize();
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  background: linear-gradient(
    179.87deg,
    #e6eaf0 1.02%,
    #e6eaf1 4.79%,
    #e7ebf1 8.76%,
    #eaeef4 14.75%,
    #e8ecf2 19.07%
  );
  width: 100vw;
}
.page {
  flex: 1 1 auto;
}
</style>
