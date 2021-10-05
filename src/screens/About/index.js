import React, { useState, useEffect } from "react";
import { View , Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Firebase from '../../Config';

import { styles } from "./styles";

export function About() {
    const navigation = useNavigation();
    const [user, setUser] = useState();
    const auth = Firebase.auth();

    const handleLogout = async() => {
        try {
            await auth.signOut();
          } catch (error) {
            console.log(error);
          }

        navigation.navigate('Auth', { screen: 'LoginIn' })
    };

    const getUser = async() => {
        
    };

    const removeUser = async() => {

    };

    useEffect(() => {
        getUser();
    },[]);

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#575DD9" />

            <Text>Ola, {user}</Text>
            
            <TouchableOpacity onPress={handleLogout}> 
                <Text>Voltar ao Login</Text>
            </TouchableOpacity>           
        </View >
    ); 
}