import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    console.log('Back pressed');
  };

  const handleImagePress = () => {
    navigation.navigate('Selesai');
  };


  return (
    <View style={styles.container}>
      <Image source={require('./img/wait.png')} style={styles.backgroundImage} />

      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Image source={require('./img/back.png')} style={styles.backIcon} />
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Text style={styles.imageText}>Menunggu Pembayaran</Text>
        <TouchableOpacity onPress={handleImagePress}>
          <Image source={require('./img/waitml.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -150,
  },
  image: {
    width: 400,
    height: 310,
    resizeMode: 'contain',
  },
  imageText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 90,
  },
});

export default App;