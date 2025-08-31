import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { ButtonLigth } from "@/app/components/button-ligth"
import { router } from "expo-router"
import { Input } from "../app/components/input"
import { ButtonDark } from './components/button-dark'
import ButtonCancel from './components/button-cancel'
import { useState } from 'react'
import { ParticipanteCard } from './components/participantescard'
import DlgAdicionarMusica from './components/dlg-adicionar-musica'
import { FontAwesome5 } from '@expo/vector-icons'

export default function CadastroEvento() {
    const [date, setDate] = useState('');
    const [openDialog, setOpenDialog] = useState<string>('')
    const [selectedSongs, setSelectedSongs] = useState<{titulo: string; autor: string, tom: string}[]>([]);

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

   const handleSelectSong = (song: { titulo: string; autor: string, tom: string }) => {
        setSelectedSongs((prev) => {
            if (prev.find((s) => s.titulo === song.titulo && s.autor === song.autor && s.tom === song.tom)) {
                return prev;
            }
            return [...prev, song];
        });
        setOpenDialog('');
    };

    const handleDeleteSong = (index: number) => {
        setSelectedSongs((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
            showsVerticalScrollIndicator={false}
        >
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
                    onSelectSong={handleSelectSong}
                />

                <ScrollView
                    style={styles.scrollContainer}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {selectedSongs.map((song, index) => (
                        <View style={styles.card} key={index}>
                            <View>
                                <Text style={styles.text}>Título: {song.titulo}</Text>
                                <Text style={styles.text}>Autor: {song.autor}</Text>
                                <Text style={styles.text}>Tom: {song.tom}</Text>
                            </View>
                            <TouchableOpacity onPress={() => handleDeleteSong(index)}>
                                <FontAwesome5
                                    name='trash'
                                    size={25}
                                    color="#F23E02"
                                />
                            </TouchableOpacity>
                        </View>                    
                    ))}
                </ScrollView>

                <View style={styles.buttonContainer}>
                    <View style={styles.buttonWrapper}>
                        <ButtonCancel title="Cancelar" onPress={() => router.navigate('/eventos')} />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <ButtonDark title="Confirmar" onPress={() => router.navigate('/eventos')} />
                    </View>
                </View>
            </View>
        </ScrollView>
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
    card: {
        backgroundColor: "#013750",
        borderRadius: 15,
        padding: 18,
        marginVertical: 8,
        width: "100%",
        elevation: 4,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "300",
    },
    scrollContainer: {
        width: '100%',
        flex: 1,
        marginBottom: 10
    },
    scrollContent: {
        paddingBottom: 20,
    },
})