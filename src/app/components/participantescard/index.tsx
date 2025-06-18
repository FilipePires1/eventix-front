import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView, } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { ParticipanteoCardEdit } from '../participantecardedit'
interface EventoCardProps {
  usuario: string
  funcao: string
}

export function ParticipanteCard({ usuario, funcao }: EventoCardProps) {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.9}
        onPress={() => setVisible(true)}
      >
        <View style={styles.row}>
          <Text style={styles.titulo}>Ver participantes</Text>
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
            <TouchableOpacity
              style={styles.iconClose}
              onPress={() => setVisible(false)}
            >
              <MaterialIcons name="close" size={28} color="white" />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Participantes deste evento</Text>

            <ScrollView
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
            >

              <ParticipanteoCardEdit
              usuario = 'Filipe Pires'
              funcao = 'Guitarrista'/>
              <ParticipanteoCardEdit
              usuario = 'Walter Nogueira'
              funcao = 'Diácono'/>
              <ParticipanteoCardEdit
              usuario = 'Filipe Pires'
              funcao = 'Guitarrista'/>
              <ParticipanteoCardEdit
              usuario = 'Walter Nogueira'
              funcao = 'Diácono'/>
              <ParticipanteoCardEdit
              usuario = 'Filipe Pires'
              funcao = 'Guitarrista'/>
              <ParticipanteoCardEdit
              usuario = 'Walter Nogueira'
              funcao = 'Diácono'/>

            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 50,
    backgroundColor: '#FEF5C8',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titulo: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    maxHeight: '70%',
    backgroundColor: '#2c6b74',
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
    marginBottom: 15,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    height: 80,
    backgroundColor: '#FEF5C8',
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowRadius: 3,
    elevation: 5,
    padding: 20,
    flexDirection: 'row',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 5,
  },
  textModal: {
    fontSize: 15,
  },
  scrollContent: {
    paddingBottom: 20,
  },
})
