import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextInputComponent = ({constomContainerSyle, placeholder, value, keyboardType, label,...props}) => {
    return (
        <View style={[styles.container, constomContainerSyle]}>
          
           <View style={[styles.textInputContainer]}>
                <TextInput
                    style={styles.textInput}
                    placeholder={placeholder}
                    value={value}
                    textAlign= "center"
                    keyboardType={keyboardType}
                    {...props}
                 
                />
           </View>
           
           <View style={styles.labelContainer}>
               <Text style={styles.labelText} >{label}</Text>
           </View>
        </View>
    )
}

export default TextInputComponent

const styles = StyleSheet.create({
    container:{
        height: 40, 
        width: 300,
        margin: 20,
        // borderWidth: 1,
        borderBottomWidth: 1, 
        // justifyContent: "space-between"
    },
    labelContainer:{
        alignItems: "center", 
        marginTop: 20, 
        height: 25
    },
    labelText: {
        fontSize: 16
    },
    textInput: {
        height: 30, 
        fontSize: 20
    },
    
    textInputContainer:{
       

    }
})
