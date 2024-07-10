import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const JoinPlaylixBar = () => {
  return (
    <Link href='/HomeScreens/CongratulationsPage'asChild>
    <TouchableOpacity>
      <View style={styles.JoinPlaylixBarContainer}>
           <View style = {styles.infoContainer}>
            <Text style = {styles.mainText}> Join Playlix</Text>
            </View>
         </View>
         </TouchableOpacity>
    </Link>
      
  )
}

export default JoinPlaylixBar
const styles =StyleSheet.create({
   JoinPlaylixBarContainer:{
      position:'absolute',
      backgroundColor :'#0AE78A',
      bottom:90,
      marginLeft: -65,
      marginRight: 0,
      marginBottom:-290,
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
        fontSize: 19,
        marginLeft: 95,
        
        
      },
})