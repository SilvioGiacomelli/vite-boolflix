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
    <div class="container">
      <Card/>
    </div>
  </main>
</template>


<style lang="scss" scoped>
main{
  background-color: #434343;
  height: 100vh;
}
</style>