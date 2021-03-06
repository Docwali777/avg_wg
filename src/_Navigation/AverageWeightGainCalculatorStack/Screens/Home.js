import React, { useEffect, useContext, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ButtonComponent from '../../../_Components/ReUseableComponents/ButtonComponent'

//context
import {  CalenderContext } from "../_Contexts/Context"

//colors
import { Colors } from "../../../_Configuration/Colors"
import HeaderText from '../../../_Components/ReUseableComponents/HeaderText'
import ModalComponent from '../../../_Components/ReUseableComponents/ModalComponent'
import NumberedReference from '../../../_Components/ReUseableComponents/NumberedReference'

const Home= ({navigation}) => {
console.log(navigation.pop);
            //context
        const {date1, date2, setDisplayResults, displayResults, setDate2, setDate1, intervalDays,  weightDifference, 
            averageWeightDifference} = useContext(CalenderContext)
            
        //state
        //modal
        const [modalVisible, setModalVisible] = useState(false)
        const [errorMessage, setErrorMessage] = useState(null)


        const handleStart = ()=>{

            setDate2(prev =>({...prev, date: null, weight: null, timestamp: null}))
            setDate1(prev =>({...prev, date: null, weight: null, timestamp: null}))
            setDisplayResults(false)
        
            navigation.navigate("Calender1")
        }

        //  ..ternary
        const GainOrLoss = weightDifference < 0 ? "Loss" : "Gain"

      
            return (
                <View style={styles.container} >

                
                    
                    { displayResults ?
                    <View style={{marginBottom: 5, alignItems: "center"}}> 

        {   date1.date === date2.date ? 
               
                   <View style={{alignItems: "center", width: "90%", marginBottom: 5}}>
                       <HeaderText customTextStyle={{color: "red", fontWeight: "600", fontSize: 20}} >Warning</HeaderText>
                        <Text style={{ fontSize: 18}}>
                            Initial Date and Final Dates are the same. 
                        This can causes errors in calculated values
                        </Text>
                        
    
                   </View>
               : 
                
                null}

                     <HeaderText customTextStyle={{fontSize: 20}} >Values-Entered</HeaderText>
                <View style={{marginBottom: 20, alignItems: "center"}}>
                    
                {
                    [ 
                         { i: 0, type: "Date", day: "Date", weight: "Weight"}, 
                        { i: 0, type: "Date", day: date1.date, weight: +date1.weight}, 
                        { i: 1, type: "Date", day: date2.date, weight: +date2.weight}, 
                      
                    ].map((value, i, arr)=>{
                            return (
                              <View key={i} style={{flexDirection:"row", borderTopWidth: 1, borderRightWidth: 1, borderLeftWidth: 1, borderBottomWidth: i=== arr.length -1 ? 1 : 0, width: "90%"}}>
                                  <View  style={{  width: 200, height: 35, alignItems: "center", justifyContent: "center", backgroundColor: i % 2 === 0 ? Colors.blue : Colors.lightGray}}>
                                    <Text style={{fontWeight: "600"}} >{value.day}</Text>
                                   
                                    </View>
                                    <View  style={{borderLeftWidth: 1,  width: 150, height: 35, alignItems: "center", justifyContent: "center", backgroundColor: i % 2 === 0 ? Colors.blue : Colors.lightGray}}>
                                    <Text style={{fontWeight: i == 0 ? "600" : "300"}} >  {typeof value.weight === "string" ? value.weight : `${value.weight} grams`} </Text>
                                    </View>
                                </View>
                            )
                        }) 
                }
                </View>

                            <HeaderText customTextStyle={{fontSize: 20}}>Results</HeaderText>
                {
                        [ 
                            { i: 0, type: "Interval", result: intervalDays, unit: "days"}, 
                            { i: 1, type: `Total Weight ${GainOrLoss}`, result: weightDifference, unit: "grams"}, 
                            { i: 2, type: `Average Weight ${GainOrLoss}`, result: averageWeightDifference, unit: "grams/day"} 
                        ].map((value, i, arr)=>{
                                return (
                                  <View key={i} style={{flexDirection:"row", borderTopWidth: 1, borderRightWidth: 1, borderLeftWidth: 1, borderBottomWidth: i=== arr.length -1 ? 1 : 0}}>
                                      <View  style={{  width: 200, height: 35, alignItems: "center", justifyContent: "center", backgroundColor: i % 2 === 0 ? Colors.blue : Colors.lightGray}}>
                                        <Text style={{fontWeight: "600"}} >{value.type}</Text>
                                        </View>
                                        <View  style={{borderLeftWidth: 1,  width: 150, height: 35, alignItems: "center", justifyContent: "center", backgroundColor: i % 2 === 0 ? Colors.blue : Colors.lightGray}}>
                                        <Text>{value.result} {value.unit} </Text>
                                        </View>
                                    </View>
                                )
                            })
                }    

            </View> 
                :
                <View style={{width: "80%", marginTop: 10, marginBottom: 15}}>
                    <Text style={{fontSize: 20, marginBottom: 10}}>
                        This app was created to simplify the calculation of weight change 
                         ( gain / loss ) over a period of time.                         
                    </Text>

                   
                    {/* <NumberedReference
                        number={1}
                        infoText={"On the first Screen select the initial date and weight"}
                    />
                     <NumberedReference
                        number={2}
                        infoText={"Next input the inital weight- you can either inout grams or pounds"}
                    />
                    <NumberedReference
                        number={3}
                        infoText={`Press the  "Next Button" to navigate to the next screen to input the "Final Date and Weight' `}
                    />
                     <NumberedReference
                        number={4}
                        infoText={`Press the "Complete Button" to get the results `}
                    /> */}

               

                </View>
            }
                <ButtonComponent 
                    title={date2.date ? "Let's Go Again" : "Start"}
                    onPress={handleStart} 
                    buttonStyle={{backgroundColor: Colors.lightPurple}} />
            

                
                <View style={{height: 0}}>
                <ModalComponent
            modalVisible={modalVisible}
            setModalVisible={()=>setModalVisible(!modalVisible)}
            >
               <View style={{alignItems: "center"}}>
               <View>
                  <Text style={{fontSize: 20}} >  {errorMessage}</Text>
                </View>

               <View style={{marginTop: 20, flexDirection: "row", justifyContent: "space-between", width: 200}}>
               <TouchableOpacity>
                        <Text>Edit Date</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{
                      // setModalVisible(false)
                      navigation.navigate("IntroScreen")
                    }}>
                        <Text >Continue</Text>
                    </TouchableOpacity>
               </View>
               </View>
          </ModalComponent> 

                </View>
       
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 10,  
        alignItems: "center", 


    }
})


export default Home





