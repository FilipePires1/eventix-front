import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { router } from "expo-router";
import { Input } from "../app/components/input";
import DropDownPicker from "react-native-dropdown-picker";
import ButtonCancel from "./components/button-cancel";
import ButtonDark from "./components/button-dark";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Singup() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSexo, setSelectedSexo] = useState<string | null>(null);
  const [selectedFuncao, setSelectedFuncao] = useState<number[]>([]);
  const [date, setDate] = useState("");

  // estado para abrir/fechar dropdowns
  const [openSexo, setOpenSexo] = useState(false);
  const [openFuncao, setOpenFuncao] = useState(false);
  const [funcaoItems, setFuncaoItems] = useState<any[]>([]);

  const [sexoItems, setSexoItems] = useState([
    { label: "Masculino", value: "Masculino" },
    { label: "Feminino", value: "Feminino" },
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

  // Buscar funções da API ao montar o componente
  useEffect(() => {
    const fetchFuncoes = async () => {
      const token = await AsyncStorage.getItem("jwtToken");
      console.log("Token JWT:", token);

      try {
        const response = await fetch("http://192.168.15.5:8080/funcao/admin", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Erro ao buscar funções");
        }
        
        const data = await response.json();
        console.log("funcoes", data);
        const lista = data.map((f: any) => ({
          label: f.nome,
          value: f.id,
        }));
        setFuncaoItems(lista);
      } catch (error) {
        console.error("Erro ao buscar funções:", error);
      }
    };

    fetchFuncoes();
  }, []);

  const handleSubmit = async () => {
    if (!nome || !email || !selectedSexo || !selectedFuncao || !date) {
      Alert.alert("Por favor, preencha todos os campos.");
      return;
    }

    // Converte a data para o formato ISO esperado (yyyy-MM-dd)
    const parts = date.split("/"); // se a data estiver como dd/MM/yyyy
    const isoDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

    const usuario = {
      nome,
      email,
      senha: "1234",
      sexo: selectedSexo.charAt(0).toUpperCase() + selectedSexo.slice(1),
      funcoesIds: selectedFuncao,
      dataNascimento: isoDate
    };

    console.log(usuario);

    try {
      const token = await AsyncStorage.getItem("jwtToken");
      console.log("Token JWT:", token);

      const response = await fetch("http://192.168.15.5:8080/usuarios/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(usuario),
      });

      if (response.ok) {
        Alert.alert("Sucesso", "Usuário cadastrado!");
        router.navigate("/users");
      } else {
        const errorText = await response.text();
        Alert.alert("Erro", errorText || "Não foi possível cadastrar");
      }
    } catch (error) {
      Alert.alert("Erro de conexão", "Não foi possível conectar à API");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar usuário</Text>

      <Input
        placeholder="Nome"
        placeholderTextColor="#b5b5b5"
        value={nome}
        onChangeText={setNome}
      />

      <Input
        placeholder="Data de Nascimento"
        placeholderTextColor="#b5b5b5"
        value={date}
        onChangeText={handleDateChange}
        keyboardType="numeric"
        maxLength={10}
      />

      <Input
        placeholder="Email"
        placeholderTextColor="#b5b5b5"
        value={email}
        onChangeText={setEmail}
      />

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

      <DropDownPicker
        multiple={true} // habilita múltipla seleção
        min={0}
        max={10} // limite opcional de quantas funções podem ser escolhidas
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
            onPress={handleSubmit}
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
    position: "absolute",
        top: 60
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
