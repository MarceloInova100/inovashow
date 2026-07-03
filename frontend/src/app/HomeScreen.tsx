import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const menus = [
    'Dashboard',
    'Cidade',
    'Expositor',
    'Pessoa',
    'Vendedor',
    'Visita',
  ];

  return (
    <View style={styles.container}>
      {menus.map((item) => (
        <Pressable
          key={item}
          style={styles.button}
          onPress={() => console.log(item)}
        >
          <Text style={styles.buttonText}>{item}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});