import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.caixaInput} placeholder={'Email Address'} placeholderTextColor={'#F2CF8D'} ></TextInput>
      <TextInput style={styles.caixaInput} placeholder={'Password'} placeholderTextColor={'#F2CF8D'}></TextInput>
      <Pressable title='Login' onpress='' style={styles.botao}>
        <Text style={styles.botaoTxt}>Login</Text>
      </Pressable>
      <Button title='Login' color={'#4649A6'} style={styles.botao}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2441',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caixaInput:{
    fontSize: 30,
    color: '#F2CF8D',
    backgroundColor: '#1F2441',
    borderWidth: 2,
    borderColor: '#F2CF8D',
    borderStyle: 'solid',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 5,
    margin: 8,
    width: 320,
    textDecorationLine: 'none'
  },
  botao:{
    backgroundColor: '#4649A6',
    elevation: 3,
    padding: 5,
    borderWidth: 2,
    borderColor: '#F2CF8D',
    borderStyle: 'solid',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    paddingLeft: 120,
    paddingRight: 120,
    margin: 8,
  },
  botaoTxt:{
    color: '#F2CF8D',
    fontSize : 30
  }
});
