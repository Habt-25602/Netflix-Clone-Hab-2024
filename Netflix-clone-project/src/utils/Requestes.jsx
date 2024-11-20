const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
  fetchTreanding: `/treanding/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/descover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/descover/tv?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/descover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/descover/tv?api_key=${API_KEY}&with_genres=22`,
  fetchRomanticMovies: `/descover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/descover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};
export default requests;
