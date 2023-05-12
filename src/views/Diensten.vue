<template>
  <section class="container">
    <h1 class="mt-5 mb-3">Onze Diensten</h1>
    <section class="row">
      <section class="col-md-4 mb-3" v-for="service in services" :key="service.id">
        <section class="card h-100">
          <img :src="service.image" class="card-img-top" :alt="service.name">
          <section class="card-body">
            <h5 class="card-title">{{ service.name }}</h5>
            <p class="card-text">{{ service.description }}</p>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'DienstenView',
  data() {
    return {
      services: [
        {
          id: 1,
          name: 'Web Design',
          description: 'We create beautiful and engaging web designs to help your business stand out online.',
          image: 'https://via.placeholder.com/300x200.png?text=Web+Design',
        },
        {
          id: 2,
          name: 'Web Development',
          description: 'Our team of experienced developers can build custom web applications to meet your business needs.',
          image: 'https://via.placeholder.com/300x200.png?text=Web+Development',
        },
        {
          id: 3,
          name: 'Mobile App Development',
          description: 'We build native and hybrid mobile apps for iOS and Android devices.',
          image: 'https://via.placeholder.com/300x200.png?text=Mobile+App+Development',
        },
        {
          id: 4,
          name: 'SEO Optimization',
          description: 'We optimize your website to improve search engine rankings and increase organic traffic.',
          image: 'https://via.placeholder.com/300x200.png?text=SEO+Optimization',
        }
      ]
    }
  }
}
</script>
