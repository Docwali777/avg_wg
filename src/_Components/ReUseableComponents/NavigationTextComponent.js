import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons';

const NavigationTextComponent = ({onPress, navigationText}) => {

    const { width } = useWindowDimensions()
    console.log({width});
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={{flexDirection: "row", marginTop: 10}}>
   
        <View style={styles.iconContainer} >
        <MaterialIcons name="navigate-next" size={width < 400 ? 20 : 30} color="black"  />
        </View>

        <Text style={{fontSize: width < 400 ? 15 : 22, color: "blue"}}>
           {navigationText}
        </Text>
    </TouchableOpacity>

    )
}

export default NavigationTextComponent

const styles = StyleSheet.create({
    iconContainer: {
        marginRight: 10
    }
})
