import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

//config-colors
import { Colors } from "../_Configuration/Colors"

const ButtonWithChildren = ({children, customButtonStyle, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} 
        style={[styles.container, customButtonStyle]}>
                    {children}
      </TouchableOpacity>
    )
}

export default ButtonWithChildren

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.green, 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        height: 50, 
        padding: 10, 
        width: 300,  
        borderRadius: 25, 
        marginTop: 10,
        shadowOpacity: 0.5, 
        shadowRadius: 10, 
        shadowOffset: {
                height: 3,
                width: 3
            }, 
      },
})
