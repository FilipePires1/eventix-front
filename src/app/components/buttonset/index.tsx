import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function SexoPicker() {
  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={[
          { label: 'Masculino', value: 'masculino' },
          { label: 'Feminino', value: 'feminino' },
        ]}
        style={{
          placeholder: {
            color: '#7f7f7f',
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
});
