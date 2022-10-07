import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, n, SafeAreaView, TextInput} from 'react-native';

export default function Login(){
    return (
        <view style={styles.principal}>
            <View style={styles.container}>
                <Text>Logo Duozin</Text>
                <StatusBar style="auto" />
                
                <View style={styles.email}>
                    <TextInput style={styles.input} onChangeText={''} value={Text} placeholder='Email'></TextInput>
                </View>
                <View style={styles.senha}>
                    <TextInput style={styles.input} onChangeText={''} value={Text} placeholder='Senha'></TextInput>
                </View>
                <View>
                    <Button title='Voltar' onPress={''}></Button>
                    <Button title='Avançar' onPress={''}></Button>
                </View>
            </View>
        </view>
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