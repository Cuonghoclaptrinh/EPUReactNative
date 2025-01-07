import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Bai2 = () => {
  // Tạo state để quản lý nội dung của Text
  const [message, setMessage] = useState("I'm text");

  // Hàm để thay đổi nội dung
  const renderNewMessage = () => {
    setMessage("Hello, world");
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.square}>
        <Text style={styles.text}>{message}</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title="Change Text" onPress={() => renderNewMessage()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Tạo khoảng cách giữa View và Button
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20, // Tạo khoảng cách trên nút bấm
  },
});

export default Bai2;
