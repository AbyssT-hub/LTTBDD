import React from 'react';
import { View, Text, FlatList, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const data = [
  {
    id: 1,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: 15,
    img: 'image1.png' , // Thay bằng hình ảnh thực tế
  },
  {
    id: 2,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: 15,
    img: 'image2.png' , // Thay bằng hình ảnh thực tế
  },
  {
    id: 3,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: 15,
    img: 'image3.png' , // Thay bằng hình ảnh thực tế
  },
  {
    id: 4,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: 15,
    img: 'image4.png' , // Thay bằng hình ảnh thực tế
  },
  {
    id: 5,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: 15,
    img: 'image5.png' , // Thay bằng hình ảnh thực tế
  },
  {
    id: 6,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: 15,
    img: 'image6.png' , // Thay bằng hình ảnh thực tế
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Text key={i} style={{ color: i <= rating ? '#FFD700' : '#ccc', fontSize: 14 }}>★</Text>
    );
  }
  return <View style={styles.rating}>{stars}</View>;
};

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.itemName} numberOfLines={2}>{item.name}</Text>
      <View style={styles.ratingContainer}>
        <StarRating rating={item.rating} />
        <Text style={styles.reviews}>({item.reviews})</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <Text style={styles.itemDiscount}>{item.discount}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>⇐</Text>
        </TouchableOpacity>
        <TextInput
          placeholder=" 🔍 Dây cáp USB"
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.cartButton}>
          <Text>🛒</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartButton}>
          <Text>⋯</Text>
        </TouchableOpacity>
      </View>

      {/* Danh sách sản phẩm */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />

      {/* Thanh điều hướng dưới */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text style={styles.navIcon}>≡</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navIcon}>⇐</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 1,
    backgroundColor: '#00AEEF',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  backButton: {
    marginRight: 10,
  },
  backIcon: {
    fontSize: 20,
    color: '#000',
  },
  searchInput: {
    flex: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    height: 30,
    backgroundColor: '#f8f8f8',
  },
  cartButton: {
    marginLeft: 10,
  },
  listContainer: {
    padding: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },
  itemName: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  reviews: {
    marginLeft: 5,
    fontSize: 12,
    color: '#777',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  itemPrice: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#000',
  },
  itemDiscount: {
    fontSize: 14,
    color: '#f00',
  },
  rating: {
    flexDirection: 'row',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: '#00AEEF',
  },
  navIcon: {
    fontSize: 24,
    color: '#fff',
  },
});

export default App;
