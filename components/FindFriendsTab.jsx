import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const FindFriendsTab = () => {
  return (
    <Link href='/HomeScreens/SetUpProfilePage3' asChild>
      <TouchableOpacity>
      <View style={styles.FindFriendsTabContainer}>
           <View style = {styles.infoContainer}>
            <Text style = {styles.mainText}> Continue to Find Contacts</Text>
            </View>
         </View>
         </TouchableOpacity>
         </Link>
   
        
    
    
  )
}

export default FindFriendsTab
const styles =StyleSheet.create({
   FindFriendsTabContainer:{
      position:'absolute',
      backgroundColor :'#0AE78A',
      bottom:0,
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
      marginTop:0
      
    },
    infoContainer: {
        flex: 1,
        flexDirection:'row',
        
      },
      mainText: {
        fontSize: 17,
        marginLeft: 53,
        color:'white',
        marginBottom:-10,
        marginTop:-3,
        paddingTop:0,
        
        
      },
})