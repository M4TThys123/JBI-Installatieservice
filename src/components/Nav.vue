<template>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <button class="toggle">&#9776;</button>
  </nav>
</template>

<script>
export default {
  name: "Nav"
}

</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px;
}

ul {
  display: flex;
  list-style-type: none;
}

li {
  margin-right: 20px;
}

a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2em;
}
.toggle{
  display: none;
}

/* Responsive */
@media screen and (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }

  ul {
    display: none;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 10px 0;
  }

  .toggle {
    display: block;
    font-size: 1.2em;
    padding: 10px;
    color: #fff;
    cursor: pointer;
  }

  .toggle:hover {
    background-color: #555;
  }

  .show {
    display: block;
  }
}

</style>