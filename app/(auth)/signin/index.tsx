import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      {/* UserForm */}
      <Link href="/(auth)/SignUp">Criar nova conta</Link>
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
