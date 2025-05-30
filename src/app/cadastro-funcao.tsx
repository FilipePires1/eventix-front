import { View, Text, StyleSheet } from 'react-native'

import { router } from "expo-router"

import { IconButton } from '../app/components/icons-lucide'

import { FontAwesome5 } from '@expo/vector-icons'

import { Input } from '@/app/components/input'

import { Button} from '@/app/components/button'


export default function Singup() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro função</Text>

        <Input style={styles.buttonText4} placeholder="Nome da função" placeholderTextColor="#b5b5b5" />

      <View style={styles.BotoesAlinhados}>

        <Button title= "Cancelar" style={styles.buttonText} onPress= {() => router.navigate('/pessoas')} />
        <Button title= "Cadastrar" style={styles.buttonText2} onPress= {() => router.navigate('/pessoas')} />

      </View>


      <View style={styles.bottomBar} />

    </View>
  )
}

const styles = StyleSheet.create({

  container: { //tela toda

    flex: 1,
    padding: 45,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#00988D',
    textShadowColor: '#000000aa',
    textShadowOffset: { width: 2, height: 2 },
    paddingTop: 50,
  },

  title: { //titulo

    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '400',
    fontSize: 40,
    textShadowColor: '#000000aa',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 0.5,
  },

  bottomBar: { //barra azul inferior

    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '320%',
    height: 72,
    backgroundColor: '#2c6c74',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText4: { //add funcao

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

  buttonText: { //cancelar

    justifyContent: 'center',
    backgroundColor: '#f23e02',
    paddingVertical: 12,
    width: '40%',
    alignItems: 'center',
    height: 52,

  },

  buttonText2: { //cadastrar

    justifyContent: 'center',
    backgroundColor: '#013750',
    paddingVertical: 12,
    width: '40%',
    alignItems: 'center',
    height: 52,
  },

    BotoesAlinhados: { //alinhamento dos botoes cadastrar e cancelar
      flexDirection: 'row',
      gap: 50,
      justifyContent: 'center'
  
  },

})
