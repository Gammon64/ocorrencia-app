import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

type UserFormProps = {
  onSubmitFunction: (login: string, senha: string) => void;
};

const UserForm = ({ onSubmitFunction }: UserFormProps) => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={login}
        onChangeText={setLogin}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
      />
      <Button title="Enviar" onPress={() => onSubmitFunction(login, senha)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 16,
    gap: 12,
    width: "100%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
});

export default UserForm;
