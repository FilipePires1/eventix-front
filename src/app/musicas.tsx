import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { ButtonLigth } from "@/app/components/button-ligth"
import { router } from "expo-router"
import { FontAwesome5 } from '@expo/vector-icons'
import { useState } from 'react'
import { MusicaCard } from './components/musica-card'

const musicas = [
  {
    titulo: "Música A",
    autor: "Pessoa A"
  },
  {
    titulo: "Música B",
    autor: "Pessoa B"
  },
  {
    titulo: "Música C",
    autor: "Pessoa C"
  },
  {
    titulo: "Música D",
    autor: "Pessoa D"
  },
  {
    titulo: "Música E",
    autor: "Pessoa E"
  },
  {
    titulo: "Música F",
    autor: "Pessoa F"
  },
]


export default function Musicas() {

  const [searchText, setSearchText] = useState('')
  const [showSongDetails, setShowSongDetails] = useState(false)

  // Função para filtrar os eventos baseado no texto de busca
  const filteredEventos = musicas.filter(musica =>
    musica.titulo.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Músicas</Text>

      {/* Área de conteúdo principal */}
      <View style={styles.content}>
        {/* Container para search e cards */}
        <View style={styles.cardContainer}>
          {/* Campo de pesquisa */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar músicas..."
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
              filteredEventos.map((musica, index) => (
                <MusicaCard
                  key={index}
                  id={index}
                  titulo={musica.titulo}
                  autor={musica.autor}
                />
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
            title="+ Nova música"
            onPress={() => router.navigate('/cadastro-musica')}
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