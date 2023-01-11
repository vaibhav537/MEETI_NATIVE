import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Contact from './src/screens/Contact';

export default function App() {
  return (
    <>
    <View className="flex-1 items-center justify-center bg-yellow-600">
      <Contact/>
      <StatusBar style="auto" />
    </View>
    </>
  );
}

