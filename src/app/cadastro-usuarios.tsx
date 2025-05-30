import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button } from "@/app/components/button";
import { router } from "expo-router";
import { IconButton } from '../app/components/icons-lucide';
import { Input } from "../app/components/input";
import { FontAwesome5 } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export default function Singup() {
  const [selectedSexo, setSelectedSexo] = useState('');
  const [selectedFuncao, setSelectedFuncao] = useState('');

  function handleNext() {
    router.navigate("/");
  }

  return (
    <View style={styles.container1}>
      <Text style={styles.title}>Cadastro de usuário</Text>

      <Input placeholder="Nome" placeholderTextColor="#b5b5b5" />
      <Input placeholder="Data de Nascimento" placeholderTextColor="#b5b5b5" />
      <Input placeholder="Email" placeholderTextColor="#b5b5b5" />

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
        <Button title="Cancelar" style={styles.buttonText} onPress={() => router.navigate('/pessoas')} />
        <Button title="Confirmar" style={styles.buttonText2} onPress={() => router.navigate('/pessoas')} />
      </View>

      <View style={styles.bottomBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 45,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 40,
    backgroundColor: '#00988D',
    textShadowColor: '#000000aa',
    textShadowOffset: { width: 2, height: 2 },
    paddingTop: 50,
  },
  title: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '400',
    fontSize: 40,
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
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '320%',
    height: 72,
    backgroundColor: '#2c6c74',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    justifyContent: 'center',
    backgroundColor: '#f23e02',
    paddingVertical: 12,
    width: '50%',
    alignItems: 'center',
    height: 52,
  },
  buttonText2: {
    justifyContent: 'center',
    backgroundColor: '#013750',
    paddingVertical: 12,
    width: '50%',
    alignItems: 'center',
    height: 52,
  },
  BotoesAlinhados: {
    flexDirection: 'row',
    gap: 50,
    top: 58,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#2C6B74',
    paddingVertical: 12,
    position: 'absolute',
    bottom: 3,
    width: '100%',
    gap: 55,
  },
});
