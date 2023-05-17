<template>
  <view-hero03 :title="heroTitle" :paragraph="heroParagraph"></view-hero03>
  <contact-information></contact-information>
  <contact-form></contact-form>
</template>


<script>



import ViewHero03 from "@/lib/components/hero/ViewHero03.vue";
import ContactInformation from "@/lib/components/contact/ContactInformation.vue";
import ContactForm from "@/lib/components/contact/ContactForm.vue";

export default {
  name: "ContactView",
  components: {
    ContactForm,
    ContactInformation,
    ViewHero03,
  },
  data() {
    return {
      heroTitle: "Contact ons! ",
      heroParagraph: "Voor vrijblijvende advies, offertes of \n" +
          "onderhoud.\n" +
          "\n",
    };
  },
}
</script>
