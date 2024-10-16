import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function BikeDetailScreen({ route }) {
  const bike = {
    name: 'Pina Mountain',
    originalPrice: 1350,
    discountPrice: 449,
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('./assets/bione-removebg-preview.png'),
  };

  return (
    <View style={styles.detailContainer}>
      <Image source={bike.image} style={styles.detailImage} />
      
      <Text style={styles.bikeName}>{bike.name}</Text>
      
      <View style={styles.priceContainer}>
        <Text style={styles.originalPrice}>15% OFF ${bike.originalPrice}</Text>
        <Text style={styles.discountPrice}>${bike.discountPrice}</Text>
      </View>

      <Text style={styles.descriptionHeader}>Description</Text>
      <Text style={styles.bikeDescription}>{bike.description}</Text>

      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#FFF',
  },
  detailImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  bikeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  originalPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#888',
    marginRight: 10,
  },
  discountPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4B4B',
  },
  descriptionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    color: '#333',
  },
  bikeDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'left',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  addToCartButton: {
    backgroundColor: '#FF4B4B',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
