import React, { useState } from "react";
import { TouchableOpacity, View , Text, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Firebase from '../../Config';

import { styles } from "./styles";

export function LoginIn() {
    const navigation = useNavigation();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [loginError, setLoginError] = useState('');
    const auth = Firebase.auth();

    const handleAuth = async() => {
        try {
            if (userName !== '' && password !== '') {
              await auth.signInWithEmailAndPassword(userName, password);

              navigation.navigate('Start', { screen: 'Products' })
            }
        } catch (error) {
            setLoginError(error.message);
        }
    };

    return(
        <View style={styles.container}> 
            <StatusBar backgroundColor="#575DD9" />
        
            <Text style={{ marginBottom: 20 }}>{loginError}</Text>

            <Text style={{ marginBottom: 20 }}>Bem Vindo ao Login</Text>

            <View style={styles.input}>   
                <TextInput
                    onChangeText={(userName) => setUserName(userName)}
                    placeholder={'E-Mail'}
                    style={styles.textinput}
                />
                <TextInput
                    onChangeText={(password) => setPassword(password)}
                    placeholder={'Senha'}
                    secureTextEntry={true}
                    style={styles.textinput}
                />                        
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity 
                    onPress={handleAuth}
                    style={styles.button}
                >
                    <Text>Entrar</Text>
                </TouchableOpacity>  

                <TouchableOpacity 
                    onPress={()=> navigation.navigate('Register')}
                    style={styles.button}
                >
                    <Text>Registrar</Text>
                </TouchableOpacity>     
            </View>  
        </View>
    ); 
}