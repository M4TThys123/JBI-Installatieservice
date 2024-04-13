<template>
  <HomeHero></HomeHero>


  <DienstenComponent></DienstenComponent>

  <ContactComponent></ContactComponent>
</template>

<script>
import HomeHero from "@/lib/components/hero/HomeHero.vue";
import DienstenComponent from "@/lib/components/diensten/DienstenComponent.vue";
import ContactComponent from "@/lib/components/contact/ContactComponent.vue";



export default {
  name: 'HomeView',
  components: {
    ContactComponent,
    HomeHero,
    DienstenComponent,
  },

}
</script>

<style scoped>


</style>