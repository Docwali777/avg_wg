import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Colors } from "../../_Configuration/Colors"

const ButtonComponent = ({title, onPress, buttonStyle, ...props}) => {
    return (
        <TouchableOpacity {...props} onPress={onPress} style={[styles.container, buttonStyle]}>
            <Text style={styles.titleText} >{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonComponent

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.3, 
        shadowRadius: 4, 
        shadowOffset: {
            height: 3,
            width: 3
        }, 
        backgroundColor: Colors.lightPurple, 
        width: 200, 
        height: 40, 
        borderRadius: 20, 
        margin: 10
    }, 
    titleText:{
        fontSize: 20, 
        fontWeight: "700",
        color: "#fff"
    }
})
