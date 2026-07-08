import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function dashboard({ navigation }: any) {
  const cards = [
    { title: 'Cidades', total: 120 },
    { title: 'Expositores', total: 45 },
    { title: 'Pessoas', total: 890 },
    { title: 'Vendedores', total: 18 },
    { title: 'Visitas', total: 340 },
  ];
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      {cards.map(card => (
        <View key={card.title} style={styles.card}>
          <Text style={styles.cardTitle}>{card.title}</Text>
          <Text style={styles.cardValue}>{card.total}</Text>
        </View>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F9',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    color: '#1E293B',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    color: '#64748B',
  },
  cardValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2563EB',
    marginTop: 8,
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuButton: {
    width: '48%',
    backgroundColor: '#2563EB',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
  },
  menuText: {
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
  },
});