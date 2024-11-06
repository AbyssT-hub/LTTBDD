import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts, Voltaire_400Regular } from '@expo-google-fonts/voltaire';
import AppLoading from 'expo-app-loading';

export default function BikeDetailScreen({ route }) {
  const bike = {
    name: 'Pina Mountain',
    originalPrice: 350,
    discountPrice: 449,
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('./assets/bione-removebg-preview.png'),
  };

  const [fontsLoaded] = useFonts({
    Voltaire_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.detailContainer}>
      <Image source={bike.image} style={styles.detailImage} />

      <Text style={styles.bikeName}>{bike.name}</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.discountText}>15% OFF</Text>
        <Text style={styles.originalPrice}>${bike.originalPrice}</Text>
        <Text style={styles.discountPrice}>${bike.discountPrice}</Text>
      </View>

      <Text style={styles.descriptionHeader}>Description</Text>
      <Text style={styles.bikeDescription}>{bike.description}</Text>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.heartButton}>
          <Text style={styles.heartText}>♡</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#FFF',
  },
  detailImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: '#E941411A',
  },
  bikeName: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '90%',
    color: '#333',
    marginBottom: 5,
    fontFamily: 'Voltaire_400Regular',
  },
  priceContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 15,
  },
  discountText: {
    fontSize: 20,
    color: '#888',
    marginRight: 5,
    fontFamily: 'Voltaire_400Regular',
  },
  originalPrice: {
    fontSize: 20,
    color: '#888',
    marginRight: 5,
    fontFamily: 'Voltaire_400Regular',
  },
  discountPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    color: '#000',
    fontFamily: 'Voltaire_400Regular',
  },
  descriptionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '90%',
    color: '#333',
    marginBottom: 5,
    fontFamily: 'Voltaire_400Regular',
  },
  bikeDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'left',
    paddingHorizontal: 20,
    marginBottom: 30,
    fontFamily: 'Voltaire_400Regular',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    marginBottom: 20,
  },
  heartButton: {
    borderColor: '#fff',
    borderRadius: 2,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartText: {
    fontSize: 50,
    color: '#000',
    fontFamily: 'Voltaire_400Regular',
  },
  addToCartButton: {
    backgroundColor: '#FF4B4B',
    paddingVertical: 10,
    paddingHorizontal: 90,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'Voltaire_400Regular',
  },
});
