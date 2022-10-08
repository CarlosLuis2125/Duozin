import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function escolhaLoginECadastro() {
  return (
    <View style={styles.principal}>
      <View style={styles.container}>
        <Text>Logo Duozin</Text>
        <StatusBar style="auto" />
        
      </View>
      <View style={styles.loginCadastro}>
        <Button title='Login' onPress={''}></Button>
        
        <Button title='Cadastrar' onPress={''}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  principal: {
    flex: 2,
    backgroundColor: '#444',
    
  },
  loginCadastro: {
    flex: 3,
    backgroundColor: '#fff',
    fontSize: 50,
  
  },
});
