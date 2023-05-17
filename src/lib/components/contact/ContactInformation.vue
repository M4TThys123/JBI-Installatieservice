<template>
  <section class="contact-info">
    <h2>J.B. Installatieservice</h2>
    <section class="contact-info-item">
      <strong>Telefoon:</strong>
      <p>{{ telephone }}</p>
    </section>
    <section class="contact-info-item">
      <strong>Email:</strong>
      <p>{{ email }}</p>
    </section>
    <section class="contact-info-item">
      <strong>Adres:</strong>
      <p>{{ address }}</p>
      <p>{{ city }}</p>
    </section>
    <section class="contact-info-item">
      <strong>KVK Number:</strong>
      <p>{{ kvkNumber }}</p>
    </section>
  </section>
</template>

<script>
export default {
  name: "ContactInformation",
  data() {
    return {
      address: "123 Main Street",
      city: "City, Country",
      telephone: "+1 234 5678",
      email: "info@example.com",
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

.contact-info-item {
  margin-bottom: 10px;
  display: flex;
}
.contact-info-item {
  display: flex;
}
</style>