import React from 'react';
import MoviesPresenter from "./MoviesPresenter";
import { movies } from "../../api";

export default class extends React.Component {
    state = {
        loading: true,
        upcoming : null,
        popular: null,
        nowPlaying: null,
        error: null
    };

    async componentDidMount(){
        let upcoming, popular, nowPlaying, error;
        try{
            ({
                data: {results: upcoming}
            } = await movies.getUpcoming());
            ({
                data: {results: popular} 
            } = await movies.getPopular());
            ({
                data: {results: nowPlaying}
            } = await movies.getNowPlaying());
        
        }catch(error){
        console.log(error);
            error = "Can't Get Movies.";
        }finally{
            this.setState({
                loading:false, 
                error, 
                upcoming, 
                popular, 
                nowPlaying
            })
        }
    }

    render () {
        const { loading, upcoming, popular, nowPlaying } = this.state;
        console.log(nowPlaying);
        return (
        <MoviesPresenter 
            loading = {loading} 
            upcoming={upcoming}
            popular={popular}
            nowPlaying={nowPlaying}
        />
        );
    }
}