import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import IconButton from './IconButton';
import {images} from '../images';

const Container = styled.View`
    flex-direction : row;
    align-items : center;
    background-color : ${({theme})=> theme.background};
    border-radius : 10px;
    padding : 5px;
    margin : 3px 0px;
`;

const Contents = styled.Text`
    flex : 1;
    font-size : 20px;
    color : ${({theme})=>theme.text};
`;

const Task = ({ text }) => {
    return (
        <Container>
            <IconButton type={images.uncompleted}/>
            <Contents>{text}</Contents>
            <IconButton type={images.update}/>
            <IconButton type={images.delete}/>
        </Container>
    );
};

Task.propTypes = {
    text : PropTypes.string.isRequired,
}

export default Task;