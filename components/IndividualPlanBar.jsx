import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'


const IndividualPlanBar = () => {
  return (
        
   
     <TouchableOpacity>
        <View style={styles.IndividualPlanBarContainer}>
            <View style = {styles.infoContainer}>
            <Text style = {styles.mainText}>Individual</Text>
            <Text style = {styles.Text}>US$3.29/month</Text>
            
            </View>
         </View>
    </TouchableOpacity>
  
   
    
  )
}

export default IndividualPlanBar
const styles =StyleSheet.create({
    IndividualPlanBarContainer:{
      position:'absolute',
      backgroundColor :'#2C2C2E',
      bottom:0,
      marginLeft: -165,
      marginRight: 0,
      marginBottom:550,
      padding: 15,
      borderColor: '#2C2C2E',
      flex:1,
      alignItems: 'left',
      justifyContent: 'left',
      borderRadius:17,
      height:75,
      width:330,
      
    },
    infoContainer: {
        flex: 1,
        flexDirection:'column',
      },
      mainText: {
        fontSize: 23,
        fontWeight: 'bold',
        marginRight: 0,
        color:'white',
      },
      Text: {
        fontSize: 15,
        color:'white',
      },
})