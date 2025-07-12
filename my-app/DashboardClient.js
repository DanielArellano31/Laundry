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
import searchbyname from './SearchByName';
import { useNavigation } from '@react-navigation/native';

const DashboardClient = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');
  const navigation = useNavigation()
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

<TouchableOpacity
  style={styles.actionButton}
  onPress={()=>navigation.navigate("searchbyname")}
>
  <Icon name="refresh" size={20} color="#fff" />
  <Text style={styles.buttonText}>Search by name</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.actionButton}
  onPress={()=>navigation.navigate("searchbynumber")}
>
  <Icon name="file-text" size={20} color="#fff" />
  <Text style={styles.buttonText}>Search by number</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.actionButton}
  onPress={()=>navigation.navigate("updateclient")}
>
  <Icon name="file-text" size={20} color="#fff" />
  <Text style={styles.buttonText}>Update Client</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.actionButton}
  onPress={()=>navigation.navigate("deleteclient")}
>
  <Icon name="file-text" size={20} color="#fff" />
  <Text style={styles.buttonText}>Delete Client</Text>
</TouchableOpacity>
     
    </View>
  );
};

export default DashboardClient;

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
