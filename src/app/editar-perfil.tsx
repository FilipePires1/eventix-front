import { View, Text, StyleSheet } from 'react-native'

import { Button } from "@/app/components/button"

import { router } from "expo-router"

import { IconButton } from '../app/components/icons-lucide'

import { Calendar, User, UserPen, CalendarPlus2 } from 'lucide-react-native'

import { Input } from "../app/components/input"

export default function Singup(){
    function handleNext () {
           router.navigate("/")
        }
    return(
         <View style={styles.container1}>
         <Text style={styles.title}>Editar perfil</Text>
         <Input/>
         <Input/>
         <Input/>
         <Input/>
          <View style={styles.BotoesAlinhados}>
         <Button title= "Cancelar" style={styles.buttonText} onPress= {() => router.navigate('/convites')} />
         <Button title= "Confirmar" style={styles.buttonText2} onPress= {() => router.navigate('/convites')} />
            </View>
         <View style={styles.bottomBar}>

         </View>

         <View style={styles.tabBar}>
         <IconButton Icon={Calendar} onPress={() => router.navigate('/home')} />
         <IconButton color= 'white' Icon={User} onPress={() => router.navigate('/perfil')} />
         <IconButton Icon={UserPen} onPress={() => router.navigate('/cadastro-pessoas')} />
         <IconButton Icon={CalendarPlus2} onPress={() => router.navigate('/cadastro-eventos')} />
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
    gap: 40,
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

buttonText: { //botao de cancelar

    justifyContent: 'center',
    backgroundColor: '#f23e02',
    paddingVertical: 12,
    width: '50%',
    alignItems: 'center',
    height: 52,

    },

buttonText2: { //botao de confirmar

    justifyContent: 'center',
    backgroundColor: '#013750',
    paddingVertical: 12,
    width: '50%',
    alignItems: 'center',
    height: 52,

    },

BotoesAlinhados: {
    flexDirection: 'row',
    gap: 50,
    top: 150
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

})