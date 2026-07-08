import { View, Pressable, Text, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';

const menus = [
  { title: "Dashboard", route: "/dashboard" },
  { title: "Cidade", route: "/cidade" },
  { title: "Expositor", route: "/expositor" },
  { title: "Pessoa", route: "/pessoa" },
  { title: "Vendedor", route: "/vendedor" },
  { title: "Visita", route: "/visita" },
] as const;


export default function HomeScreen() {
  const abrirTela = (index: string | undefined) => {
    Alert.alert('Botão clicado', index);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => abrirTela('Dashboard')}
      >
        <Text style={styles.text}>Dashboard</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => abrirTela('Cidade')}
      >
        <Text style={styles.text}>Cidade</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => abrirTela('Expositor')}
      >
        <Text style={styles.text}>Expositor</Text>
      </Pressable>

      <Pressable
              style={styles.button}
              onPress={() => abrirTela('Pessoa')}
            >
              <Text style={styles.text}>Pessoa</Text>
            </Pressable>

            <Pressable
              style={styles.button}
              onPress={() => abrirTela('Vendedor')}
            >
              <Text style={styles.text}>Vendedor</Text>
            </Pressable>

            <Pressable
              style={styles.button}
              onPress={() => abrirTela('Visita')}
            >
              <Text style={styles.text}>Visita</Text>
            </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#1E1E1E',
  },
  button: {
    backgroundColor: '#f0e514',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
});