import { router, Slot } from 'expo-router'
import { View, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { IconButton } from '@/app/components/icons-lucide'

export default function Layout() {
    return (
        <View style={styles.container}>
            <Slot /> 
            
            {/* Barra de tabs fixa na parte inferior */}
            <View style={styles.tabBar}>
                <IconButton 
                    Icon={(props) => <FontAwesome5 name="calendar-alt" {...props} />} 
                    size={23} 
                    color="white" 
                    onPress={() => router.navigate('/home')} 
                />
                <IconButton 
                    Icon={(props) => <FontAwesome5 name="calendar-plus" {...props} />} 
                    size={20} 
                    onPress={() => router.navigate('/eventos')} 
                />
                <IconButton 
                    Icon={(props) => <FontAwesome5 name="user-alt" {...props} />} 
                    size={20} 
                    onPress={() => router.navigate('/perfil')} 
                />
                <IconButton 
                    Icon={(props) => <FontAwesome5 name="user-edit" {...props} />} 
                    size={20} 
                    onPress={() => router.navigate('/pessoas')} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00988D',
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#2C6B74',
        paddingVertical: 12,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        gap: 55
    },
})