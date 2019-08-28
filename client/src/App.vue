<template>
  <div id="app">
    <div class="container">
      <Header />
      <router-view />

    </div>
  </div>
</template>

<script>

import Header from './components/Header';


export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
.container {
  width: 100%;
  margin: 0 auto;
}

body {
  background: #28264f;
}

</style>
