import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'

interface ConviteCardProps {
  titulo: string
  funcao: string
  local: string
  data: string
  horario: string
  onCancel: () => void
}
export function ConviteCard({ titulo, funcao, local, data, horario, onCancel }: ConviteCardProps) {
  
  const showAlert = () => {
  Alert.alert(
      'Cancelar',
      'Você deseja recusar o convite?',
      [
        {
          text: 'Voltar',
          style: 'cancel',
        },
        {
          text: 'Recusar',
          style: 'destructive',
          onPress: onCancel,
        },
      ],
      { cancelable: false }
    )
  }

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
      <View style={styles.conviteButton}>
        <TouchableOpacity style={styles.rejectButton} onPress={showAlert}>
          <Text style={styles.rejectText}>Recusar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmText}>Confirmar</Text>
        </TouchableOpacity>
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

  rejectButton: {
    backgroundColor: '#f23e02',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    shadowRadius: 3,
    elevation: 8,
  },

  rejectText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },

  confirmButton: {
    backgroundColor: '#Fef5c8',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    shadowRadius: 3,
    elevation: 8,
  },

  confirmText: {
    color: '#000',
    fontWeight: 'bold',
  },

  conviteButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  }

});
