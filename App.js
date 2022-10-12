import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, Button, View, Alert } from 'react-native';
import logo from './images/LogoBege.png';

const App = () => (
  <View style={styles.container}>

    <Image
      style={styles.logo}
      source={logo}
    />


  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292759'
  },
  logo: {
    width: 250,
    height: 250,
  }

});