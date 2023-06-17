import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity, TouchableHighlight, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const MenuScreen = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const handleImagePress = (image) => {
    if (image === require('./img/22.png')) {
      navigation.navigate('Halaman1');
    } else if (image === require('./img/33.png')) {
      navigation.navigate('Halaman2');
    } else if (image === require('./img/44.png')) {
      navigation.navigate('MobileLegend');
    } else if (image === require('./img/55.png')) {
      navigation.navigate('Halaman4');
    } else if (image === require('./img/66.png')) {
      navigation.navigate('Halaman5');
    } else if (image === require('./img/77.png')) {
      navigation.navigate('Halaman6');
    } else if (image === require('./img/88.png')) {
      navigation.navigate('Halaman7');
    } else if (image === require('./img/99.png')) {
      navigation.navigate('Halaman8');
    } else if (image === require('./img/00.png')) {
      navigation.navigate('Halaman9');
    }
  };
  const handleNavigationButtonPress1 = () => {
    navigation.navigate('Voucher');

  };

  const handleNavigationButtonPress2 = () => {
    navigation.navigate('Profile');
  };
 

  const renderImages = () => {
    const images = [
      require('./img/22.png'),
      require('./img/33.png'),
      require('./img/44.png'),
      require('./img/55.png'),
      require('./img/66.png'),
      require('./img/77.png'),
      require('./img/88.png'),
      require('./img/99.png'),
      require('./img/00.png'),
    ];

    return images.map((image, index) => (
      <TouchableOpacity
        key={index}
        style={styles.imageContainer}
        onPress={() => handleImagePress(image)}
      >
        <Image source={image} style={styles.image} />
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cari Game Yang                Kamu Inginkan !!</Text>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari game..."
          value={searchText}
          onChangeText={handleSearchTextChange}
        />
      </View>
      <ScrollView contentContainerStyle={styles.imageWrapper}>
        {renderImages()}
      </ScrollView>
      <View style={styles.navigationContainer}>
       <View style={styles.navigationCircle}>
        <TouchableOpacity style={styles.navigationButton}>
          <Image source={require('./img/icon1.png')} style={styles.navigationImage} />
        </TouchableOpacity>
        </View>
        <View style={styles.navigationSeparator}></View>
        <TouchableHighlight style={styles.navigationButton} onPress={handleNavigationButtonPress1}>
          <Image source={require('./img/icon2.png')} style={styles.navigationImage} />
        </TouchableHighlight>
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
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#211134',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#FFFFFF',
  },
  searchBar: {
    width: '90%',
    paddingVertical: 3,
    paddingHorizontal: 20,
    marginBottom: 40,
    backgroundColor: '#eee',
    borderRadius: 60,
  },
  searchInput: {
    fontSize: 16,
  },
  imageWrapper: {
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 10,
  },
  image: {
    width: 320,
    height: 75,
    resizeMode: 'cover',
    borderRadius: 20,
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

export default MenuScreen;
