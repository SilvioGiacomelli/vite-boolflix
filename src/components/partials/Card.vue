<script>
import{store} from '../../data/store'
  export default {
    props:{
      original_title: String,
      title: String,
      original_language: String,
      vote_average: Number,
      poster_path: String,
    },
    data() {
      return {
        store
      }
    },
    methods: {
    convertStar(vote) {
      let stelle = '';
      const intero = Math.ceil(vote);
      const numStelle = Math.min(intero / 2, 5);
      for (let i = 0; i < numStelle; i++) {
        stelle += '<i class="fas fa-star"></i>';
      }
      return stelle;
    },
  },
};
</script>
<template>
  <div>
    <div class="card col h-100" style="width: 18rem;">
      <img :src="`https://image.tmdb.org/t/p/w342${poster_path}`" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{ original_title }}</h5>
        <p class="card-text">{{ title }}</p>
        <p class="card-text">{{ original_language }}</p>
        <p class="card-text" v-html="convertStar(vote_average)"></p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
altezza{
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
}

</style>