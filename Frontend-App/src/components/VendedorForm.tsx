import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function VendedorForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const validarEmail = (email: string) => {
    if (!email) return true;

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const salvar = () => {
    if (!nome.trim()) {
      Alert.alert('Validação', 'Informe o nome.');
      return;
    }

    if (!validarEmail(email)) {
      Alert.alert('Validação', 'E-mail inválido.');
      return;
    }

    const dados = {
      nome,
      email,
    };

    console.log(dados);

    Alert.alert(
      'Sucesso',
      'Registro salvo com sucesso!'
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cadastro de Vendedor
      </Text>

      <Text style={styles.label}>
        Nome *
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do vendedor"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>
        E-mail
      </Text>

      <TextInput
        style={styles.input}
        placeholder="email@empresa.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={salvar}>
        <Text style={styles.buttonText}>
          Salvar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#0D6EFD',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});