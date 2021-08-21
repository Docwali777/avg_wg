import React, { useState, useEffect, useContext } from 'react'
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'

//context
import { CalenderContext } from "../_Contexts/Context"

//icons
import { Entypo } from '@expo/vector-icons'; 

//component
import CalenderComponent from '../../../_Components/CalenderComponent';
import ToggleGramsAndPoundsComponent from '../../../_Components/ToggleGramsAndPoundsComponent';
import AnimatedHeaderTitle from '../../../_Components/ReUseableComponents/AnimatedHeaderTitle';
import ButtonComponent from '../../../_Components/ReUseableComponents/ButtonComponent';
import ButtonWithChildren from '../../../_Components/ButtonWithChildren';

//dates 
import ModalComponent from '../../../_Components/ReUseableComponents/ModalComponent';
import { Colors } from '../../../_Configuration/Colors';




const Calender1= ({navigation}) => {

   useEffect(()=>{
    navigation.setOptions({
      headerTitle:()=> date1.date ? <Text style={{fontSize: 20}}>Enter Initial Weight</Text> : <AnimatedHeaderTitle>Select Initial Date</AnimatedHeaderTitle>
  
    
    })
   })

    //context
     const { date1, setDate1} = useContext(CalenderContext)

    return (
        <View  style={styles.container} >
            <View  >
         
              {
                date1.date === null ? 
                <CalenderComponent
                date={date1.date}
                setDate={setDate1}
              /> :
              <View style={{alignItems: "center", justifyContent: "center", height: 200, marginBottom: 10,  borderBottomWidth: 1}} > 
                  <Text style={{marginBottom: 10, fontSize: 20, fontWeight: "bold"}}>Initial Date</Text>
                  <Text style={{fontSize: 18}}>{date1.date}</Text>
           
                  <ButtonComponent title="Edit Date" onPress={()=>setDate1(prev=> ({...prev, date: null}))} />
               
              </View>
              }

      
              </View>

            
                <ToggleGramsAndPoundsComponent
                    date={date1.date}
                    setWeight={setDate1}
                />
            
        
          
              {
                   date1.date && (date1?.weight)?.length ===4 && (
                    <View style={{ justifyContent: "center", alignItems: "center",height: 100,}}>
                      <ButtonWithChildren onPress={()=>navigation.navigate("Calender2")} >
                            <Entypo name="arrow-bold-right" size={24} color="#fff" iconStyle={{width: 100}}/>
                            <Text style={{color: "#fff", fontWeight: "700", fontSize: 21}}> Final Date and Weight </Text>
                              <Entypo name="arrow-bold-right" size={24} color="#fff" iconStyle={{width: 100}}/>
                      </ButtonWithChildren>
                  </View>
                   )
                 }
             
          
        </View>
    )

}

const styles = StyleSheet.create({
  completeButton: {
    backgroundColor: Colors.green, 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    height: 50, 
    padding: 10, 
    width: 300,  
    borderRadius: 25, 
    marginTop: 10,
    shadowOpacity: 0.5, 
    shadowRadius: 10, 
    shadowOffset: {
            height: 3,
            width: 3
        }, 
  },
container: {
  // alignItems: "center"
}
  
})


export default Calender1





