import React, { useRef } from 'react'
import {Animated, StyleSheet, View, Text } from 'react-native'

const AnimatedHeaderTitle = ({children, fade}) => {

        const headerAnim = useRef(new Animated.Value(0)).current;
      
        const fadeIn = ()=>{
          Animated.timing(headerAnim, {
            toValue: 1,
            duration: 1000, 
            useNativeDriver: true
          }).start();
        }
        return (
          <Animated.View onPress={fadeIn()}  style={{
            opacity: headerAnim
          }}>
            <Text style={styles.headTitleText}  >{children}</Text>
          </Animated.View>
        )
}

const styles = StyleSheet.create({
    headTitleText: {
        fontSize: 20
    }
})

export default AnimatedHeaderTitle
