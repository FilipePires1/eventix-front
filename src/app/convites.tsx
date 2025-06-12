import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { ConviteCard } from './components/convite-card'
import React, { useState } from 'react'
import { ConviteCard } from './components/convite-card'

export default function Singup() {

    const [visivel, setVisivel] = useState(true);

    const convites = [
        {
            titulo: "Culto de adoração",
            funcao: "Diácono",
            local: "Igreja batista shallom",
            data: "06/03/2027",
            horario: "18:00"
        },
        {
            titulo: "Culto de adoração",
            funcao: "Guitarrista",
            local: "Igreja batista shallom",
            data: "19/03/2025",
            horario: "18:30"
        },
        {
            titulo: "Culto de louvor",
            funcao: "Vocalista",
            local: "Igreja batista shallom",
            data: "20/03/2025",
            horario: "19:00"
        },

    ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meus convites</Text>

            <View style={styles.content}>
                <ScrollView
                    style={styles.scrollContainer}
                    contentContainerStyle={styles.scrollContent}     
                    showsVerticalScrollIndicator={false}
                >
                    {convites.map((evento, index) => (
                        <ConviteCard
                            key={index}
                            titulo={evento.titulo}
                            funcao={evento.funcao}            
                            local={evento.local}
                            data={evento.data}
                            horario={evento.horario}
                            onCancel={() => setVisivel(false)}
                        />
                    ))}
                </ScrollView>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#00988D',
        marginBottom: 50,
        paddingBottom: 70
    },
    
    title: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
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
        gap: 5,
    },
})