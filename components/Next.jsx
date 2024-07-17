import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const Next= () => {
  return (
    <Link href='/HomeScreens/SetUpProfilePage4' asChild>
      <TouchableOpacity>
      <View style={styles.NextContainer}>
           <View style = {styles.infoContainer}>
            <Text style = {styles.mainText}> Next</Text>
            </View>
         </View>
         </TouchableOpacity>
         </Link>
   
        
    
    
  )
}

export default Next
const styles =StyleSheet.create({
   NextContainer:{
      position:'absolute',
      backgroundColor :'#0AE78A',
      flexDirection:'column',
      marginLeft: -155,
   
      padding: 14,
      borderColor: '#0AE78A',
      alignItems: 'left',
      justifyContent: 'left',
      borderRadius:10,
      height:30,
      width:330,
      marginTop:20,
      top:-40,
      
    },
    infoContainer: {
        flex: 1,
        flexDirection:'row',
        
      },
      mainText: {
        fontSize: 17,
        marginLeft: 135,
        color:'white',
        marginBottom:-29,
        marginTop:0,
        paddingTop:1,
        top:-11,
        
        
        
      },
})