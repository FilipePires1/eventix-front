import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native'
import { ButtonLigth } from "@/app/components/button-ligth"
import { router } from "expo-router"
import { PerfilCard } from './components/PerfilCard';
import React, { useState, useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Users() {

  const [users, setUsers] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);

  function formatDate(input: string): string {
    const [day, month, year] = input.split('-');
    return `${day}/${month}/${year}`;
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = await AsyncStorage.getItem("jwtToken");
        if (!token) {
          Alert.alert("No token found");
          return;
        }

        const response = await fetch("http://192.168.15.5:8080/usuarios/admin", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Fetched users:", data);
          setUsers(data);
        } else {
          console.log("Failed to fetch users:", response.status);
        }
      } catch (error) {
        console.log("Erro de conexão", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const [searchText, setSearchText] = useState('')

  // Função para filtrar os eventos baseado no texto de busca
  const filteredEventos = users.filter((user: any) =>
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
            {loading ? (
              <Text style={styles.noResultsText}>Carregando usuários...</Text>
            ) : filteredEventos.length > 0 ? (
              filteredEventos.map((user, index) => (
                <PerfilCard
                  key={index}
                  nome={user.nome}
                  funcoes={user.funcoes.map((f: any) => f.nomeFuncao).join(', ')}
                  nascimento={formatDate(user.dataNascimento)}
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
