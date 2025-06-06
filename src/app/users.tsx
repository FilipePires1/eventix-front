import { View, Text, StyleSheet } from 'react-native'
import { ButtonLigth } from "@/app/components/button-ligth"
import { router } from "expo-router"
import { IconButton } from './components/icons-lucide'
import { FontAwesome5 } from '@expo/vector-icons'
import SearchBar from "@/app/components/pesquisa";

export default function Singup() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuários</Text>
      <SearchBar placeholder="Pesquisar usuários..." placeholderTextColor="#b5b5b5" />
      <ButtonLigth title="Cadastrar usuário" style={styles.buttonText} onPress={() => router.navigate('/cadastro-usuarios')} />
      <ButtonLigth title="Cadastrar função" style={styles.buttonText2} onPress={() => router.navigate('/cadastro-funcao')} />
      <View style={styles.bottomBar} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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

  buttonText2: {
    color: 'black',
    fontSize: 30,
    fontWeight: '300',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 170,

  },

  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#2C6B74',
    paddingVertical: 12,
    position: 'absolute',
    bottom: 3,
    width: '100%',
    gap: 55,
  },
})
