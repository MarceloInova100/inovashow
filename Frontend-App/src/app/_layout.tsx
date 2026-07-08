import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Home' }}
      />

      <Stack.Screen
        name="dashboard"
        options={{ title: 'Dashboard' }}
      />

      <Stack.Screen
        name="cidade"
        options={{ title: 'Cidade' }}
      />

      <Stack.Screen
        name="expositor"
        options={{ title: 'Expositor' }}
      />

      <Stack.Screen
        name="pessoa"
        options={{ title: 'Pessoa' }}
      />

      <Stack.Screen
        name="vendedor"
        options={{ title: 'Vendedor' }}
      />

      <Stack.Screen
        name="visita"
        options={{ title: 'Visita' }}
      />
    </Stack>
  );
}