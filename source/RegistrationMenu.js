import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegistrationMenu = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    // Lakukan logika pendaftaran di sini
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Nomor HP:', phoneNumber);
    console.log('Password:', password);
    console.log('Konfirmasi Password:', confirmPassword);
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar</Text>
      <ImageBackground
        source={require('./img/ddt.png')}
        style={styles.inputBackground}
        resizeMode="stretch"
      >
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#FFFFFF"
          value={username}
          onChangeText={setUsername}
        />
      </ImageBackground>

      <ImageBackground
        source={require('./img/ddt.png')}
        style={styles.inputBackground}
        resizeMode="stretch"
      >
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#FFFFFF"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </ImageBackground>

      <ImageBackground
        source={require('./img/ddt.png')}
        style={styles.inputBackground}
        resizeMode="stretch"
      >
        <TextInput
          style={styles.input}
          placeholder="Nomor HP"
          placeholderTextColor="#FFFFFF"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      </ImageBackground>

      <ImageBackground
        source={require('./img/ddt.png')}
        style={styles.inputBackground}
        resizeMode="stretch"
      >
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </ImageBackground>

      <ImageBackground
        source={require('./img/ddt.png')}
        style={styles.inputBackground}
        resizeMode="stretch"
      >
        <TextInput
          style={styles.input}
          placeholder="Konfirmasi Password"
          placeholderTextColor="#FFFFFF"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </ImageBackground>

      <Button title="Daftar" color="#03FF59" onPress={handleRegister} />
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
    color: '#FFFFFF',
    marginBottom: 30,
  },
  inputBackground: {
    width: '100%',
    height: 75,
    justifyContent: 'center',
    paddingLeft: 8,
  },
  input: {
    width: '100%',
    height: 75,
    justifyContent: 'center',
    paddingLeft: 8,
    fontSize: 20,
    opacity: 0.3,
    fontWeight: 'bold'
  },
});

export default RegistrationMenu;
