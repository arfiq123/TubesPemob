import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MobileLegendScreen = () => {
  const [userId, setUserId] = useState('');
  const [idZone, setIdZone] = useState('');
  const navigation = useNavigation();


  const handleUserIdChange = (text) => {
    setUserId(text);
  };

  const handleIdZoneChange = (text) => {
    setIdZone(text);
  };

  const handleLogoPress = () => {
    console.log('Logo pressed');
  };

  const handleCartPress = () => {
    navigation.navigate('Bayar');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./img/ml.png')}
        style={styles.imageBackground}
      >
        <View style={styles.headerContainer}>
          <Image
            source={require('./img/ml2.png')}
            style={styles.logo}
          />
        <Text style={styles.title}>Mobile Legend</Text>
        <View style={styles.diamondContainer}>
              <Text style={styles.diamondText}>Diamond</Text>
            </View>
        </View>
        <View style={styles.userInfoContainer}>
        <View style={styles.userIdContainer}>
          <Text style={styles.userIdLabel}>User ID:</Text>
          <TextInput
            style={styles.userIdInput}
            value={userId}
            onChangeText={handleUserIdChange}
          />
        </View>
        <View style={styles.idZoneContainer}>
            <Text style={styles.idZoneLabel}>ID Zone:</Text>
            <TextInput
              style={styles.idZoneInput}
              value={idZone}
              onChangeText={handleIdZoneChange}
            />
            </View>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('Button 1')}
          >
            <Text style={styles.buttonText}>x1     Rp.70.000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('Button 2')}
          >
            <Text style={styles.buttonText}>x3     Rp.300.000</Text>
          </TouchableOpacity>
        </View>
        {/* Tambahkan komponen lain yang diperlukan untuk halaman Mobile Legend */}
        <View style={styles.extraColumnContainer}>
          <TouchableOpacity
            style={styles.extraColumn}
            onPress={() => handleColumnPress(1)}
          >
            <Text style={styles.extraColumnText}>11 Diamonds                              Rp.3000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.extraColumn}
            onPress={() => handleColumnPress(2)}
          >
            <Text style={styles.extraColumnText}>100 Diamonds                        Rp.45.000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.extraColumn}
            onPress={() => handleColumnPress(3)}
          >
           <Text style={styles.extraColumnText}>350 Diamonds                       Rp.130.000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.extraColumn}
            onPress={() => handleColumnPress(4)}
          >
            <Text style={styles.extraColumnText}>1100 Diamonds                     Rp.425.000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.extraColumn}
            onPress={() => handleColumnPress(5)}
          >
            <Text style={styles.extraColumnText}>5300 Diamonds                  Rp.2.100.000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.extraColumn}
            onPress={() => handleColumnPress(6)}
          >
            <Text style={styles.extraColumnText}>10500 Diamonds               Rp.4.130.000</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logoContainer}>
        <TouchableOpacity onPress={handleCartPress}>
          <Image
            source={require('./img/cart.png')}
            style={styles.logoSmall}
          />
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
  imageBackground: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    position: 'absolute',
    top: 20,
    left: 20,
  },
  logo: {
    width: 90,
    height: 90,
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
    position: 'absolute',
    top: 0,
    left: 100,
  },
  diamondContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    position: 'absolute',
    top: 30,
    left: 100,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius:60,
  },
  diamondText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    position: 'absolute',
    top: 140,
    left: 20,
  },
  userIdContainer: {
    alignItems: 'flex-start',
    marginRight: 16,
  },
  userIdLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  userIdInput: {
    height: 30,
    width: 150,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    paddingTop: 5,
    borderRadius:30,
  },
  idZoneContainer: {
    alignItems: 'flex-start',
  },
  idZoneContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  idZoneLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  idZoneInput: {
    height: 30,
    width: 100,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    paddingTop: 5,
    borderRadius:30,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    position: 'absolute',
    top: 240,
    left: 20,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  extraColumnContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'absolute',
    top: 300,
    left: 20,
  },
  extraColumn: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginVertical: 8,
    width: '100%',
  },
  extraColumnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'justify',
  },
  logoContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  logoImage: {
    width: 50,
    height: 50,
  },
});

export default MobileLegendScreen;
