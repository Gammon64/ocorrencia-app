import { StyleSheet, Text, View } from "react-native";

export default function Clientes() {
  return (
    <View style={styles.container}>
      <Text>Clientes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
