import React from 'react';
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

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    Alert.alert('Login button pressed');
  };

  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate("Dashboard")}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.signUp}>
        Don't have an account? <Text style={styles.signUpLink}>Sign up</Text>
      </Text>

    
      
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 30,
    marginTop:200,   
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
