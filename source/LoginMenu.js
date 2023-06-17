import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image} from 'react-native';

const LoginMenu = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      console.log('Login successful!');
      navigation.navigate('Menu');
    } else {
      setErrorMessage('Invalid username or password. Please try again.');
    }
  };

  const handleRegister = () => {
    navigation.navigate('RegistrationMenu');
  };

  const isLoginDisabled = !username || !password;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./img/frame1.png')}
          style={styles.image}

        />
        <Image
          source={require('./img/frame2.png')}
          style={styles.image}

        />
        <Image
          source={require('./img/frame3.png')}
          style={styles.image}

        />
      </View>
      
      <View style={styles.textContainer}>
      <Text style={styles.title}>Habiskan Uang                   Anda!!!</Text>
      <Text style={styles.subtitle}>Lakukan pembelian dengan                            mudah dan cepat.</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#292D32"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#292D32"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {isLoginDisabled ? null : (
          <Button
            title="Login"
            onPress={handleLogin}
            disabled={isLoginDisabled}
            color="#03FF59"
          />
        )}
        <View style={styles.registerContainer}>
        <Text style={styles.daftar}>Belum punya akun?</Text>
           <Button
          title="Daftar"
          onPress={handleRegister}
          color="#211134"
          style={styles.registerButton}
        />
      </View>
      </View>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#211134',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FFFFFF',
  },
  registerText: {
    marginTop: 16,
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FFFFFF',
  },
  textContainer: {
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center',
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    backgroundColor: '#BDBCBF',
  },
  daftar: {
    fontSize: 16,
    fontWeight: 'regular',
    color: '#FFFFFF',
  },
  error: {
    color: 'red',
    marginTop: 16,
  },
});

export default LoginMenu;

