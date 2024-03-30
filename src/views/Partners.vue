<template>
  <ViewHero title="Onze Partners" paragraph="Wij werken samen met x & X"></ViewHero>

  <section class="container">
    <section class="row">
      <section class="col-md-6">
        <section class="card mb-3">
          <section class="card-body">
            <h5 class="card-title">Partner 1</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod massa mauris, in
              venenatis nisl feugiat eu.</p>
          </section>
        </section>
      </section>
      <section class="col-md-6">
        <section class="card mb-3">
          <section class="card-body">
            <h5 class="card-title">Partner 2</h5>
            <p class="card-text">Sed eu mauris sit amet enim commodo fermentum vel vel dolor. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import ViewHero from "@/lib/components/hero/ViewHero.vue";

export default {
  name: "PartnersView",
  components: {ViewHero}
}
</script>

<style scoped>

</style>
