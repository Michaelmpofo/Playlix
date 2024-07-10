import React, { useState, useEffect } from 'react';
import { View, Text,Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const NowPlayingBar = () => {
  const playlix1  = require('../assets/images/playlix1.png')
  return (
    <View style={styles.NowPlayingContainer}>
      <View style={styles.playlixImgContainer}>
        <Image source={playlix1}  style={styles.playlixImg}/>
    </View>
     <View style={styles.infoContainer}>
     <Text style={styles.title}>Not Playing</Text>
     <TouchableOpacity>
     <AntDesign style={styles.buttonContainer} name="caretright" size={20} color="black" />
     </TouchableOpacity>
     <TouchableOpacity>
     <AntDesign style={styles.forwardContainer} name="forward" size={20} color="black" />
     </TouchableOpacity>
     
     
     </View>
    </View>
  )
}

export default NowPlayingBar
const styles =StyleSheet.create({
  NowPlayingContainer:{
    position:'absolute',
    backgroundColor :'#0AE78A',
    bottom:0,
    marginLeft: 10,
    marginRight: 10,
    marginBottom:2,
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#0AE78A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius:15,
    
  },
  playlixImg: {
    width: 70,
    height: 30,
    },
  infoContainer: {
    flex: 1,
    flexDirection:'row',
  

  },
  playlixImgContainer: {
    width: 50,
    height:30,
    marginLeft: 0,
},
  title: {
    fontSize: 15,
  },
  buttonContainer:{
    marginRight: 1,
    marginLeft: 130,
    width: 35,
  },
  forwardContainer:{
    color:'#4E4A4A',
  },

}



)