import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import {
  Modal,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import ButtonLigth from "../button-ligth";
import { MusicaCardSelected } from "../musica-card-selected";

interface Props {
  visible: string;
  onClose: () => void;
}

const musicas = [
  {
    titulo: "Música A",
    autor: "Pessoa A"
  },
  {
    titulo: "Música B",
    autor: "Pessoa B"
  },
  {
    titulo: "Música C",
    autor: "Pessoa C"
  },
  {
    titulo: "Música D",
    autor: "Pessoa D"
  },
  {
    titulo: "Música E",
    autor: "Pessoa E"
  },
  {
    titulo: "Música F",
    autor: "Pessoa F"
  },
]


export default function DlgAdicionarMusica({ visible, onClose }: Props) {
  const [selectedTom, setSelectedTom] = useState("");
  const [selectedSong, setSelectedSong] = useState<string>('');
  const [searchText, setSearchText] = useState('')

  const filteredMusicas = musicas.filter(musica =>
    musica.titulo.toLowerCase().includes(searchText.toLowerCase()) || 
    musica.autor.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <>
      <Modal
        visible={visible === 'addSong'}
        transparent={true}
        animationType="fade"
        onRequestClose={onClose}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.iconClose} onPress={onClose}>
              <MaterialIcons name="close" size={28} color="white" />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Adicionar música</Text>

            <View style={{ gap: 10, flexDirection: "row" }}>
              <View style={styles.searchBar}>
                <TextInput
                  style={styles.inputSearchBar}
                  placeholder="Pesquisar"
                  onChangeText={setSearchText}
                />
                <FontAwesome
                  name="search"
                  size={20}
                  color="#000"
                  style={styles.iconSearchBar}
                />
              </View>

              <View style={styles.picker}>
                <Picker
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedTom(itemValue)
                  }
                  selectedValue={selectedTom}
                >
                  <Picker.Item label="Tom" value="" enabled={false} />
                  <Picker.Item label="C" value="C" />
                  <Picker.Item label="C#" value="C#" />
                  <Picker.Item label="D" value="D" />
                  <Picker.Item label="D#" value="D#" />
                  <Picker.Item label="E" value="E" />
                  <Picker.Item label="F" value="F" />
                  <Picker.Item label="F#" value="F#" />
                  <Picker.Item label="G" value="G" />
                  <Picker.Item label="G#" value="G#" />
                  <Picker.Item label="A" value="A" />
                  <Picker.Item label="A#" value="A#" />
                  <Picker.Item label="B" value="B" />
                </Picker>
              </View>
            </View>

            <ScrollView
              style={styles.scrollContainer}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
            >
              {filteredMusicas.length > 0 ? (
                filteredMusicas.map((musica, index) => (
                  <MusicaCardSelected 
                    key={index} 
                    autor={musica.autor} 
                    titulo={musica.titulo} 
                    selected={selectedSong == musica.titulo}
                    onPress={() => setSelectedSong(musica.titulo)}
                  />
                ))
              ) : (
                <Text style={styles.noResultsText}>
                  Nenhuma música encontrada
                </Text>
              )}
            </ScrollView>

            <View style={{marginTop: 10}}>
                <ButtonLigth title="Adicionar Música" onPress={() => {}}/>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 50,
    backgroundColor: "#FEF5C8",
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 3,
  },
  row: {
    flexDirection: "row",
  },
  titulo: {
    color: "#000",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
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
  button: {
    width: "100%",
    height: 80,
    backgroundColor: "#FEF5C8",
    borderRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
    shadowRadius: 3,
    elevation: 5,
    padding: 20,
    flexDirection: "row",
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 5,
  },
  textModal: {
    fontSize: 15,
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
  picker: {
    flex: 1,
    backgroundColor: "#FEF5C8",
    borderRadius: 11,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  scrollContainer: {
    flexGrow: 1,
    marginBottom: 10
  },
  noResultsText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  }
});
