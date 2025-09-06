import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router, Link } from "expo-router";
import { Input } from "./components/input";
import ButtonDark from "./components/button-dark";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    // estado para erros
    const [emailError, setEmailError] = useState("");
    const [senhaError, setSenhaError] = useState("");

    const handleLogin = async () => {
        let hasError = false;

        // resetar erros
        setEmailError("");
        setSenhaError("");

        if (!email) {
            setEmailError("Campo obrigatório");
            hasError = true;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            setEmailError("Email inválido");
            hasError = true;
        }

        if (!senha) {
            setSenhaError("Campo obrigatório");
            hasError = true;
        } else if (senha.length < 4) {
            setSenhaError("Senha inválida");
            hasError = true;
        }

        if (hasError) return;

        // ip da maquina rede 192.168.15.5
        try {
            const response = await fetch("http://192.168.15.5:8080/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha }),
            });

            if (response.ok) {
                const data = await response.json();
                const token = data.token;
                console.log("Token JWT:", data.token);

                // salva o token no AsyncStorage e espera terminar
                await AsyncStorage.setItem("jwtToken", token);
                
                router.navigate("/home");
            } else {
                const errorData = await response.json();
                if (errorData.msg) {
                    setSenhaError(errorData.msg); // mostra apenas a mensagem amigável
                } else {
                    setSenhaError("Email ou senha inválidos");
                }
            }
        } catch (error) {
            setSenhaError("Não foi possível conectar à API");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <View style={styles.form}>
                <Input
                    placeholder="Digite seu e-mail..."
                    placeholderTextColor="#b5b5b5"
                    value={email}
                    onChangeText={setEmail}
                    style={[
                        styles.input,
                        emailError ? styles.inputError : null,
                    ]}
                />
                {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

                <Input
                    placeholder="Digite sua senha"
                    placeholderTextColor="#b5b5b5"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                    style={[
                        styles.input,
                        senhaError ? styles.inputError : null,
                    ]}
                />
                {senhaError ? <Text style={styles.errorText}>{senhaError}</Text> : null}

                <ButtonDark title="Entrar" onPress={handleLogin} />

                <Link href={'/singup'} style={styles.link}>
                    <Text>Ainda não possui uma conta? Cadastre-se</Text>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        backgroundColor: "#00988D",
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 60,
        textAlign: "center",
        textShadowColor: "#000000aa",
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 0.5,
    },
    form: {
        width: "75%",
        gap: 10,
    },
    input: {
        height: 50, // altura maior
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
    },
    inputError: {
        borderColor: "red",
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginBottom: 5,
        marginLeft: 5,
    },
    link: {
        color: "white",
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
    },
});

