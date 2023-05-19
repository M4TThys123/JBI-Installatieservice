<template>
  <section class="view__hero mb-5">
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
    padding: 80px 16px 32px 16px;
    height: 100vh;
    max-height: 240px;

    background-color: #3D95D1;

    border-bottom: 8px solid #95C6FA;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.16);
  }
  .hero__title{
    font-size: 52px;
  }
  .hero__paragraph{
    font-size: 20px;
  }

  /* SM (for tablets - screens ≥ than 768px wide) */
  @media (width >= 768px) {
    /* CSS rules for tablets go here */
    .hero__title, .hero__paragraph{
      text-align: center;
    }
  }
</style>
