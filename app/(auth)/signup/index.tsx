import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar</Text>
      {/* UserForm */}
      <Link href="/(auth)/SignIn">Entrar com conta existente</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
});
