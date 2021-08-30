import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons';

const NavigationTextComponent = ({onPress, navigationText}) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={{flexDirection: "row", marginTop: 10}}>
   
        <View style={styles.iconContainer} >
        <MaterialIcons name="navigate-next" size={30} color="black"  />
        </View>

        <Text style={{fontSize: 20, color: "blue"}}>
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
