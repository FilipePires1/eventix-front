import { View, Text, StyleSheet, Image } from "react-native"

import { router } from "expo-router"

import { Button } from "@/app/components/button"

import { Button2 } from "@/app/components/button2"

import { Input } from "./components/input"

export default function Index() {
    function handleNext () {
       router.navigate("/")
    }
    return (
            <View style={styles.container1}>
            <Text style={styles.title}>Login</Text>

            <Input placeholder="E-mail" placeholderTextColor="#b5b5b5" />
            <Input placeholder="Senha" placeholderTextColor="#b5b5b5" secureTextEntry />


            <Button2 title= "Entrar" style={styles.buttonText} onPress= {() => router.navigate('/home')} />
            <Button2 title= "Cadastrar" style={styles.buttonTextBlue} onPress= {() => router.navigate('/cadastro-usuarios')} />

            <Image
                source={require('../app/components/images/EVENTIX.png')}
                style={styles.logo}
                />
            </View>
    )
}

const styles = StyleSheet.create({

    container1: {
        flex: 1,
        padding: 45,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        backgroundColor: '#00988D',
        textShadowColor: '#000000aa',       
        textShadowOffset: { width: 2, height: 2 }, 
        textShadowRadius: 4,  

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

    logo: {
        width: 150,
        height: 150,
        marginBottom: -180, 
        bottom: -10,  
        alignSelf: 'center', 
    
    },

    buttonBlue: {
        width:"100%",
        height: 52,
        backgroundColor: '#013750',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 7,
        elevation: 8,
    
    },

    buttonText: {
        color: 'black',
        fontSize: 30,
        fontWeight: 300,
    },

    buttonTextBlue: {
        color: 'white',
        fontSize: 30,
        fontWeight: 300,
        backgroundColor: '#013750',
      },
        
    
})
