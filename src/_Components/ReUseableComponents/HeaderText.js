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
        height: 50, 
        alignItems: "center"
    }, 
    text:{
        fontSize: 30
    }
})
