import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function CidadeForm() {
  const [cidade, setCidade] = useState('');
  const [codibge, setCodibge] = useState('');
  const [uf, setUf] = useState('');

  const salvar = () => {
    if (!cidade.trim()) {
      Alert.alert('Validação', 'Informe a cidade.');
      return;
    }

    if (!uf.trim()) {
      Alert.alert('Validação', 'Informe a UF.');
      return;
    }

    const dados = {
      cidade,
      codibge,
      uf: uf.toUpperCase(),
    };

    console.log(dados);

    Alert.alert(
      'Sucesso',
      'Cadastro realizado com sucesso!'
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cadastro de Cidade
      </Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Cidade *</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome da cidade"
          value={cidade}
          onChangeText={setCidade}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Código IBGE</Text>

        <TextInput
          style={styles.input}
          placeholder="Código IBGE"
          value={codibge}
          onChangeText={setCodibge}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>UF *</Text>

        <TextInput
          style={styles.input}
          placeholder="PR"
          value={uf}
          onChangeText={text =>
            setUf(text.toUpperCase())
          }
          maxLength={2}
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
    marginTop: 15,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});