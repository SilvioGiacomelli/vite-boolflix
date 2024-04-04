<script>
import axios from 'axios';
import {store} from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
  export default {
    
    components:{
      Header,
      Main,
    },
    data(){
      return{
        store,
      }
    },

      //////FILM POPOLARI///////

    methods:{
      getPopular(){
        axios.get(this.store.popularUrl, {
          params:{
            api_key: '9269e4696eb5f1f8ef1c67d5c1abd16c',
            language: 'it-IT',
            query:'',
          }
        })
        .then(result => {
          this.store.popularArray = result.data.results
          console.log(this.store.popularArray);
        })
        .catch(error => {
          console.log(error);
        })
      },

      //////SERIE POPOLARI///////

      getPopularSeries(){
        axios.get(this.store.popularseriesUrl, {
          params:{
            api_key: '9269e4696eb5f1f8ef1c67d5c1abd16c',
            language: 'it-IT',
            query:'',
          }
        })
        .then(result => {
          this.store.popularseriesArray = result.data.results
          console.log(this.store.popularseriesArray);
        })
        .catch(error => {
          console.log(error);
        })
      },

      ///////FILM//////

      getMovie(){
        axios.get(this.store.moviesUrl, {
          params:this.store.queryParams
        })
        .then(result => {
          this.store.moviesArray = result.data.results
          console.log(this.store.moviesArray);
        })
        .catch(error => {
          console.log(error);
        })
      },

      //////SERIE///////

      getSeries(){
        axios.get(this.store.seriesUrl, {
          params:this.store.queryParams
        })
        .then(result => {
          this.store.seriesArray = result.data.results
          console.log(this.store.seriesArray);
        })
        .catch(error => {
          console.log(error);
        })
      }
    },
    mounted(){
      this.getPopular();
      this.getPopularSeries();
    }
  }
</script>

  <template>

    <Header @startSearch="getSeries(),getMovie()"/>

    <Main />

  </template>

<style lang="scss">
@use './assets/scss/main.scss';
</style>
