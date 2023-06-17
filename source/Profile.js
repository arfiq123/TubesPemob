import React from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
  const handleMenuPress = (menu) => {
    console.log('Menu selected:', menu);
  };

  const handleNavigationButtonPress1 = () => {
    navigation.navigate('Menu');
  };

  const handleNavigationButtonPress2 = () => {
    navigation.navigate('Voucher');
  };

  const handleNavigationButtonPress3 = () => {
    navigation.navigate('LoginMenu');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleMenuPress('Profile')}>
        <Image source={require('./img/group22.png')} style={styles.profileImage} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('Edit Profile')}>
        <Image source={require('./img/2.png')} style={styles.menuItemImage} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('Change Password')}>
        <Image source={require('./img/3.png')} style={styles.menuItemImage} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('Privacy Settings')}>
        <Image source={require('./img/23.png')} style={styles.menuItemImage} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('Logout')}>
        <Image source={require('./img/171.png')} style={styles.menuItemImage} />
      </TouchableOpacity>

      <TouchableHighlight style={styles.vectorButton} onPress={handleNavigationButtonPress3}>
        <Image source={require('./img/Vector.png')} style={styles.vectorImage} />
    </TouchableHighlight>

      <View style={styles.navigationContainer}>
       <TouchableHighlight style={styles.navigationButton} onPress={handleNavigationButtonPress1}>
          <Image source={require('./img/icon11.png')} style={styles.navigationImage} />
          </TouchableHighlight>
        <View style={styles.navigationSeparator}></View>
        <TouchableHighlight style={styles.navigationButton} onPress={handleNavigationButtonPress2}>
          <Image source={require('./img/icon2.png')} style={styles.navigationImage} />
        </TouchableHighlight>
        <View style={styles.navigationSeparator}></View>
        <View style={styles.navigationCircle}>
        <TouchableOpacity style={styles.navigationButton}>
          <Image source={require('./img/icon33.png')} style={styles.navigationImage} />
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomBorder}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#211134',
  },
  profileImage: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  menuItem: {
    marginBottom: 24,
  },
  menuItemImage: {
    width: 2000,
    height: 65,
    resizeMode: 'contain',
  },
  vectorButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vectorImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
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

export default App;