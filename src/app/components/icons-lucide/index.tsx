import React from 'react'

import { TouchableOpacity, StyleSheet } from 'react-native'

import { LucideIcon } from 'lucide-react-native'

type Props = {
  Icon: LucideIcon      
  size?: number          
  color?: string        
  onPress: () => void
}

export const IconButton = ({ Icon, color, size, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon color={color} size={size}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
})