import react from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MovieSlide = ({posterPhoto,
    backgroundPhoto,
    title,
    voteAvg,
    overview}) => null;

MovieSlide.PropTypes = {
    id: PropTypes.number.isRequired,
    poaterPhoto: PropTypes.string.isRequired,
    backgroungPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteAvg: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
}

export default MovieSlide;