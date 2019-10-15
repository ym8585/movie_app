import React from "React";
import {Text} from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";

const Container = styled.ScrollView``;

const TVPresenter = ({loading, popular, topRated, airingToday}) => 
    loading ? (
    <Loader />
    ) : (
        <Container>
            <Text>TV</Text>
        </Container>
    );

TVPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    popular: PropTypes.array,
    topRated: PropTypes.array,
    airingToday: PropTypes.array
};

export default TVPresenter;