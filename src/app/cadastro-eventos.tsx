import { View, Text, StyleSheet } from 'react-native'
import { ButtonLigth } from "@/app/components/button-ligth"
import { router } from "expo-router"
import { Input } from "../app/components/input"
import { ButtonDark } from './components/button-dark'
import ButtonCancel from './components/button-cancel'
import { useState } from 'react'
import { ParticipanteCard } from './components/participantescard'
import DlgAdicionarMusica from './components/dlg-adicionar-musica'

export default function CadastroEvento() {
    const [date, setDate] = useState('');
    const [openDialog, setOpenDialog] = useState<string>('')

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

    const participantes = [
        {
            usuario: "Filipe Pires",
            funcao: "Guitarrista",

        },
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastrar evento</Text>

            <Input
                placeholder="Digite o nome do evento..."
                placeholderTextColor="#b5b5b5"
            />
            <Input
                placeholder="Digite o local do evento..."
                placeholderTextColor="#b5b5b5"
            />
            <Input
                placeholder="Digite a data do evento..."
                placeholderTextColor="#b5b5b5"
                value={date}
                onChangeText={handleDateChange}
                keyboardType="numeric"
                maxLength={10}
            />
            <Input
                placeholder="Digite o horário do evento..."
                placeholderTextColor="#b5b5b5"
            />

            <ButtonLigth title="Adicionar Participantes" onPress={() => router.navigate('/')} />
            <ParticipanteCard
                usuario= ''
                funcao= ''/>
            
            <ButtonLigth title="Adicionar Músicas" onPress={() => setOpenDialog('addSong')} />
            <DlgAdicionarMusica 
                visible={openDialog} 
                onClose={() => setOpenDialog('')} 
            />

            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <ButtonCancel title="Cancelar" onPress={() => router.navigate('/eventos')} />
                </View>
                <View style={styles.buttonWrapper}>
                    <ButtonDark title="Confirmar" onPress={() => router.navigate('/eventos')} />
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
        fontSize: 35,
        textShadowColor: '#000000aa',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 0.5,
    },

    buttonText: { //botao de cancelar

        justifyContent: 'center',
        backgroundColor: '#f23e02',
        paddingVertical: 12,
        width: '50%',
        alignItems: 'center',
        height: 52,

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