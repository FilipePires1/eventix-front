import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function FunçaoPicker() {
  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        placeholder={{ label: 'Selecione uma função...', value: null }}
        items={[
          { label: 'Guitarrista', value: 'Guitarrista' },
          { label: 'Diácono', value: 'Diácono' },
        ]}
        style={{
          inputIOS: styles.picker,
          inputAndroid: styles.picker,
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
  picker: {
    width: '100%',
    height: 52,
    backgroundColor: '#FEF5C8',
    borderRadius: 11,
    padding: 10,
    shadowRadius: 7,
    elevation: 8,
    color: '#000',
    fontSize: 16,
    justifyContent: 'center',
  },
});
