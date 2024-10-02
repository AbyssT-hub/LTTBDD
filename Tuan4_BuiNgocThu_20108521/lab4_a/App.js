import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';

// Sample data for the shop list
const shops = [
  { id: '1', name: 'Shop Devang', product: 'Ca nấu lẩu, nấu mì mini...', img: 'image1.png' },
  { id: '2', name: 'Shop LTD Food', product: '1KG KHÔ GÀ BƠ TỎI ...', img: 'image2.png' },
  { id: '3', name: 'Shop Thế giới đồ chơi', product: 'Xe cần cẩu đa năng', img: 'image3.png' },
  { id: '4', name: 'Shop Thế giới đồ chơi', product: 'Đồ chơi dạng mô hình', img: 'image4.png' },
  { id: '5', name: 'Shop Minh Long Book', product: 'Lãnh đạo giản đơn', img: 'image5.png' },
  { id: '6', name: 'Shop Minh Long Book', product: 'Hiểu lòng con trẻ', img: 'image6.png' },
];

const ChatScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>⇐</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity>
          <Text style={styles.cartIcon}>🛒</Text>
        </TouchableOpacity>
      </View>

      {/* Shop List */}
      <FlatList
        data={shops}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.shopItem}>
            <Image source={{ uri: item.img }} style={styles.productImage} />
            <View style={styles.shopInfo}>
              <Text style={styles.productName}>{item.product}</Text>
              <Text style={styles.shopName}>{item.name}</Text>
            </View>
            <TouchableOpacity style={styles.chatButton}>
              <Text style={styles.chatButtonText}>Chat</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Bottom Navigation */}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 1,
    backgroundColor: '#00aaff',
    alignItems: 'center',
  },
  backButton: {
    fontSize: 24,
    color: 'white',
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
  },
  cartIcon: {
    fontSize: 24,
    color: 'white',
  },
  shopItem: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  productImage: {
    width: 50,
    height: 50,
  },
  shopInfo: {
    flex: 1,
    marginLeft: 16,
  },
  productName: {
    fontSize: 11,
  },
  shopName: {
    color: 'red',
  },
  chatButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  chatButtonText: {
    color: 'white',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 1,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#00AEEF',
  },
  navIcon: {
    fontSize: 24,
  },
});

export default ChatScreen;
