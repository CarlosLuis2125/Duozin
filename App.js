import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, Button, View, Alert } from 'react-native';
import fundo from './images/FundoPrincipal.png';

const App = () => (
  <View style={styles.container}>
      
      <Image
        style={styles.logo}
        source={'./images/'}
    />

  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#292759'
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default App;

