import React, { useState } from 'react';

import { 
  TextInputLogin, 
  ContainerLogin, 
  ButtonLogin,
  TextButton,
  TextLogin,
  ButtonLoginTransparent
} from './utility/styles';

import { Alert } from 'react-native';

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function sigIn (){
    Alert.alert("Dados", email + "\n" + password)
  }

  return (
    <ContainerLogin>
      <TextInputLogin 
        value={ email }
        onChangeText={ setEmail }
        placeholder= "Email..."
        keyboardType= "email-address"
        textContentType= "emailAddress"
      />

      <TextInputLogin 
        value={ password }
        onChangeText={ setPassword }
        placeholder= "Senha"
        keyboardType= "default"
        textContentType= "password"
        secureTextEntry={true}
      />

      <ButtonLogin
        onPress={() => sigIn()}
      >
        <TextButton>Entrar</TextButton>
      </ButtonLogin>

      <ButtonLoginTransparent>
        <TextLogin intercept> Não possui uma conta? Cadastre-se</TextLogin>
      </ButtonLoginTransparent>
      
    </ContainerLogin>
  );
}
