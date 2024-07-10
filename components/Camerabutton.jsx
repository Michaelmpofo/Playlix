import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const Camerabutton = () => {
  return (
    
      <TouchableOpacity>
      <View style={styles.CamerabuttonContainer}>
           <View style = {styles.infoContainer}>
            <Text style = {styles.mainText}> Use Camera </Text>
            </View>
         </View>
         </TouchableOpacity>
   
        
    
    
  )
}

export default Camerabutton
const styles =StyleSheet.create({
    CamerabuttonContainer:{
      position:'absolute',
      backgroundColor :'#0AE78A',
      bottom:10,
      marginLeft: -165,
      marginRight: 0,
      marginBottom:-200,
      padding: 14,
      borderColor: '#0AE78A',
      alignItems: 'left',
      justifyContent: 'left',
      borderRadius:10,
      height:49,
      width:330,
      
    },
    infoContainer: {
        flex: 1,
        flexDirection:'row',
        
      },
      mainText: {
        fontSize: 17,
        marginLeft: 95,
        fontWeight:'bold',
        
      },
})