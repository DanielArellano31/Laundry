import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';

const availableGarments = ['Camisa', 'Pantalón', 'Vestido', 'Saco'];
const availableServices = ['Planchado', 'Tintorería', 'Servicio Especial'];

const CreateOrder = () => {
  const [items, setItems] = useState([
    {
      garment: '',
      description: '',
      services: [],
      price: '',
    },
  ]);

  const handleAddItem = () => {
    setItems([
      ...items,
      {
        garment: '',
        description: '',
        services: [],
        price: '',
      },
    ]);
  };

  const handleItemChange = (index, key, value) => {
    const updatedItems = [...items];
    updatedItems[index][key] = value;
    setItems(updatedItems);
  };

  const toggleService = (index, service) => {
    const updatedItems = [...items];
    const currentServices = updatedItems[index].services;
    if (currentServices.includes(service)) {
      updatedItems[index].services = currentServices.filter((s) => s !== service);
    } else {
      updatedItems[index].services = [...currentServices, service];
    }
    setItems(updatedItems);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Crear Orden</Text>

      {items.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.subtitle}>Prenda #{index + 1}</Text>

          <Text style={styles.label}>Selecciona la prenda:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={item.garment}
              onValueChange={(value) =>
                handleItemChange(index, 'garment', value)
              }
            >
              <Picker.Item label="Seleccionar prenda..." value="" />
              {availableGarments.map((g, i) => (
                <Picker.Item key={i} label={g} value={g} />
              ))}
            </Picker>
          </View>

          <Text style={styles.label}>Descripción:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej. Camisa blanca con manchas"
            value={item.description}
            onChangeText={(text) =>
              handleItemChange(index, 'description', text)
            }
          />

          <Text style={styles.label}>Servicios:</Text>
          <View style={styles.servicesContainer}>
            {availableServices.map((service) => (
              <TouchableOpacity
                key={service}
                style={[
                  styles.serviceButton,
                  item.services.includes(service) && styles.serviceSelected,
                ]}
                onPress={() => toggleService(index, service)}
              >
                <Text
                  style={[
                    styles.serviceText,
                    item.services.includes(service) && { color: '#fff' },
                  ]}
                >
                  {service}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>Precio ($):</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej. 50"
            keyboardType="numeric"
            value={item.price}
            onChangeText={(text) => handleItemChange(index, 'price', text)}
          />
        </View>
      ))}

      <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
        <Icon name="plus" size={18} color="#fff" />
        <Text style={styles.addButtonText}>Agregar otra prenda</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Guardar Orden</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateOrder;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#f4f4f4',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },
  label: {
    fontWeight: '600',
    marginTop: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 5,
  },
  serviceButton: {
    borderWidth: 1,
    borderColor: 'teal',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 10,
    marginBottom: 10,
  },
  serviceSelected: {
    backgroundColor: 'teal',
  },
  serviceText: {
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: 'teal',
    padding: 12,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
  saveButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
