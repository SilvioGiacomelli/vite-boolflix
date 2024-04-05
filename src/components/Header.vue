<script>
import {store} from '../data/store'
  export default {
    data(){
      return{
        store,
        titleToSearch:'',
        originaltitltleToSearch:'',
        languageToSearch:'',
        voteToSearch:'',
      }
    },
    methods:{
      startSearch(){
        this.store.queryParams.query = this.titleToSearch;
        this.$emit('startSearch');
        console.log(this.store.queryParams.query);
      },
      resetRicerca(){
        this.titleToSearch = '';
        this.originaltitltleToSearch = '';
        this.languageToSearch = '';
        this.startSearch();
        this.store.popularArray.length;
        this.store.popularseriesArray.length;
      }
    }
  }
</script>
<template>
  <header class="container-fluid d-flex align-items-center justify-content-between">
    <div class="logo">
      <img 
      src="../assets/img/boolflix-logo.png" 
      @click="resetRicerca()"
      >
    </div>

    <div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button 
            class="btn btn-outline-secondary" 
            @click='startSearch'
            type="button">Search
            </button>
          </div>
          <input 
          type="text" 
          class="form-control" 
          placeholder="" 
          aria-label="" 
          aria-describedby="basic-addon1"
          v-model.trim="titleToSearch"
          @keyup.enter="startSearch"
          >
        </div>
    </div>
  </header>
</template>


<style lang="scss" scoped>

  header{
    background-color: #000000;
    height: 150px;
  }
  h1{
    color: red;
  }
  button{
    background-color: red;
    color: white;
  }
  .logo{
    img{
      width: 200px;
      padding-left: 10px;
      cursor: pointer;
    }
  }
</style>