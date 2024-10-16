// BikeListScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const bikes = [
  { id: '1', name: 'Pinarello', price: 1800, image: require('./assets/bifour-removebg-preview.png'), category: 'All' },
  { id: '2', name: 'Pina Mountai', price: 1700, image: require('./assets/bione-removebg-preview.png'), category: 'Mountain' },
  { id: '3', name: 'Pina Bike', price: 1500, image: require('./assets/bithree-removebg-preview.png'), category: 'Roadbike' },
  { id: '4', name: 'Pinarello', price: 1900, image: require('./assets/bitwo-removebg-preview.png'), category: 'Roadbike' },
  { id: '5', name: 'Pinarello', price: 2700, image: require('./assets/bithree-removebg-preview.png'), category: 'Mountain' },
  { id: '6', name: 'Pinarello', price: 1350, image: require('./assets/bione-removebg-preview.png'), category: 'All' },
];

const categories = ['All', 'Roadbike', 'Mountain'];

export default function BikeListScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBikes = bikes.filter(
    (bike) => selectedCategory === 'All' || bike.category === selectedCategory
  );

  const renderBike = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Product', { bike: item })}
      style={styles.bikeCard}
    >
      <Image source={item.image} style={styles.bikeImage} />
      <Text style={styles.bikeName}>{item.name}</Text>
      <Text style={styles.bikePrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>The world’s Best Bike</Text>

      <View style={styles.tabs}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.tab,
              selectedCategory === category && styles.activeTab,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.tabText,
                selectedCategory === category && styles.activeTabText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredBikes}
        keyExtractor={(item) => item.id}
        renderItem={renderBike}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#FF4B4B',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  tab: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#EAEAEA',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: '#B8FFC9',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  activeTabText: {
    color: '#000',
  },
  list: {
    paddingVertical: 10,
  },
  bikeCard: {
    flex: 1,
    backgroundColor: '#FFF',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  bikeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  bikeName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  bikePrice: {
    fontSize: 16,
    color: '#FF4B4B',
  },
});
