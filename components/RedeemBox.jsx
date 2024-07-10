import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'


const RedeemBox = () => {
    
    return (
        <View style={styles.RedeemBoxContainer}>
             <TouchableOpacity>
             <View style={styles.infoContainer}>
        <Text style={styles.forwardContainer}>Redeem</Text>
         </View>
             </TouchableOpacity>
        </View>
      )
}

export default RedeemBox
const styles =StyleSheet.create({
    RedeemBoxContainer:{
      
      backgroundColor :'#282828',
      bottom:690,
      marginLeft:7 ,
      marginRight: 0,
      marginTop:1100,
      padding: 18,
     
      alignItems: 'left',
      
      width:130,
      height: 55,
     borderRadius:15,
      
    },
    
    
    forwardContainer:{
        color:'#969090',
        marginRight: 1,
        marginLeft: 0,
        fontSize:19,
        
      },
  
  }
  
  
  
  )