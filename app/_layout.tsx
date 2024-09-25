import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Ocorrência APP",
        }}
      />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(cruds)" />
    </Stack>
  );
}
