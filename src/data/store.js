import { reactive } from 'vue'

export const store = reactive({
  mainTitle:'Boolflix',
  moviesUrl:'https://api.themoviedb.org/3/search/movie',
  seriesUrl:'https://api.themoviedb.org/3/search/tv',
  popularUrl:'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
  popularseriesUrl:'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc',
  moviesArray:[],
  seriesArray:[],
  popularArray:[],
  popularseriesArray:[],
  queryParams:{
    api_key: '9269e4696eb5f1f8ef1c67d5c1abd16c',
    language:'it-IT',
    popular:'',
    query:'',
  }
})