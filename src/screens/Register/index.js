import React, { useState } from "react";
import { TouchableOpacity, View ,Text, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Firebase from '../../Config';

import { styles } from "./styles";

export function Register() {
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [signupError, setSignupError] = useState('');
    const auth = Firebase.auth();

    async function handleInsert() {
        try {
            if (email !== '' && password !== '') {
              await auth.createUserWithEmailAndPassword(email, password);

              navigation.goBack();
            }
        } catch (error) {
          setSignupError(error.message);
        }             
    };

    return(
        <View style={{ flex:1 }}>
            <StatusBar backgroundColor="#575DD9" />
            
            <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ marginBottom: 20 }}>{signupError}</Text>
                <Text style={{ marginBottom: 20 }}>Pagina de Registrar</Text>

                <TextInput
                    onChangeText={(email) => setEmail(email)}
                    placeholder={'E-Mail'}
                    style={styles.textinput}
                />
                <TextInput
                    onChangeText={(password) => setPassword(password)}
                    placeholder={'Senha'}
                    secureTextEntry={true}
                    style={styles.textinput}
                />  

                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleInsert}
                > 
                    <Text>Registrar</Text>
                </TouchableOpacity>                
            </View>
        </View>
    ); 
}