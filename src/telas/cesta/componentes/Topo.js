import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import topo from '../../../../assets/topo.png';
import Texto from '../../../componentes/Texto';

const windowWidth = Dimensions.get('window').width;

export default function Topo() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalhe da Cesta</Texto>
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
    }
});