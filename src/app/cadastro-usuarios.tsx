import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Input } from "../app/components/input";
import DropDownPicker from "react-native-dropdown-picker";
import ButtonCancel from "./components/button-cancel";
import ButtonDark from "./components/button-dark";

export default function Singup() {
  const [selectedSexo, setSelectedSexo] = useState<string | null>(null);
  const [selectedFuncao, setSelectedFuncao] = useState<string | null>(null);
  const [date, setDate] = useState("");

  // estado para abrir/fechar dropdowns
  const [openSexo, setOpenSexo] = useState(false);
  const [openFuncao, setOpenFuncao] = useState(false);

  const [sexoItems, setSexoItems] = useState([
    { label: "Masculino", value: "masculino" },
    { label: "Feminino", value: "feminino" },
  ]);

  const [funcaoItems, setFuncaoItems] = useState([
    { label: "Guitarrista", value: "Guitarrista" },
    { label: "Diácono", value: "Diácono" },
  ]);

  const formatDate = (input: string) => {
    let value = input.replace(/\D/g, "");
    if (value.length > 2) {
      value = value.substring(0, 2) + "/" + value.substring(2);
    }
    if (value.length > 5) {
      value = value.substring(0, 5) + "/" + value.substring(5, 9);
    }
    return value;
  };

  const handleDateChange = (text: string) => {
    const formattedDate = formatDate(text);
    setDate(formattedDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar usuário</Text>

      <Input placeholder="Nome" placeholderTextColor="#b5b5b5" />

      <Input
        placeholder="Data de Nascimento"
        placeholderTextColor="#b5b5b5"
        value={date}
        onChangeText={handleDateChange}
        keyboardType="numeric"
        maxLength={10}
      />

      <Input placeholder="Email" placeholderTextColor="#b5b5b5" />

      {/* Dropdown Sexo */}
      <DropDownPicker
        open={openSexo}
        value={selectedSexo}
        items={sexoItems}
        setOpen={setOpenSexo}
        setValue={setSelectedSexo}
        setItems={setSexoItems}
        placeholder="Sexo"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        zIndex={3000}
        zIndexInverse={1000}
      />

      {/* Dropdown Função */}
      <DropDownPicker
        open={openFuncao}
        value={selectedFuncao}
        items={funcaoItems}
        setOpen={setOpenFuncao}
        setValue={setSelectedFuncao}
        setItems={setFuncaoItems}
        placeholder="Função"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        zIndex={2000}
        zIndexInverse={2000}
      />

      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <ButtonCancel
            title="Cancelar"
            onPress={() => router.navigate("/users")}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <ButtonDark
            title="Confirmar"
            onPress={() => router.navigate("/users")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 45,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#00988D",
    paddingTop: 40,
  },
  title: {
    color: "white",
    fontWeight: "400",
    fontSize: 35,
    textAlign: "center",
    textShadowColor: "#000000aa",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 0.5,
  },
  dropdown: {
    width: "100%",
    backgroundColor: "#FEF5C8",
    borderRadius: 11,
    borderColor: "transparent",
    elevation: 8,
    shadowRadius: 7,
  },
  dropdownContainer: {
    backgroundColor: "#FEF5C8",
    borderColor: "transparent",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginTop: 10,
  },
  buttonWrapper: {
    flex: 1,
  },
});
