import { View, Text, StyleSheet } from 'react-native'

import { Button } from '@/app/components/button'

import { router } from "expo-router"

import { IconButton } from '../app/components/icons-lucide'

import { FontAwesome5 } from '@expo/vector-icons'

export default function Singup(){
    function handleNext () {
           router.navigate("/")
        }
    return(
         <View style={styles.container1}>
         <Text style={styles.title}>Meus convites</Text>
         
         <View style={styles.bottomBar}>
         
         </View>

         <View style={styles.tabBar}>
         <IconButton Icon={(props) => <FontAwesome5 name="calendar-alt" {...props} />} size={23} color="white" onPress={() => router.navigate('/home')} />
         <IconButton Icon={(props) => <FontAwesome5 name="user-alt" {...props} />} size={20} onPress={() => router.navigate('/perfil')} />
         <IconButton Icon={(props) => <FontAwesome5 name="user-edit" {...props} />} size={20} onPress={() => router.navigate('/pessoas')} />
         <IconButton Icon={(props) => <FontAwesome5 name="calendar-plus" {...props} />} size={20} onPress={() => router.navigate('/eventos')} />
        </View>

        </View>
    )
}

const styles = StyleSheet.create({

container1: { //toda tela

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

title: { //meus enventos

    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 400,
    fontSize: 40,
    textShadowColor: '#000000aa',   
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 0.5,
        
    },

bottomBar: { //retangulo azul inferior

    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '320%',
    height: 72,
    backgroundColor: '#2c6c74',
    justifyContent: 'center',
    alignItems: 'center',

  },

buttonText: { //botao de convites

    color: 'black',
    fontSize: 30,
    fontWeight: 300,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 100,

    },

tabBar: { //lucide icons

    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#2C6B74',
    paddingVertical: 12,
    position: 'absolute',
    bottom: 3,
    width: '100%',
    gap: 55

    },

    buttonTextBlue: { //evento
        color: 'white',
        fontSize: 30,
        fontWeight: 300,
        backgroundColor: '#013750',
      },
    
    

})