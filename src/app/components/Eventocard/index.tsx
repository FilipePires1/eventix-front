import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal, TouchableOpacity, } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

interface EventoCardProps {
  id: number
  titulo: string
  funcao: string
  local: string
  data: string
  horario: string
}

export function EventoCard({ titulo, funcao, local, data, horario, id }: EventoCardProps) {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={() => setVisible(true)}>
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
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.iconClose} onPress={() => setVisible(false)}>
              <MaterialIcons name="close" size={28} color="white" />
            </TouchableOpacity>


            <Text style={styles.modalTitle}>{titulo}</Text>
            <Text style={styles.text}>Função: {funcao}</Text>
            <Text style={styles.text}>Local: {local}</Text>
            <Text style={styles.text}>Data: {data}</Text>
            <Text style={styles.text}>Horário: {horario}</Text>

          </View>
        </View>
      </Modal>
    </>
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
    marginHorizontal: 1,
  },
  local: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
  },
  dataHora: {
    alignItems: 'flex-end',
  },
  data: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '400',
  },
  horario: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '400',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#013750',
    borderRadius: 15,
    padding: 20,
    elevation: 10,
    position: 'relative',
  },
  iconClose: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: 'white',
    textAlign: 'center',
  },
  text: {
    color: 'white',
    marginBottom: 4,
    fontSize: 18
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  editButton: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 8,
    marginRight: 10,
  },
  deleteButton: {
    padding: 10,
    backgroundColor: '#D32F2F',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  x: {
    color: '#fff',
    fontWeight: 'bold'
  }
})
