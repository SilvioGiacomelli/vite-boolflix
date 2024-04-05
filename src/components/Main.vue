<script>
import Card from './partials/Card.vue'
import {store} from '../data/store'
  export default {
    components:{
      Card      
    },
    data(){
      return{
        store,
        isSearching: false,
      };
    },
    methods: {
      startSearch() {
      this.getSeries();
      this.getMovie();
      this.isSearching = true;
      },
    },
  };
</script>
<template>
  <main>
    <div class="container-xl  pt-5">
      <div class="container" v-if="store.moviesArray.length > 0">
        <div class="d-flex justify-content-center">
          <img
          src="../assets/img/Film.png">
        </div>
        <div class="row row-cols-4">
            <Card
            v-for="card in this.store.moviesArray"
            :key="card.id"
            :title="card.title"
            :original_title="card.original_title"
            :original_language="card.original_language"
            :vote_average="card.vote_average"
            :poster_path="card.poster_path"
            :overview="card.overview"
            />
        </div>
      </div>
      <div class="container" v-if="store.seriesArray.length > 0">
        <div class="d-flex justify-content-center">
          <img src="../assets/img/serie.png" alt="">
        </div>
        <div class="row row-cols-4">
            <Card
            v-for="serie in this.store.seriesArray"
            :key="serie.id"
            :title="serie.name"
            :original_title="serie.original_name"
            :original_language="serie.original_language"
            :vote_average="serie.vote_average"
            :poster_path="serie.poster_path"
            :overview="serie.overview"
            />
        </div>
      </div>
      <div class="container" v-if="store.popularArray.length > 0">
        <div class="d-flex justify-content-center">
          <img src="../assets/img/filmpopolari.png" alt="">
        </div>
        <div class="row row-cols-4">
          <Card
          v-for="pop in this.store.popularArray"
          :key="pop.id"
          :title="pop.title"
          :original_title="pop.original_title"
          :original_language="pop.original_language"
          :vote_average="pop.vote_average"
          :poster_path="pop.poster_path"
          :overview="pop.overview"
          />
        </div>
      </div>
      <div class="container" v-if="store.popularseriesArray.length > 0">
        <div class="d-flex justify-content-center">
          <img src="../assets/img/seriepopolari.png" alt="">
        </div>
        <div class="row row-cols-4">
          <Card
          v-for="pops in this.store.popularseriesArray"
          :key="pops.id"
          :title="pops.title"
          :original_title="pops.original_title"
          :original_language="pops.original_language"
          :vote_average="pops.vote_average"
          :poster_path="pops.poster_path"
          :overview="pops.overview"
          />
        </div>
      </div>
    </div>
  </main>
</template>


<style lang="scss" scoped>

main{
  background-color: #434343;
  height: 100vh;
  overflow-y: scroll;
}

h2{
  color: red;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 3rem;
}

</style>