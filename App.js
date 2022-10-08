import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, Button, View, Alert } from 'react-native';
import fundo from './images/FundoPrincipal.png';

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require('./images/FundoPrincipal.png')} style={styles.imageBackground}>
      <Text style={styles.text}>React Native</Text>
      <Button style={styles.botao}
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />

    </ImageBackground>
  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
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