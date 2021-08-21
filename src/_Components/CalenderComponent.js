import React, { useState } from 'react'
import { View, Text } from 'react-native'

import {Calendar} from 'react-native-calendars';


//Configufaration
import { Colors } from "../_Configuration/Colors"
import DateConfig from "../_Configuration/Dates"
import ModalComponent from './ReUseableComponents/ModalComponent';
const { MM, YYYY, DD} = DateConfig


const CalenderComponent = ({date, setDate, handleCalenderErrors}) => {

    const [calenderDate, setCalenderDate] = useState(null)

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

          
        </View>
    )
}

export default CalenderComponent
