import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const GetStarted = () => {
  return (
    <Link href='/HomeScreens/SetUpProfilePage2' asChild>
      <TouchableOpacity>
      <View style={styles.GetStartedContainer}>
           <View style = {styles.infoContainer}>
            <Text style = {styles.mainText}> Get Started</Text>
            </View>
         </View>
         </TouchableOpacity>
         </Link>
   
        
    
    
  )
}

export default GetStarted
const styles =StyleSheet.create({
   GetStartedContainer:{
      position:'absolute',
      backgroundColor :'#0AE78A',
      bottom:90,
      marginLeft: -165,
      marginRight: 0,
      marginBottom:-165,
      padding: 14,
      borderColor: '#0AE78A',
      alignItems: 'left',
      justifyContent: 'left',
      borderRadius:10,
      height:40,
      width:330,
      marginTop:0
      
    },
    infoContainer: {
        flex: 1,
        flexDirection:'row',
        
      },
      mainText: {
        fontSize: 17,
        marginLeft: 95,
        color:'white',
        marginBottom:-10,
        marginTop:-3,
        paddingTop:0,
        
        
      },
})