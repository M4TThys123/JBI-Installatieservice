<template>
  <view-hero03 title="Diensten" paragraph="Installatie werk, woning ventilatie, CV-ketels & warmte pompen."></view-hero03>
  <section class="container">
    <diensten-component02></diensten-component02>
  </section>
</template>

<script>

import ViewHero03 from "@/lib/components/hero/ViewHero03.vue";
import DienstenComponent02 from "@/lib/components/diensten/DienstenComponent02.vue";

export default {
  name: 'DienstenView',
  components: {
    DienstenComponent02,
    ViewHero03,

  },
}
</script>
