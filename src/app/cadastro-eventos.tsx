import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { ButtonLigth } from "@/app/components/button-ligth"
import { router } from "expo-router"
import { Input } from "../app/components/input"
import { ButtonDark } from './components/button-dark'
import ButtonCancel from './components/button-cancel'
import { useState } from 'react'
import { ParticipanteCard } from './components/participantescard'
import DlgAdicionarMusica from './components/dlg-adicionar-musica'
import DlgAdicionarParticipantes from './components/dlg-add-participantes'
import { FontAwesome5 } from '@expo/vector-icons'
import { MusicaCardSelected } from "./components/musica-card-selected"

export default function CadastroEvento() {
    const [date, setDate] = useState('');
    const [openDialog, setOpenDialog] = useState<string>('')
    const [selectedSongs, setSelectedSongs] = useState<{ titulo: string; autor: string, tom: string }[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const formatDate = (input: string) => {
        let value = input.replace(/\D/g, '');

        if (value.length > 2) value = value.substring(0, 2) + '/' + value.substring(2);
        if (value.length > 5) value = value.substring(0, 5) + '/' + value.substring(5, 9);

        return value;
    };

    const handleDateChange = (text: string) => {
        setDate(formatDate(text));
    };

    const handleSelectSong = (song: { titulo: string; autor: string; tom: string }) => {
        setSelectedSongs(prev => {
            if (prev.some(s => s.titulo === song.titulo && s.autor === song.autor && s.tom === song.tom)) {
                return prev;
            }
            return [...prev, song];
        });

        setOpenDialog('');
    };

    const handleDeleteSong = (index: number) => {
        setSelectedSongs(prev => prev.filter((_, i) => i !== index));

        if (selectedIndex === index) setSelectedIndex(null);
    };

    const showAlert = (index: number) => {
        Alert.alert(
            "Remover",
            "Você deseja remover essa música?",
            [
                { text: "Voltar", style: "cancel" },
                {
                    text: "Remover",
                    style: "destructive",
                    onPress: () => handleDeleteSong(index),
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Cadastrar evento</Text>

                <Input placeholder="Digite o nome do evento..." placeholderTextColor="#b5b5b5" />
                <Input placeholder="Digite o local do evento..." placeholderTextColor="#b5b5b5" />

                <Input
                    placeholder="Digite a data do evento..."
                    placeholderTextColor="#b5b5b5"
                    value={date}
                    onChangeText={handleDateChange}
                    keyboardType="numeric"
                    maxLength={10}
                />

                <Input placeholder="Digite o horário do evento..." placeholderTextColor="#b5b5b5" />

                {/* Participantes */}
                <ButtonLigth title="Adicionar Participantes" onPress={() => setOpenDialog('addParticipante')} />

                <DlgAdicionarParticipantes
                    visible={openDialog}
                    onClose={() => setOpenDialog('')}
                    onSelectParticipante={() => { }}
                />

                <ParticipanteCard usuario='' funcao='' />

                {/* Músicas */}
                <ButtonLigth title="Adicionar Músicas" onPress={() => setOpenDialog('addSong')} />

                <DlgAdicionarMusica
                    visible={openDialog}
                    onClose={() => setOpenDialog('')}
                    onSelectSong={handleSelectSong}
                />

                <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    {selectedSongs.map((song, index) => (
                        <View key={index} style={{ width: "100%" }}>
                            <MusicaCardSelected
                                titulo={song.titulo}
                                autor={song.autor}
                                selected={selectedIndex === index}
                                onPress={() => setSelectedIndex(index)}
                            />

                            <TouchableOpacity
                                onPress={() => showAlert(index)}
                                style={{ position: "absolute", right: 20, top: 25 }}
                            >
                                <FontAwesome5 name='trash' size={25} color="#F23E02" />
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
    },

    title: {
        color: 'white',
        fontWeight: '400',
        fontSize: 35,
        textShadowColor: '#000000aa',
        textShadowOffset: { width: 0.5, height: 0.5 },
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

    scrollContainer: {
        width: '100%',
    },
});
