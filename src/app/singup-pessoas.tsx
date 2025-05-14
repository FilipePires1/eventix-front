import { View, Text, StyleSheet } from 'react-native'

export default function Singup(){
    return(
         <View style={styles.container1}>
         <Text style={styles.title}>singup</Text>

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
        fontSize: 60,
        textShadowColor: '#000000aa',   
        textShadowOffset: { width: 0.5, height: 0.5 }, 
        textShadowRadius: 0.5,  

    },

})
    