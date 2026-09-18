import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const deviceName = 'Mini IoT LED'
  return (
    <View style={styles.container}>
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
});
