<template>
  <section class="match-history">

      <ul>
        <li v-for="(games, index) in generalGame" :key="games.gameId" class="card">

           <div
                v-for="(participantIdentity, participantIdentityIndex) in games.participantIdentities"
                v-bind:key="participantIdentityIndex"
            >
                <p>{{ participantIdentity.player.summonerName }}</p>
            </div>


            
            <img :src="getChampImage(specificGame[index].champion)">


            
        </li>
      </ul>
      
  </section>
</template>

<script>

export default {
    props: ['generalGame', 'specificGame'],
    name: 'MatchHistory',
    data() {
        return {
            profileDatas: null,
            getChampImage: function(id) {
                return `http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${id}.png`
            },
            timeConverter: function(timestamp) {
                var time = new Date(timestamp).toLocaleTimeString("en-US");
                var date =  new Date(timestamp).toLocaleDateString("en-US");
                var combine = `${time} + | ${date}`; 
                return combine;
            }
        }
    },
    beforeCreate() {
        //Add OR Remove classes and images etc..
    },
    async created() {
        console.log(this.generalGame)
        console.log(this.specificGame)

    }
};
</script>

<style scoped>


.match-history {
    margin-top: 50px;
    z-index: 999;
        position: relative;
}

.card {
    margin: 2rem;
    background: #fff;
    padding: 50px;
    border-radius: 10px;
}



</style>