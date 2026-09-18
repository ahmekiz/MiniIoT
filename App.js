import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
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
    backgroundColor: '#888',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12
  }
});
