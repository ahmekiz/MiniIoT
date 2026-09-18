import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';

export default function App() {
  const [isOn, setIsOn] = useState(false);
  const deviceName = 'Mini IoT LED'
  const text = 'Bu bir IoT Projesidir'
  const info = isOn ? 'LED is shining' : 'LED is currently off'
  const statusColor= isOn ? 'green' : 'red'
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      <Text>{deviceName}</Text>
      <Pressable onPress={() => setIsOn(!isOn)}>
          <Text style={{color: statusColor}}>{isOn ? 'Turn On' : 'Turn Off'}</Text>
      </Pressable>
      <Text>
        {
          info
        }
        </Text>
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
