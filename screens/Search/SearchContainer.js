import React from 'react';
import SearchPresenter from './SearchPresenter';
import styled from 'styled-components';

export default class extends React.Component{
    state = {
        loading: false,
        movieResults : null,
        tvResults : null,
        searchTerm: ""
    };

    handleSearchUpdate = () => {
        this.setState({
            searchTerm: text
        });
    };

    render () {
        const { loading, movieResults, tvResults, searchTerm, handleSearchUpdate } = this.state;
        return (
            <SearchPresenter 
                loading={loading}
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                handleSearchUpdate={this.handleSearchUpdate}
            />
        );
    }
}
