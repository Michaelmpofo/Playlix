import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import CongratsCard from '../../components/CongratsCard'
import { Link } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'

const CongratulationsPage = () => {
  return (
    <Link href='/HomeScreens/StartListeningPage' asChild>
      <TouchableOpacity>
      <View style={styles.CongratulationsPageContainer}>
      <LinearGradient colors={['#679481','#202E28']} style={styles.background}>
      <Text  style={styles.text}>Congratulations</Text>
      <CongratsCard/>
      <Text style = {styles.newtxt}>You have succesfully created a</Text>
      <Text style = {styles.new}>
      PLAYLIX PREMIUM ACCOUNT
      </Text>
      </LinearGradient>
    </View>
      </TouchableOpacity>
    
    </Link>
    
  )
}

export default CongratulationsPage
const styles = StyleSheet.create({
  CongratulationsPageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  
    
  },
  
  newtxt: {
    fontSize: 21,
    color: '#ffff',
    marginTop:-260,
    marginLeft:5,
    marginRight:0,
    fontWeight:'bold',
    textAlign:'center',
   
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  new: {
    fontSize: 20,
    color: '#0AE78A',
    marginTop:0,
    marginLeft:5,
    marginRight:0,
    fontWeight:'bold',
    textAlign:'center',
   
  },
text: {
  fontSize: 27,
  color: '#ffff',
  marginTop:150,
  marginBottom:550,
  marginLeft:10,
  marginRight:10,
  textAlign:'center',
  fontWeight:'bold',
 
 
},
}
)