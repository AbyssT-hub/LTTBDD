import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddJobScreen = () => {
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
            source={{ uri: 'https://i.pravatar.cc/150?img=3' }} // Đổi thành hình avatar của bạn
            style={styles.profileImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.greetingText}>Hi Twinkle</Text>
            <Text style={styles.subGreetingText}>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>ADD YOUR JOB</Text>

      {/* Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="document-text-outline" size={24} color="#1DD75B" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="input your job"
        />
      </View>

      {/* Finish Button */}
      <TouchableOpacity style={styles.finishButton} onPress={() => alert('Job Added!')}>
        <Text style={styles.finishButtonText}>FINISH ➔</Text>
      </TouchableOpacity>

      {/* Picture */}
      <Image
        source={require('./assets/note.png')}
        style={styles.image}
      />
    </View>
  );
};

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    width: '100%',
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
    height: 50,
    marginBottom: 20,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  finishButton: {
    backgroundColor: '#00C3FF',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 5,
    marginBottom: 20,
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop: 20,
  },
});

export default AddJobScreen;
