import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from '../../constants/Layout'
import makePhotoUrl from "../../utils/makePhotoUrl";
import { BG_COLOR, TINT_COLOR } from '../../constants/Colors';
import MoviePoster  from '../../components/MoviePoster';
import MovieRating from "../../components/MovieRating";
import { LinearGradient } from "expo-linear-gradient";
import { Platform } from 'react-native';

const Container = styled.ScrollView `
  background-color : ${BG_COLOR};
  flex: 1;
`;

const Header = styled.View`
  position : relative;
  justify-content : flex-end;
`;

const BgImage = styled.Image`
    width:${Layout.width};
    height: ${Layout.height / 3.5};
    opacity: 0.5;
    position: absolute;
    top : 0;
`;

const Content = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: flex-end;
    padding-horizontal: 20px;
    height: ${Layout.height / 3.5};
`;

const Column = styled.View`
  margin-left: 10px;
`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const MainContent = styled.View`
  padding-horizontal : 20px;
  margin-top : 25px
`;

const ContentTitle = styled.Text`
  color:${TINT_COLOR};
  font-weight : 600;
  margin-bottom : 10px;
`;

const Overview =styled.Text`
  color: ${TINT_COLOR};
  font-size: 12px;
  margin-bottom: 10px;
  width:90%;
`;

const DetailPresenter = ({
  id,
  posterPhoto,
  backgroundPhoto,
  title,
  voteAvg,
  overview,
  loading
}) => (
<Container>
    <Header>
      <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }} />
      <LinearGradient
        colors={["transparent", "black"]}
        start = {Platform.select({
          ios: [0,0]
        })}
        end={Platform.select({
          ios: [0,0.5],
          android: [0,0.9]
        })}
      >
        <Content>
          <MoviePoster path={posterPhoto} />
          <Column>
            <Title>
              {title}
            </Title>
            <MovieRating inSlide={true} votes={voteAvg}/>
          </Column>
        </Content>
      </LinearGradient>
    </Header>

    <MainContent>
      {overview ? (
        <>
          <ContentTitle>OverView</ContentTitle>
          <Overview>{overview}</Overview>
        </> 
       ) : null}
    </MainContent>
  </Container>
);

DetailPresenter.propTypes = {
  id : PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  backgroundPhoto : PropTypes.string,
  title : PropTypes.string.isRequired,
  voteAvg: PropTypes.number,
  overview: PropTypes.string,
  overview: PropTypes.string,
  loading: PropTypes.bool.isRequired

};

export default DetailPresenter;