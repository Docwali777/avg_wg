import React, { useState } from 'react'
import { StyleSheet, Text, View, Pres, Pressable } from 'react-native'
import LabelComponent from './ReUseableComponents/LabelComponent'

//colors
import { Colors } from '../_Configuration/Colors'

const ToggleSwitchComponent = ({labelLeft, labelRight, onPress}) => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = ()=>{
        setToggle(!toggle)
        onPress()
    }
    return (
       <View style={styles.container}>
               <LabelComponent label={labelLeft} />
            <Pressable onPress={handleToggle} style={styles.toggleContainer}>
            
           
                    <View style={[styles.indicator, {left: toggle ? 17 : 0}]} />

            </Pressable>
                <LabelComponent label={labelRight} />
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row", 
        justifyContent: "space-between", 
        width: 200, 

    },
    toggleContainer: {
        borderWidth: 3, 
        borderColor: Colors.gray || "gray",
        height: 20, 
        width: 40, 
        borderRadius: 10, 
    }, 
    indicator:{
        height: 14, 
        width: 17, 
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 1, 
        backgroundColor: Colors.green || "green"
    }
})

export default ToggleSwitchComponent


