import { View, Text,ImageBackground,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
const image = require('../../assets/images/homeScreenimages/creditCard.jpg');
const RedeemCardSuccessful = () => {
  return (
    <Link href='/HomeScreens/StartListeningPage' asChild>
      <TouchableOpacity>
    <ImageBackground source={image} style={styles.background}>
    <View style={styles.container}>
    <Ionicons name="checkmark-circle" size={90} color="white" />
      <Text style={styles.text}>Gift card successfully redeemed</Text>
    </View>
    </ImageBackground>
    </TouchableOpacity>
    </Link>

  )
}

export default RedeemCardSuccessful
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
   marginTop:430,
  },
  text: {
    fontSize: 29,
    color: '#0AE78A',
    marginTop:10,
    marginBottom:0,
    marginLeft:50,
    marginRight:70,
    textAlign:'center',
    fontWeight:'bold',
   
   
  },
  
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 850,
  },

  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Optional: to give a translucent overlay effect
  },

});