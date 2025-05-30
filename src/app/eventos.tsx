import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Button2 } from "@/app/components/button2"
import { router } from "expo-router"
import { FontAwesome5 } from '@expo/vector-icons'

export default function Singup() {
  return (
    <View style={styles.container1}>
      <Text style={styles.title}>Eventos</Text>
      
      {/* Campo de pesquisa com botão de lupa */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar eventos..."
          placeholderTextColor="#b5b5b5"
        />
        <TouchableOpacity style={styles.searchButton}>
          <FontAwesome5 name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      
      <Button2 
        title="Criar evento" 
        style={styles.buttonText} 
        onPress={() => router.navigate('/cadastro-eventos')} 
      />
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

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF5C8',
    borderRadius: 10,
    paddingHorizontal: 15,
    width: '100%',
    height: 50,
  },
  
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  
  searchButton: {
    padding: 10,
  },

  buttonText: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 100,
  }
})