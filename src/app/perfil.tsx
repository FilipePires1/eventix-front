import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { ButtonLigth } from "@/app/components/button-ligth"

import { router } from "expo-router"

import { IconButton } from '../app/components/icons-lucide'

import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'

import { EventoCard2 } from '@/app/components/PerfilCard'

export default function Singup() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Meu perfil</Text>

      <ButtonLigth title="Editar perfil" style={styles.buttonText} onPress={() => router.navigate('/editar-perfil')} />

      <EventoCard2
        Nome="Filipe Pires Nogueira"
        Funcoes="Guitarrista"
        Nascimento="11/01/2009"
        Sexo='Masculino' />

      <View style={styles.button}>
        <View style={styles.buttonText}>
          <ButtonLigth title="Editar Perfil" onPress={() => router.navigate('/editar-perfil')} />
        </View>

        <TouchableOpacity style={styles.buttonCancel} onPress={() => router.navigate('/')}>
          <MaterialIcons name="logout" size={25} color="#fff" />
          <Text style={styles.buttonTextCancel}>Sair</Text>
        </TouchableOpacity>

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
    gap: 18,
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

  buttonText: {
    width: '60%',

  },

  buttonCancel: {

    width: '40%',
    height: 50,
    backgroundColor: '#F23E02',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 3,
    flexDirection: 'row',
    color: 'white'
   
  },

  button: {
    flexDirection: 'row',
    gap: 10

  },

  buttonTextCancel: {
    color: 'white',
    fontSize: 25,
  },
  
})
