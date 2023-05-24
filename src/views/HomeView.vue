<template>
  <HomeHero></HomeHero>


  <DienstenComponent></DienstenComponent>

  <div class="row">
    <ContactForm class="col-md-6"></ContactForm>
    <ContactInformation cclass="col-md-6"></ContactInformation>
  </div>


</template>

<script>
import HomeHero from "@/lib/components/hero/HomeHero.vue";
import DienstenComponent from "@/lib/components/diensten/DienstenComponent.vue";
import ContactForm from "@/lib/components/contact/ContactForm.vue";
import ContactInformation from "@/lib/components/contact/ContactInformation.vue";



export default {
  name: 'HomeView',
  components: {
    ContactInformation,
    ContactForm,
    HomeHero,
    DienstenComponent,
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