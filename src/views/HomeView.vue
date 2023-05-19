<template>
  <HomeHero></HomeHero>

  <diensten-component01></diensten-component01>
</template>

<script>
import HomeHero from "@/lib/components/hero/HomeHero.vue";
import DienstenComponent01 from "@/lib/components/diensten/DienstenComponent01.vue";



export default {
  name: 'HomeView',
  components: {
    DienstenComponent01,
    HomeHero,
  },

}
</script>

<style scoped>
.white-space{

}
  /* XS (for phones - screens < than 768px wide) */
  @media (width < 768px) {
    /* CSS rules for phones go here */
  }

  /* SM (for tablets - screens ≥ than 768px wide) */
  @media (width >= 768px) {
    /* CSS rules for tablets go here */
  }

  /* MD (for small laptops - screens ≥ than 992px wide) */
  @media (width >= 992px) {
    /* CSS rules for small laptops go here */
  }

  /* LG (for laptops and desktops - screens ≥ than 1200px wide) */
  @media (width >= 1200px) {
    /* CSS rules for laptops and desktops go here */
  }
</style>