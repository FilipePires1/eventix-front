import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

interface PerfilCardProps {
  nome: string
  funcoes: string
  nascimento: string
  sexo: string
}

export function PerfilCard({ nome, funcoes, nascimento, sexo  }: PerfilCardProps) {
  return (
    <View style={styles.card}>

        <Text style={styles.nome}>Nome: {nome}</Text>

        <Text style={styles.funcoes}>Funções: {funcoes}</Text>

        <Text style={styles.nascimento}>Nascimento: {nascimento}</Text>

         <Text style={styles.sexo}>Sexo: {sexo}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#013750',
    borderRadius: 15,
    padding: 18,
    marginVertical: 8,
    width: '100%',
    elevation: 4,
  },
 
  nome: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '300',
  },
  funcoes: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '300',
    marginHorizontal: 1
  },
  nascimento: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 300
  },
  sexo: {
    fontSize: 20,
    fontWeight: 300,
    color: '#fff'
    
},
});
