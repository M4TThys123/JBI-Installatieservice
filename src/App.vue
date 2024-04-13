<template>
  <Header></Header>

  <main class="content">
    <router-view class="views"/>
  </main>

  <Footer class="footer"></Footer>
</template>

<script>
import Header from "@/lib/components/header/Header.vue";
import Footer from "@/lib/components/footer/Footer.vue";
export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    Header,
    Footer
  },
}
</script>

<style>
/* For WebKit-based browsers */
::-webkit-scrollbar {
  display: none;
  scrollbar-width: none;
}

:root{
  --color-dark: #14151A;
  --color-primary-blue: #0096D7;
  --color-secondary-blue: #BAC6FF;
  --color-border: #E5E5E6;
  --color-border-fill: #F9F9FB;
  --color-white: #FFFFFF;

  --color-footer: var(--color-dark);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

html{
  background: #14539a;
  scroll-behavior: smooth;
}

body{
  background: var(--color-white);
  max-width: 100vw;
  overflow-x: hidden;
  background: #F7F8FC !important;
}

.no-scroll {
  overflow: hidden;
  position: fixed;
  width: 100%;
}

.sr-only {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

img {
  width: 100%;
}

p {
  line-height: 1.5;
}

a {
  text-decoration: none;
}

button {
  background: none;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
}

ul {
  display: flex;
  margin-bottom: 0!important;
}

li {
  list-style-type: none;
}


/* Ensure focus highlights are visible */
*:focus {
  outline: 2px solid dodgerblue;
  outline-offset: 4px;
}
.footer {
  margin-top: auto; /* Push the footer to the bottom */
}
.content {
  flex: 1; /* Expand to fill remaining space */
}
main{
  padding-bottom: 5em;
  background: var(--color-white);
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
