import { View, Text, StyleSheet } from 'react-native'

import { Button2 } from "@/app/components/button2"

export default function Singup(){
    return(
         <View style={styles.container1}>
         <Text style={styles.title}>Meus eventos</Text>

         <Button2 title= "Convites" style={styles.buttonText} />

         <View style={styles.bottomBar}>
        

      </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        padding: 45,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        backgroundColor: '#00988D',
        textShadowColor: '#000000aa',       
        textShadowOffset: { width: 2, height: 2 }, 
        textShadowRadius: 4,  

    },

    title: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 400,
        fontSize: 40,
        textShadowColor: '#000000aa',   
        textShadowOffset: { width: 0.5, height: 0.5 }, 
        textShadowRadius: 0.5,  
        bottom: 310,

    },

    bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '320%',
    height: 68,
    backgroundColor: '#2c6c74',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBarText: {
    color: 'white',
    fontSize: 16,
  },

  buttonText: {
        color: 'black',
        fontSize: 30,
        fontWeight: 300,
        top: 240,
    },


})