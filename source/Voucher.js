import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TouchableHighlight, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DiscountScreen = () => {
  const navigation = useNavigation();
  const handleNavigationButtonPress1 = () => {
    // Pindah ke halaman MenuScreen saat tombol icon1 diklik
    navigation.navigate('Menu');
  };

  const handleNavigationButtonPress2 = () => {
    // Pindah ke halaman MenuScreen saat tombol icon1 diklik
    navigation.navigate('Profile');
  };
  const handleImagePress = () => {
    console.log('Gambar Voucher Diskon 50% ditekan');
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={handleImagePress}>
          <Image source={require('./img/group21.png')} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomTextLarge}>Top Up terus disini</Text>
        <Text style={styles.bottomText}>dan dapatkan voucher lainnya</Text>
      </View>
      <View style={styles.navigationContainer}>
       <TouchableHighlight style={styles.navigationButton} onPress={handleNavigationButtonPress1}>
          <Image source={require('./img/icon11.png')} style={styles.navigationImage} />
        </TouchableHighlight>
        <View style={styles.navigationSeparator}></View>
        <View style={styles.navigationCircle}>
        <TouchableOpacity style={styles.navigationButton}>
          <Image source={require('./img/icon22.png')} style={styles.navigationImage} />
        </TouchableOpacity>
        </View>
        <View style={styles.navigationSeparator}></View>
        <TouchableHighlight style={styles.navigationButton} onPress={handleNavigationButtonPress2}>
          <Image source={require('./img/icon3.png')} style={styles.navigationImage} />
        </TouchableHighlight>
      </View>
      <View style={styles.bottomBorder}></View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211134',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  buttonImage: {
    width: 413,
    height: 121,
    resizeMode: 'contain',
    marginTop: 40,
  },
  buttonSymbol: {
    position: 'absolute',
    top: 15,
    right: 20,
    color: '#000000',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 10,
  },
  bottomContainer: {
    alignItems: 'flex-start',
    marginBottom: 85,
  },
  bottomTextLarge: {
    color: '#FFFFFF',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  bottomText: {
    color: '#FFFFFF',
    fontSize: 35,
    fontWeight: 'bold',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  navigationCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationButton: {
    padding: 10,
  },
  navigationImage: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  navigationSeparator: {
    width: 80,
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    width: '80%',
  },
});

export default DiscountScreen;