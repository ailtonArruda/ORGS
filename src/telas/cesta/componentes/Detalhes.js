import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

import Texto from '../../../componentes/Texto';

export default function Detalhes({ nomeProduto, logoFazenda, nomeFazenda, descricao, preco, botao}) {
    return <>
        <Texto style={estilos.nomeProduto}>{ nomeProduto }</Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.iconFazenda}/>
            <Texto style={estilos.nomeFazenda}>{ nomeFazenda }</Texto>
        </View>       
        <Texto style={estilos.descricao}>
              { descricao }
        </Texto>
        <Texto style={estilos.preco}>{ preco }</Texto>  
        <TouchableOpacity style={estilos.botao}>
            <Texto style={estilos.textoBotao}>
                { botao }
            </Texto>
        </TouchableOpacity>
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
    },
    botao: {
        backgroundColor: "#2A9F85",
        marginTop: 16,
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao: {
        textAlign: "center",
        fontWeight: "bold",
        color: "#FFF",
        fontSize: 16,
        lineHeight: 26
    }
})
