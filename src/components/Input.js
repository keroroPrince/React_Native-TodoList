import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
//import {Dimensions} from 'react-native';
import {useWindowDimensions} from 'react-native';

const StyledInput = styled.TextInput.attrs(({ theme })=>({
    placeholderTextColor : theme.placeholder,
}))`
    width : ${({width}) => width - 100}px;
    height : 50px;
    margin : 20px 0;
    padding : 15px 20px;
    border-radius : 15px;
    background-color : ${({theme})=>theme.itemBackground};
    font-size : 20px;
    color : ${({theme})=>theme.text};
`;

const Input = ({placeholder, value, onChangeText, onSubmitEditing, onBlur}) => {
    //const width = Dimensions.get('window').width;
    const width = useWindowDimensions().width;
    return <StyledInput 
        width={width} 
        placeholder={placeholder} 
        maxLength={50}
        autoCapitalize="none"   //자동 대문자 전환 none
        autoCorrect={false}     //자동 수정 false
        returnKeyType="done"    //키보드 완료 버튼 설정
        keyboardAppearance="dark"   //키보드 테마 변경
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        onBlur={onBlur}
        />;
};

Input.propTypes = {
    placeholder : PropTypes.string,
    value : PropTypes.string.isRequired,
    onChangeText : PropTypes.func.isRequired,
    onSubmitEditing : PropTypes.func.isRequired,
    onBlur : PropTypes.func.isRequired
}

export default Input;