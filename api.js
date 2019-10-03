import axios from "axios";
import { AppOwnership } from "expo-constants";

const api = axios.create({
    baseURL : "https://api.themoviedb.org",
    params: {
        api_key : "db5b221f5cd489af769d31c0b63eb632",
        language: 'en-US'
    }
});

export const movieApi = {
    nowplaying: () => api.get("movie/now_playing"),
    upComing: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail : id => api.get(`movie/${id}`, {
        params: {
            append_tp_response: "videos"
        }
    }),
search : (term) =>
    api.get("search/movie", {
        params: {
            query: encodeURIComponents (term)
        }
    })
};

export const tvApi = {
    topRate : () => api.get("tv/top_rated"),
    popular : () => api.get("tv/popular"),
    airingToday : () => api.get("tv/airing_today"),
    showDetail : id => api.get(`tv/${id}`,{
        params: {
            append_tp_response: "videos"
        }
     }),
    search : (term) =>
     api.get("search/tv", {
         params: {
             query: encodeURIComponents (term)
         }
     })  
};