import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, Button, View, Alert } from 'react-native';
import fundo from './images/FundoPrincipal.png';
import escolhaLoginECadastro from "./src/components/escolhaLoginECadastro";
import logoDuozin from './images/LogoBege.png';

const App = () => (
  <View style={styles.container}>

    <ImageBackground 
      style={styles.fundo}
      source={fundo}
    >
      <Image 
      style={styles.logoDuozin}
      source={logoDuozin}
      />
      
      <Button color='#3C3F8C' styles={styles.botaoLogin} title='Login' onPress={''}></Button>
        
      <Button color='#3C3F8C' title='Cadastrar' onPress={''}></Button>
      
      </ImageBackground>
    




  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  logoDuozin: {
    width: 250,
    height:250,
    marginLeft: 50,

  },
    fundo: {
    width: 360,
    height:570,
  },
  botaoLogin: {
    position: 'absolute',
    top: '20',
     left: '40'
  }
});

export default App;