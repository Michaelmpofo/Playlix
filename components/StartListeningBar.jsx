import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const StartListeningBar = () => {
  return (
    <Link href='(tabs)' asChild>
      <TouchableOpacity>
      <View style={styles.StartListeningBarContainer}>
           <View style = {styles.infoContainer}>
            <Text style = {styles.mainText}> Start Listening</Text>
            </View>
         </View>
         </TouchableOpacity>
         </Link>
   
        
    
    
  )
}

export default StartListeningBar
const styles =StyleSheet.create({
   StartListeningBarContainer:{
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
      height:49,
      width:330,
      
    },
    infoContainer: {
        flex: 1,
        flexDirection:'row',
        
      },
      mainText: {
        fontSize: 17,
        marginLeft: 95,
        
        
      },
})