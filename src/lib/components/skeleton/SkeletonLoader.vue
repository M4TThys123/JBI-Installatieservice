<template>
  <div class="skeleton-loading">
    <div class="skeleton-loading-item"></div>
    <div class="skeleton-loading-item"></div>
    <div class="skeleton-loading-item"></div>
  </div>
</template>




<script>
export default {
  name: "SkeletonLoader"
}
</script>

<style scoped>
.skeleton-loading {
  display: flex;
  flex-direction: column;
}

.skeleton-loading-item {
  height: 20px;
  width: 100%;
  background-color: #f0f0f0; /* Set a background color for the skeleton item */
  margin-bottom: 10px;
}
</style>