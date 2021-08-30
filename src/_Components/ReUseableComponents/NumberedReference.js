import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NumberedReference = ({infoText, number}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.numberText}>{number}</Text>   
        <Text style={{fontSize: 20}}>
             {infoText}
          </Text>
            </View>
    )
}

export default NumberedReference

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 5
    },  
    numberText: {
        fontSize: 20, 
        marginRight: 20,
    
    }
})
