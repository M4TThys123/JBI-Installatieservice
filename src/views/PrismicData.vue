<template>
  <section>
    <view-hero03 title="Prismic Data" paragraph="Datadriven Interactive Webpages API's CMS things"></view-hero03>
<!--    <prismic-data1></prismic-data1>-->

    <prismic-data2></prismic-data2>
  </section>
</template>

<script>

// import PrismicData1 from "@/components/prismic/PrismicData01.vue";
import PrismicData2 from "@/components/prismic/PrismicData02.vue";
import ViewHero03 from "@/lib/components/hero/ViewHero03.vue";

export default {
  name: 'PrismicData',
  components: {
    ViewHero03, PrismicData2,
    // PrismicData1
  },
}
</script>

<style>
.prismic__data{
  margin-top: 45px;
}
</style>