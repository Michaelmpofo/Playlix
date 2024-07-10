import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const SetUpProfileTab = () => {
  return (
    <TouchableOpacity>
        <View style={styles.SetUpProfileTabContainer}>
            <View style = {styles.infoContainer}>
            <Text style = {styles.mainText}>Set Up Profile </Text>
            </View>
         </View>
    </TouchableOpacity>
    
  )
}

export default SetUpProfileTab
const styles =StyleSheet.create({
    SetUpProfileTabContainer:{
      position:'absolute',
      backgroundColor :'#0AE78A',
      bottom:0,
      marginLeft: -165,
      marginRight: 0,
      marginBottom:360,
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