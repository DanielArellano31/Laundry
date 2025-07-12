import React,{useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,Modal, modalVisible, renderModalFields
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

const searchbyname=() =>{
     const [data, setData] = useState({
            name: ''
        });
        const onChangeRegister = (key, value) => {
      setData(prevData => ({ ...prevData, [key]: value }));
    };
    
   const onsubmit = async () => {
  try {
    const res = await axios.get("https://mfxknm6t-5000.usw3.devtunnels.ms/clients/search/name", data);

    const resultado = res.data; 

    Alert.alert("Datos obtenidos con éxito");

    console.log("Respuesta del servidor:", resultado);
    return resultado;

  } catch (error) {
    console.error("Error al obtener los datos:", error);
    Alert.alert("No se pudieron obtener los datos");
    return null;
  }
  
};

  

  
  
   
 
 return (
    <View style={styles.card}>
      <TextInput style={styles.input} placeholder="Campo 1"
      onChange={onChangeRegister} />
    <TouchableOpacity style={styles.modalButton} onPress={onsubmit}>
        <Text style={styles.modalButtonText}>Enviar</Text>
      </TouchableOpacity>
    
      <Text style={styles.title}>Información del Cliente</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}></Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Teléfono:</Text>
        <Text style={styles.value}></Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Correo:</Text>
        <Text style={styles.value}></Text>
      </View>
        <TouchableOpacity onPress={onsubmit}  ></TouchableOpacity>
      
    </View>
  );
  }
  export  default searchbyname;


  const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    elevation: 4, // sombra para Android
    shadowColor: '#000', // sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  row: {
    marginBottom: 12,
  },
  label: {
    color: '#666',
    fontSize: 14,
  },
  value: {
    fontSize: 16,
    color: '#000',
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
  modalButton: {
    backgroundColor: 'teal',
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
    input: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#c0c0c0',
    padding: 12,
  },
});



