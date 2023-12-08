import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Catamaran_500Medium, Catamaran_900Black } from '@expo-google-fonts/catamaran';
import AppNavigator from './Navigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    Catamaran_500Medium, Catamaran_900Black
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar translucent backgroundColor="grey" barStyle="dark-content" />
      <AppNavigator />
    </>
  );
}
