<template>
  <ViewHero :title="heroTitle" :paragraph="heroParagraph"></ViewHero>

  <ContactComponent></ContactComponent>
</template>

<script>
import ContactComponent from "@/lib/components/contact/ContactComponent.vue";
import ViewHero from "@/lib/components/hero/ViewHero.vue";

export default {
  name: "ContactView",
  components: {
    ViewHero,
    ContactComponent,
  },
  data() {
    return {
      heroTitle: "Neem contact op! ",
      heroParagraph: "Voor vrijblijvende advies, offertes of \n" +
          "onderhoud.\n" +
          "\n",
    };
  },
}
</script>
