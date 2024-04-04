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
  
  <div class="card col my-5 " style="width: 18rem;">
    <img v-if="poster_path" :src="`https://image.tmdb.org/t/p/w342${poster_path}`" class="card-img-top" alt="Poster del film">
    <img v-else src="../../assets/img/stock.jpg" alt="Immagine di riserva">

    <div class="card-info">
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
</template>


<style lang="scss" scoped>

.card {
  background-color: #000000;
  color: white;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
  position: relative;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.5);
  }
  &:hover .card-info {
    transform: translateY(0%);
  }
}

.card-img-top {
  width: 100%;
  display: block;
  border-radius: 10px 10px 0 0; 
}

.card-info {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: start; 
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  overflow-y: auto; 
  scrollbar-width: thin;
  scrollbar-color: #FFD700 rgba(0, 0, 0, 0.5);
}


.card:hover .card-info {
  opacity: 1;
  visibility: visible;
}

.stelle {
  color: #FFD700;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
}

.card-text {
  font-size: 15px;
}

.col {
  padding: 0;
  height: 95%;
}

</style>
