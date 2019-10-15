import React from "React";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.View``;

const ScrollView = styled.ScrollView``;

const Title = styled.Text``;

const Section = ({title, movies}) => (
    <Container>
        <Title>{title}</Title>
        <ScrollView>{movies.filter(movie => movie.poster_path !== null).map(movie => null)}</ScrollView>
    </Container>
);

Section.propTypes = {
    movies: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};

export default Section;
