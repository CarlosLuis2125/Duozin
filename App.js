import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, n, } from 'react-native';
import Login from "./src/components/login/index.js";
import Testes from "./src/components/Testes/index.js";


export default function App() {
  return (
    <View style={styles.input}>
      <Login/>
      <Testes/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: '#eeefff',
  },
});



