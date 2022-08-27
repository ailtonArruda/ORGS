import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';
import Texto from '../componentes/Texto';

const windowWidth = Dimensions.get('window').width;

export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalhe da Cesta</Texto>
        <View style={estilos.cesta}>
            <Texto style={estilos.nomeProduto}>Cesta de Verduras</Texto>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.iconFazenda}/>
                <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>       
            <Texto style={estilos.descricao}>
                Uma cesta com produtos selecionados cuidadosamente 
                da fazenda direto para sua cozinha.
            </Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
        </View>
    </>    
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * windowWidth,
    },
    titulo: {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        fontSize:16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
    cesta: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    nomeProduto: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,        
        fontWeight: "bold"       
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    iconFazenda: {
        height: 32,
        width: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
});
