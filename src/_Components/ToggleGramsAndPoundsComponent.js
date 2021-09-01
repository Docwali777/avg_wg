import React, { useState, useEffect } from 'react'
import {Keyboard, StyleSheet, Text, View} from 'react-native'

import ToggleSwitchComponent from './ToggleSwitchComponent'
import TextInputComponent from './ReUseableComponents/TextInputComponent'
import ButtonComponent from './ReUseableComponents/ButtonComponent'
import ModalComponent from './ReUseableComponents/ModalComponent'
import HeaderText from './ReUseableComponents/HeaderText'
import ButtonWithChildren from "./ButtonWithChildren"
import { Colors } from "../_Configuration/Colors"
import HeaderButton from './ReUseableComponents/HeaderButton'


const ToggleGramsAndPoundsComponent = ({date, setWeight, navigateTo}) => {

      //toggle display for grams and pounds/ounces
      const [toggleKilogramsAndPounds, settoggleKilogramsAndPounds] = useState(true)
      const [grams, setGrams] = useState(null)
      const [pounds, setPounds] = useState(null)
      const [ounces, setOunces] = useState(null)

      const [modalVisible, setModalVisible] = useState(false)
      const [errorMessage, setErrorMessage] = useState(null)

      const [displayButton, setDisplayButton] = useState(false)
      const [keyboardDisplay, setKeyboardDisplay] = useState(false)


     

      const keyboardDidShow = ()=>{
        Keyboard.addListener("keyboardDidShow", ()=>{
          return setKeyboardDisplay(!keyboardDisplay)
      })

      }

    const _toggle = ()=>{
        settoggleKilogramsAndPounds(!toggleKilogramsAndPounds)
        setPounds(null)
        setOunces(null)
        setGrams(null)
        setWeight(prev =>({...prev, weight: null}))
      } 

      const handleGrams = ()=>{
        if(grams === null || grams === "" || grams.length < 4){
                setModalVisible(!modalVisible)
                setErrorMessage("Grams should have 4 digits")
          } else {
            setWeight(prev => ({...prev, weight: grams}))
          }
          Keyboard.dismiss()
          setDisplayButton(!displayButton)
      }
      
        const calculateWeight = ()=>{
          
          if(pounds && pounds.length > 0){
           
            const w = ounces !== null && ounces !== "" ?  +pounds + (+ounces/16) : +pounds
            const kg = ( w/2.2)
  
            const convertedToGram = kg > 1 ? (kg * 1000).toFixed() : (kg ).toFixed(4)
      
            setWeight(prev => ({...prev, weight: convertedToGram}))
          } else {
              setModalVisible(!modalVisible)
              setErrorMessage("Minimum of 1 digit needed for pounds")
          }
        
       Keyboard.dismiss()
       setDisplayButton(!displayButton)
      }

      const instructionsForWeightEntry = ()=>{

        return (
          <Text>

          </Text>
        )
      }

      const Button = ()=>(
        <HeaderButton 
              text="Next"
             onPress={navigateTo}
            //  disabled={grams || pounds ? false : true} 
             customStyleContainer={{backgroundColor: grams || pounds ? Colors.lightGreen : Colors.lightGray, borderRadius: 30, height: 40 }}
        />
        )

      
      console.log("togap", {date}, Boolean(date));
    return (
       
        <View style={[styles.lowerContainer, {display: date === null ? "none" : ""}]}>

        <ToggleSwitchComponent
           labelLeft="Grams"
           labelRight="Pounds"
           onPress={_toggle}
          />

         
         <View style={{marginBottom: 30}}>
         {toggleKilogramsAndPounds ? 
      
                <TextInputComponent 
                    label="Grams"
                    placeholder="Grams"
                    value={grams}
                    keyboardType="number-pad"
                    constomContainerSyle={{width: 150}}
                    maxLength={4}
                    onChangeText={grams=>{
                      if(grams.length === 4){
                        setDisplayButton(!displayButton)
                        setGrams(grams)
                      }
                    }}
                    onFocus={()=>{
                        setGrams(null)
                        setWeight(prev=>({...prev, weight: null}))
                    }}
                    // autoFocus={Boolean(date)}


                />  :

       <View style={{flexDirection: "row"}} >
               <TextInputComponent 
                    autoFocus={true}
                    label="Pounds"
                    placeholder="LBS"
                    value={pounds}
                    maxLength={3}
                    onChangeText={pounds => {
                      if(pounds.length){
                        setDisplayButton(!displayButton)
                        setPounds(pounds)
                      }
                    }}
                    keyboardType="number-pad"
                    constomContainerSyle={{width: 100}}
                    onFocus={()=>{
                        setPounds(null)
                    }}

        />

           <TextInputComponent 
       label="Ounces"
       placeholder="OZ"
       value={ounces}
       onChangeText={ounces => setOunces(ounces)}
       keyboardType="number-pad"
       constomContainerSyle={{width: 100}}
       onFocus={()=>{
         setOunces(null)
       }}
       maxLength={2}
        />
           </View>
   
   
   }

         </View>



     { 
        displayButton ? 
        <ButtonComponent 
        title= {"Submit"}
        onPress={()=>toggleKilogramsAndPounds ? handleGrams() :  calculateWeight()} 
        /> :
        <View>
            {
              grams || pounds ? 
              <View>
              <Button text="Next" />
                </View> :
            
                 
               <ButtonComponent  
                title="Enter Weight" 
                buttonStyle={{backgroundColor: Colors.lightGray}}
                textStyle={{color: "#000"}}
                disabled={true}
                />
                
            }
       
          </View>
     
     }

                <ModalComponent
                    modalVisible={modalVisible}
                    animationType="none"
                    setModalVisible={()=>setModalVisible(!modalVisible)}
                    customModalStyle={{height: 50, justifyContent: "center"}}
                >
                        <HeaderText customTextStyle={{fontSize: 20, fontWeight: "600"}}>Error Message</HeaderText>
                        <Text style={{fontSize: 16}} >{errorMessage}</Text>
                </ModalComponent>
        </View  >

    )
}

export default ToggleGramsAndPoundsComponent

const styles = StyleSheet.create({
    lowerContainer: {
        alignItems: "center",
        // flex: 1, 
        marginTop: 20
    }
})
