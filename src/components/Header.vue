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
    }
  }
</script>
<template>
  <header class="container-fluid d-flex align-items-center justify-content-between">
    <div>
      <h1>
        BOOLFLIX
      </h1>
    </div>

    <div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button 
            class="btn btn-outline-secondary" 
            @click="startSearch"
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
</style>