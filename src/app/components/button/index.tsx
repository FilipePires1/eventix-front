import React from 'react'

import { TouchableOpacity, Text, StyleSheet } from 'react-native'

type Props = {
  title: string
  style?: object
  onPress: () => void
};

export function Button({ title, style, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonTextBlue}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width:"100%",
        height: 52,
        backgroundColor: '#FEF5C8',
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 7,
        elevation: 8,
  },

  buttonTextBlue: {
    color: 'white',
    fontSize: 25,
    fontWeight: 400,
    
  },

})

export default Button