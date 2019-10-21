import React from 'react';
import PropTypes from "prop-types";
import { TouchableWithoutFeedback } from "react-native";
import { withNavigation } from "react-navigation";
import styled from "styled-components";
import MoviePoster from './MoviePoster';
import MovieRating from './MovieRating';
import { GREY_COLOR } from '../constants/Colors';

const Container = styled.View`
    align-items: center;
    margin-right: 5px;
`;

const Title = styled.Text`
    color: white;
    font-size: ${props => (!props.big ? "12px" : "14px")};
    margin-vertical: 5px;
`;

const HContainer = styled.View`
    margin_bottom : 10px;
    flex-direction : row;
    align-items : center;
`;

const Column = styled.View`
    margin-left :10px;
    width: 60%;
`;

const OverView = styled.Text`
    color:${GREY_COLOR};
    font-size : 12px;
`;

const MovieItem = ({
    id,
    posterPhoto, 
    title, 
    voteAvg, 
    horizental=false, 
    overview,
    isMovie = true,
    navigation
}) => (
    <TouchableWithoutFeedback
        onPress={() =>
            navigation.navigate({
                routeName: "Detail",
                params: {
                  isMovie,
                  id,
                  posterPhoto,
                  backgroundPhoto: null,
                  title,
                  voteAvg,
                  overview
                }
              })
        }
    >
    {horizontal ? (
      <HContainer>
        <MoviePoster path={posterPhoto} />
        <Column>
          <Title big={true}>{title}</Title>
          <MovieRating votes={voteAvg} />
          {overview ? (
            <Overview>
              {overview.length > 150
                ? `${overview.substring(0, 147)}...`
                : overview}
            </Overview>
          ) : null}
        </Column>
      </HContainer>
    ) : (
      <Container>
        <MoviePoster path={posterPhoto} />
        <Title>
          {title.length > 15 ? `${title.substring(0, 12)}...` : title}
        </Title>
            <MovieRating votes={voteAvg} />
        </Container>
    )}
  </TouchableWithoutFeedback>
);

MovieItem.PropTypes = {
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired,
    backgroungPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteAvg: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    overview: PropTypes.string,
    isMovie: PropTypes.bool
};

export default withNavigation(MovieItem);