import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isOn, setIsOn] = useState(false);
  const deviceName = 'Mini IoT LED'
  const text = 'Bu bir IoT Projesidir'
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      <Text>{deviceName}</Text>
      <Text>Device Status OFF</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#beb9b9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12
  }
});
