import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const FamilyPlan = () => {
  return (
     <TouchableOpacity>
        <View style={styles.FamilyPlanContainer}>
            <View style = {styles.infoContainer}>
            <View style = {styles.inContainer}>   
            <Text style = {styles.mainText}>Family</Text>
            <Text style = {styles.Txt}>Up to 6 people</Text>
            </View>
            <Text style = {styles.Text}>US$5.49/month</Text>
            
         </View>
         </View>
    </TouchableOpacity>
   
    
  )
}

export default FamilyPlan
const styles =StyleSheet.create({
    FamilyPlanContainer:{
      position:'absolute',
      backgroundColor :'#2C2C2E',
      bottom:0,
      marginLeft: -165,
      marginRight: 0,
      marginBottom:450,
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
      inContainer: {
        flex: 1,
        flexDirection:'row',
      },
      mainText: {
        fontSize: 21,
        fontWeight: 'bold',
        color:'white',
        marginRight:8,
      },
      Text: {
        fontSize: 15,
        color:'white',
      },
      Txt: {
        fontSize: 18,
        color:'white',
      },
})