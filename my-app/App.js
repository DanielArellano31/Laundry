import React,{useState} from 'react';
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
import axios from 'axios';

const LoginScreen = () => {
const navigation = useNavigation();
  const [data, setData] = useState({});
  const onChange = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const onSubmit = async () => {
    try {
      //data.rol = "empleado";
      const res = await axios.post("https://mfxknm6t-5000.usw3.devtunnels.ms/users/login", data);
      const user = res.data.user;
      //user.logined = true
      navigation.navigate("DashboardUser")

      Alert.alert("¡BIENVENIDO!");
    } catch (error) {
      Alert.alert("Datos incorrectos, intenta nuevamente.");
    }
  };

  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          onChangeText={(value) => onChange("email", value)}
          value={data.email || ""}
          keyboardType="email-address"
        />
      
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#aaa"
          onChangeText={(value) => onChange("password", value)}
          value={data.password || ""}
        />
        
       
        <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signUp}  onPress={()=>navigation.navigate("Register")}>
        Don't have an account? <Text style={styles.signUpLink}>Sign up</Text>
      </TouchableOpacity>

    
      
    </SafeAreaView>
  );
};

export default LoginScreen;

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
