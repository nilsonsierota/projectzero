import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './src/Routes';

export default function App() {
    return(
      <NavigationContainer>
       <AuthRoutes />    
      </NavigationContainer>   
    );
}