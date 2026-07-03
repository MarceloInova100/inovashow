import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function PessoaForm() {
  const [form, setForm] = useState({
    catvisitante: '',
    cidade: '',
    nome: '',
    cpf: '',
    rg: '',
    datanascimento: '',
    sexo: '',
    telefone: '',
    email: '',
    estado: '',
    expositor: '',
    empresa: '',
    cargo: '',
    endereco: '',
    bairro: '',
    cep: '',
    situcliente: '',
  });

  const handleChange = (campo: string, valor: string) => {
    setForm({
      ...form,
      //valor,
    });
  };

  const salvar = () => {
    if (!form.nome) {
      Alert.alert('Validação', 'Informe o nome.');
      return;
    }

    console.log(form);

    Alert.alert(
      'Sucesso',
      'Cadastro realizado com sucesso!'
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Cadastro de Pessoa</Text>

      <Text style={styles.section}>Dados Pessoais</Text>

      <TextInput
        style={styles.input}
        placeholder="Categoria Visitante"
        value={form.catvisitante}
        onChangeText={v => handleChange('catvisitante', v)}
      />

      <TextInput
        style={styles.input}
        placeholder="Nome *"
        value={form.nome}
        onChangeText={v => handleChange('nome', v)}
      />

      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={form.cpf}
        onChangeText={v => handleChange('cpf', v)}
      />

      <TextInput
        style={styles.input}
        placeholder="RG"
        value={form.rg}
        onChangeText={v => handleChange('rg', v)}
      />

      <TextInput
        style={styles.input}
        placeholder="Data Nascimento (dd/mm/aaaa)"
        value={form.datanascimento}
        onChangeText={v => handleChange('datanascimento', v)}
      />

      <TextInput
        style={styles.input}
        placeholder="Sexo (M/F)"
        value={form.sexo}
        onChangeText={v => handleChange('sexo', v)}
        maxLength={1}
      />

      <Text style={styles.section}>Contato</Text>

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={form.telefone}
        onChangeText={v => handleChange('telefone', v)}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={form.email}
        onChangeText={v => handleChange('email', v)}
        keyboardType="email-address"
      />

      <Text style={styles.section}>Endereço</Text>

      <TextInput
        style={styles.input}
        placeholder="Cidade"
        value={form.cidade}
        onChangeText={v => handleChange('cidade', v)}
      />

      <TextInput
        style={styles.input}
        placeholder="Estado"
        value={form.estado}
        onChangeText={v => handleChange('estado', v)}
        maxLength={2}
      />

      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={form.endereco}
        onChangeText={v => handleChange('endereco', v)}
      />

      <TextInput
        style={styles.input}
        placeholder="Bairro"
        value={form.bairro}
        onChangeText={v => handleChange('bairro', v)}
      />

      <TextInput
        style={styles.input}
        placeholder="CEP"
        value={form.cep}
        onChangeText={v => handleChange('cep', v)}
      />

      <Text style={styles.section}>Empresa</Text>

      <TextInput
        style={styles.input}
        placeholder="Empresa"
        value={form.empresa}
        onChangeText={v => handleChange('empresa', v)}
      />

      <TextInput
        style={styles.input}
        placeholder="Cargo"
        value={form.cargo}
        onChangeText={v => handleChange('cargo', v)}
      />

      <TextInput
        style={styles.input}
        placeholder="Expositor"
        value={form.expositor}
        onChangeText={v => handleChange('expositor', v)}
      />

      <TextInput
        style={styles.input}
        placeholder="Situação Cliente"
        value={form.situcliente}
        onChangeText={v => handleChange('situcliente', v)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={salvar}>
        <Text style={styles.buttonText}>
          Salvar
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 10,
    color: '#0D6EFD',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0D6EFD',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});