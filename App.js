import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Recovery App</Text>
      <Text style={styles.subtitle}>
        Recursos de recuperación para pacientes y familias
      </Text>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>AA</Text>
        <Text style={styles.cardText}>
          Literatura y reflexiones
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>CODA</Text>
        <Text style={styles.cardText}>
          Recursos para codependencia
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Familia</Text>
        <Text style={styles.cardText}>
          Material para familiares
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Clínicas</Text>
        <Text style={styles.cardText}>
          Recursos y orientación
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingTop: 70,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1E293B',
  },

  subtitle: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 30,
  },

  card: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#0F172A',
  },

  cardText: {
    fontSize: 15,
    color: '#475569',
  },
});
