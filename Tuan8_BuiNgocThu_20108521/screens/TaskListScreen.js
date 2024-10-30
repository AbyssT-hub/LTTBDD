import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function TaskListScreen({ route, navigation }) {
  const { userName = 'AbyssT' } = route.params || {};
  const [tasks, setTasks] = useState([
    { id: '1', title: 'To check email', completed: false },
    { id: '2', title: 'UI task web page', completed: false },
    { id: '3', title: 'Learn javascript basic', completed: false },
    { id: '4', title: 'Learn HTML Advance', completed: false },
    { id: '5', title: 'Medical App UI', completed: false },
    { id: '6', title: 'Learn Java', completed: false },
  ]);

  // Receive new task from AddTaskScreen
  useEffect(() => {
    if (route.params?.newTask) {
      const newTask = {
        id: (tasks.length + 1).toString(),
        title: route.params.newTask,
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  }, [route.params?.newTask]);

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
          style={styles.profileImage}
        />
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Hi {userName}</Text>
          <Text style={styles.subGreetingText}>Have a great day ahead</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={18} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
        />
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
              <FontAwesome
                name="pencil"
                size={20}
                color={item.completed ? 'green' : '#d9534f'}
              />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Add Task Button */}
      <TouchableOpacity
        style={styles.addButton}
                onPress={() => navigation.navigate('AddTask', { userName })}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  greetingContainer: {
    marginLeft: 15,
    flex: 1,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subGreetingText: {
    fontSize: 14,
    color: '#888',
  },
  backButton: {
    marginLeft: 'auto',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#e9ecef',
    borderRadius: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#20c997',
    width: 45,
    height: 45,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  addButtonText: {
    fontSize: 24,
    color: '#fff',
  },
});
