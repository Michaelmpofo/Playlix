import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const GoBackBar = () => {
    const arrow  = require('../assets/images/homeScreenimages/arrow.png')
    return (
        <View style={styles.GoBackBarContainer}>
         <View style={styles.infoContainer}>
         <Link href="/HomeScreens/RedeemCodePage" asChild>
         <TouchableOpacity>
         <Image source={arrow}  style={styles.playlixImg}/>
         </TouchableOpacity>
         </Link>
         </View>
        </View>
      )
}

export default GoBackBar
const styles =StyleSheet.create({
      GoBackBarContainer:{
      position:'absolute',
      backgroundColor :'#282828',
      bottom:660,
      marginLeft: 10,
      marginRight: 10,
      marginBottom:2,
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
    playlixImg: {
        width: 21,
        height: 21,
        },
  
  }
  
  
  
  )