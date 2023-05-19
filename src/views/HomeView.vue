<template>
    <HomeHero></HomeHero>

    <section class="hero__wrapper">
      <section class="hero__header">
        <section class="hero__header-text">
        <h1>JBI Installatie-<br>
            service
        </h1>
        <h2>
          Groot in klein werk. Niet te klein <br>
          voor het grote werk.
        </h2>
        </section>
      </section>
      <section class="hero__top" :style="{ backgroundImage: `url(${backgroundImage})` }">
      </section>
      <section class="hero__bottom">
        <figure>
        </figure>
      </section>
    </section>

  <diensten-component02></diensten-component02>


  <OverView></OverView>

  <partners-view></partners-view>

  <ContactView></ContactView>
</template>

<script>

import ContactView from "@/views/ContactView.vue";
import OverView from "@/views/OverView.vue";
import PartnersView from "@/views/Partners.vue";
import DienstenComponent02 from "@/lib/components/diensten/DienstenComponent02.vue";
import HomeHero from "@/lib/components/hero/HomeHero.vue";

export default {
  name: 'HomeView',
  components: {HomeHero, DienstenComponent02, PartnersView, OverView, ContactView},

}
</script>

<style scoped>
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