@@ -0,0 +1,46 @@
<template>
  <div class="container">
    <h1 class="mt-5 mb-3">Onze diensten</h1>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="service in services" :key="service.id">
        <div class="card h-100">
          <img :src="service.image" class="card-img-top" :alt="service.name">
          <div class="card-body">
            <h5 class="card-title">{{ service.name }}</h5>
            <p class="card-text">{{ service.description }}</p>
          </div>
          <div class="card-footer" >
            <a :href="service.url">Lees meer</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DienstenComponent01',
  data() {
    return {
      services: [
        {
          id: 3,
          name: 'Installatiewerk',
          description: 'Betrouwbaarheid en gebruiksvriendelijkheid is voor veel gebouwen van essentieel belang.',
          image: 'https://via.placeholder.com/300x200.png?text=Installatiewerk',
          url: '/diensten/installatiewerk'
        },
        {
          id: 2,
          name: 'Onderhoud',
          description: 'Uw verwarmingsketel dient regelmatig te worden gereinigd, jaarlijkse onderhoud is noodzakelijk.',
          image: 'https://via.placeholder.com/300x200.png?text=Onderhoud',
          url: '/diensten/onderhoud'
        },
        {
          id: 4,
          name: 'Woningventilatie',
          description: 'Deze systemen zorgen gedurende de hele dag voor het afzuigen van badkamer, toilet en keuken.',
          image: 'https://via.placeholder.com/300x200.png?text=Woningventilatie',
          url: '/diensten/woningventilatie'
        },
      ]
    }
  }
}
</script>