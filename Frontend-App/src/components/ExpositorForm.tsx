import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function ExpositorForm() {
  const [categoria, setCategoria] = useState('');
  const [nome, setNome] = useState('');

  const salvar = () => {
    if (!categoria.trim()) {
      Alert.alert('Validação', 'Informe a categoria.');
      return;
    }

    if (!nome.trim()) {
      Alert.alert('Validação', 'Informe o nome do expositor.');
      return;
    }

    const dados = {
      categoria,
      nome,
    };

    console.log(dados);

    Alert.alert(
      'Sucesso',
      'Expositor cadastrado com sucesso!'
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cadastro de Expositor
      </Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Categoria *</Text>

        <TextInput
          style={styles.input}
          placeholder="Informe a categoria"
          value={categoria}
          onChangeText={setCategoria}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nome *</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome do expositor"
          value={nome}
          onChangeText={setNome}
        />
      </View>

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
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#0D6EFD',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});