<template>
  <section class="view__hero" :style="{ maxHeight: heroMaxHeight }">
    <h1 class="hero__title" :style="{ fontSize: heroTitleFontSize }">{{ title }}</h1>
    <p class="hero__paragraph" :style="{ fontSize: heroParagraphFontSize }">{{ paragraph }}</p>
  </section>
</template>

<script>
export default {
  name: "ViewHero02",
  props: {
    title: String,
    paragraph: String,
  },
  computed: {
    heroMaxHeight() {
      return this.$mq === "xs" || this.$mq === "sm" || this.$mq === "md" ? "310px" : "100vh";
    },
    heroTitleFontSize() {
      // Adjust the font size according to your requirements
      return this.$mq === "xs" ? "24px" : "36px";
    },
    heroParagraphFontSize() {
      // Adjust the font size according to your requirements
      return this.$mq === "xs" ? "16px" : "24px";
    },
  },
}
</script>

<style scoped>
.view__hero {
  background-color: #3D95D1;
}

@media (min-width: 576px) {
  /* Extra Small (0-575px) - No additional styles needed */
}

@media (min-width: 768px) {
  /* Small (576-767px) - No additional styles needed */
}

@media (min-width: 992px) {
  /* Medium (768-991px) - No additional styles needed */
}

@media (min-width: 1200px) {
  /* Large (≥1200px) - Adjust the max height if needed */
  .view__hero {
    max-height: 500px; /* Adjust the value as per your requirements */
  }
}
</style>
