import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button , TextInput} from 'react-native';
import Fundo from "./images/FundoLoginCadastro.png";

export default function Login(){
    return (
            <View style={styles.container}>
                <Fundo/>
                <Text>Login</Text>
                <Text>Logo Duozin</Text>
                <StatusBar style="auto" />
                
                <View style={styles.email}>
                    <TextInput style={styles.input} value={Text} placeholder='Email'></TextInput>
                </View>
                <View style={styles.senha}>
                    <TextInput style={styles.input}  value={Text} placeholder='Senha'></TextInput>
                </View>
                <View style={styles.botaoVotar}>
                    <Button title='Voltar' onPress={''}></Button>
                </View>
                <View style={styles.botaoAvancar}>
                    <Button title='Avançar' onPress={''}></Button>

                </View>


                <View style={styles.botaoVotarAvancar}>
                    <Button title='Voltar' onPress={''}></Button>
                    <Button title='Avançar' onPress={''}></Button>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    botaoVotar: {
        backgroundColor: 'purple',
        padding: 4,
        float: 'left',
    },
    botaoAvancar: {
        float: 'right',
    },
    botaoVotarAvancar: {
        float: 'left', 
    }
});