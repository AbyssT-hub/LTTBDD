import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header Text */}
      <View style={styles.header}>
        <Text style={styles.headerText}>MANAGE YOUR TASK</Text>
      </View>

      {/* Text Input Field */}
      <TextInput 
        style={styles.input} 
        placeholder="Enter your name" 
        placeholderTextColor="#999" 
      />

      {/* Get Started Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>GET STARTED ➔</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  header: {
    borderWidth: 1,
    borderColor: '#D7BFFB',
    padding: 10,
    marginBottom: 20,
  },
  headerText: {
    color: '#9C6BFA',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#D7BFFB',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#29C3FF',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
