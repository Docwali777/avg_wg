import React, { useState, useContext } from 'react'
import { View, Text } from 'react-native'

import {Calendar} from 'react-native-calendars';

//context
import { CalenderContext} from "../_Navigation/AverageWeightGainCalculatorStack/_Contexts/Context"


//Configufaration
import { Colors } from "../_Configuration/Colors"
import DateConfig from "../_Configuration/Dates"
import HeaderText from './ReUseableComponents/HeaderText';
import ModalComponent from './ReUseableComponents/ModalComponent';
const { MM, YYYY, DD} = DateConfig


const CalenderComponent = ({date, setDate, handleCalenderErrors}) => {

  const { date1, date2} = useContext(CalenderContext)

    const [calenderDate, setCalenderDate] = useState(null)
console.log(date1.date);
    return (
        <View>
                          <Calendar
                    markingType="custom"
                    onDayPress={({day, month, year, timestamp}) => {
                      
                      
                        month = month < 10 ? `0${month}` : month
                        day = day < 10 ? `0${day}` : day
                        setDate(prev => ({...prev,  date: `${month}-${day}-${year}`, timestamp})  )
                        setCalenderDate(`${year}-${month}-${day}`)
                       
                    }}
                    maxDate={`${YYYY}-${MM}-${DD}`}
                    markedDates={{
                        [calenderDate]: {
                            selected: true, 
                            customStyles: {
                                container: {
                                  backgroundColor: Colors.blue
                                },
                                text: {
                                  color: '#fff',
                                  fontWeight: '700'
                                }
                              }}
                      }}
               />

          <View style={{justifyContent: "center", alignItems: "center", height: 30}}>
      
      <View  style={{alignItems: "center", height: 35, marginTop: 20,  justifyContent: "center" }} >
                  <Text style={{fontSize: 25}} >
               {date1.date ? "Select END date" : "Select INITIAL date"}
              </Text>
                    </View>
          </View>
        </View>
    )
}

export default CalenderComponent
