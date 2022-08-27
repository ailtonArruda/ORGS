import React from 'react';
import { StatusBar, SafeAreaView, View} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import Cesta from './src/telas/cesta';
import mock from './src/mocks/cesta';


export default function App() {
  const [fontLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fontLoaded){
    return <View/>
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta {...mock}/>      
    </SafeAreaView>
  );
}



