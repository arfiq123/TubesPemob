import React from 'react';
import { View, TouchableOpacity, ImageBackground, StyleSheet, Text, Image } from 'react-native';

const App = () => {
  const handleImagePress = (imageName) => {
    console.log('Image pressed:', imageName);
  };

  const handleBackPress = () => {
    console.log('Back pressed');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/duit.png')} style={styles.backgroundImage}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Image source={require('./img/back.png')} style={styles.backIcon} />
        </TouchableOpacity>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Pilih Metode Pembayaran</Text>

          <TouchableOpacity onPress={() => handleImagePress('Image 1')}>
            <Image source={require('./img/dana.png')} style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleImagePress('Image 2')}>
            <Image source={require('./img/ovo.png')} style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleImagePress('Image 3')}>
            <Image source={require('./img/gopay.png')} style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleImagePress('Image 4')}>
            <Image source={require('./img/mandiri.png')} style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleImagePress('Image 5')}>
            <Image source={require('./img/BCA.png')} style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleImagePress('Image 6')}>
            <Image source={require('./img/BRI.png')} style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleImagePress('Image 7')}>
            <Image source={require('./img/kredivo.png')} style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleImagePress('Image 8')}>
            <Image source={require('./img/visa.png')} style={styles.image} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 31,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 50,
  },
  image: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 15,
  },
});

export default App;