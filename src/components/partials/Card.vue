<script>
import{store} from '../../data/store'
  export default {
    props:{
      original_title: String,
      title: String,
      original_language: String,
      vote_average: Number,
      poster_path: String,
      overview: String,
    },
    data() {
      return {
        store
      }
    },
    methods: {
      convertStar(vote) {
      let stelle = '';
      const rating = vote / 2; 
      const stellePiene = Math.floor(rating);
      const haMezzaStella = rating % 1 >= 0.5;
      const stelleVuote = 5 - stellePiene - (haMezzaStella ? 1 : 0);
      
      for (let i = 0; i < stellePiene; i++) {
        stelle += '<i class="fas fa-star stelle"></i>'; 
      }
      
      if (haMezzaStella) {
        stelle += '<i class="fas fa-star-half-alt stelle"></i>'; 
      }
      
      for (let i = 0; i < stelleVuote; i++) {
        stelle += '<i class="far fa-star stelle"></i>';
      }      
      return stelle;
    }
  },
};
</script>

<template>
  <div>
    <div class="card col my-5 " style="width: 18rem;">
      <img
      v-if="poster_path" 
      :src="`https://image.tmdb.org/t/p/w342${poster_path}`" 
      class="card-img-top"></img>
      <img
      v-else
      src="../../assets/img/stock.jpg">
      <img src="" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ original_title }}</h5>
        <p class="card-text">{{ title }}</p>
        <img
        v-if="original_language === 'en'" src="../../assets/flags/en.png"
        ></img>
        <img
        v-else-if="original_language === 'it'" src="../../assets/flags/it.png"
        ></img>
        <img
        v-else-if="original_language === 'ja'" src="../../assets/flags/ja.png"
        ></img>
        <p
        v-else>{{ original_language }}</p>
        <p class="card-text stelle" v-html="convertStar(vote_average)"></p>
        <p class="card-text">{{ overview }}</p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

.card{
  background-color: #000000;
  color: white;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
  &:hover {
    transform: scale(1.2);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
  }
}

altezza{
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
}

.stelle{
  color: #FFD700;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center
}

.card-title{
  font-size: 20px;
  font-weight: bold;
}

.card-text{
  font-size: 15px;
}

.col{
  padding: 0;
  height: 95%;
}

.card-body {
  img{
  width: 30px;
  height: 30px;
  }
}


</style>