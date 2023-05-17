<template>
  <div class="hero" :style="{ background: backgroundColor, height: height }">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm-12">
          <h1 :style="{ fontSize: fontSize }">{{ content }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewHero01",
  props: {
    content: {
      type: String,
      required: true
    }
  },
  computed: {
    backgroundColor() {
      return '#3D95D1';
    },
    height() {
      return '100vh';
    },
    fontSize() {
      // Define responsive font sizes based on screen width
      return '4rem'; // Adjust the value according to your preference
    }
  }
};
</script>

<style scoped>
/* Define max-height for different screen sizes */
@media (max-width: 576px) {
  .hero {
    max-height: 310px;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .hero {
    max-height: 310px;
  }
}

@media (min-width: 769px) {
  .hero {
    /* Increase max-height for large screens */
    max-height: 450px; /* Adjust the value according to your preference */
  }
}

/* Add any additional styles for the hero component */
</style>
