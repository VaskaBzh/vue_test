<template>
  <ul class="nav">
    <li class="link nav_link">
      <router-link :to="{ name: 'collection' }">Наша коллекция</router-link>
    </li>
    <li class="link nav_link">
      <router-link :to="{ name: 'home' }">Вход/Регистрация</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "header-links",
  props: {
    viewportWidth: Number,
  },
};
</script>

<style lang="scss" scoped></style>
