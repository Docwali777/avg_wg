import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import BR from '../_Components/ReUseableComponents/BR'
import HeaderText from '../_Components/ReUseableComponents/HeaderText'

const Creators = () => {

    const date = new Date()
    const year = date.getFullYear()
    return (
        <ScrollView >
                <View style={styles.container} >
                <HeaderText>Dr. Wali Gauvin</HeaderText>

<View style={styles.imageContainerOuter} >
    <View style={styles.imageContainerInner}>
    <Image 
            style={styles.image}
            source={require("../assets/DrWaliGauvinProfile.jpg")}
        />
</View>
</View>


<View style={styles.textContainer}>
    <Text style={{fontSize: 20}}>
    &nbsp; &nbsp; &nbsp;I have been practicing pediatric cardiology, which I love, for the past {year-2006} years. 
    I ventured out on my own and started my first medical practice in 2011.  
    I am a lover of the sciences, medical and technological. I had my first taste of 
    coding in 2016 and I have loved being curious and challenged by coding

    </Text>
    </View>
    <BR />

    <View style={styles.textContainer}>
    <Text style={{fontSize: 20}}>
   
    &nbsp; &nbsp; &nbsp; I want to make applications that are useful for healthcare providers and parents
  
      </Text>
  </View>


                </View>
        </ScrollView>
    )
}

export default Creators

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        marginTop: 10
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
