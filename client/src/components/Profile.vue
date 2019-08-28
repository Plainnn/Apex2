<template>
  <section>


      <div v-if="loading">
            <h3>Loading...</h3>
      </div>
      <div v-if="error">
            <h3>{{error}}</h3>
            <router-link to="/" class="btn">Go Home</router-link>
      </div>
      <div v-if="data">              
        <router-view :generalGame="data" :specificGame="specificData"/>
      </div>


  </section>
</template>

<script>

import axios from 'axios';

export default {
    name: 'Profile',
    data() {
        return {
            loading: false,
            error: null,
            data: null,
            specificData: null,

            //Function to find profile image from API, appending the ID taken from fetch request in profile.js route.

            getImageUrl: function(id) {
                return `http://ddragon.leagueoflegends.com/cdn/9.16.1/img/profileicon/` + id + `.png`;
            }
        }
    },
    beforeCreate() {
        //Add OR Remove classes and images etc..
    },
    async created() {
        this.loading = true;
        try {
            const response = await axios.get(`/api/profile/${this.$route.params.platform}/${this.$route.params.name}`);
            this.loading = false;
            this.data = response.data.data;
            this.specificData = response.data.splice;
        } catch (error) {
            this.loading = false;
        }
    }
};
</script>

<style scoped>

.profile-data {
    z-index: 999;
    position: relative;
}

</style>