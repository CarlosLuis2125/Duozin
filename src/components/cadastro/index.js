import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, } from 'react-native';

export default function CadastroResponsavel(){
    return(
        <View style={StyleSheet.principal}>
            <View style={StyleSheet.container}>
                <View>
                <Text>Logo Duozin</Text>
                <StatusBar style="auto" />

                </View>
                <View style={styles.nome}>
                    <TextInput style={styles.input} onChangeText={''} value={Text} placeholder='Nome'></TextInput>
                </View>
                <View style={styles.email}>
                    <TextInput style={styles.input} onChangeText={''} value={Text} placeholder='Email'></TextInput>
                </View>
                <View style={styles.email}>
                    <TextInput style={styles.input} onChangeText={''} value={Text} placeholder='Senha'></TextInput>
                </View>

                <View>
                    <Button title='Voltar' onPress={''}></Button>
                    <Button title='Avançar' onPress={''}></Button>
                </View>

            </View>
        </View>
    );
}