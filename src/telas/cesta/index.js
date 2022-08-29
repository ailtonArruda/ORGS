import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';


import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes';
import Itens from './componentes/Itens';
import Texto from '../../componentes/Texto';


export default function Cesta({ topo, detalhes, itens}) {
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Itens}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo}/>

                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes}/>
                        <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
                    </View>
                </>
            }}
        />        
    </>    
}

const estilos = StyleSheet.create({
  
    cesta: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 25,
        lineHeight: 32
    },
});

