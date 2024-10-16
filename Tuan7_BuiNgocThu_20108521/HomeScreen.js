import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
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
    backgroundColor: '#F7F7F7',
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
  },
  imageContainer: {
    backgroundColor: '#FFEDED',
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
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
