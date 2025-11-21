import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
    titulo: string;
    selected: boolean;
    onPress: () => void;
}

export function ParticipanteCardSelected({ titulo, selected, onPress }: Props) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.card, selected && styles.cardSelected]}
        >
            <View style={{ flexDirection: "row" }}>
                <Text style={styles.titulo}>{titulo}</Text>
                
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
    },
    titulo: {
        color: "#fff",
        fontSize: 18,
    },
    autor: {
        color: "#fff",
        fontSize: 18,
    },
    cardSelected: {
        backgroundColor: "#23a9daff",
    },
});
