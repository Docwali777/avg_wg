import React, { useState, useEffect, useContext, useRef } from 'react'
import {StyleSheet, Text, TouchableOpacity, View , Animated, Keyboard} from 'react-native'

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

//config
import  { Colors } from "../../../_Configuration/Colors"
import HeaderButton from '../../../_Components/ReUseableComponents/HeaderButton';



const Calender2= ({navigation}) => {

  const calenderOpacityAnim = useRef(new Animated.Value(1)).current 
  const buttonAnimLoop = useRef(new Animated.Value(0)).current



     //state
     const [keyboardDisplay, setKeyboardDisplay] = useState(false)
     const [size, setHeight] = useState(new Animated.Value(200))
         
     //context
    const { date1, date2, setDate2, handleCalculations } = useContext(CalenderContext)

   useEffect(()=>{
    navigation.setOptions({
      headerTitleShown: false
    
    })

      
    const keyboardDidShow = Keyboard.addListener("keyboardDidShow", ()=>{
  
      hideCalender()
      // decreaseCalenderSize()
    
      
    })
    const keyboardDidSHide = Keyboard.addListener("keyboardDidHide", ()=>{

      showCalender()

      
    })
    return ()=>{
      keyboardDidShow.remove()
      keyboardDidSHide.remove()
    }
   }, [keyboardDisplay, size, date1.weight])


    //  Aniamtion fiunctions
    const hideCalender = ()=>{
      setKeyboardDisplay(!keyboardDisplay)
         Animated.parallel([
          Animated.timing(
            calenderOpacityAnim, 
            {
              toValue: 0,
              duration: 200,
              useNativeDriver: false
            }
          ),
          Animated.timing(
            size, 
            {
              toValue: 0, 
              duration: 400, 
              useNativeDriver: false
            }
          )
         ]).start()
     
     }
  
  
     const showCalender = ()=>{
      setKeyboardDisplay(!keyboardDisplay)
     Animated.parallel([
      Animated.timing(
        calenderOpacityAnim,
        {
          toValue: 1,
          duration: 900,
          useNativeDriver: false
        }
      ), 
      Animated.timing(
        size, 
        {
          toValue: 200, 
          duration: 500, 
          useNativeDriver: false
        }
      )
     ]).start();
     
     }
     
  
  
  
  const Button = ()=>(
  <HeaderButton
        text={"Complete"}
        onPress={()=>{
                handleCalculations()
                navigation.navigate("IntroScreen")
              } }
        disabled={date2.weight ? false : true} 
        customStyleContainer={{backgroundColor: date1.weight ? Colors.lightGreen : Colors.lightGray}}
  />
  
  
  )
  
  



    return (
        <View  style={styles.container} >

            <View style={styles.topView}>
            {/* {date2.weight && date2.date ? 
              <Button /> :  */}
              <View style={{flexDirection: "row"}}>
                   <View style={{borderBottomWidth: 4, borderBottomColor: "#fff"}}>
                   <Text style={styles.topViewText} >End </Text>
                     </View>
                  <Text style={styles.topViewText} >
               Date and Weight
                </Text>
                </View>
                {/* } */}
            </View>

            <View  >
         
              {
                date2.date === null ? 
                <CalenderComponent
                date={date2.date}
                setDate={setDate2}
             
              /> :
              
            <Animated.View style={{opacity: calenderOpacityAnim, height: size}}>
                <View style={{alignItems: "center", justifyContent: "center", height: 200, marginBottom: 10,  borderBottomWidth: 1}} > 
                  <Text style={{marginBottom: 10, fontSize: 20, fontWeight: "bold"}}>End Date</Text>
                  <Text style={{fontSize: 18}}>{date2.date}</Text>
           
                  <ButtonComponent title="Edit Date" onPress={()=>setDate2(prev=> ({...prev, date: null}))} />
               
              </View>
            </Animated.View>
              }


              </View>

            
                <ToggleGramsAndPoundsComponent
                    date={date2.date}
                    setWeight={setDate2}
                    navigateTo={()=>{
                      handleCalculations()
                      navigation.navigate("IntroScreen")
                    }}
                />
            

        </View>
    )

}

const styles = StyleSheet.create({
  topView: {
    width: "100%", 
    alignItems: "center", 
    justifyContent: "center",
    height: 50, 
    backgroundColor: "#000"
  }, 
  topViewText: {
    fontWeight: "900", 
    fontSize: 20, 
    color: "#fff"
  }
  
})


export default Calender2





