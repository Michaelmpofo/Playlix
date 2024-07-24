import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const Done= () => {
  return (
    <Link href='/HomeScreens/AccountPage' asChild>
      <TouchableOpacity>
      <View style={styles.DoneContainer}>
           <View style = {styles.infoContainer}>
            <Text style = {styles.mainText}> Done </Text>
            </View>
         </View>
         </TouchableOpacity>
         
         </Link>
   
        
    
    
  )
}

export default Done
const styles =StyleSheet.create({
   DoneContainer:{
      position:'absolute',
      backgroundColor :'#0AE78A',
      bottom:90,
      marginLeft: -165,
      marginRight: 0,
      marginBottom:-200,
      padding: 14,
      borderColor: '#0AE78A',
      alignItems: 'left',
      justifyContent: 'left',
      borderRadius:10,
      height:40,
      width:330,
      marginTop:0,
      top:120,
    },
    infoContainer: {
        flex: 1,
        flexDirection:'row',
        
      },
      mainText: {
        fontSize: 17,
        marginLeft: 135,
        color:'white',
        marginBottom:-9,
        marginTop:0,
        paddingTop:1,
        top:-5,
        
        
        
      },
})