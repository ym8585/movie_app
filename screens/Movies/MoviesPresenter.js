import React from "React";
import {Text} from "react-native";
import PropTypes from "prop-types";
import Loader from "../../conponents/Loader"
import styled from "styled-components";
import MovieSlider from '../../conponents/MovieSlider'

const Container = styled.ScrollView``;

const MoviesPresenter = ({loading, upcoming, popular, nowPlaying}) => 
    loading ? (
    <Loader />
    ) : (
        <Container>
            <MovieSlider movier={nowPlaying} />
        </Container>
    );


MoviesPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    nowPlaying: PropTypes.array

};

export default MoviesPresenter;