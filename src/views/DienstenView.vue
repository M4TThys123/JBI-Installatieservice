<template>
  <view-hero03 title="Diensten" paragraph="Installatie werk, woning ventilatie, CV-ketels & warmte pompen."></view-hero03>
 <DienstenComponent01></DienstenComponent01>
</template>

<script>

import DienstenComponent01 from "@/lib/components/diensten/DienstenComponent02.vue";
import ViewHero03 from "@/lib/components/hero/ViewHero03.vue";

export default {
  name: 'DienstenView',
  components: {ViewHero03, DienstenComponent01},
}
</script>
