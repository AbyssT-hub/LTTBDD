import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Sử dụng thư viện biểu tượng Expo

const App = () => {
  // Dữ liệu mẫu cho danh sách nhiệm vụ
  const [tasks, setTasks] = useState([
    { id: '1', title: 'To check email', completed: true },
    { id: '2', title: 'UI task web page', completed: true },
    { id: '3', title: 'Learn javascript basic', completed: true },
    { id: '4', title: 'Learn HTML Advance', completed: true },
    { id: '5', title: 'Medical App UI', completed: true },
    { id: '6', title: 'Learn Java', completed: true },
  ]);

  // Render từng mục nhiệm vụ
  const renderTask = ({ item }) => (
    <View style={styles.taskItem}>
      <Ionicons
        name={item.completed ? 'checkmark-circle' : 'ellipse-outline'}
        size={24}
        color={item.completed ? '#4CAF50' : '#B0BEC5'}
        style={styles.icon}
      />
     
      <Text style={styles.taskText}>{item.title}</Text>
      <TouchableOpacity style={styles.editButton}>
        <Ionicons name="pencil" size={18} color="#F57C00" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Phần Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>

        {/* Avatar */}
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=3' }} 
            style={styles.profileImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.greetingText}>Hi Twinkle</Text>
            <Text style={styles.subGreetingText}>Have a great day ahead</Text>
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#757575" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
      </View>

      {/* List item */}
      <FlatList data={tasks} renderItem={renderTask} keyExtractor={(item) => item.id} style={styles.taskList} />

      {/* Add button */}
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#F7F8FA',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  textContainer: {
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  subGreetingText: {
    fontSize: 14,
    color: '#666',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  taskList: {
    flex: 1,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E7EAF0',
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 12,
  },
  icon: {
    marginRight: 12,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  editButton: {
    padding: 5,
  },
  addButton: {
    backgroundColor: '#29C3FF',
    borderRadius: 50,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
});

export default App;
