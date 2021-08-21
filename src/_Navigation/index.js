import React from 'react'
import { View, Text } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {  createDrawerNavigator } from "@react-navigation/drawer"

//Stacks
import AverageWeightGainCalculator from "./AverageWeightGainCalculatorStack/AWG_index"

// Screen
import Calender1 from './AverageWeightGainCalculatorStack/Screens/Calender_1_Screen';

const AppStack = createDrawerNavigator()

const screenStyles = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
}

const TitleScreen =()=>(
    <View style={[screenStyles]}>
        <Text>Home Screen</Text>
    </View>
)

const WelcomScreen =()=>(
    <View style={[screenStyles]}>
        <Text>Home Screen</Text>
    </View>
)
const DisclaimerScreen =()=>(
    <View style={[screenStyles]}>
        <Text>Home Screen</Text>
    </View>
)

const AppNavigation = () => {
    return (
        <AppStack.Navigator>
            <AppStack.Screen 
                options={{
                    headerTitle:""
                }}
                name="Welcome" 
                component={WelcomScreen} 
                />

                <AppStack.Screen 
                options={{
                    title: "Medical Disclaimer"
                }}
                name="Disclaimer" 
                component={DisclaimerScreen} 
                />

            

            <AppStack.Screen 
                options={{
                    headerTitle: "Average Weight Gain Calculator", 
                    title: "Weight Gain Calculator"
                }}
            name="Average_Weight_Gain_Calculator" component={AverageWeightGainCalculator}   />

        </AppStack.Navigator>
    )
}

const aStack = createNativeStackNavigator()

const aStackNav = ()=>{

}

export default AppNavigation
