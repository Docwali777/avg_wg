import React,  { useRef } from 'react'
import {  Text, View, Animated } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"



//context
import { CalenderContext, CalenderProvider } from "../_Contexts/Context"

//screens
import Home from '../Screens/Home'
import Calender1 from '../Screens/Calender_1_Screen'
import Calender2 from "../Screens/Calender_2_Screen"

const AVG_CalculatorStack = createNativeStackNavigator()


const screenOptions ={
  headerBackTitle: "Back",
  animation: "none",
}

const CalculatorStack = () => {

    return (
      <CalenderProvider>
           <AVG_CalculatorStack.Navigator screenOptions={screenOptions}>

           <AVG_CalculatorStack.Screen
              options={{headerShown: false}}
              name="IntroScreen" 
              component={Home} />
           <AVG_CalculatorStack.Screen 
                name="Calender1" 
                component={Calender1} />

            <AVG_CalculatorStack.Screen 
                name="Calender2" 
                component={Calender2} />
      
       </AVG_CalculatorStack.Navigator>
      </CalenderProvider>
    )
}

export default CalculatorStack
