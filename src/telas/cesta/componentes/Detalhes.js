import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Texto from '../../../componentes/Texto';
import logo from '../../../../assets/logo.png';

export default function Detalhes() {
    return <>
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
    </>
}

const estilos = StyleSheet.create({
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
})
