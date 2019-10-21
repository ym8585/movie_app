import React from "React";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import MovieItem from "../../components/MovieItem";
import Section from "../../components/Section";
import { BG_COLOR } from "../../constants/Colors";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const TVPresenter = ({loading, popular, airingThisWeek, airingToday}) => 
    loading ? (
        <Loader />
    ) : (
        <Container>
            {popular ? (
                <Section title="Popular">
                    {popular
                        .filter(tv => tv.poster_path !== null)
                        .map(tv => (
                        <MovieItem
                            isMovie={false}
                            key={tv.id}
                            id={tv.id}
                            posterPhoto={tv.poster_path}
                            title={tv.name}
                            voteAvg={tv.vote_average}
                        />
                    ))}
                </Section>
            ) : null}
            {airingToday ? (
                <Section title="Airing Today">
                    {airingToday
                        .filter(tv => tv.poster_path !== null)
                        .map(tv => (
                        <MovieItem
                            isMovie={false}
                            key={tv.id}
                            id={tv.id}
                            posterPhoto={tv.poster_path}
                            title={tv.name}
                            voteAvg={tv.vote_average}
                        />
                    ))}
                </Section>
            ) : null}
            {airingThisWeek ? (
                <Section title="Airing This Week" horizontal={false}>
                    {airingThisWeek
                        .filter(tv => tv.poster_path !== null)
                        .map(tv => (
                        <MovieItem
                            isMovie={false}
                            horizontal={true}
                            key={tv.id}
                            id={tv.id}
                            posterPhoto={tv.poster_path}
                            title={tv.name}
                            voteAvg={tv.vote_average}
                            overview={tv.overview}
                        />
                    ))}
                </Section>
            ) : null}
        </Container>
    );

TVPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    popular: PropTypes.array,
    airingThisWeek: PropTypes.array,
    airingToday: PropTypes.array
};

export default TVPresenter;