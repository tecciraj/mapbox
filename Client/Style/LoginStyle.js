import styled from 'styled-components/native'
import { TextInput } from 'react-native-paper'

export const Wrapper = styled.View`
    flex: 1;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
`;

export const LogoContainer = styled.View`
    flex:3;
    justify-content: flex-start;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 200px;
    height: 200px;
    margin-top: 30px;
`;

export const LoginTextWrap = styled.View`
    flex:1;
    justify-content: flex-start;
    align-items: center;
`;

export const LoginText = styled.Text`
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
    color:#097bed;
`;

export const LoignBtn = styled.View`
    margin-left: 50px;
    margin-right: 50px;
`;


export const SignupTxt = styled.Text`
    color: #000;
    margin-top: 50px;
    align-self: center;
    width: 200px;
    font-size: 16px;
`;
