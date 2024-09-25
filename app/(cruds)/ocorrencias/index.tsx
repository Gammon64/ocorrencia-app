import { StyleSheet, Text, View } from "react-native";

export default function Ocorrencias() {
  return (
    <View style={styles.container}>
      <Text>Ocorrencias</Text>
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
