import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';

export default function App() {
  const [isOn, setIsOn] = useState(false)
  const [brightness, setBrightness] = useState(50);
  const [red,setRed] = useState(130)
  const [green,setGreen] = useState(40)
  const [blue,setBlue] = useState(220)
  const ledColor = `rgb(${red}, ${green}, ${blue})`
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
  function handleIncreaseRed() {
    const nextColor = red + 15
    if(nextColor > 255) {
      return
    }
    setRed(nextColor)
  }
  function handleIncreaseGreen() {
    const nextColor = green + 15
    if(nextColor > 255) {
      return
    }
    setGreen(nextColor)
  }
  function handleIncreaseBlue() {
    const nextColor = blue + 15
    if(nextColor > 255) {
      return
    }
    setBlue(nextColor)
  }
  return (
    <View style={styles.container}>
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
      <Text>R: {red}</Text>
      <Text>G: {green}</Text>
      <Text>B: {blue}</Text>
      <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: ledColor,
      }}
      />
      <Pressable onPress={handleIncreaseRed}>
        <Text>Red +15</Text>
      </Pressable>
      <Pressable onPress={handleIncreaseGreen}>
        <Text>Green +15</Text>
      </Pressable>
      <Pressable onPress={handleIncreaseBlue}>
        <Text>Blue +15</Text>
      </Pressable>
      <Text>
        {info}
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
