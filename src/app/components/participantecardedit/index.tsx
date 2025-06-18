import { View, Text, StyleSheet, Alert } from 'react-native'
import { Feather } from '@expo/vector-icons'

interface EventoCardProps {
    usuario: string
    funcao: string
    onCancel: () => void
}

export function ParticipanteoCardEdit({ usuario, funcao, onCancel }: EventoCardProps) {

    const showAlert = () => {
  Alert.alert(
      'Remover',
      'Você deseja remover esse usuário?',
      [
        {
          text: 'Voltar',
          style: 'cancel',
        },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: onCancel,
        },
      ],
      { cancelable: false }
    )
  }
    return (
        <View style={styles.button}>
            <View style={styles.buttonRow}>
                <Text style={styles.textModal}>{usuario}</Text>
                <Text style={styles.textModal}>Função: {funcao}</Text>
            </View>
            <Feather name="trash-2" size={32} color="black" onPress= {showAlert}/>
        </View>
    )
}

const styles = StyleSheet.create({
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
})