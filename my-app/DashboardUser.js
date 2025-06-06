import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DashboardUser = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');

  const openModal = (type) => {
    setModalType(type);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalType('');
  };
   const updateData = async () => {
    try {
      //data.rol = "empleado";
      await axios.put("https://mfxknm6t-5000.usw3.devtunnels.ms/update/<int:client_id>", data);
      
      
    

      Alert.alert("Datos enviados correctamente");
    } catch (error) {
      Alert.alert("Datos incorrectos, intenta nuevamente.");
    }
  };

  const renderModalFields = () => (
    <View style={styles.modalView}>
      <Text style={styles.modalTitle}>{modalType}</Text>
      <TextInput style={styles.input} placeholder="Campo 1" />
      <TextInput style={styles.input} placeholder="Campo 2" />
      <TextInput style={styles.input} placeholder="Campo 3" />
      <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
        <Text style={styles.modalButtonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <TouchableOpacity
        style={styles.actionButton}
       onPress={() => openModal('update', 'Actualizar Usuario', updateData)}

       >
        <Icon name="user" size={20} color="#fff" />
        <Text style={styles.buttonText}>Actualizar Usuario</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => openModal('Cambiar Estatus')}
      >
        <Icon name="refresh" size={20} color="#fff" />
        <Text style={styles.buttonText}>Cambiar Estatus</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => openModal('Obtener Logs')}
      >
        <Icon name="file-text" size={20} color="#fff" />
        <Text style={styles.buttonText}>Obtener Logs</Text>
      </TouchableOpacity>

      <Modal transparent visible={modalVisible} animationType="slide">
        <View style={styles.modalBackground}>
          {renderModalFields()}
        </View>
      </Modal>
    </View>
  );
};

export default DashboardUser;

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
  modalBackground: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    gap: 15,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#c0c0c0',
    padding: 12,
  },
  modalButton: {
    backgroundColor: 'teal',
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
});
