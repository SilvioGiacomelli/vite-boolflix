<script>
  export default {
    props:{
      original_title: String,
      title: String,
      original_language: String,
      vote_average: String,
      poster_path: String,
    }
  }
</script>
<template>
  <div>
    <div class="card" style="width: 18rem;">
      <img 
      :src="poster_path" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{ original_language }}</h5>
        <p class="card-text">{{ title }}</p>
        <p class="card-text">{{ original_language }}</p>
        <p class="card-text">{{ poster_path }}</p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>