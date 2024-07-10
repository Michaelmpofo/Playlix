import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const RedeemCodeBar = () => {
    return (
        <View style={styles.RedeemCodeBarContainer}>
         <View style={styles.infoContainer}>
         <Link href="/HomeScreens/AccountPage" asChild>
         <TouchableOpacity>
         <Text style={styles.title}>Cancel</Text>
         </TouchableOpacity>
         </Link>
         <TouchableOpacity>
         <Text style={styles.buttonContainer}>Redeem Code</Text>
         </TouchableOpacity>
         <TouchableOpacity>
         <Text style={styles.forwardContainer}>Redeem </Text>
         </TouchableOpacity>

         </View>
        </View>
      )
}

export default RedeemCodeBar
const styles =StyleSheet.create({
    RedeemCodeBarContainer:{
      position:'absolute',
      backgroundColor :'#282828',
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
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      
    },
    
    infoContainer: {
      flex: 1,
      flexDirection:'row',
    
  
    },
  
    title: {
      fontSize: 17,
      color: '#0AE78A',
     
    },
    buttonContainer:{
      marginRight: 1,
      marginLeft: 51,
      fontSize:17,
      color: '#fff',
      fontWeight: 'bold',
      
    },
    forwardContainer:{
      color:'#4E4A4A',
      marginRight: 1,
      marginLeft: 50,
      fontSize:17,
      
    },
  
  }
  
  
  
  )