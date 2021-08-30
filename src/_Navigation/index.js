import React from 'react'
import { View, Text } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {  createDrawerNavigator } from "@react-navigation/drawer"

//Stacks
import AverageWeightGainCalculator from "./AverageWeightGainCalculatorStack/AWG_index"

// Screen
// Main App Home
import AppHome from '../_MainScreens/AppHome';
import Creator from '../_MainScreens/Creators';
import DisclaimerScreen from '../_MainScreens/Disclaimer';

const AppStack = createDrawerNavigator()

const screenStyles = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
}





const AppNavigation = () => {

    return (
        <AppStack.Navigator>
            <AppStack.Screen 
                options={{
                    headerTitle:""
                }}
                name="Welcome" 
                component={AppHome} 
                />

            <AppStack.Screen 
                options={{
                    headerTitle: "Weight Gain Calc", 
                    title: "Weight Gain Calculator"
                }}
            name="Average_Weight_Gain_Calculator" 
            component={AverageWeightGainCalculator}   />


                <AppStack.Screen 
                options={{
                    title: "Creator"
                }}
                name="Creator" 
                component={Creator} 
                />  

            

                <AppStack.Screen 
                options={{
                    title: "Medical Disclaimer"
                }}
                name="Disclaimer" 
                component={DisclaimerScreen} 
                />

        </AppStack.Navigator>
    )
}

const aStack = createNativeStackNavigator()

const aStackNav = ()=>{

}

export default AppNavigation
