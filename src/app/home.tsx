import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { ButtonLigth } from '@/app/components/button-ligth'
import { router } from "expo-router"
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import { EventoCard } from './components/eventocard';
const eventos = [
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
    {
        titulo: "Culto da família",
        funcao: "Recepcionista",
        local: "Igreja batista shallom",
        data: "21/03/2025",
        horario: "19:30"
    },
    {
        titulo: "Culto de jovens",
        funcao: "Baterista",
        local: "Igreja batista shallom",
        data: "22/03/2025",
        horario: "20:00"
    }
]

export default function Home() {

    const [searchText, setSearchText] = useState('')

    // Função para filtrar os eventos baseado no texto de busca
    const filteredEventos = eventos.filter(evento =>
        evento.titulo.toLowerCase().includes(searchText.toLowerCase())
    )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meus eventos</Text>

            {/* Área de conteúdo principal */}
            <View style={styles.content}>
                {/* Container para search e cards */}
                <View style={styles.cardContainer}>
                    {/* Campo de pesquisa */}
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Pesquisar meus eventos..."
                            placeholderTextColor="#b5b5b5"
                            value={searchText}
                            onChangeText={setSearchText}
                        />
                        <TouchableOpacity
                            style={styles.searchButton}
                            onPress={() => setSearchText('')} // Limpa a busca ao clicar
                        >
                            <FontAwesome5
                                name={searchText ? 'times' : 'search'}
                                size={20}
                                color="#000"
                            />
                        </TouchableOpacity>
                    </View>

                    {/* ScrollView para os cards filtrados */}
                    <ScrollView
                        style={styles.scrollContainer}
                        contentContainerStyle={styles.scrollContent}
                        showsVerticalScrollIndicator={false}
                    >
                        {filteredEventos.length > 0 ? (
                            filteredEventos.map((evento, index) => (
                                <EventoCard
                                    key={index}
                                    titulo={evento.titulo}
                                    funcao={evento.funcao}
                                    local={evento.local}
                                    data={evento.data}
                                    horario={evento.horario} id={0} />
                            ))
                        ) : (
                            <Text style={styles.noResultsText}>
                                Nenhum evento encontrado
                            </Text>
                        )}
                    </ScrollView>
                </View>

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
        marginBottom: 50,
        justifyContent: 'center',
        paddingBottom: 10
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

    cardContainer: {
        flex: 1,
        gap: 20
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

    content: {
        flex: 1,
        paddingHorizontal: 20,
    },

    scrollContainer: {
        flex: 1,
        marginBottom: 10
    },

    scrollContent: {
        paddingBottom: 10,
        gap: 5,
    },

    buttonContainer: {
        width: '100%',
        justifyContent: 'flex-end',
    },

    noResultsText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 20,
    }
})