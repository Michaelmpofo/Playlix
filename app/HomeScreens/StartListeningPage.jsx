import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import RedeemCodeBar from '../../components/RedeemCodeBar'
import TunesCard from '../../components/tunesCard'
import Camerabutton from '../../components/Camerabutton'
import { Link } from 'expo-router'
import PremiumCard from '../../components/PremiumCard.jsx'
import PremiumHeader from '../../components/PremiumHeader.jsx'
import StartListeningBar from '../../components/StartListeningBar.jsx'



const StartListeningPage = () => {
  return (
   
    <View style={styles.StartListeningPageContainer}>
          <View style={styles.MiniPlansPageContainer}>
    <PremiumHeader/>
    <PremiumCard/>
     <Text style={styles.txtnew}>
           Playlix
            </Text>
      <Text style={styles.newtext}>
      60 million songs. All
      ad-free.
            </Text>
            <Text style={styles.text}>
            Plus your entire music library on all your devices.
Plan auto-renews for US$3.29/month until
cancelled.
            </Text>
            <View>
            <StartListeningBar/>
            </View>
           
            </View>
     </View>
    
  )
}

export default StartListeningPage
const styles = StyleSheet.create({
     StartListeningPageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : '#000000',
      width : '100%',
      height : '100%',
      borderBlockEndColor:'#4A4A4A',
    },
    MiniPlansPageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : '#1C1C1E',
      width : '100%',
      height : '100%',
      borderTopEndRadius:30,
      borderTopStartRadius:30,
      borderTopCurve:'round',
      borderTopWidth:1,
      marginTop:50,
     
    },
    newtext: {
      fontSize: 24,
      color: '#ffff',
      marginTop:-290,
      marginLeft:19,
      marginRight:120,
      fontWeight:'bold',
     
    },
    text: {
      fontSize: 15,
      color: '#ffff',
      marginTop:10,
      marginLeft:20,
      marginRight:10,
      textAlign:'left',
    },
    textnew: {
      fontSize: 15,
      color: '#0AE78A',
      marginTop:20,
      marginLeft:0,
      marginRight:220,
      textAlign:'left',
     
     
    },
    txtnew: {
      fontSize: 18,
      color: '#ffff',
      marginTop:-200,
      marginBottom:300,
      marginLeft:0,
      marginRight:280,
      textAlign:'left',
     
     
    },
  }
)