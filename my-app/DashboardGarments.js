import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const DashboardGarment = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Garments Dashboard</Text>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('addgarment')}
      >
        <Icon name="plus" size={20} color="#fff" />
        <Text style={styles.buttonText}>Add Garment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('searchgarment')}
      >
        <Icon name="search" size={20} color="#fff" />
        <Text style={styles.buttonText}>Search Garment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('updategarment')}
      >
        <Icon name="pencil" size={20} color="#fff" />
        <Text style={styles.buttonText}>Update Garment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('deletegarment')}
      >
        <Icon name="trash" size={20} color="#fff" />
        <Text style={styles.buttonText}>Delete Garment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardGarment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 30,
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 30,
  },
  actionButton: {
    backgroundColor: 'teal',
    borderRadius: 20,
    padding: 12,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});
