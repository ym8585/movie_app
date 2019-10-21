import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import { BG_COLOR } from "../../constants/Colors"
import { TextInput } from 'react-native'

const Container = styled.View`
    background-color : ${BG_COLOR};
    flex: 1;
`;

const Input = styled.TextInput``;

const SearchPresenter = ({
    loading, 
    movieResults, 
    tvResults, 
    searchTerm, 
    handleSearchUpdate 
}) => (
    <Container>
         <Input
            onChangeText={handleSearchUpdate}
            value={searchTerm}
            autoFocus
            returnKeyType={"go"}
        />
    </Container>
);

SearchPresenter.propTypes={
    loading: PropTypes.bool.isRequired,
    tvResults: PropTypes.array,
    movieResults: PropTypes.array,
    searchTerm: PropTypes.string,
    handleSearchUpdate: PropTypes.func.isRequired
};

export default SearchPresenter;