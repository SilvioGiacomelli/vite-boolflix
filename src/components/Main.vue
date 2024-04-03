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
    <div class="container pt-5">
      <div class="row row-cols-4">
        <div class="col mb-5">
          <Card
        v-for="card in this.store.cardList"
        :key="card.id"
        :title="card.title"
        :original_title="card.original_title"
        :original_language="card.original_language"
        :vote_average="card.vote_average"
        :poster_path="card.poster_path"
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
}
</style>