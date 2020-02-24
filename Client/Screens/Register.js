import React from 'react';
import { Button } from 'react-native-paper';
import {
    Wrapper,
    Container,
    RegisterTextWrap,
    RegisterText,
    InputWrapper,
    InputBox,
    RegisterBtn,
    LoginTxt,
} from './../Style/RegisterStyle';


export default function RegisterPage({history}){

    return (
      <Wrapper >
        <Container>
          <RegisterTextWrap >
            <RegisterText >Register </RegisterText>
          </RegisterTextWrap>
          <InputWrapper >
            <InputBox label="Register no" mode="outlined" nativeID='Regno' underlineColor='#000' />
            <InputBox label="Username" mode="outlined" underlineColor='#000' />
            <InputBox label="Email" mode="outlined" underlineColor='#000' />
            <InputBox label="Mobile no" mode="outlined" underlineColor='#000' />
            <RegisterBtn >
              <Button icon="" mode="contained">Register</Button>
            </RegisterBtn>
            <LoginTxt onPress = {() => history.push('/')}>Already registered? Login</LoginTxt>
          </InputWrapper>
        </Container> 
      </Wrapper>
    );
}