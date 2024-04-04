import { reactive } from 'vue'

export const store = reactive({
  mainTitle:'Boolflix',
  moviesUrl:'https://api.themoviedb.org/3/search/movie',
  seriesUrl:'https://api.themoviedb.org/3/search/tv',
  popularUrl:'https://api.themoviedb.org/3/movie/popular',
  moviesArray:[],
  seriesArray:[],
  popularArray:[],
  queryParams:{
    api_key: '9269e4696eb5f1f8ef1c67d5c1abd16c',
    language:'it-IT',
  }
})