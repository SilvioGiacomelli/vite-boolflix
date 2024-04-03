<script>
import Card from './partials/Card.vue'
import {store} from '../data/store'
  export default {
    components:{
      Card
    },
    data(){
      return{
        store
      }
    }
  }
</script>
<template>
  <main>
    <div class="container-xl  pt-5">
      <h2>FILM</h2>
      <div class="row row-cols-4">
          <Card
          v-for="card in this.store.moviesArray"
          :key="card.id"
          :title="card.title"
          :original_title="card.original_title"
          :original_language="card.original_language"
          :vote_average="card.vote_average"
          :poster_path="card.poster_path"
          />
      </div>
      <h2>SERIE</h2>
      <div class="row row-cols-4">
          <Card
          v-for="serie in this.store.seriesArray"
          :key="serie.id"
          :title="serie.name"
          :original_title="serie.original_name"
          :original_language="serie.original_language"
          :vote_average="serie.vote_average"
          :poster_path="serie.poster_path"
          />
      </div>
    </div>
  </main>
</template>


<style lang="scss" scoped>
main{
  background-color: #434343;
}

h2{
  color: white;
  padding-bottom: 10px;
}
</style>