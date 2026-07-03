
import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Dashboard() {
  return (
    <View>
      <Text>Dashboard</Text>

      <TouchableOpacity onPress={() => router.push('/cidade')}>
        <Text>Cidade</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/expositor')}>
        <Text>Expositor</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/pessoa')}>
        <Text>Pessoa</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/vendedor')}>
        <Text>Vendedor</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/visita')}>
        <Text>Visita</Text>
      </TouchableOpacity>
    </View>
  );
}