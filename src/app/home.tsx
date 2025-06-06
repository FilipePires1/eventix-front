import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { ButtonLigth } from '@/app/components/button-ligth'
import { router } from "expo-router"
import { EventoCard } from './components/Eventocard'

export default function Singup() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meus eventos</Text>

            {/* Área de conteúdo principal com ScrollView */}
            <View style={styles.content}>
                <ScrollView 
                    style={styles.scrollContainer}
                    contentContainerStyle={styles.scrollContent}
                    showsHorizontalScrollIndicator={false}
                >
                    <EventoCard
                        titulo="Culto de adoração"
                        funcao="Diácono"
                        local="Igreja batista shallom"
                        data="06/03/2025"
                        horario="18:00" />
                    <EventoCard
                        titulo="Culto de adoração"
                        funcao="Guitarrista"
                        local="Igreja batista shallom"
                        data="19/03/2025"
                        horario="18:30" />
                    <EventoCard
                        titulo="Culto de adoração"
                        funcao="Guitarrista"
                        local="Igreja batista shallom"
                        data="19/03/2025"
                        horario="18:30" />
                    <EventoCard
                        titulo="Culto de adoração"
                        funcao="Guitarrista"
                        local="Igreja batista shallom"
                        data="19/03/2025"
                        horario="18:30" />
                    <EventoCard
                        titulo="Culto de adoração"
                        funcao="Guitarrista"
                        local="Igreja batista shallom"
                        data="19/03/2025"
                        horario="18:30" />
                    <EventoCard
                        titulo="Culto de adoração"
                        funcao="Guitarrista"
                        local="Igreja batista shallom"
                        data="19/03/2025"
                        horario="18:30" />   
                    {/* Adicione quantos EventoCards precisar */}
                </ScrollView>

                {/* Botão fixo na parte inferior */}
                <View style={styles.buttonContainer}>
                    <ButtonLigth 
                        title="Convites" 
                        onPress={() => router.navigate('/convites')} 
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00988D',
        marginBottom: 50
    },
    
    title: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 40,
        textShadowColor: '#000000aa',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 0.5,
        marginTop: 50,
        marginBottom: 20,
    },

    content: {
        flex: 1,
        paddingHorizontal: 20,
    },

    scrollContainer: {
        flex: 1,
    },

    scrollContent: {
        paddingBottom: 10, // Espaço para o botão e TabBar
        gap: 5,
    },

    buttonContainer: {
        flex: 0.00009,
        width: '100%',
        justifyContent: 'flex-end',
        padding: 80,   
    }
})