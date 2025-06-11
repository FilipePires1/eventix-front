import { View, Text, StyleSheet } from 'react-native'

import { router } from "expo-router"

import { Input } from "../app/components/input"
import ButtonDark from './components/button-dark'
import ButtonCancel from './components/button-cancel'
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react'

export default function EditarPerfil() {

    const [selectedSexo, setSelectedSexo] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar perfil</Text>
            <Input placeholder="Nome" />
            <Input placeholder="Data de Nascimento" />
            <Input placeholder="Email" />

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

            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <ButtonCancel title="Cancelar" onPress={() => router.navigate('/perfil')} />
                </View>
                <View style={styles.buttonWrapper}>
                    <ButtonDark title="Confirmar" onPress={() => router.navigate('/perfil')} />
                </View>
            </View>
        </View>
    )
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

    title: { //meus enventos

        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 400,
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
})