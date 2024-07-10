import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const UniversityPlan = () => {
  return (
        
    
     <TouchableOpacity>
        <View style={styles.UniversityPlanContainer}>
            <View style = {styles.infoContainer}>
            <Text style = {styles.mainText}>University Student</Text>
            <Text style = {styles.Text}>US$1.99/month</Text>
            <Text style = {styles.Text}>This plan includes access to Apple TV+</Text>
            </View>
         </View>
    </TouchableOpacity>
    
   
    
  )
}

export default UniversityPlan
const styles =StyleSheet.create({
    UniversityPlanContainer:{
      position:'absolute',
      backgroundColor :'#2C2C2E',
      bottom:0,
      marginLeft: -165,
      marginRight: 0,
      marginBottom:350,
      padding: 15,
      borderColor: '#2C2C2E',
      flex:1,
      alignItems: 'left',
      justifyContent: 'left',
      borderRadius:17,
      height:85,
      width:330,
      
    },
    infoContainer: {
        flex: 1,
        flexDirection:'column',
      },
      mainText: {
        fontSize: 21,
        fontWeight: 'bold',
        color:'white',
      },
      Text: {
        fontSize: 15,
        color:'white',
      },
})