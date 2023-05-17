<template>
<!--  <Header></Header>-->
<!--  -->
<!--  <HeaderComponent01></HeaderComponent01>-->
<!--  <HeaderComponent02></HeaderComponent02>-->
<!--  <header-component03></header-component03>-->
  <HeaderComponent04></HeaderComponent04>


  <main class="content">
    <router-view class="views"/>
  </main>

  <Footer class="footer"></Footer>
</template>

<script>
// import Header from "@/lib/components/header/Header.vue";
import Footer from "@/lib/components/footer/Footer.vue";

// Header Iteraties
// import HeaderComponent01 from "@/components/header/Header01.vue";
// import HeaderComponent02 from "@/components/header/Header02.vue";
// import HeaderComponent03 from "@/components/header/Header03.vue";
import HeaderComponent04 from "@/lib/components/header/Header04.vue";





export default {
  name: 'App',
  data() {
    return {
      headerScroll: true,
    }
  },
  components: {
    HeaderComponent04,
    // HeaderComponent03,
    // HeaderComponent02,
    // HeaderComponent01,
    // Header,
    Footer
  },
}
</script>

<style>
:root{
  --color-primary-blue: #0096D7;
  --color-secondary-blue: #BAC6FF;
  --color-border: #E5E5E6;
  --color-border-fill: #F9F9FB;
  --color-white: #FFFFFF;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/

}

html {
  scroll-behavior: smooth;
}

body{
  max-width: 100vw;
  overflow-x: hidden;
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
</style>
