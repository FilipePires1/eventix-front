import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ButtonLigth } from "@/app/components/button-ligth"
import { router } from "expo-router"
import { MaterialIcons } from '@expo/vector-icons'
import { PerfilCard } from '@/app/components/PerfilCard'

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu perfil</Text>

      <View style={styles.cardContainer}>
        <PerfilCard
          nome="Filipe Pires Nogueira"
          funcoes="Guitarrista"
          nascimento="11/01/2009"
          sexo='Masculino' 
        />

        <View style={styles.buttonsRow}>
          <View style={styles.buttonWrapper}>
            <ButtonLigth 
              title="Editar perfil" 
              onPress={() => router.navigate('/editar-perfil')} 
            />
          </View>
          
          <TouchableOpacity 
            style={styles.buttonSair} 
            onPress={() => router.navigate('/')}
          >
            <MaterialIcons name="logout" size={25} color="#fff" />
            <Text style={styles.buttonTextSair}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#00988D',
    paddingTop: 50,
  },
  
  title: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 40,
    textShadowColor: '#000000aa',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 0.5,
    marginBottom: 20,
  },

  cardContainer: {
    width: '100%',
    paddingHorizontal: 25,
  },

  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    width: '100%',
  },

  buttonWrapper: {
    width: '55%', // Ajuste conforme necessário
  },

  buttonSair: {
    width: '40%',
    height: 50,
    backgroundColor: '#F23E02',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 3,
    flexDirection: 'row',
    gap: 8,
  },

  buttonTextSair: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
})