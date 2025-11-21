import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { router } from "expo-router";
import { Linking } from "react-native";

import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Alert,
} from "react-native";

interface MusicaCardProps {
  titulo: string;
  autor: string;
  link: string
  letra: string
  id: number;
  onOpenVideo: () => void;
  onOpenLetra: () => void;
}

export function MusicaCardEdit({
  titulo,
  autor,
  link,
  letra,
  id,
  onOpenVideo,
  onOpenLetra
}: MusicaCardProps) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleExcluir = () => {
    Alert.alert(
      "Confirmar exclusão",
      "Tem certeza de que deseja excluir esta música?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          onPress: () => {
            console.log("Música excluída!");
            setOpenDialog(false)
            // Chamar API ou atualizar estado
          },
          style: "destructive",
        },
      ]
    );
  };

  return (
    <TouchableOpacity onPress={() => setOpenDialog(true)}>
      <View>

        <View style={styles.card}>
          <Text style={styles.titulo}>{titulo} | </Text>
          <Text
            style={styles.titulo}
            numberOfLines={1}
            ellipsizeMode="tail"
          >{autor}</Text>
        </View>

        <Modal visible={openDialog} transparent={true} animationType="fade">

          <View style={styles.modalOverlay}>

            <View style={styles.modalContainer}>

              <TouchableOpacity style={styles.iconClose} onPress={() => setOpenDialog(false)}>
                <MaterialIcons name="close" size={28} color="white" />
              </TouchableOpacity>

              <Text style={styles.modalTitle}>{titulo}</Text>

              <View style={styles.gap}>
                <Text style={styles.titulo}>Versão: {autor}</Text>

                <TouchableOpacity onPress={() => Linking.openURL(link)}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.link}
                  >
                    Link no Youtube: {link}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL(letra)}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.link}
                  >
                    Letra (link): {letra}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => router.navigate(`../editar-musica/${id}`)}
                >
                  <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={handleExcluir}
                >
                  <Text style={styles.buttonText}>Excluir</Text>
                </TouchableOpacity>

              </View>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#013750",
    borderRadius: 15,
    padding: 18,
    marginVertical: 8,
    width: "100%",
    elevation: 4,
    flex: 1,
    flexDirection: "row",
  },

  titulo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "300",
  },
  autor: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "300",
    marginHorizontal: 1,
  },
  link: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "300",
    marginHorizontal: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "#013750",
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
    marginBottom: 12,
    color: "white",
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  editButton: {
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 8,
    marginRight: 10,
  },
  deleteButton: {
    padding: 10,
    backgroundColor: "#D32F2F",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  gap: {
    gap: 10
  }
});
