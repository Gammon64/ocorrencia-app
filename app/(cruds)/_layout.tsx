import { Stack } from "expo-router";

export default function CrudLayout() {
  return (
    <Stack>
      <Stack.Screen name="clientes" />
      <Stack.Screen name="enderecos" />
      <Stack.Screen name="ocorrencias" />
    </Stack>
  );
}
