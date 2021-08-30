import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'

import { AntDesign } from '@expo/vector-icons'; 
import { Colors } from "../../_Configuration/Colors";

const ModalComponent = ({children, modalVisible, setModalVisible, customModalStyle}) => {

    return (
   <View style={styles.centeredView}>

<Modal 
        animationType="slide"
        // transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible
        }}
      >
        <View style={styles.container}>
          <View style={styles.modalView}>

            <TouchableOpacity 
                style={styles.icon}
                onPress={setModalVisible}>
            <AntDesign 
            name="closecircle" 
            size={24} 
            color={Colors.lightPurple} 
            />
            </TouchableOpacity>
           
           <View style={[{height: 300, justifyContent: "center"}, customModalStyle]}>
                <View>
                    {children}
                </View>
           </View>
           

          </View>
        </View>
      </Modal>
   </View>
    )
}

export default ModalComponent

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
      
      },
   
      modalView: {
       height: 300,  
        margin: 10,
        marginTop: 100,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "90%"
      },
icon:{
    position:"absolute" ,
    right: 20, 
    top: 20, 
}
})
