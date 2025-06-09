import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { ButtonLigth } from "@/app/components/button-ligth"
import { router } from "expo-router"
import SearchBar from "@/app/components/pesquisa";
import { PerfilCard } from './components/PerfilCard';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

const users = [
  {
    nome: "Henrique Pires",
    funcoes: "Guitarrista, Vocalista",
    nascimento: "17/02/2004",
    sexo: "Masculino",
  },
  {
    nome: "Filipe Pires",
    funcoes: "Guitarrista, Vocalista",
    nascimento: "17/02/2004",
    sexo: "Masculino",
  },
  {
    nome: "Vania Pires",
    funcoes: "Guitarrista, Vocalista",
    nascimento: "17/02/2004",
    sexo: "Masculino",
  },
  {
    nome: "Kayo Jorge",
    funcoes: "Guitarrista, Vocalista",
    nascimento: "17/02/2004",
    sexo: "Masculino",
  }
]

export default function Users() {

  const [searchText, setSearchText] = useState('')

  // Função para filtrar os eventos baseado no texto de busca
  const filteredEventos = users.filter(user =>
    user.nome.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuários</Text>
      {/* Área de conteúdo principal */}
      <View style={styles.content}>
        {/* Container para search e cards */}
        <View style={styles.cardContainer}>
          {/* Campo de pesquisa */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar usuários..."
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
              filteredEventos.map((user, index) => (
                <PerfilCard
                  key={index}
                  nome={user.nome}
                  funcoes={user.funcoes}
                  nascimento={user.nascimento}
                  sexo={user.sexo}
                />

              ))
            ) : (
              <Text style={styles.noResultsText}>
                Nenhum usuário encontrado
              </Text>
            )}
          </ScrollView>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonLigth
            title="Cadastrar usuário" onPress={() => router.navigate('/cadastro-usuarios')} />
          <ButtonLigth
            title="Cadastrar função" onPress={() => router.navigate('/cadastro-funcao')} />
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00988D',
    marginBottom: 20,
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
    gap: 10
  },

  noResultsText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  }
})
