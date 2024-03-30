<template>
  <ViewHero title="Diensten" paragraph="Installatie werk, woning ventilatie, CV-ketels & warmte pompen."></ViewHero>

  <section class="container">
    <diensten-component02></diensten-component02>
  </section>
</template>

<script>
import DienstenComponent02 from "@/lib/components/diensten/DienstenComponent02.vue";
import ViewHero from "@/lib/components/hero/ViewHero.vue";

export default {
  name: 'DienstenView',
  components: {
    ViewHero,
    DienstenComponent02,
  },
}
</script>
