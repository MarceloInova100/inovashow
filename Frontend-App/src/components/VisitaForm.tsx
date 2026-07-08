import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function VisitaForm() {
  const [dataVisita, setDataVisita] = useState('');
  const [idPessoa, setIdPessoa] = useState('');

  const salvar = () => {
    if (!dataVisita.trim()) {
      Alert.alert('Validação', 'Informe a data da visita.');
      return;
    }

    if (!idPessoa.trim()) {
      Alert.alert('Validação', 'Informe a pessoa.');
      return;
    }

    const dados = {
      data_visita: dataVisita,
      Id_Pessoa: Number(idPessoa),
    };

    console.log(dados);

    Alert.alert(
      'Sucesso',
      'Visita cadastrada com sucesso!'
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cadastro de Visita
      </Text>

      <Text style={styles.label}>
        Data da Visita *
      </Text>

      <TextInput
        style={styles.input}
        placeholder="dd/mm/aaaa"
        value={dataVisita}
        onChangeText={setDataVisita}
      />

      <Text style={styles.label}>
        Código da Pessoa *
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Informe o código da pessoa"
        value={idPessoa}
        onChangeText={setIdPessoa}
        keyboardType="numeric"
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
    backgroundColor: '#FFF',
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
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: '#0D6EFD',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});