import React, {useState,  createContext } from 'react'
import { View, Text } from 'react-native'

export const CalenderContext = createContext()

export const CalenderProvider = ({children}) => {

    const[date1, setDate1] = useState({date: null, weight: null, timestamp: null})

    const[date2, setDate2] = useState({date: null, weight: null, timestamp: null})

    const [displayResults, setDisplayResults] = useState(false)

    const [intervalDays, setIntervalDays] = useState(null)
    const [weightDifference, setWeightDifference] = useState(null)
    const [averageWeightDifference, setAverageWeightDifference] = useState(null)

    const [errorMessage, setErrorMessage] = useState({error: null, display: false})

    const handleCalculations = ()=>{
        var days= (date1.timestamp- date2.timestamp)/(24*60*60*1000)
       
       //  days = (days < 0 ? days * -1 : days)
        var weightDiff;
    
           if(days < 0){
            weightDiff = (date2.weight - date1.weight)
            setWeightDifference(weightDiff)
           } else {
            weightDiff = (date1.weight - date2.weight)
            setWeightDifference(weightDiff)
           } 
           const setDaysPositive =  Math.floor(days < 0 ? days * -1 : days) 
           setIntervalDays( setDaysPositive )
           setAverageWeightDifference((weightDiff/(days < 0 ? days * -1 : days)).toFixed(1))
       
            if(date1.timestamp === date2.timestamp){
                setAverageWeightDifference(null)

            }
        
            if(date1.date && date1.weight && date2.date && date2.weight){
            setDisplayResults(true)
           }
    }
    
 


    return (
        <CalenderContext.Provider 
            value={{
                date1, 
                setDate1, 
                date2, 
                setDate2, 
                handleCalculations, 
                intervalDays,
                weightDifference, 
                averageWeightDifference,
                displayResults, 
                setDisplayResults, 
                setIntervalDays, 
                setWeightDifference, 
                setAverageWeightDifference,
                errorMessage,
                setErrorMessage
                
            }} >
           {children}
        </CalenderContext.Provider>
    )
}

export default CalenderProvider
