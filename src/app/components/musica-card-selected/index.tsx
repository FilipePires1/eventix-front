import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface MusicaCardProps {
  titulo: string;
  autor: string;
  selected: boolean;
  onPress: () => void;
}

export function MusicaCardSelected({
  titulo,
  autor,
  selected = false,
  onPress
}: MusicaCardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Título: {titulo}</Text>
        <Text style={styles.autor}>Autor: {autor}</Text>
        {selected && (
          <Text style={{color: '#fef5c8', textTransform: 'uppercase'}}>Selecionado</Text>
        )}
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
});
