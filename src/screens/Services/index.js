import React, { useState } from "react";
import { View , Text, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { styles } from "./styles";

const Anuncios = [
    {
        id: '1',
        title: 'Anuncio 1',
        description: 'Descrição do Anuncio',   
        price: 'R$500,00',
    },
    {
        id: '2',
        title: 'Anuncio 2',
        description: 'Descrição do Anuncio',   
        price: 'R$1.000,00',
    },
    {
        id: '3',
        title: 'Anuncio 3',
        description: 'Descrição do Anuncio',   
        price: 'R$1.500,00',
    },
    {
        id: '4',
        title: 'Anuncio 4',
        description: 'Descrição do Anuncio',   
        price: 'R$2.000,00',
    },
    {
        id: '5',
        title: 'Anuncio 5',
        description: 'Descrição do Anuncio',   
        price: 'R$2.500,00',
    },
    {
        id: '6',
        title: 'Anuncio 6',
        description: 'Descrição do Anuncio',   
        price: 'R$500,00',
    },
    {
        id: '7',
        title: 'Anuncio 7',
        description: 'Descrição do Anuncio',   
        price: 'R$1.000,00',
    },
    {
        id: '8',
        title: 'Anuncio 8',
        description: 'Descrição do Anuncio',   
        price: 'R$1.500,00',
    },
    {
        id: '9',
        title: 'Anuncio 9',
        description: 'Descrição do Anuncio',   
        price: 'R$2.000,00',
    },
    {
        id: '10',
        title: 'Anuncio 10',
        description: 'Descrição do Anuncio',   
        price: 'R$2.500,00',
    },
    {
        id: '11',
        title: 'Anuncio 11',
        description: 'Descrição do Anuncio',   
        price: 'R$500,00',
    },
    {
        id: '12',
        title: 'Anuncio 12',
        description: 'Descrição do Anuncio',   
        price: 'R$1.000,00',
    },
    {
        id: '13',
        title: 'Anuncio 13',
        description: 'Descrição do Anuncio',   
        price: 'R$1.500,00',
    },
    {
        id: '14',
        title: 'Anuncio 14',
        description: 'Descrição do Anuncio',
        price: 'R$2.000,00',
    },
    {
        id: '15',
        title: 'Anuncio 15',
        description: 'Descrição do Anuncio',        
        price: 'R$2.500,00',
    },
];

export function Services() {
    const navigation = useNavigation();
    const [listaAnuncios, setListaAnuncios] = useState(Anuncios);  

    const RenderItem = ({ item }) => {

        return (
          <View style={styles.anuncio}>           
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
            <TouchableOpacity 
                onPress={() => 
                    navigation.navigate(
                        'AnuncioHome', { 
                            screen: 'Anuncio',
                            params:{ item }                         
                        }
                    )
                }
            > 
                <Text>Detalhes</Text>
            </TouchableOpacity>
          </View>
        );
    };

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#575DD9" />

            <Text style={{ marginBottom: 20 }}>Pagina de Serviços</Text>   

            <View style={styles.anuncios}>    
                <FlatList data={listaAnuncios} renderItem={RenderItem} keyExtractor={item => item.id} />              
            </View>        
        </SafeAreaView >
    ); 
}