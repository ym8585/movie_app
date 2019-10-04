import React from "React";
import {Text} from "react-native";
import PropTypes from "prop-types";
import Loader from "../../conponents/Loader"

const TVPresenter = ({loading, popular, topRated, airingToday}) => 
    loading ? <Loader /> : <Text>Movies</Text>;

TVPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    popular: PropTypes.array,
    topRated: PropTypes.array,
    airingToday: PropTypes.array
};

export default TVPresenter;