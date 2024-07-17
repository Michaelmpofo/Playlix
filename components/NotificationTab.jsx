import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const NotificationTab = () => {
  return (
    <Link href='/HomeScreens/NotificationPage'asChild>
    <TouchableOpacity>
        <View style={styles.NotificationTabContainer}>
            <View style = {styles.infoContainer}>
            <Text style = {styles.mainText}>Notifications </Text>
            </View>
         </View>
    </TouchableOpacity>
    </Link>
    
  )
}

export default NotificationTab
const styles =StyleSheet.create({
    NotificationTabContainer:{
      position:'absolute',
      backgroundColor :'#0AE78A',
      bottom:0,
      marginLeft: -165,
      marginRight: 0,
      marginBottom:-70,
      padding: 14,
      borderColor: '#0AE78A',
      flex:1,
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
        marginLeft: 15,
      },
})