import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const PlanHeader2 = () => {
    return (
        <View style={styles.PlanHeaderContainer}>
         <View style={styles.infoContainer}>
        
         <Link href="/HomeScreens/PlansPage" asChild>
         <TouchableOpacity>
         <AntDesign name="closecircle" size={22} color="grey" />
         </TouchableOpacity>
         </Link>
         </View>
        </View>
      )
}

export default PlanHeader2
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
  
    
    forwardContainer:{
      color:'#4E4A4A',
      marginRight: 1,
      marginLeft: 50,
      fontSize:18,
      left:50,
    },
  
  }
  
  
  
  )