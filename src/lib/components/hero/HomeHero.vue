<template>
  <section class="hero__wrapper">
    <section class="hero__header">
      <section class="hero__header-text">
        <h1>JBI Installatie-<br>
          service
        </h1>
        <h2>
          Groot in klein werk. Niet te klein <br>
          voor het grote werk.
        </h2>
      </section>
    </section>
    <section class="hero__top" :style="{ backgroundImage: `url(${backgroundImage})` }">
    </section>
    <section class="hero__bottom">
      <figure>
      </figure>
    </section>
  </section>
</template>

<script>
export default {
  name: "HomeHero",
  data() {
    return {
      backgroundImage: "/assets/images/hero/hero_image.png",

    };
  }
}
</script>

<style scoped>
.hero__wrapper{
  height: 75vh;
  max-height: 620px;
  display: flex;
  flex-direction: column;
}
.hero__header{
  position: absolute;
  color: white;
}
.hero__header-text{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 13em 1em;

  height: 100%;
}
.hero__header h1{
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 225px;
}
.hero__header h2{
  font-size: 20px;
  font-weight: bold;
}

.hero__top{
  height: 50%;
  width: 100%;
  background-size: cover;
  background-position-y: -25px;
  background-position: ;


  /*Placeholder styling*/
  /*background: #14151A no-repeat;*/
}
.hero__bottom{
  height: 50%;
  width: 100%;
  background: #0096D7;

  display: flex;
  justify-content: center;
  padding: 2em;
}
.hero__bottom figure{
  width: 100%;
  height: 191px;
  background: #BAC6FF;
  border-radius: 18px;
}

/* XS (for phones - screens < than 768px wide) */
@media (width > 768px) {
  /* CSS rules for phones go here */
  .hero__wrapper {
    flex-direction: row;
    height: 75vh;
    max-height: 620px;
  }

  .hero__top {
    height: 100%;
    width: 100%;
  }

  .hero__bottom {
    height: 100%;
    width: 100%;
    align-items: center;
  }
  .hero__bottom figure {
    width: 361px;
    height: 461px;
  }
  .hero__header {
    display: flex;
    justify-content: center;
  }
}

@media (width >= 1200px) {
  .hero__wrapper{
    max-height: none;
    height: 90vh;
  }
}

/* XS (for phones - screens < than 768px wide) */
@media (width < 768px) {
  /* CSS rules for phones go here */
}

/* SM (for tablets - screens ≥ than 768px wide) */
@media (width >= 768px) {
  /* CSS rules for tablets go here */
}

/* MD (for small laptops - screens ≥ than 992px wide) */
@media (width >= 992px) {
  /* CSS rules for small laptops go here */
}

/* LG (for laptops and desktops - screens ≥ than 1200px wide) */
@media (width >= 1200px) {
  /* CSS rules for laptops and desktops go here */
}

</style>