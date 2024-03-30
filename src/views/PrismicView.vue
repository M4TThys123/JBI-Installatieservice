<template>
    <ViewHero title="Prismic Data" paragraph="Datadriven Interactive Webpages API's CMS things"></ViewHero>
  <section class="container">
    <prismic-data1></prismic-data1>
    <prismic-data2></prismic-data2>
    <prismic-data3></prismic-data3>
    <prismic-data></prismic-data>
  </section>
</template>

<script>
import PrismicData1 from "@/lib/components/primsic/PrismicData01.vue";
import PrismicData2 from "@/lib/components/primsic/PrismicData02.vue";
import PrismicData3 from "@/lib/components/primsic/PrismicData03.vue";
import PrismicData from "@/lib/components/primsic/PrismicData.vue";
import ViewHero from "@/lib/components/hero/ViewHero.vue";

export default {
  name: 'PrismicView',
  components: {
    ViewHero,
    PrismicData,
    PrismicData3,
    PrismicData2,
    PrismicData1,
  },
}
</script>