import React from "react";
import { View , Text, TouchableOpacity, SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';

import { styles } from "./styles";

export function Anuncio() {
    const route = useRoute();

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#575DD9" />

            <Text style={{ marginBottom: 20 }}>Pagina de Anuncio</Text>   

            <View style={styles.anuncios}>    
                <Text>{route.params.item.title}</Text>
                <Text>{route.params.item.description}</Text>
                <Text>{route.params.item.price}</Text>
                <TouchableOpacity> 
                    <Text>Contatos</Text>
                </TouchableOpacity>   
            </View>         
        </SafeAreaView >
    ); 
}