import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts, VT323_400Regular } from '@expo-google-fonts/vt323';
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import AppLoading from 'expo-app-loading';

export default function HomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    VT323_400Regular,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        A premium online store for sporter and their stylish choice
      </Text>

      <View style={styles.imageContainer}>
       <Image source={require('./assets/bifour-removebg-preview.png')} style={styles.image} />
      </View>

      <Text style={styles.shopName}>POWER BIKE SHOP</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Shop')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'VT323_400Regular', // Apply the VT323 font
  },
  imageContainer: {
    backgroundColor: '#E941411A',
    padding: 30,
    borderRadius: 20,
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
  },
  shopName: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
    fontFamily: 'Ubuntu_700Bold', // Apply the Ubuntu font
  },
  button: {
    backgroundColor: '#FF4B4B',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
