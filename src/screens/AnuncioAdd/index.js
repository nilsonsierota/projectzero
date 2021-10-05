import React, { useState } from "react";
import { View , Text, TextInput, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import Firebase from '../../Config';

import { styles } from "./styles";

export function AnuncioAdd() {
    const navigation = useNavigation();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState();
    const [productError, setProductError] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert('Permission to access camera roll is required!');
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
        if (pickerResult.cancelled === true) {
          return;
        }
    
        setSelectedImage({ localUri: pickerResult.uri });
      };
    
      if (selectedImage !== null) {
        return (
          <View style={styles.container}>
            <Image
              source={{ uri: selectedImage.localUri }}
              style={styles.thumbnail}
            />
          </View>
        );
      }

    function handleInsert() {
        try {
            if (title !== '' && description !== '' && description !== null) {
                Firebase.firestore()
                .collection('Produtos')
                .add({
                    titulo: title,
                    descricao: description,
                    valor: price,
                })
                .then(() => {
                    navigation.navigate('Start' , { screen: 'Products'})
                });    
            }     
        } catch (error) {
            setProductError(error.message);
        }               
    };

    return(             
        <SafeAreaView style={styles.container}> 
            <StatusBar backgroundColor="#575DD9" />
        
            <Text style={{ marginBottom: 20 }}>{productError}</Text>
            <Text style={{ marginBottom: 20 }}>Crie seu anuncio</Text>

            <View style={styles.input}>   
                <TextInput
                    onChangeText={setTitle}
                    placeholder={'Titulo'}
                    style={styles.textinput}
                />       
                <TextInput
                    onChangeText={setDescription}
                    placeholder={'Descrição'}
                    style={styles.description}
                />  
                <TextInput
                    onChangeText={setPrice}
                    placeholder={'R$ 0.000,00'}
                    style={styles.textinput}
                />        

                <Image source={{ uri: '' }} style={styles.logo} />
                <Text style={styles.instructions}>
                    Para importar uma imagem clique
                </Text>

                <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                    <Text style={styles.buttonText}>Pegue uma foto</Text>
                </TouchableOpacity>          
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity 
                    onPress={handleInsert}
                    style={styles.button}
                >
                    <Text>Criar</Text>
                </TouchableOpacity>  
            </View>    
        </SafeAreaView >
    ); 
}