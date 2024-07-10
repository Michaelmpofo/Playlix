import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const PremiumTab = () => {
  return (
        
    <Link href= '/HomeScreens/PremiumPage'asChild>
     <TouchableOpacity>
        <View style={styles.PremiumTabContainer}>
            <View style = {styles.infoContainer}>
            <Text style = {styles.mainText}>Join Playlix Premium</Text>
            </View>
         </View>
    </TouchableOpacity>
    </Link>
   
    
  )
}

export default PremiumTab
const styles =StyleSheet.create({
    PremiumTabContainer:{
      position:'absolute',
      backgroundColor :'#0AE78A',
      bottom:0,
      marginLeft: -165,
      marginRight: 0,
      marginBottom:500,
      padding: 25,
      borderColor: '#0AE78A',
      flex:1,
      alignItems: 'left',
      justifyContent: 'left',
      borderRadius:10,
      height:75,
      width:330,
      
    },
    infoContainer: {
        flex: 1,
        flexDirection:'row',
      },
      mainText: {
        fontSize: 21,
        fontWeight: 'bold',
      },
})