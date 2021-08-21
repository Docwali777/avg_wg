import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const LabelComponent = ({label}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.labelText} >{label}</Text>
        </View>
    )
}

export default LabelComponent

const styles = StyleSheet.create({
    container: {
        margin: 0
    }, 
    labelText:{
        fontSize: 16
    }
})
