<template>
  <section class="search">
      <form v-on:submit.prevent="onSubmit">
              <select name="platform" id="platform" v-model="platform">
                  <option value="br">BR</option>
                  <option value="euw" selected >EUW</option>
                  <option value="na">NA</option>
                  <option value="kr">KR</option>
                  <option value="eun">EUNE</option>
                  <option value="jp1">JP</option>
                  <option value="la">LAN</option>
                  <option value="la">LAS</option>
                  <option value="oc">OCE</option>
                  <option value="tr">TR</option>
                  <option value="ru">RU</option>
              </select>
            <label for="name"></label>
            <input type="text" id="name" name="name" v-model="name" placeholder="Enter your summmoner name">
            <input type="submit" value="Submit" class="btn">
      </form>
  </section>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            platform: "",
            name:  ""
        };
    },
    methods: {
        onSubmit() {
            if(!this.name) {
                this.$toasted.show('Please enter your summoner name', {
                    duration: 3000,
                    icon: 'exclamation-circle'
                });
           } else {
               this.$router.push(`/profile/${this.platform}/${this.name}`);
           }
        }
    }
}
</script>

<style scoped>

    h1 {
        font-family: 'Montserrat', sans-serif;
    }

    section {
        z-index: 999;
        position: absolute;
        left: 50%;
        top:25%;
        transform: translate(-50%, 0);
    }

    section input#name {
        width: 32rem;
        padding: 10px;
    }

    section input {
        display:inline-block;
        margin-bottom: 1rem;
    }

    section input.btn  {
        display: block;
        z-index: 999;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        padding: 10px 20px;
        background: #fc7c00;
        border: 0;
    }

    section #name, section #platform {
        display: inline-block;
        padding: 10px 15px;
        font-size: 20px;
        border-radius: 0;
        -webkit-appearance: none;
        border: 1px solid transparent;
    }

</style>