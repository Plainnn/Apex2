<template>
  <header>
      <!-- <img :src="image" class="logo">-->
      <img :src="hero" class="hero-top">


  </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            image: require('@/assets/logo.png'),
            hero: require('@/assets/bkg.png')
        }
    }
}
</script>

<style scoped>

    header {
        position: absolute;
        z-index: -999;
    }

    .hero-top {
        width: 100%;
    }

    .logo {
        width:300px;
    }

    @media(max-width: 700px) {
        .logo {
            display: block;
            margin: auto;
        }
    }
</style>