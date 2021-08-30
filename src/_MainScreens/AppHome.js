import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BR from '../_Components/ReUseableComponents/BR'
import HeaderText from '../_Components/ReUseableComponents/HeaderText'

import { MaterialIcons } from '@expo/vector-icons';
import NumberedReference from '../_Components/ReUseableComponents/NumberedReference';
import NavigationTextComponent from '../_Components/ReUseableComponents/NavigationTextComponent';

const AppHome = ({navigation}) => {

    const date = new Date()
    const year = date.getFullYear()
    return (
        <View style={styles.container} >
             <HeaderText>Welcome</HeaderText>
        <View style={{width: "90%", marginTop: 30, }} >
              
                <NavigationTextComponent
                     onPress={()=>navigation.navigate("Average_Weight_Gain_Calculator")}
                    navigationText="Average Weight Gain Calculator"
                />
                 <NavigationTextComponent
                     onPress={()=>navigation.navigate("Disclaimer")}
                    navigationText="Disclaimer"
                />
                  <NavigationTextComponent
                     onPress={()=>navigation.navigate("Creator")}
                    navigationText="Creators"
                />
                
        </View>
        </View>
    )
}

export default AppHome

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        // justifyContent: "center", 
        alignItems: "center",
        marginTop: 50
    }, 
    image: {
        height: 200, 
        width: 200, 
        borderRadius: 100, 
        margin: 1, 
        
    },
    imageContainerInner:{
        margin: 20, 
        borderRadius: 100,
        shadowColor: "#000", 
        shadowOpacity: 0.4, 
        shadowOffset: {
            height: 1, 
            width: 1
        }
    }, 
    imageContainerOuter:{
        borderRadius: 120,
        backgroundColor: "#fff",
        shadowColor: "#000", 
        shadowOpacity: 0.4, 
        shadowRadius: 5,
        shadowOffset: {
            height: 10, 
            width: 10
        },
        marginBottom: 50
        
    }, 
    textContainer: {
        width: "80%", 
        padding: 2, 
        height: 220,
      
    }
})
