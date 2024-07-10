import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const RedeemCode = () => {
  return (
    <Link href ="/HomeScreens/RedeemCodePage" asChild>
    <TouchableOpacity>
      <View style={styles.RedeemCodeContainer}>
            <View style = {styles.infoContainer}>
            <Text style = {styles.mainText}>Redeem Gift Card or Code </Text>
            </View>
         </View>
    </TouchableOpacity>
    </Link>
    
  )
}

export default RedeemCode
const styles =StyleSheet.create({
    RedeemCodeContainer:{
      position:'absolute',
      backgroundColor :'#0AE78A',
      bottom:0,
      marginLeft: -165,
      marginRight: 0,
      marginBottom:430,
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