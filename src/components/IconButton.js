import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {images} from '../images';

const Icon = styled.Image`
    tint-color : ${({theme})=>theme.text};
    width : 20px;
    height : 20px;
    margin : 10px;
`;

const IconButton = ({type, onPressOut}) => {
    return (
        <TouchableOpacity onPressOut={onPressOut}>
            <Icon source={type}/>
        </TouchableOpacity>
    );
};

IconButton.PropTypes = {
    type : PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut : PropTypes.func,
}
export default IconButton;