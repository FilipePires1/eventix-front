import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import {
    Modal,
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    TextInput,
    Alert,
} from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import ButtonLigth from "../button-ligth";
import { ParticipanteCardSelected } from "../participante-card-selected";

interface Props {
    visible: string;
    onClose: () => void;
    onSelectParticipante: (participante: { titulo: string; funcao: string }) => void;
}

const participantes = [
    { titulo: "Filipe Pires", autor: "Guitarrista" },
    { titulo: "João Paulo", autor: "Tecladista" },
    { titulo: "Lucas Lima", autor: "Baterista" },
    { titulo: "Matheus Costa", autor: "Baixista" },
    { titulo: "Eduardo Melo", autor: "Ministro" },
];

export default function DlgAdicionarParticipante({
    visible,
    onClose,
    onSelectParticipante,
}: Props) {
    const [selectedParticipante, setSelectedParticipante] = useState<{
        titulo: string;
    } | null>(null);

    const [selectedFuncao, setSelectedFuncao] = useState<string | null>(null);

    const [searchText, setSearchText] = useState("");

    // estado do dropdown
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: "Guitarrista", value: "Guitarrista" },
        { label: "Díacono", value: "Díacono" },
        { label: "Baterista", value: "Baterista" },
        { label: "Baixista", value: "Baixista" },
        { label: "Ministro", value: "Ministro" },
    ]);

    // Filtro corrigido
    const filteredParticipantes = participantes.filter((p) =>
        p.titulo.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleSelectParticipante = () => {
        if (selectedParticipante && selectedFuncao) {
            onSelectParticipante({
                titulo: selectedParticipante.titulo,
                funcao: selectedFuncao,
            });

            setSelectedFuncao(null);
            setSelectedParticipante(null);
        } else {
            Alert.alert("Aviso", "Selecione um participante e uma função");
        }
    };

    const handleCloseModal = () => {
        setSelectedFuncao(null);
        setSelectedParticipante(null);
        onClose();
    };

    return (
        <Modal
            visible={visible === "addParticipante"}
            transparent={true}
            animationType="fade"
            onRequestClose={handleCloseModal}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>

                    {/* Botão de fechar */}
                    <TouchableOpacity style={styles.iconClose} onPress={handleCloseModal}>
                        <MaterialIcons name="close" size={28} color="white" />
                    </TouchableOpacity>

                    <Text style={styles.modalTitle}>Adicionar participante</Text>

                    <View style={{ gap: 10, flexDirection: "row", zIndex: 1000 }}>

                        {/* Barra de Pesquisa */}
                        <View style={styles.searchBar}>
                            <TextInput
                                style={styles.inputSearchBar}
                                placeholder="Pesquisar participantes..."
                                onChangeText={setSearchText}
                                placeholderTextColor="#b5b5b5"
                            />
                            <FontAwesome
                                name="search"
                                size={20}
                                color="#000"
                                style={styles.iconSearchBar}
                            />
                        </View>

                        {/* Dropdown */}
                        <View style={{ flex: 1 }}>
                            <DropDownPicker
                                open={open}
                                value={selectedFuncao}
                                items={items}
                                setOpen={setOpen}
                                setItems={setItems}
                                setValue={(callback) => {
                                    const newValue = callback(selectedFuncao);
                                    setSelectedFuncao(newValue);
                                }}
                                placeholder="Função"
                                style={styles.dropdown}
                                dropDownContainerStyle={styles.dropdownContainer}
                            />
                        </View>

                    </View>

                    <ScrollView
                        style={styles.scrollContainer}
                        contentContainerStyle={styles.scrollContent}
                        showsVerticalScrollIndicator={false}
                    >
                        {filteredParticipantes.length > 0 ? (
                            filteredParticipantes.map((p, index) => (
                                <ParticipanteCardSelected
                                    key={index}
                                    titulo={p.titulo}
                                    autor={p.autor}
                                    selected={selectedParticipante?.titulo === p.titulo}
                                    onPress={() => setSelectedParticipante(p)}
                                />
                            ))
                        ) : (
                            <Text style={styles.noResultsText}>Nenhum participante encontrado</Text>
                        )}
                    </ScrollView>


                    <View style={{ marginTop: 10 }}>
                        <ButtonLigth title="Adicionar participante" onPress={handleSelectParticipante} />
                    </View>

                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: "85%",
        maxHeight: "70%",
        backgroundColor: "#2c6b74",
        borderRadius: 15,
        padding: 20,
        elevation: 10,
        position: "relative",
    },
    iconClose: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 10,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 15,
        color: "white",
        textAlign: "center",
    },
    searchBar: {
        flexDirection: "row",
        flex: 2,
        alignItems: "center",
        backgroundColor: "#FEF5C8",
        borderRadius: 11,
        paddingHorizontal: 10,
        height: 50,
        elevation: 5,
    },
    iconSearchBar: {
        marginRight: 8,
    },
    inputSearchBar: {
        flex: 1,
        fontSize: 16,
        color: "#000",
    },
    dropdown: {
        backgroundColor: "#FEF5C8",
        borderRadius: 11,
        borderColor: "transparent",
        height: 50,
    },
    dropdownContainer: {
        backgroundColor: "#FEF5C8",
        borderColor: "transparent",
    },
    scrollContainer: {
        flexGrow: 1,
        marginBottom: 10,
    },
    scrollContent: {
        paddingBottom: 20,
        gap: 0
    },
    noResultsText: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
        marginTop: 20,
    },
});
