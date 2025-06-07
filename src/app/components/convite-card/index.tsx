import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ConviteCardProps {
  titulo: string;
  funcao: string;
  local: string;
  data: string;
  horario: string;
}

export function ConviteCard({ titulo, funcao, local, data, horario }: ConviteCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.funcao}>{funcao}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.local}>{local}</Text>
        <View style={styles.dataHora}>
          <Text style={styles.data}>{data}</Text>
          <Text style={styles.horario}>{horario}</Text>
        </View>
      </View>
    </View>
  );
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titulo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '400',
  },
  funcao: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '400',
    marginHorizontal: 1
  },
  local: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 400
  },
  dataHora: {
    alignItems: 'flex-end',
    marginTop: 1,
    
  },
  data: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 400
  },
  horario: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 400,
    
  },
});
