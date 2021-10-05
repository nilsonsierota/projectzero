import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { LoginIn } from '../screens/LoginIn';
import { Register } from '../screens/Register';
import { Products } from '../screens/Products';
import { Services } from '../screens/Services';
import { House } from '../screens/House';
import { About } from '../screens/About';
import { Anuncio } from '../screens/Anuncio';
import { AnuncioAdd } from '../screens/AnuncioAdd';

const AuthStack = createNativeStackNavigator();
function Auth() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen 
       name="LoginIn" 
        component={LoginIn} 
        options={{
         title: 'Login',
         }}
      />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
}

const HomeStack = createBottomTabNavigator();
function Start() {
  return (
    <HomeStack.Navigator 
      screenOptions={{ 
        headerShown: false,
        tabBarStyle:{
          backgroundColor: 'white'
        }
      }}
    >        
      <HomeStack.Screen 
        name="Products" 
        component={Products} 
        options={{
          title: 'Produtos',
          tabBarIcon: ({focused}) => (
            <Ionicons name="cart" size={32} color="#575DD9" />
          )
        }}
      />
      <HomeStack.Screen 
       name="House" 
       component={House} 
       options={{
        title: 'Imoveis',
        tabBarIcon: ({focused}) => (
          <Ionicons name="home" size={32} color="#575DD9" />
        )
      }}
      />      
      <HomeStack.Screen 
       name="Services" 
       component={Services} 
       options={{         
        title: 'Serviços',
        tabBarIcon: ({focused}) => (
          <Ionicons name="construct" size={32} color="#575DD9" />
        )
      }}
      />
      <HomeStack.Screen 
       name="AnuncioAdd" 
       component={AnuncioAdd} 
       options={{         
        title: '',        
        tabBarIcon: ({focused}) => (
          <Ionicons name="add-circle" size={32} color="#575DD9" />
        )
      }}
      />
      <HomeStack.Screen 
        name="About" 
        component={About} 
        options={{
          title: 'Sobre',
          tabBarIcon: ({focused}) => (
            <Ionicons name="alert-circle" size={32} color="#575DD9" />
          )
        }}
      />
    </HomeStack.Navigator>
  );
}

const AnuncioStack = createNativeStackNavigator();
function AnuncioHome() {
  return (
    <AnuncioStack.Navigator>
      <AnuncioStack.Screen 
        name="Anuncio" 
        component={Anuncio} 
        options={{
          title: 'Detalhes do Anuncio',
          
        }}
      />
    </AnuncioStack.Navigator>    
  );
}

const Stack = createNativeStackNavigator();
export function AuthRoutes() {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Start" component={Start} />         
            <Stack.Screen name="AnuncioHome" component={AnuncioHome} />      
        </Stack.Navigator>    
    )
}