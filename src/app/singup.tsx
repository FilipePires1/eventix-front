import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router } from "expo-router";
import { Picker } from '@react-native-picker/picker';
import Input from '@/app/components/input';
import ButtonDark from '@/app/components/button-dark';
import ButtonCAncel from '@/app/components/button-cancel';

export default function Singup() {
  const [selectedSexo, setSelectedSexo] = useState('');
  const [selectedFuncao, setSelectedFuncao] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar conta</Text>

      <Input placeholder="Digite seu nome..." placeholderTextColor="#b5b5b5" />
      <Input placeholder="Digite sua data de nascimento..." placeholderTextColor="#b5b5b5" />
      <Input placeholder="Digite seu melhor email..." placeholderTextColor="#b5b5b5" />

      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedSexo}
          onValueChange={(itemValue) => setSelectedSexo(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Sexo" value="" />
          <Picker.Item label="Masculino" value="masculino" />
          <Picker.Item label="Feminino" value="feminino" />
        </Picker>
      </View>

      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedFuncao}
          onValueChange={(itemValue) => setSelectedFuncao(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Função" value="" />
          <Picker.Item label="Guitarrista" value="Guitarrista" />
          <Picker.Item label="Diácono" value="Diácono" />
        </Picker>
      </View>

      <View style={styles.BotoesAlinhados}>
        <ButtonCAncel title="Cancelar" onPress={() => router.navigate('/')} />
        <ButtonDark title="Confirmar" onPress={() => router.navigate('/home')} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    backgroundColor: '#00988D',
    textShadowColor: '#000000aa',
    textShadowOffset: { width: 2, height: 2 },
  },
  title: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 38,
    textShadowColor: '#000000aa',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 0.5,
  },
  pickerWrapper: {
    width: '100%',
    backgroundColor: '#FEF5C8',
    borderRadius: 11,
    paddingHorizontal: 0,
    elevation: 8,
    shadowRadius: 7,
  },
  picker: {
    height: 52,
    color: '#000',
  },
  BotoesAlinhados: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 40,
  },
});
