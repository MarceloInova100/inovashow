
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

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
      <Text style={styles.title}>Home</Text>

      {menus.map((item) => (
        <TouchableOpacity
          key={item}
          style={styles.button}
          onPress={() => console.log(item)}
        >
          <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFC107',
    marginBottom: 20,
  },
  
button: {
  backgroundColor: '#FFC107',
  paddingVertical: 18,
  borderRadius: 15,
  marginBottom: 15,
  borderWidth: 2,
  borderColor: '#FFF',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
