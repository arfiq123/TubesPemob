import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const App = () => {
  const handleBackPress = () => {
    console.log('Back pressed');
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={handleBackPress} style={styles.backButtonTouchable}>
        <Image source={require('./img/back.png')} style={styles.backButtonImage} />
      </TouchableOpacity>

      <Image source={require('./img/CENTANG.png')} style={styles.image} />
      <Image source={require('./img/BERHASIL.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211134',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 24,
    height: 24,
    resizeMode: 'contain',
    zIndex: 1,
  },
  backButtonTouchable: {
    position: 'absolute',
    top: 16,
    left: 16,
    padding: 8,
  },
  backButtonImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  image: {
    width: 320,
    height: 255,
    resizeMode: 'contain',
    marginBottom: 1,
  },
});

export default App;