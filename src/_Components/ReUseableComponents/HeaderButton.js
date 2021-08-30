import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

//icons
import { Entypo } from '@expo/vector-icons'; 


const HeaderButton = ({customStyleContainer, text,  ...props}) => {
    return (
        <TouchableOpacity 
           {...props}
            style={[styles.nextButton, customStyleContainer]} >
            
            <View style={styles.innerContainer}>
                <Text style={styles.text}>{text}</Text>
                <Entypo name="arrow-bold-right" size={24} color="#000" iconStyle={{margin: 2 }}/>
            </View>
        </TouchableOpacity>
    )
}

export default HeaderButton

const styles = StyleSheet.create({
    innerContainer: {
        width: "90%", 
        justifyContent: "space-around", 
        flexDirection: "row"
    },
    nextButton: {
        width: 200, 
        height: 33, 
        justifyContent: "center", 
        alignItems: "center"
      },
      text:{
          fontWeight: "600", 
          fontSize: 20
        }
})
