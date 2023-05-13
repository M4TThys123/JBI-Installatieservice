<template>
  <!--Page-Transition    -->
  <div class="page-transition-container" ref="pageTransitionContainer">
    <div class="page-transition" ref="pageTransition"></div>
    <div class="page-transition" ref="pageTransition"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
export default {
  name: "PageTransition02",
  setup() {
    const pageTransitionContainer = ref(null);
    const pageTransition = ref(null);

    onMounted(() => {
      // Navigation
      const nav = document.querySelector('nav');
      const menuItems = nav.querySelectorAll('a');
      nav.classList.add('loaded');

      // Page-Transition
      const pageTransitionContainerElement = pageTransitionContainer.value;
      const pageTransitionElements = pageTransition.value;

      pageTransitionElements[0].classList.add('first');
      gsap.to(pageTransitionElements, {
        y: '100%',
        stagger: 0.2,
        onComplete() {
          pageTransitionContainerElement.classList.add('done');
          pageTransitionElements[0].classList.remove('first');
        },
      });

      menuItems.forEach((item) => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          pageTransitionContainerElement.classList.remove('done');
          pageTransitionElements[1].classList.add('first');
          gsap.fromTo(
              pageTransitionElements,
              {
                y: '-100%',
              },
              {
                y: '0%',
                stagger: 0.2,
                onComplete() {
                  location.replace(item.href);
                },
              }
          );
        });
      });
    });

    return { pageTransitionContainer, pageTransition };
  },
}
</script>

<style scoped>
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
  background-color: #0096D7;
}

.page-transition:last-child {
  background-color: DimGrey;
}
</style>