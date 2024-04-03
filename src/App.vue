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

    methods:{
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
      getSeries(){
        axios.get(this.store.seriesUrl, {
          params:this.store.queryParams
        })
        .then(result => {
          this.store.moviesArray = result.data.results
          console.log(this.store.seriesArray);
        })
        .catch(error => {
          console.log(error);
        })
      }
    },
    mounted(){
      this.getMovie()
    }
  }
</script>

  <template>

    <Header @startSearch="getMovie"/>

    <Main />

  </template>

<style lang="scss">
@use './assets/scss/main.scss';
</style>
