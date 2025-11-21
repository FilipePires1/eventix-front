import { View, Text, StyleSheet } from 'react-native'
import { router } from "expo-router"
import { Input } from "./components/input"
import { ButtonDark } from './components/button-dark'
import ButtonCancel from './components/button-cancel'

export default function CadastroMusica() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastrar música</Text>

            <Input
                placeholder="Título da música..."
                placeholderTextColor="#b5b5b5"
            />
            <Input
                placeholder="Versão da música..."
                placeholderTextColor="#b5b5b5"
            />
            <Input
                placeholder="Link da música..."
                placeholderTextColor="#b5b5b5"
            />
            <Input
                placeholder="Letra da música (link)..."
                placeholderTextColor="#b5b5b5"
            />
            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <ButtonCancel title="Cancelar" onPress={() => router.navigate('/musicas')} />
                </View>
                <View style={styles.buttonWrapper}>
                    <ButtonDark title="Confirmar" onPress={() => router.navigate('/musicas')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 45,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        backgroundColor: '#00988D',
        textShadowColor: '#000000aa',
        textShadowOffset: { width: 2, height: 2 },
        paddingTop: 40,
    },

    title: { //meus enventos

        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 400,
        fontSize: 35,
        textShadowColor: '#000000aa',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 0.5,
        position: "absolute",
        top: 60
    },

    buttonText: { //botao de cancelar

        justifyContent: 'center',
        backgroundColor: '#f23e02',
        paddingVertical: 12,
        width: '50%',
        alignItems: 'center',
        height: 52,

    },

    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        marginTop: 10,
    },

    buttonWrapper: {
        flex: 1,
    },
})