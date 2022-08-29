import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Texto from "./Texto";

export default function BotaoEstilo({ style, onPress, texto }){
    return  <TouchableOpacity style={[estilos.botao, style]} onPress={onPress}>
                <Texto style={estilos.textoBotao}>
                    { texto }
                </Texto>
            </TouchableOpacity>
        
}

const estilos = StyleSheet.create({
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