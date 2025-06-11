import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router } from "expo-router";
import { Input } from "../app/components/input";
import { Picker } from '@react-native-picker/picker';
import ButtonCancel from './components/button-cancel';
import ButtonDark from './components/button-dark';

export default function Singup() {
  const [selectedSexo, setSelectedSexo] = useState('');
  const [selectedFuncao, setSelectedFuncao] = useState('');
  const [date, setDate] = useState('');

  const formatDate = (input) => {
    // Remove tudo que não é dígito
    let value = input.replace(/\D/g, '');

    // Aplica a formatação
    if (value.length > 2) {
      value = value.substring(0, 2) + '/' + value.substring(2);
    }
    if (value.length > 5) {
      value = value.substring(0, 5) + '/' + value.substring(5, 9);
    }

    return value;
  };

  const handleDateChange = (text) => {
    const formattedDate = formatDate(text);
    setDate(formattedDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar usuário</Text>

      <Input
        placeholder="Nome"
        placeholderTextColor="#b5b5b5" />

      <Input
        placeholder="Data de Nascimento"
        placeholderTextColor="#b5b5b5"
        value={date}
        onChangeText={handleDateChange}
        keyboardType="numeric"
        maxLength={10} />

      <Input
        placeholder="Email"
        placeholderTextColor="#b5b5b5" />

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

      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <ButtonCancel title="Cancelar" onPress={() => router.navigate('/users')} />
        </View>
        <View style={styles.buttonWrapper}>
          <ButtonDark title="Confirmar" onPress={() => router.navigate('/users')} />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 45,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#00988D',
    textShadowColor: '#000000aa',
    textShadowOffset: { width: 2, height: 2 },
    paddingTop: 40,
  },
  title: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '400',
    fontSize: 35,
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
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    marginTop: 10,
  },
  buttonWrapper: {
    flex: 1,
  },
});
