import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const PlanHeader = () => {
    return (
        <View style={styles.PlanHeaderContainer}>
         <View style={styles.infoContainer}>
         <Link href="/HomeScreens/PremiumPage" asChild>
         <TouchableOpacity>
         <MaterialIcons name="keyboard-arrow-left" size={25} color="green" />
         </TouchableOpacity>
         </Link>
         <Link href="/HomeScreens/PremiumPage" asChild>
         <TouchableOpacity>
         <Text style={styles.buttonContainer}>Back</Text>
         </TouchableOpacity>
         </Link>
         <Link href="/HomeScreens/PremiumPage" asChild>
         <TouchableOpacity>
         <AntDesign name="closecircle" size={22} color="grey" />
         </TouchableOpacity>
         </Link>
         </View>
        </View>
      )
}

export default PlanHeader
const styles =StyleSheet.create({
    PlanHeaderContainer:{
      position:'absolute',
     
      bottom:690,
      marginLeft: 10,
      marginRight: 10,
      marginBottom:1,
      padding: 18,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width:370,
      height: 55,
      
      
    },
    
    infoContainer: {
      flex: 1,
      flexDirection:'row',
    marginBottom:15,
  marginTop: -17,
    },
  
    title: {
      fontSize: 17,
      color: '#0AE78A',
     
    },
    buttonContainer:{
      marginRight: 240,
      marginLeft: 0,
      fontSize:18,
      color: '#0AE78A',
      
      
    },
    forwardContainer:{
      color:'#4E4A4A',
      marginRight: 1,
      marginLeft: 50,
      fontSize:18,
      
    },
  
  }
  
  
  
  )