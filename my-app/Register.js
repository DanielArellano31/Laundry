import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios'; // ✅ Asegúrate de tener esto instalado


const Register = () => {
  const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });
    
    const onChangeRegister = (key, value) => {
      setData(prevData => ({ ...prevData, [key]: value }));
    };
    
    const navigation = useNavigation();

    const onSubmit = async () => {
        try {
            await axios.post('https://mfxknm6t-5000.usw3.devtunnels.ms/users/register', data);
            Alert.alert('¡Éxito!', 'Registrado con éxito');
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert('Error', 'Hubo un error al registrarse');
        }
    };

   

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#aaa"
          onChangeText={(value) => onChangeRegister('name', value)}
          value={data.name}  
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          onChangeText={(value) => onChangeRegister('email', value)}
          value={data.email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#aaa"
          onChangeText={(value) => onChangeRegister('password', value)}
          value={data.password}
        />
       
        <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
          <Text style={styles.loginText}>Send</Text>
        </TouchableOpacity>
      </View>
      
    
      
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 30,
    marginTop:100,   
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
  form: {
    gap: 18,
  },
  input: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#c0c0c0',
    padding: 12,
    marginBottom: 15,
  },
  link: {
    alignItems: 'flex-end',
  },
  linkText: {
    fontSize: 10,
    color: '#747474',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: 'teal',
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontWeight: '700',
  },
  signUp: {
    marginTop: 10,
    fontSize: 10,
    color: '#747474',
    textAlign: 'center',
  },
  signUpLink: {
    color: 'teal',
    textDecorationLine: 'underline',
    fontWeight: '800',
  },
  socialButtons: {
    marginTop: 20,
    gap: 15,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 20,
    gap: 10,
  },
  appleButton: {
    backgroundColor: '#000',
  },
  googleButton: {
    borderWidth: 1,
    borderColor: '#747474',
  },
  socialText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
