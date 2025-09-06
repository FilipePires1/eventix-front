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
  onSelectPessoa: (pessoa: { nome: string; funcao: string }) => void;
}

const pessoas = [
  { nome: "Walter" },
  { nome: "Filipe" },
  { nome: "Ozéias" },
  { nome: "Samuel" },
  { nome: "Guimel" },
  { nome: "Henrique" },
];

export default function DlgAdicionarParticipante({
  visible,
  onClose,
  onSelectPessoa,
}: Props) {
  const [selectedFuncao, setSelectedFuncao] = useState<string | null>(null);
  const [selectedPessoa, setSelectedPessoa] = useState<{ nome: string } | null>(null);
  const [searchText, setSearchText] = useState("");

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Diácono", value: "Diácono" },
    { label: "Guitarrista", value: "Guitarrista" },
    { label: "Baterista", value: "Baterista" },
  ]);

  const filteredPessoas = pessoas.filter((pessoa) =>
    pessoa.nome.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSelectPessoa = () => {
    if (selectedPessoa && selectedFuncao) {
      onSelectPessoa({ ...selectedPessoa, funcao: selectedFuncao });
      setSelectedFuncao(null);
      setSelectedPessoa(null);
      onClose();
    } else {
      Alert.alert("Aviso", "Selecione uma pessoa e uma função");
    }
  };

  const handleCloseModal = () => {
    setSelectedFuncao(null);
    setSelectedPessoa(null);
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
          <TouchableOpacity style={styles.iconClose} onPress={handleCloseModal}>
            <MaterialIcons name="close" size={28} color="white" />
          </TouchableOpacity>

          <Text style={styles.modalTitle}>Adicionar Participantes</Text>

          <View style={{ gap: 10, flexDirection: "row", zIndex: 1000 }}>
            <View style={styles.searchBar}>
              <TextInput
                style={styles.inputSearchBar}
                placeholder="Pesquisar"
                value={searchText}
                onChangeText={setSearchText}
              />
              <FontAwesome
                name="search"
                size={20}
                color="#000"
                style={styles.iconSearchBar}
              />
            </View>

            <View style={{ flex: 1 }}>
              <DropDownPicker
                open={open}
                value={selectedFuncao}
                items={items}
                setOpen={setOpen}
                setValue={setSelectedFuncao}
                setItems={setItems}
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
            {filteredPessoas.length > 0 ? (
              filteredPessoas.map((pessoa, index) => (
                <ParticipanteCardSelected
                  key={index}
                  nome={pessoa.nome}
                  selected={selectedPessoa?.nome === pessoa.nome}
                  onPress={() => setSelectedPessoa(pessoa)}
                />
              ))
            ) : (
              <Text style={styles.noResultsText}>Nenhum participante encontrado</Text>
            )}
          </ScrollView>

          <View style={{ marginTop: 10 }}>
            <ButtonLigth title="Adicionar Participante" onPress={handleSelectPessoa} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

// Estilos permanecem os mesmos
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
  scrollContent: {
    paddingBottom: 20,
  },
  searchBar: {
    flexDirection: "row",
    flex: 2,
    alignItems: "center",
    backgroundColor: "#FEF5C8",
    borderRadius: 11,
    paddingHorizontal: 10,
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
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
  noResultsText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
  },
});
