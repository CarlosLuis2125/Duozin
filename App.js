import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, n, } from 'react-native';

export default function App() {
  return (
    <View style={styles.principal}>
      <View style={styles.container}>
        <Text>Logo Duozin</Text>
        <StatusBar style="auto" />
        
      </View>
      <View style={styles.login}>
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
  login: {
    flex: 3,
    backgroundColor: '#fff',

  },
});
