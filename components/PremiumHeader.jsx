import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
const PremiumHeader = () => {
    return (
        <View >
         <View style={styles.forwardContainer}>
         <Link href="/HomeScreens/AccountPage" asChild>
         <TouchableOpacity>
         <AntDesign name="closecircle" size={24} color="grey" />
         </TouchableOpacity>
         </Link>
         </View>
         
        </View>
      )
}

export default PremiumHeader
const styles =StyleSheet.create({
  
    
    forwardContainer:{
      color:'#4E4A4A',
      marginRight: 1,
      marginLeft: 340,
      marginBottom:0,
      fontSize:17,
      width:50,
      height:30,
      marginTop:-120,
      
    },
  
  }
  
  
  
  )