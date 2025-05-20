import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  title: string
  style?: object
  onPress: () => void
};

export function Button2({ title, style, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
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

  buttonText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 400,
  },

});

export default Button2;