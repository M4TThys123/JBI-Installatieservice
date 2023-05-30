<template>
    <view-hero03 title="Prismic Data" paragraph="Datadriven Interactive Webpages API's CMS things"></view-hero03>
  <section class="container">
    <prismic-data1></prismic-data1>
    <prismic-data2></prismic-data2>
    <prismic-data3></prismic-data3>
    <prismic-data></prismic-data>
  </section>
</template>

<script>

import ViewHero03 from "@/lib/components/hero/ViewHero03.vue";
import PrismicData1 from "@/lib/components/primsic/PrismicData01.vue";
import PrismicData2 from "@/lib/components/primsic/PrismicData02.vue";
import PrismicData3 from "@/lib/components/primsic/PrismicData03.vue";
import PrismicData from "@/lib/components/primsic/PrismicData.vue";


export default {
  name: 'PrismicView',
  components: {
    PrismicData,
    PrismicData3,
    PrismicData2,
    PrismicData1,
    ViewHero03,
  },
}
</script>

<style>
.prismic__data{
  margin-top: 45px;
}
</style>