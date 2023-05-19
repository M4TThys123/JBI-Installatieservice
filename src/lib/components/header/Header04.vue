<template>
  <header :class="{ 'blur': isScrolled }" >
    <nav>
      <router-link to="/" class="logo__link" @click="closeNav">
        <logo-s-v-g :class="{ 'color__scroll': isScrolled }"></logo-s-v-g>
      </router-link  >

      <div class="nav__menu">
<!--        <ul class="nav__list"  :class="{'nav__list&#45;&#45;open' : isNavOpen,'blur': isNavOpen }" >-->
          <ul class="nav__list"  :class="{'nav__list--open' : isNavOpen, 'blur' : isNavOpen}" >

          <li class="nav__item"
              v-for="(route, index) in router().options.routes" :key="index">
            <router-link class="nav__link" :to="route.path" @click="closeNav"> {{ route.name}}</router-link>
          </li>
          <li class="mt-3 mt-lg-0">
            <call-button></call-button>
          </li>
        </ul>
      </div>

      <hamburger-menu  @click="openNav" :is-nav-open="isNavOpen"  :is-scrolled="isScrolled" class="menu__trigger"></hamburger-menu>
    </nav>
  </header>
</template>

<script>
import LogoSVG from "@/lib/components/LogoSVG.vue";
import CallButton from "@/lib/components/CallButton.vue";
import HamburgerMenu from "@/lib/components/HamburgerMenu.vue";
import router from "@/router";

export default {
  name: "HeaderComponent04",
  components: {LogoSVG, CallButton, HamburgerMenu},
  data() {
    return {
      isBlur: false,
      isNavOpen: false,
      isScrolled: false

    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    openNav(){
      console.log('click op de button')
      this.isNavOpen = !this.isNavOpen
      this.isScrolled = false
      document.body.classList.add('no-scroll'); // Add no-scroll class
      this.handleScroll(); // Toggle isScrolled
    },
    closeNav() {
      this.isNavOpen = false;
      this.isBlur = true
      this.isScrolled = true
      document.body.classList.remove('no-scroll'); // Remove no-scroll class
      this.handleScroll(); // Toggle isScrolled

    },
    router() {
      return router
    },
    handleScroll() {
      if (window.pageYOffset > 0) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    }
  },
}
</script>

<style scoped>

.color__scroll{
  fill: #192321;
}
/*global*/
a {
  text-decoration: none;
}

header{
  position: fixed;
  width: 100%;
  z-index: 999;
  padding: 0.75rem 1rem;
  top: 0;

  /*padding: 1.5rem 1.875rem 1rem;*/
  transition: all 0.3s ease;
}

/*Nav*/
nav{
  position: relative;
  height: 45px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav__menu{
  /*display: flex;*/
  /*justify-content: center;*/
}
.nav__list{
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav__item{
  margin-right: 2em;
}
.logo__link{
  z-index: 999999;
}

.nav__link{
  color: #192321;

}

.nav__link:hover {
  text-decoration: underline;
  color: red;
}

.menu__trigger{
  display: none;
  z-index: 99999;
}


.blur{
  backdrop-filter: blur(24px);
  background-color: rgba(61, 149, 209, 0.4);
}

@media screen and (max-width: 1024px) {
  .menu__trigger{
    display: block;
  }

  header{
    padding: 0.75rem 1rem;
  }

  nav {
    height: 32px;
  }
  .nav__menu{
    transition: .4s;
    margin-top: 2em;
  }
  .nav__list{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    height: 100vh;
    padding: 4rem 1rem;

    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;


    transition: transform .3s ease-out;
    transform: translateY(-100%);
  }
  .nav__list--open{
    transform: translateY(0);
    padding-top: 5em;
  }
  .nav__item{
    font-size: 48px;
    font-weight: bold;
    font-family: Inter, sans-serif;
  }
}
</style>