import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

interface EventoCardProps {
  Nome: string
  Funcoes: string
  Nascimento: string
  Sexo: string
}

export function EventoCard2({ Nome, Funcoes, Nascimento, Sexo  }: EventoCardProps) {
  return (
    <View style={styles.card}>

        <Text style={styles.nome}>Nome: {Nome}</Text>

        <Text style={styles.funcoes}>Funções: {Funcoes}</Text>

        <Text style={styles.nascimento}>Nascimento: {Nascimento}</Text>

         <Text style={styles.sexo}>Sexo: {Sexo}</Text>

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
