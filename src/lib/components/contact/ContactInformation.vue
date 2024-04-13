<template>
  <section class="contact-info col-md-5">
    <h2 class="mb-4">J.B. Installatieservice</h2>
    <section class="contact-info__item row">
      <strong class="col-4 col-sm-3">Telefoon:</strong>
      <p class="col-6">{{ telephone }}</p>
    </section>
    <section class="contact-info__item row">
      <strong class="col-4 col-sm-3">Email:</strong>
      <p class="col-6">{{ email }}</p>
    </section>
    <section class="contact-info__item row">
      <strong class="col-4 col-sm-3 col-xs-1">Adres:</strong>
      <p class="col-6">{{ address }} <br> <br>{{ city }}</p>
    </section>
    <section class="contact-info__item row">
      <strong class="col-4 col-sm-3">KVK:</strong>
      <p class="col-6">{{ kvkNumber }}</p>
    </section>
  </section>
</template>

<script>
export default {
  name: "ContactInformation",
  data() {
    return {
      address: "Reigerlaan 58,",
      city: "1713 SM Obdam",
      telephone: "0226 451616",
      email: "info@jbinstallatieservice.nl",
      kvkNumber: "12345678"
    };
  }
};
</script>

<style scoped>
.contact-info {
  display: flex;
  flex-direction: column;
}

.contact-info__item {
  margin-bottom: 8px;
  display: flex;
}
.contact-info__item {
  display: flex;
  gap: 2em;

}
.contact-info__item > p{
  text-decoration: underline #95C6FA 2px;
}

/* LG (for laptops and desktops - screens ≥ than 1200px wide) */
@media (width >= 1200px) {
  .contact-info__item {
    font-size: 24px;
  }
}


</style>