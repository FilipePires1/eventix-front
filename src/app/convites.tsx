import { View, Text, StyleSheet } from 'react-native'

export default function Singup() {

    return (
        <View style={styles.container1}>
            <Text style={styles.title}>Meus convites</Text>

            <View style={styles.bottomBar}>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container1: { //toda tela

        flex: 1,
        padding: 45,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 30,
        backgroundColor: '#00988D',
        textShadowColor: '#000000aa',
        textShadowOffset: { width: 2, height: 2 },
        paddingTop: 50,

    },

    title: { //meus enventos

        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 400,
        fontSize: 40,
        textShadowColor: '#000000aa',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 0.5,

    },

    bottomBar: { //retangulo azul inferior

        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '320%',
        height: 72,
        backgroundColor: '#2c6c74',
        justifyContent: 'center',
        alignItems: 'center',

    },

    buttonText: { //botao de convites

        color: 'black',
        fontSize: 30,
        fontWeight: 300,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 100,

    },

    buttonTextBlue: { //evento
        color: 'white',
        fontSize: 30,
        fontWeight: 300,
        backgroundColor: '#013750',
    },



})