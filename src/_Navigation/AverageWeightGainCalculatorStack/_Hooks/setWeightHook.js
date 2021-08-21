import React, { useState } from 'react'

import { View, Text } from 'react-native'

const setWeightHook = (kilograms, lbs,oz) => {
    const [weight, setWeight] = useState(null)

    function convertKilogramsToPoundsHook(grams, lbs,oz){
        var args = [].slice.call(arguments);
        console.log({args: args});
     
       if(grams){
           console.log(grams);
            setWeight(grams)
       } else {
        const w = +lbs + (oz/16)
        const kg = ( w/2.2)
        
        const grams = kg > 1 ? (kg * 1000).toFixed() : (kg ).toFixed(4)
  
        setWeight(grams)
       }
     
    }


    return {
       weight,
       setWeight,
       convertKilogramsToPoundsHook
}
}

export default setWeightHook
