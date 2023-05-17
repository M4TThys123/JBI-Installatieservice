<template>
  <section class="view__hero">
    <h1 class="hero__title">{{ title }}</h1>
    <p class="hero__paragraph">{{ paragraph }}</p>
  </section>
</template>

<script>
export default {
  name: "ViewHero03",
  props: {
    title: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.view__hero {
  background-color: #3D95D1;
  height: 100vh;
  max-height: 310px;
}

@media (min-width: 576px) {
  /* Extra Small devices (portrait phones) and up */
  .view__hero {
    max-height: 310px;
  }
}

@media (min-width: 768px) {
  /* Small devices (landscape phones) and up */
  .view__hero {
    max-height: 310px;
  }
}

@media (min-width: 992px) {
  /* Medium devices (tablets) and up */
  .view__hero {
    max-height: 310px;
  }
}
</style>
