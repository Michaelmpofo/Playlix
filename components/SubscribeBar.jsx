import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SubscribeBar = () => {
  return (
    <Link href='/HomeScreens/CongratulationsPage'asChild>
    <TouchableOpacity>
      <View style={styles.SubscribeBarContainer}>
           <View style = {styles.infoContainer}>
            <Text style = {styles.mainText}> Subscribe</Text>
            </View>
         </View>
         </TouchableOpacity>
    </Link>
      
  )
}

export default SubscribeBar
const styles =StyleSheet.create({
   SubscribeBarContainer:{
      position:'absolute',
      backgroundColor :'#0AE78A',
      bottom:90,
      marginLeft: -65,
      marginRight: 0,
      marginBottom:100,
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
        fontWeight:'bold',
        
        
      },
})