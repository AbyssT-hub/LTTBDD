import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function AddTaskScreen({ route, navigation }) {
  const { userName = 'AbyssT'} = route.params || {};
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    navigation.goBack();
    if (task.trim()) {
      // Pass new task back to TaskListScreen
      navigation.navigate('TaskList', { newTask: task });
    }
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

      {/* Input Section */}
      <Text style={styles.title}>ADD YOUR JOB</Text>
      <TextInput
        style={styles.input}
        placeholder="Input your job"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Finish" onPress={handleAddTask} />

      {/* Image at the Bottom */}
      <Image source={require('../assets/note.png')} style={styles.image} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6a0dad',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
});
