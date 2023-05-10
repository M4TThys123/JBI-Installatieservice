<template>
  <!--Page-Transition    -->
  <div class="page-transition-container">
    <div class="page-transition"></div>
    <div class="page-transition"></div>
  </div>
</template>

<script>
import {gsap} from "gsap";

export default {
  name: "PageTransition01",
  created() {
    // Page-Transition
    const pageTransitionContainer = document.querySelector('.page-transition-container')
    const pageTransition = document.querySelectorAll('.page-transition')

    window.addEventListener('load', () => {
      pageTransition[0].classList.add('first')
      gsap.to(pageTransition, {
        y: '100%',
        stagger: 0.2,
        onComplete() {
          pageTransitionContainer.classList.add('done')
          pageTransition[0].classList.remove('first')
        }
      })
    })

    // Get router links
    const routerLinks = document.querySelectorAll('.router-link')

    // Add click event listener to router links
    routerLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        pageTransitionContainer.classList.remove('done')
        pageTransition[1].classList.add('first')
        gsap.fromTo(pageTransition, {
          y: '-100%'
        },{
          y: '0%',
          stagger: 0.2,
          onComplete() {
            location.replace(link.href)
          }
        })
      })
    })
  }
}
</script>

<style scoped>
:root{
  /*Page-Transition*/
  --prm-page-transition-color: var(--color-primary-blue);
  --sec-page-transition-color: var(--dim-gray);
  }

/* || Page Transition || */
.page-transition-container {
  position: fixed;
  inset: 0;
  z-index: 10000;
}

.no-js .page-transition-container {
  display: none;
}

.page-transition-container.done {
  pointer-events: none;
}

.page-transition {
  position: absolute;
  inset: 0;
  z-index: 10000;
}

.page-transition.first {
  z-index: 10001;
}

.page-transition:first-child {
  background-color: var(--prm-page-transition-color);
}

.page-transition:last-child {
  background-color: var(--sec-page-transition-color);
}
</style>