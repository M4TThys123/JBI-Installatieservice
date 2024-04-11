<template>
<section class="contact-section container py-5">
  <div class="row d-flex gap-5 justify-content-between">
  <ContactForm></ContactForm>
  <ContactInformation></ContactInformation>
  </div>
</section>
</template>

<script>

import ContactForm from "@/lib/components/contact/ContactForm.vue";
import ContactInformation from "@/lib/components/contact/ContactInformation.vue";

export default {
  name: "ContactComponent",
  components: {ContactInformation, ContactForm},
}
</script>

<style scoped>

</style>