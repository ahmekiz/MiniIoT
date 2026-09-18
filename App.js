import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';

export default function App() {
  const [isOn, setIsOn] = useState(false)
  const [brightness, setBrightness] = useState(50);
  const deviceName = 'Mini IoT LED'
  const text = 'Bu bir IoT Projesidir'
  const info = isOn ? 'LED is shining' : 'LED is currently off'
  const statusColor= isOn ? 'green' : 'red'
  function handleIncreaseBrightness() {
    const nextBrigtness = brightness + 10
    if(nextBrigtness > 100) {
      return
    }
    setBrightness(nextBrigtness)
  }
  function handleDecreaseBrightness() {
    const priviosBrightness = brightness - 10
    if(priviosBrightness < 0) {
      return
    }
    setBrightness(priviosBrightness)
  }
  function handleToggle() {
    setIsOn(!isOn)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      <Text>{deviceName}</Text>
      <Pressable onPress={handleToggle}>
          <Text style={{color: statusColor}}>{isOn ? 'Turn Off' : 'Turn On'}</Text>
      </Pressable>
      <Text>Brightness: {brightness}</Text>
      <Pressable onPress={handleIncreaseBrightness}>
        <Text>Brightness + 10</Text>
      </Pressable>
      <Pressable onPress={handleDecreaseBrightness}>
        <Text>Brightness - 10</Text>
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
