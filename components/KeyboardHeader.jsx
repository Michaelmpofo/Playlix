import React, { useState, useEffect } from 'react';
import { View, Text,Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const KeyboardHeader = () => {
  const playlix1  = require('../assets/images/playlix1.png')
  return (
    <View style={styles.KeyboardHeaderContainer}>
     
     <View style={styles.infoContainer}>
     <TouchableOpacity>
        <View style ={styles.buttonContainer}>
        <AntDesign name="up" size={24} color="black" />
        </View>
     </TouchableOpacity>
     <TouchableOpacity>
     <View style ={styles.forwardContainer}>
     <AntDesign name="down" size={24} color="black" />
     </View>
     
     </TouchableOpacity>
     <TouchableOpacity>
     <Text style={styles.title}>Done</Text>
     </TouchableOpacity>
     
     
     
     
     </View>
    </View>
  )
}

export default KeyboardHeader
const styles =StyleSheet.create({
  KeyboardHeaderContainer:{
    position:'absolute',
    backgroundColor :'#282828',
    bottom:320,
    marginLeft: 0,
    marginRight: 0,
    marginBottom:2,
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#282828',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius:0,

    
  },
 
  infoContainer: {
    flex: 1,
    flexDirection:'row',
  

  },
  playlixImgContainer: {
    width: 50,
    height:30,
    marginLeft:0,
},
  title: {
    fontSize: 19,
    color:'#ffff',
    marginLeft:225,
  },
  buttonContainer:{
    marginRight: 1,
    marginLeft: 10,
    width: 35,
  },
  forwardContainer:{
    color:'#4E4A4A',
  },

}



)