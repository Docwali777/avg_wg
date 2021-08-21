import React from 'react'

import { Ionicons } from '@expo/vector-icons';

import { createNativeStackNavigator } from "@react-navigation/native-stack"
//screens
import CalculatorScreens from './CalculatorStack./CalulatorStack';


const AverageWeightGainCalculatorStack= createNativeStackNavigator()

const AverageWeightGainCalculator = () => {
    return (
        <AverageWeightGainCalculatorStack.Navigator
            >
           <AverageWeightGainCalculatorStack.Screen 
                options={{
                    headerShown: false
                }}
                name="Home" 
                component={CalculatorScreens}  />
            
        
        </AverageWeightGainCalculatorStack.Navigator>
    )
}

export default AverageWeightGainCalculator
