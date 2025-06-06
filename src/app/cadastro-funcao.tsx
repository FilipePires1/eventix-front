import { View, Text, StyleSheet } from 'react-native'

import { router } from "expo-router"

import { Input } from '@/app/components/input'

import { ButtonLigth } from '@/app/components/button-ligth'
import ButtonCancel from './components/button-cancel'
import ButtonDark from './components/button-dark'


export default function Singup() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar função</Text>

      <Input style={styles.buttonText} placeholder="Digite o nome da função..." placeholderTextColor="#b5b5b5" />

      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <ButtonCancel title="Cancelar" onPress={() => router.navigate('/users')} />
        </View>
        <View style={styles.buttonWrapper}>
          <ButtonDark title="Confirmar" onPress={() => router.navigate('/users')} />
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

  title: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '400',
    fontSize: 35,
    textShadowColor: '#000000aa',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 0.5,
  },

  buttonText: { //add funcao

    width: '100%',
    height: 52,
    backgroundColor: '#FEF5C8',
    borderRadius: 11,
    padding: 10,
    shadowRadius: 7,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
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
