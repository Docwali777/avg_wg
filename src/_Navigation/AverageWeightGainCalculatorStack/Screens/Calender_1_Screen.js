import React, { useState, useEffect, useContext, useRef } from 'react'
import {Animated, StyleSheet, Text, TouchableOpacity, View, Keyboard, TouchableOpacityBase} from 'react-native'

//context
import { CalenderContext } from "../_Contexts/Context"



//component
import CalenderComponent from '../../../_Components/CalenderComponent';
import ToggleGramsAndPoundsComponent from '../../../_Components/ToggleGramsAndPoundsComponent';
import AnimatedHeaderTitle from '../../../_Components/ReUseableComponents/AnimatedHeaderTitle';
import ButtonComponent from '../../../_Components/ReUseableComponents/ButtonComponent';


//dates 
import ModalComponent from '../../../_Components/ReUseableComponents/ModalComponent';
import { Colors } from '../../../_Configuration/Colors';
import HeaderButton from '../../../_Components/ReUseableComponents/HeaderButton';





const Calender1= ({navigation}) => {
    // const calenderHeightAnim = useRef(new Animated.Value(200)).current 
    const calenderOpacityAnim = useRef(new Animated.Value(1)).current 
    const buttonAnimLoop = useRef(new Animated.Value(0)).current

    //context
    const { date1, setDate1, date2} = useContext(CalenderContext)

    //state
    const [keyboardDisplay, setKeyboardDisplay] = useState(false)
    const [size, setHeight] = useState(new Animated.Value(200))

   useEffect(()=>{
    navigation.setOptions({
      headerTitle: ""

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
        duration: 400,
        useNativeDriver: false
      }
    ), 
    Animated.timing(
      size, 
      {
        toValue: 200, 
        duration: 200, 
        useNativeDriver: false
      }
    )
   ]).start();
   
   }
   



const Button = ()=>(
<HeaderButton 
      text="Next"
     onPress={()=>navigation.navigate("Calender2") }
     disabled={date1.weight ? false : true} 
     customStyleContainer={{backgroundColor: date1.weight ? Colors.lightGreen : Colors.lightGray }}
/>
)
console.log({date2});
    return (
        <View  style={styles.container} >

          <View style={styles.topView}>
            {/* {date1.weight && date1.date ? 
              <Button /> :  */}
              <View style={{flexDirection: "row"}}>
                   <View style={{borderBottomWidth: 4, borderBottomColor: "#fff"}}>
                   <Text style={styles.topViewText} >Initial </Text>
                     </View>
                  <Text style={styles.topViewText} >
               Date and Weight
                </Text>
                </View>
                {/* } */}
            </View>


            <View  >
         
              {
                date1.date === null ? 
               <View>
                   <CalenderComponent
                date={date1.date}
                setDate={setDate1}
              /> 
               
                 </View>
               
                :
              
              <Animated.View style={{opacity: calenderOpacityAnim,  height: size}}>
                <View style={{height: 200, alignItems: "center", justifyContent: "center", marginBottom: 10,  borderBottomWidth: 1}} > 
                  <Text style={{marginBottom: 10, fontSize: 20, fontWeight: "bold"}}>Initial Date</Text>
                  <Text style={{fontSize: 18}}>{date1.date}</Text>
           
                  <ButtonComponent title="Edit Date" onPress={()=>setDate1(prev=> ({...prev, date: null}))} />
               
              </View>
              </Animated.View>
              }

      
              </View>

                <ToggleGramsAndPoundsComponent
                    date={date1.date}
                    setWeight={setDate1}
                    navigateTo={()=> navigation.navigate("Calender2")}
                />
 
  
          
        </View>
    )

}

const styles = StyleSheet.create({
 
nextButton: {
  flexDirection: "row",
  justifyContent: "space-between",
  width: 200, 
  height: 30, 
  justifyContent: "center", 
  alignItems: "center"
}, 
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


export default Calender1





