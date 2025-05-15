import { View, Text, StyleSheet } from 'react-native'

import { Button2 } from "@/app/components/button2"

import { router } from "expo-router"

import { Calendar, User, UserPen, CalendarPlus2 } from 'lucide-react-native';

import { IconButton } from '../app/components/icons-lucide'

    export default function Singup(){
        function handleNext () {
        router.navigate("/")
    }
    return(
        <View style={styles.container1}>

            <Text style={styles.title}>Meus Convites</Text>

            <View style={styles.bottomBar}/>

            <View style={styles.tabBar}>

                <IconButton color= 'white' Icon={Calendar} onPress={() => router.navigate('/home')} />
                <IconButton Icon={User} onPress={() => router.navigate('/perfil')} />
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