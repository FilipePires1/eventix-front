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
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.card,
        selected && styles.cardSelected
      ]}
    >
      <Text style={styles.titulo}>{titulo} | </Text>

      <Text
        style={styles.autor}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {autor}
      </Text>
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
    flexDirection: "row",
    alignItems: "center"
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
    flex: 1,               
  },

  cardSelected: {
    backgroundColor: "#4487a0ff",
  },
});
