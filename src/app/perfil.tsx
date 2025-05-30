import { View, Text, StyleSheet } from 'react-native'

import { Button2 } from "@/app/components/button2"

import { router } from "expo-router"

import { IconButton } from '../app/components/icons-lucide'

import { FontAwesome5 } from '@expo/vector-icons'

import { EventoCard2 } from '@/app/components/PerfilCard'

export default function Singup() {
  return (
    <View style={styles.container1}>

      <Text style={styles.title}>Meu perfil</Text>

      <Button2 title="Editar perfil" style={styles.buttonText} onPress={() => router.navigate('/editar-perfil')} />

      <View style={styles.bottomBar} />

      <EventoCard2
        Nome="Filipe Pires Nogueira"
        Funcoes="Guitarrista"
        Nascimento="11/01/2009"
        Sexo='Masculino' />

    </View>
  )
}

const styles = StyleSheet.create({
  container1: {
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

  title: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '400',
    fontSize: 40,
    textShadowColor: '#000000aa',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 0.5,
  },

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '320%',
    height: 72,
    backgroundColor: '#2c6c74',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'black',
    fontSize: 30,
    fontWeight: '300',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 100,
  },
})
