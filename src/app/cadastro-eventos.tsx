import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ButtonLigth } from "@/app/components/button-ligth";
import { router } from "expo-router";
import { Input } from "../app/components/input";
import { ButtonDark } from './components/button-dark';
import ButtonCancel from './components/button-cancel';
import { useState } from 'react';
import { ParticipanteCard } from './components/participantescard';
import DlgAdicionarMusica from './components/dlg-adicionar-musica';
import { FontAwesome5 } from '@expo/vector-icons';
import DlgAdicionarParticipante from './components/dlg-adicionar-participantes';

export default function CadastroEvento() {
    const [date, setDate] = useState('');
    const [openDialog, setOpenDialog] = useState<string>('');
    const [selectedSongs, setSelectedSongs] = useState<{ titulo: string; autor: string; tom: string }[]>([]);
    const [selectedPessoas, setSelectedPessoas] = useState<{ nome: string; funcao: string }[]>([]);

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
            if (prev.find(s => s.titulo === song.titulo && s.autor === song.autor && s.tom === song.tom)) return prev;
            return [...prev, song];
        });
        setOpenDialog('');
    };

    const handleDeleteSong = (index: number) => {
        setSelectedSongs(prev => prev.filter((_, i) => i !== index));
    };

    const handleSelectPessoa = (pessoa: { nome: string; funcao: string }) => {
        setSelectedPessoas(prev => {
            if (prev.find(p => p.nome === pessoa.nome && p.funcao === pessoa.funcao)) return prev;
            return [...prev, pessoa];
        });
        setOpenDialog('');
    };

    const handleDeletePessoa = (index: number) => {
        setSelectedPessoas(prev => prev.filter((_, i) => i !== index));
    };

    return (
       
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

                {/* Botão e modal de Participantes */}
                <ButtonLigth title="Adicionar Participantes" onPress={() => setOpenDialog('addParticipante')} />
                <DlgAdicionarParticipante
                    visible={openDialog}
                    onClose={() => setOpenDialog('')}
                    onSelectPessoa={handleSelectPessoa}
                />
                <ParticipanteCard
                    usuario=''
                    funcao='' />
                {/* Lista de Participantes Selecionados */}
                

                {/* Botão e modal de Músicas */}
                <ButtonLigth title="Adicionar Músicas" onPress={() => setOpenDialog('addSong')} />
                <DlgAdicionarMusica
                    visible={openDialog}
                    onClose={() => setOpenDialog('')}
                    onSelectSong={handleSelectSong}
                />

                {/* Lista de Músicas Selecionadas */}
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
                                <FontAwesome5 name="trash" size={25} color="#F23E02" />
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "300",
    },
    scrollContainer: {
        width: '100%',
        flex: 1,
        marginBottom: 10,
    },
    scrollContent: {
        paddingBottom: 20,
    },
});
