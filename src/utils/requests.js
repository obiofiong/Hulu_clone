// const API_KEY = process.env.API_KEY;
const API_KEY = '5542202722d37080cc3fa73e17c82a61'

export const requests = {
	fetchTrending: {
		title: "Trending",
		url: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
	},
	fetchTopRated: {
		title: "Top Rated",
		url: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
	},
	fetchActionMovies: {
		title: "Action",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	},
	fetchComedyMovies: {
		title: "Comedy",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	},
	fetchHorrorMovies: {
		title: "Horror",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	},
	fetchRomanceMovies: {
		title: "Romance",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	},
	fetchMysteryMovies: {
		title: "Mystery",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
	},
	fetchSciFiMovies: {
		title: "SciFi",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
	},
	fetchWesternMovies: {
		title: "Western",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
	},
	fetchAnimation: {
		title: "Animation",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
	},
	fetchTV: {
		title: "TV Movie",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
	},
};

export const search = {
	url : `/search/movie?api_key=${API_KEY}&query=`
}