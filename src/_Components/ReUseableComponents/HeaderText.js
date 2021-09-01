import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HeaderText = ({children, customTextStyle}) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, customTextStyle]} > {children}</Text>
        </View>
    )
}

export default HeaderText

const styles = StyleSheet.create({
    container: {
        height: 30, 
        alignItems: "center", 
        // borderBottomWidth: 1
    }, 
    text:{
        fontSize: 25
    }
})
