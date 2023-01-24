<template>
  <div class="center-container">
    <HomePage></HomePage>
  </div>
</template>

<script>
import HomePage from "@/components/Home";

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  position: fixed;
  margin: 0;
}

.center-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 70%;
}
</style>
