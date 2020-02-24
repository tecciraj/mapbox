import React, {useState} from 'react';
import { Button } from 'react-native-paper';
import {
    Wrapper,
    LogoContainer,
    Logo,
    LoginTextWrap,
    LoginText,
    InputWrapper,
    InputBox,
    LoignBtn,
    SignupTxt,
} from './../Style/LoginStyle'

function LoginPage ({history}) {
    
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    
    const loginAuth = async() => {
        try{
            // let data = [];
            // data.push(username);
            // data.push(password);  
            // console.log(data);
            // let response = await fetch("urlhere", {
            //     method: 'POST',
            //     body: JSON.stringify(data)
            // });
            // let responseJSON = await response.json();
            // console.log(responseJSON);
            alert("Login Successful");
            history.push('/Home');    
        }catch (e){
            console.log(e);
        }

    }

    return ( 
    <Wrapper >
        <LogoContainer >
        <Logo source={require('./../assets/icon2.png')} />
        </LogoContainer>
        <LoginTextWrap >
        <LoginText >Login</LoginText>
        </LoginTextWrap>
        <InputWrapper>
        <InputBox
        label="Email"
        mode="outlined"
        underlineColor='#000'
        onChangeText={username => setUsername({username})}
        />
        <InputBox
            label="Password"
            mode="outlined"
            // underlineColor="#438eff"
            underlineColor='#000'
            secureTextEntry={true}
            onChangeText={password => setPassword({password})}
        />
        <LoignBtn>
            <Button icon="" mode="contained" onPress={loginAuth}>Login</Button>
        </LoignBtn>
        <SignupTxt onPress={()=> {history.push("/Register")}} >New User? Create Account</SignupTxt>
        </InputWrapper>
    </Wrapper>
    );

} 


export default LoginPage;