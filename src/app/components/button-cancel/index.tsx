import React from 'react'

import { TouchableOpacity, Text, StyleSheet } from 'react-native'

type Props = {
  title: string
  style?: object
  onPress: () => void
};

export function ButtonCancel({ title, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#F23E02',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5
  },
  buttonText: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default ButtonCancel