
import React from 'react';


import {  NavigationContainer } from "@react-navigation/native"
import AppStack from "./src/_Navigation"


export default function App() {
  return (
   <NavigationContainer>
        <AppStack />
   </NavigationContainer>
  );
}

