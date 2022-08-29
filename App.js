import { React, useCallback } from 'react';
import { StatusBar, SafeAreaView, View} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';

import Cesta from './src/telas/cesta';
import mock from './src/mocks/cesta';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
      return null;
    }

  return (                                    //carregar só o que está visivel na tela
    <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1}}>
      <StatusBar/>
      <Cesta {...mock}/>      
    </SafeAreaView>
  );
}



