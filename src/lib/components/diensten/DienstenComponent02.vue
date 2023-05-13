<template>
  <div class="container">
    <h2 class="mt-5 mb-3">Onze Diensten</h2>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="service in services" :key="service.id">
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
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper, { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// Install Swiper pagination module
Swiper.use([Pagination]);

export default {
  name: "DienstenComponent02",
  mounted() {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  },
  data() {
    return {
      services: [
        {
          id: 1,
          name: 'CV-Instalatie',
          description: 'Wij installeren centraleverwarming- en warmwaterinstallaties bij nieuwbouw als bestaande projecten.',
          image: 'https://via.placeholder.com/300x200.png?text=CV-Instalatie',
          url: '/diensten/cv-instalatie'
        },
        {
          id: 2,
          name: 'Onderhoud',
          description: 'Uw verwarmingsketel dient regelmatig te worden gereinigd, jaarlijkse onderhoud is noodzakelijk.',
          image: 'https://via.placeholder.com/300x200.png?text=Onderhoud',
          url: '/diensten/onderhoud'
        },
        {
          id: 3,
          name: 'Installatiewerk',
          description: 'Betrouwbaarheid en gebruiksvriendelijkheid is voor veel gebouwen van essentieel belang.',
          image: 'https://via.placeholder.com/300x200.png?text=Installatiewerk',
          url: '/diensten/installatiewerk'
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

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
}

.swiper-pagination {
  position: relative;
  bottom: 5px;
}
</style>

