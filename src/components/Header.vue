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
        this.store.queryParams = {
          title: this.titleToSearch,
          original_title: this.originaltitltleToSearch,
          original_language: this.languageToSearch,
          vote_average: this.voteToSearch,
        }
        this.$emit('startSearch')
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
            <button class="btn btn-outline-secondary" type="button">Search</button>
          </div>
          <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
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