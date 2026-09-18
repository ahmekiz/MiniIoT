import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View, Pressable} from 'react-native';

export default function App() {
  const [isOn, setIsOn] = useState(false)
  const [brightness, setBrightness] = useState(50);
  const deviceName = 'Mini IoT LED'
  const text = 'Bu bir IoT Projesidir'
  const info = isOn ? 'LED is shining' : 'LED is currently off'
  const statusColor= isOn ? 'green' : 'red'
  const canİncreaseBrightness = brightness < 100;
  const canDecreaseBrightness = brightness > 0;
  const effectiveBrightness = isOn ? brightness : 0;
  function handleIncreaseBrightness() {
    const nextBrigtness = brightness + 10
    if(nextBrigtness > 100) {
      return
    }
    setBrightness(nextBrigtness)
  }
  function handleDecreaseBrightness() {
    const nextBrightness = brightness - 10
    if(nextBrightness < 0) {
      return
    }
    setBrightness(nextBrightness)
  }
  function handleToggle() {
    setIsOn(!isOn)
  }
  return (
    <ImageBackground
      source={require('./assets/background.jpeg')}
      style={styles.background}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}>
      <Text style={styles.title}>{text}</Text>
      <Text>{deviceName}</Text>
      <Pressable onPress={handleToggle}>
          <Text style={{color: statusColor}}>{isOn ? 'Turn Off' : 'Turn On'}</Text>
      </Pressable>
      <Text>Configured Brightness: {brightness}%</Text>
      <Text>Effective Brightness: {effectiveBrightness}%</Text>
      <Pressable onPress={handleIncreaseBrightness} disabled={!canİncreaseBrightness}>
        <Text style={
          {opacity: canİncreaseBrightness ? 1 : 0.4}
        }>Brightness + 10</Text>
      </Pressable>
      <Pressable onPress={handleDecreaseBrightness} disabled={!canDecreaseBrightness}>
        <Text style={
          {opacity: canDecreaseBrightness ? 1 : 0.4}
        }>Brightness - 10</Text>
      </Pressable>
      <Text>
        {info}
      </Text>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  backgroundImage: {
    transform: [
      { scale: 1.1 },
      { translateX: -40 },
    ],
  },
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
