import React, { useState, useEffect } from "react";
import { View , Text, TouchableOpacity, SafeAreaView, FlatList, ActivityIndicator  } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Firebase from '../../Config';

import { styles } from "./styles";

export function Products() {
    const navigation = useNavigation();  
    const [loading, setLoading] = useState(true);
    const [listaAnuncios, setListaAnuncios] = useState([]);  

    async function getListaAnuncios() {
        await Firebase.firestore()
            .collection('Produtos')
            .onSnapshot(querySnapshot => {
                const listaAnuncios = [];

                querySnapshot.forEach(documentSnapshot => {
                    listaAnuncios.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });

                setListaAnuncios(listaAnuncios);
                setLoading(false);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    };

    useEffect(() => {
        getListaAnuncios();
    }, []);

    const RenderItem = ({ item }) => {

        return (
          <View style={styles.anuncio}>   
            <View>
                <Text>Imagem Principal</Text>
            </View>
            <View style={styles.description}>
                <Text>{item.titulo}</Text>
                <Text>{item.descricao}</Text>
                <Text>{item.valor}</Text>

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
          </View>
        );
    };

    if (loading) {
        return <ActivityIndicator />;
    }

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#575DD9" />

            <Text style={{ marginBottom: 20 }}>Pagina de Produtos</Text>   

            <View style={styles.anuncios}>    
                <FlatList data={listaAnuncios} renderItem={RenderItem} keyExtractor={item => item.id} />              
            </View>         
        </SafeAreaView >
    ); 
}