<template>
  <section class="contact-form__section">
    <h2 class="mb-4">Direct contact opnemen</h2>
    <form @submit.prevent="onSubmit">
      <section class="mb-3">
        <label for="name" class="form-label">
          <strong>Naam:</strong>
        </label>
        <input type="text" class="form-control" id="name" v-model="name" required>
      </section>
      <section class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </section>
      <section class="mb-3">
        <label for="message" class="form-label">Bericht:</label>
        <textarea class="form-control" id="message" v-model="message" required></textarea>
      </section>
      <send-button type="submit"></send-button>
    </form>
  </section>
</template>

<script>

import SendButton from "@/lib/components/SendButton.vue";

export default {
  name: "ContactForm",
  components: {SendButton},
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    onSubmit() {
      // Code to handle form submission goes here
      console.log('Form submitted!')
    }
  }
}
</script>

<style scoped>
.contact-form__section{
  padding: 2em;
  background: #FFFFFF;
  border-radius: 3px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.16);
}
labels > strong{
  color: #0096D7;
}

</style>