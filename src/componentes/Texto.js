import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ style, children }){
    let estilo = estilos.texto;

    // ? verifica se existe style
    if (style?.fontWeight === "bold"){
        estilo = estilos.textoNegrito;
    }

    return <Text style={[style, estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal"
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeitght: "normal"
    }
})