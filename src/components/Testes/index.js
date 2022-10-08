import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

export default function Testes(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>
                Testes
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 250,
        flex: 1,
        backgroundColor: '#ffffff',
        marginLeft: 50,
        borderColor: '#2311ff',
        borderRadius: 100,
    },
    texto:{
        fontWeight: 'bold',
        fontSize: 25,
        backgroundColor: '#12ffaa',
        width: 400,
        borderRadius: 100,
        textAlign: 'center',
    },
});