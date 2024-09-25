import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="SignIn/index"
        options={{
          title: "Entrar",
        }}
      />
      <Stack.Screen
        name="SignUp/index"
        options={{
          title: "Criar nova conta",
        }}
      />
    </Stack>
  );
}
