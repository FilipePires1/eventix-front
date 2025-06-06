import { View, Text, StyleSheet } from "react-native"
import { router, Link } from "expo-router"
import { Input } from "./components/input"
import ButtonDark from "./components/button-dark"

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <View style={styles.form}>
                <Input placeholder="Digite seu e-mail..." placeholderTextColor="#b5b5b5" />
                <Input placeholder="Digite sua senha" placeholderTextColor="#b5b5b5" secureTextEntry />


                <ButtonDark title="Entrar" onPress={() => router.navigate('/home')} />
        
                <Link href={'/(auth)/singup/page'} style={styles.link}>
                    <Text>Ainda não possui uma conta? Cadastre-se</Text>
                </Link>    
            </View>

            {/* <Image
                source={require('../app/components/images/EVENTIX.png')}
                style={styles.logo}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        backgroundColor: '#00988D'
    },

    title: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 400,
        fontSize: 60,
        textShadowColor: '#000000aa',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 0.5,

    },

    form: {
        width: '75%',
        gap: 20,
    },

    link: {
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    },
})
