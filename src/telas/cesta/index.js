import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';



import Texto from '../../componentes/Texto';
import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes';



export default function Cesta() {
    return <>
        <Topo />
        <View style={estilos.cesta}>
        <Detalhes />
        </View>
    </>    
}

const estilos = StyleSheet.create({
  
    cesta: {
        paddingHorizontal: 16,
        paddingVertical: 8
    }
});
