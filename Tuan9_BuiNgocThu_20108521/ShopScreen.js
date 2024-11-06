import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts, Voltaire_400Regular } from '@expo-google-fonts/voltaire';
import AppLoading from 'expo-app-loading'

const bikes = [
  {
    id: '1',
    name: 'Pinarello',
    price: 1800,
    image: require('./assets/bifour-removebg-preview.png'),
    category: 'All',
  },
  {
    id: '2',
    name: 'Pina Mountain',
    price: 1700,
    image: require('./assets/bione-removebg-preview.png'),
    category: 'Mountain',
  },
  {
    id: '3',
    name: 'Pina Bike',
    price: 1500,
    image: require('./assets/bithree-removebg-preview.png'),
    category: 'Roadbike',
  },
  {
    id: '4',
    name: 'Pinarello',
    price: 1900,
    image: require('./assets/bitwo-removebg-preview.png'),
    category: 'Roadbike',
  },
  {
    id: '5',
    name: 'Pinarello',
    price: 2700,
    image: require('./assets/bithree-removebg-preview.png'),
    category: 'Mountain',
  },
  {
    id: '6',
    name: 'Pinarello',
    price: 1350,
    image: require('./assets/bione-removebg-preview.png'),
    category: 'All',
  },
];

const categories = ['All', 'Roadbike', 'Mountain'];

export default function BikeListScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState({});

  const [fontsLoaded] = useFonts({
    Voltaire_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredBikes = bikes.filter(
    (bike) => selectedCategory === 'All' || bike.category === selectedCategory
  );

  const renderBike = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Product', { bike: item })}
      style={styles.bikeCard}>
      <TouchableOpacity
        onPress={() => toggleFavorite(item.id)}
        style={styles.heartIcon}>
        <Icon
          name={favorites[item.id] ? 'heart' : 'heart-o'}
          size={20}
          color={favorites[item.id] ? '#FF4B4B' : '#beb6b6'}
        />
      </TouchableOpacity>

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
            onPress={() => setSelectedCategory(category)}>
            <Text
              style={[
                styles.tabText,
                selectedCategory === category && styles.activeTabText,
                { fontFamily: 'Voltaire_400Regular' }, // Apply Voltaire font to category text
              ]}>
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
    textAlign: 'left',
    marginBottom: 20,
    color: '#FF4B4B',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
  tab: {
    paddingHorizontal: 25,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 1, // Add borderWidth for all tabs
    borderColor: 'transparent', // Default border color
  },
  activeTab: {
    backgroundColor: '#FFF3F3',
    borderColor: '#E9414187', // Highlight border color when active
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#999',
  },
  activeTabText: {
    color: '#FF4B4B',
  },
  list: {
    paddingVertical: 10,
  },
  bikeCard: {
    flex: 1,
    backgroundColor: '#F7BA8326',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
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
    color: '#666',
    fontFamily: 'Voltaire_400Regular',
  },
  bikePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Voltaire_400Regular',
  },
});
