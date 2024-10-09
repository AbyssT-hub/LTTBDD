import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Sample Donut Data
const donuts = [
  { id: '1', name: 'Tasty Donut', price: '$10.00', image: require('./assets/yellow_donut.png'), description: 'Spicy tasty donut family' },
  { id: '2', name: 'Pink Donut', price: '$20.00', image: require('./assets/tasty_donut.png'), description: 'Spicy tasty donut family' },
  { id: '3', name: 'Floating Donut', price: '$30.00', image: require('./assets/green_donut.png'), description: 'Spicy tasty donut family' },
    { id: '1', name: 'Tasty Donut', price: '$10.00', image: require('./assets/red_donut.png'), description: 'Spicy tasty donut family' },
];

const MasterScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('Donut');

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, Jala!</Text>
      <Text style={styles.title}>Choice your Best food</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search food"
      />

      {/* Category Buttons */}
      <View style={styles.categoryContainer}>
        {['Donut', 'Pink Donut', 'Floating'].map((category) => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, selectedCategory === category && styles.selectedCategory]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Donut List */}
      <FlatList
        data={donuts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('Detail', { donut: item })}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            {/* Add to Cart Button */}
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  selectedCategory: {
    backgroundColor: '#FFCC00',
  },
  categoryText: {
    color: '#333',
    fontWeight: '500',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#F8F8F8',
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#444',
  },
  addButton: {
    backgroundColor: '#F1B000',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 18,
    color: '#FFF',
  },
});

export default MasterScreen;
