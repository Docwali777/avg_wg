import React, { useEffect, useContext, useState } from 'react'
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'

//context
import { CalenderContext } from "../_Contexts/Context"

//icons
import { Entypo } from '@expo/vector-icons'; 

//component
import CalenderComponent from '../../../_Components/CalenderComponent';
import ToggleGramsAndPoundsComponent from '../../../_Components/ToggleGramsAndPoundsComponent';
import ButtonWithChildren from '../../../_Components/ButtonWithChildren';


//dates 
import ButtonComponent from '../../../_Components/ReUseableComponents/ButtonComponent';
import AnimatedHeaderTitle from '../../../_Components/ReUseableComponents/AnimatedHeaderTitle';




const Calender1= ({navigation}) => {

   useEffect(()=>{
    navigation.setOptions({
      headerTitle:()=> date2.date ? <Text>Enter Final Weight</Text> : <AnimatedHeaderTitle>Enter End Date</AnimatedHeaderTitle>
    })
   })

    //context
     const { date1, date2, setDate2, handleCalculations } = useContext(CalenderContext)

     //state
     const [modalVisible, setModalVisible] = useState(false)
     const [errorMessage, setErrorMessage] = useState(null)

   
    return (
        <View  style={styles.container} >
            <View  >
         
              {
                date2.date === null ? 
                <CalenderComponent
                date={date2.date}
                setDate={setDate2}
             
              /> :
              <View style={{alignItems: "center", justifyContent: "center", height: 200, marginBottom: 10,  borderBottomWidth: 1}} > 
                  <Text style={{marginBottom: 10, fontSize: 20, fontWeight: "bold"}}>End Date</Text>
                  <Text style={{fontSize: 18}}>{date2.date}</Text>
           
                  <ButtonComponent title="Edit Date" onPress={()=>setDate2(prev=> ({...prev, date: null}))} />
               
              </View>
              }

      
              </View>

            
                <ToggleGramsAndPoundsComponent
                    date={date2.date}
                    setWeight={setDate2}
                />
            
        
          
              {
                   date2.date && date2.weight && (
                    <View style={{justifyContent: "center", alignItems: "center",height: 100}}>
                   
                    <ButtonWithChildren onPress={()=>{
                            handleCalculations()
                            navigation.navigate("IntroScreen")
                            }} >
                               <Entypo name="arrow-bold-right" size={24} color="#fff" iconStyle={{width: 100}}/>
                            <Text style={{color: "#fff", fontWeight: "700", fontSize: 21}}>Results </Text>
                              <Entypo name="arrow-bold-right" size={24} color="#fff" iconStyle={{width: 100}}/>
               
                  </ButtonWithChildren>
                  </View>
                   )
                 }
             
 
      
          
         
        </View>
    )

}

const styles = StyleSheet.create({
container: {
  // alignItems: "center"
}
  
})


export default Calender1





