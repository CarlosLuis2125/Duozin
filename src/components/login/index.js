import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button , TextInput} from 'react-native';

export default function Login(){
    return (
        <View style={styles.principal}>
            <View style={styles.container}>
                <Text>Logo Duozin</Text>
                <StatusBar style="auto" />
                
                <View style={styles.email}>
                    <TextInput style={styles.input} value={Text} placeholder='Email'></TextInput>
                </View>
                <View style={styles.senha}>
                    <TextInput style={styles.input}  value={Text} placeholder='Senha'></TextInput>
                </View>
                <View>
                    <Button title='Voltar'></Button>
                    <Button title='Avançar'></Button>
                </View>
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
});