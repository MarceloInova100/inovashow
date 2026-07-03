import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const menus = [
  { title: "Dashboard", route: "/dashboard" },
  { title: "Cidade", route: "/cidade" },
  { title: "Expositor", route: "/expositor" },
  { title: "Pessoa", route: "/pessoa" },
  { title: "Vendedor", route: "/vendedor" },
  { title: "Visita", route: "/visita" },
] as const;

export default function Home() {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#f8f9fa" }}>
      {menus.map((item) => (
        <TouchableOpacity
          key={item.route}
          style={{
            backgroundColor: "#0d6efd", // btn-primary
            padding: 12,
            borderRadius: 6,
            marginBottom: 10,
          }}
          onPress={() => router.push(item.route)}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
