import React from 'react'

import { TouchableOpacity, Text, StyleSheet } from 'react-native'

type Props = {
  title: string
  style?: object
  onPress: () => void
};

export function Button({ title, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 52,
    backgroundColor: '#FEF5C8',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8, // Espaçamento vertical padrão
  },
  buttonText: {
    color: '#000',
    fontSize: 25,
    fontWeight: '400',
    textAlign: 'center',
  }
})

export default Button