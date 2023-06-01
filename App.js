import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import MainTabNavigator from './src/navigators/MainTabNavigator';
import FloatingMusicPlayer from './src/components/FloatingMusicPlayer';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <MainTabNavigator/>
      <FloatingMusicPlayer/>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
