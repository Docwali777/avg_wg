import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import HeaderText from '../_Components/ReUseableComponents/HeaderText'

const DisclaimerScreen = () => {

    const { width } = useWindowDimensions()

    return (
        <View style={{ width: width-20, marginLeft: 10}}>
     
         
         <View style={{fontWeight: "600",  marginTop: 10,  alignItems: "center", justifyContent: "center", height: 35}} >
              <Text style={{fontSize: 18, fontWeight: "600", }}>
                    Disclaimer for Pediatric Calc
              </Text>
         </View>

        <View style={{ marginTop: 30}}>

       <View style={{width: "100%", alignItems: "center"}} >
        <Text>
                If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at docwali777@gmail.com. 
            </Text>
       </View>

        <View style={{fontWeight: "600",  marginTop: 10,  alignItems: "center", justifyContent: "center", height: 35}} >
              <Text style={{fontSize: 18, fontWeight: "600", }}>
                     Disclaimers for Pediatric Calc
              </Text>
         </View>



<Text>
All the information on this app is published in good faith and for general information purpose only. 
Pediatric Calc does not make any warranties about the completeness, 
reliability and accuracy of this information. 
Any action you take upon the information you find on this website (Pediatric Calc), 
is strictly at your own risk. Pediatric Calc will not be liable for any losses and/or damages in connection with the use of our website.


Should we update, amend or make any changes to this document, those changes will be prominently posted here.
</Text>
       

        </View>


        </View>
    )
}

export default DisclaimerScreen

const styles = StyleSheet.create({})
