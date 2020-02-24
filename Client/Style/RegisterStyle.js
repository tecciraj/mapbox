import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

export const Wrapper = styled.View`
    flex: 1;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
`;

export const Container = styled.View`
    border-color: black;
    border-width: 1px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    flex: 1;
    margin: 20px;
    margin-top: 30px;
`;

export const RegisterTextWrap = styled.View`
    flex:1;
    justify-content: flex-start;
    align-items: center;
`;

export const RegisterText = styled.Text`
    font-size:50px;
`; 

export const InputWrapper = styled.View`
    flex: 5;
    align-items: stretch;
    justify-content: flex-start;
`;

export const InputBox = styled(TextInput)`
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 20px;
    height: 50px;
    font-size: 20px;
`;

export const RegisterBtn = styled.View`
    margin-left: 50px;
    margin-right: 50px;
`;

export const LoginTxt = styled.Text`
    color: #000;
    margin-top: 50px;
    align-self: center;
    width: 200px;
    font-size: 16px;
`;
