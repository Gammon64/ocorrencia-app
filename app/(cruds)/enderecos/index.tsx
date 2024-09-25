import { StyleSheet, Text, View } from "react-native";

export default function Enderecos() {
  return (
    <View style={styles.container}>
      <Text>Enderecos</Text>
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
