import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, n, } from 'react-native';
import Login from "./src/components/login/index.js";




export default function App() {
  return (
    <View style={styles.input}>
      <Login/>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    
  },
});



