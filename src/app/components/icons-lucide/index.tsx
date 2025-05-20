import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

type Props = {
  Icon: React.ComponentType<{ size?: number; color?: string }>
  size?: number
  color?: string
  onPress: () => void
}

export const IconButton = ({ Icon, size, color, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon size={size} color={color} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
})
export default IconButton